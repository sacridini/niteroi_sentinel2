var geet = require('users/elacerda/geet:geet'); 

var s2_col = ee.ImageCollection(s2)
             .filter(ee.Filter.calendarRange(2015,2016,'year'))
             .filter(ee.Filter.calendarRange(1,12,'month'))
             .filterBounds(roi)
             .select('B2', 'B3', 'B4', 'B8', 'QA60')
             
          
var maskcloud = function(image) {
  var QA60 = image.select(['QA60']);
  var clouds = QA60.bitwiseAnd(1<<10).or(QA60.bitwiseAnd(1<<11))
  return image.updateMask(clouds.not()); 
};

var calc_indices = function(image) {
  var ndvi =  image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  var ndwi =  image.normalizedDifference(['B3', 'B8']).rename('NDWI');
  return image.addBands([ndvi, ndwi]);
}

print(s2_col);
var with_idx = s2_col.map(calc_indices);
var col_masked = with_idx.map(maskcloud);
var composite = col_masked.median().clip(nit);

print(composite)

// Classificação (random forest)
var bands = ['B2', 'B3', 'B4', 'B8', 'NDVI']
var samplesfc = urbano.merge(floresta).merge(graminea);
var imgClass = geet.rf(composite, bands, samplesfc, 'classe', 300, 10, 0.7);
Map.addLayer(composite, imageVisParam, 's2');
Map.addLayer(imgClass)


Export.image.toDrive({
  image: imgClass,
  scale: 10,
  folder: 'ee',
  region: nit,
  maxPixels: 1e13
});