var roi = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([-43.08688216783667, -22.902793989798756]),
    s2 = ee.ImageCollection("COPERNICUS/S2"),
    imageVisParam = {"opacity":1,"bands":["B4","B3","B2"],"min":369,"max":2180,"gamma":1},
    nit = ee.FeatureCollection("users/elacerda/mun_niteroi"),
    agua = 
    /* color: #337dc2 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-43.07242376226813, -22.942576631201185],
                  [-43.076028651184146, -22.94558016108306],
                  [-43.08117849249274, -22.944157444710612],
                  [-43.08495504278571, -22.947635169439405],
                  [-43.07963354010016, -22.94953207253183],
                  [-43.07225210089118, -22.947635169439405],
                  [-43.068303889221255, -22.944789764944726]]]),
            {
              "classe": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.072347492963544, -22.94107799254067]),
            {
              "classe": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.072304577619306, -22.941512722909312]),
            {
              "classe": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-43.04329265543163, -22.957137165695478],
                  [-43.044665935612585, -22.959547620476798],
                  [-43.04505217066148, -22.961641915160396],
                  [-43.04290642037855, -22.963024922168156],
                  [-43.03788536471694, -22.961167738074288],
                  [-43.03951613492936, -22.958638765523183]]]),
            {
              "classe": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.072174655966606, -22.950340196762518]),
            {
              "classe": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06762562947735, -22.94836426726485]),
            {
              "classe": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06629525380596, -22.94543983865805]),
            {
              "classe": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06565152364239, -22.946743983546646]),
            {
              "classe": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08273183064922, -22.943108154356146]),
            {
              "classe": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09187279897198, -22.94761340649041]),
            {
              "classe": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09200154500469, -22.948838492975742]),
            {
              "classe": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.086680042319145, -22.947415810857308]),
            {
              "classe": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08324681478008, -22.949984531582363]),
            {
              "classe": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.083933460287895, -22.94536079916998]),
            {
              "classe": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.076423275046196, -22.94480752146106]),
            {
              "classe": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04491525955266, -22.963049367363357]),
            {
              "classe": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04311281509465, -22.96391868551665]),
            {
              "classe": 3,
              "system:index": "16"
            })]),
    floresta = 
    /* color: #039418 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.06779367727387, -22.895818366864592]),
            {
              "classe": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.066162894192814, -22.894671870003965]),
            {
              "classe": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.079852889004826, -22.903211062210033]),
            {
              "classe": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08217031759369, -22.898704333311304]),
            {
              "classe": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.081097433987736, -22.89890199999935]),
            {
              "classe": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07791809138139, -22.893094796107402]),
            {
              "classe": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07804683741411, -22.893490145542266]),
            {
              "classe": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.053999410120795, -22.90008400692692]),
            {
              "classe": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07931946322138, -22.905228751434247]),
            {
              "classe": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.092194066492866, -22.911197871205353]),
            {
              "classe": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09433983370478, -22.91163269747539]),
            {
              "classe": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08001947228352, -22.921251302670946]),
            {
              "classe": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08263730828205, -22.922634733334597]),
            {
              "classe": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0789895040218, -22.925915383867903]),
            {
              "classe": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07353925530354, -22.92670589019069]),
            {
              "classe": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0596715598817, -22.918193651691766]),
            {
              "classe": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03776696870484, -22.921270934976867]),
            {
              "classe": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0331321115271, -22.913958282182794]),
            {
              "classe": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02377656648316, -22.91328628888822]),
            {
              "classe": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03351834962525, -22.92095472031628]),
            {
              "classe": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.046564614273684, -22.91704150282299]),
            {
              "classe": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01369707165597, -22.951610254745496]),
            {
              "classe": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01708738385079, -22.95196591565218]),
            {
              "classe": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00374071179269, -22.94342979587204]),
            {
              "classe": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.022494717224816, -22.95034567506109]),
            {
              "classe": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01936189709542, -22.952914340165798]),
            {
              "classe": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99558505212456, -22.938346892647772]),
            {
              "classe": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.992452231995166, -22.936054608646877]),
            {
              "classe": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99030646478325, -22.933446100335825]),
            {
              "classe": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.98738822137505, -22.932102303716768]),
            {
              "classe": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.98820361291558, -22.935659383344962]),
            {
              "classe": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.019188491455616, -22.928228932974474]),
            {
              "classe": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.016441909424366, -22.927833684833754]),
            {
              "classe": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00030573999077, -22.92245819562565]),
            {
              "classe": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00060614740044, -22.92127239723374]),
            {
              "classe": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02828654443413, -22.916133817622867]),
            {
              "classe": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.034165946594776, -22.916489571719787]),
            {
              "classe": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04674014245659, -22.921865297726907]),
            {
              "classe": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04502352868706, -22.92514596689189]),
            {
              "classe": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99352511560112, -22.92356493142823]),
            {
              "classe": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.98528536950737, -22.9283079824642]),
            {
              "classe": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.008348198546415, -22.907630705182996]),
            {
              "classe": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00452873290921, -22.90300552686821]),
            {
              "classe": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01950618804837, -22.90261020516461]),
            {
              "classe": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02787468017483, -22.905100712658605]),
            {
              "classe": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03268119872952, -22.905140244154815]),
            {
              "classe": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.020579071654325, -22.913125370087588]),
            {
              "classe": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.024355621947294, -22.918224536097195]),
            {
              "classe": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.996117325438505, -22.905535558483166]),
            {
              "classe": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99989387573147, -22.913046311740064]),
            {
              "classe": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.006331177367215, -22.916643419870784]),
            {
              "classe": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.010064812315946, -22.91605049653021]),
            {
              "classe": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.015343399657255, -22.919449888484625]),
            {
              "classe": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05581411444876, -22.928595265310882]),
            {
              "classe": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05971941077444, -22.931203867057825]),
            {
              "classe": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05195173346731, -22.936183785413867]),
            {
              "classe": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04997762763235, -22.936816142894042]),
            {
              "classe": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08169206702444, -22.932508149090044]),
            {
              "classe": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.090360966560574, -22.93025529041753]),
            {
              "classe": 0,
              "system:index": "58"
            })]),
    graminea = 
    /* color: #00ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.07090329369495, -22.891586645138318]),
            {
              "classe": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07000207146594, -22.891863392939673]),
            {
              "classe": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.074207775201295, -22.885616662307974]),
            {
              "classe": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08660144654556, -22.89426291110525]),
            {
              "classe": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09587116090103, -22.892523374882554]),
            {
              "classe": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10440619726645, -22.88797240166263]),
            {
              "classe": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.102732498841156, -22.887260742914314]),
            {
              "classe": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1051357581185, -22.888407302393997]),
            {
              "classe": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08286123851835, -22.89962827456368]),
            {
              "classe": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.090929323235144, -22.90970883967621]),
            {
              "classe": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08659487346708, -22.90840433817026]),
            {
              "classe": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.085650735893836, -22.90860199072041]),
            {
              "classe": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07662631728064, -22.916972455910628]),
            {
              "classe": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07525302626502, -22.916260949318062]),
            {
              "classe": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04381343665384, -22.953343963192015]),
            {
              "classe": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.083888076594675, -22.866585406556744]),
            {
              "classe": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08547594433149, -22.867455343634767]),
            {
              "classe": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1017408597978, -22.87488912417759]),
            {
              "classe": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.102127097895945, -22.87714290279112]),
            {
              "classe": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10071089153608, -22.876905664698555]),
            {
              "classe": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11864950542768, -22.8698278709882]),
            {
              "classe": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12045194988569, -22.870895494778427]),
            {
              "classe": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12804796581587, -22.880226960275667]),
            {
              "classe": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.13027956371626, -22.88145265597642]),
            {
              "classe": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.043059819524665, -22.875628901860075]),
            {
              "classe": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0461084641126, -22.891482026718208]),
            {
              "classe": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.011506850983004, -22.901569259456036]),
            {
              "classe": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99230829675702, -22.902110038456275]),
            {
              "classe": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00445333917645, -22.911795124155507]),
            {
              "classe": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.9921795507243, -22.912901947041146]),
            {
              "classe": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99355284173993, -22.915906135030966]),
            {
              "classe": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.95921473162326, -22.905482761259844]),
            {
              "classe": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.95874266283664, -22.90279460005516]),
            {
              "classe": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.95728354113254, -22.902636471266064]),
            {
              "classe": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.995857438673575, -22.924568803940495]),
            {
              "classe": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99349709474047, -22.925359318121032]),
            {
              "classe": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.990578851332266, -22.924885010166253]),
            {
              "classe": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.986888131727774, -22.92528026691056]),
            {
              "classe": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.992840842069924, -22.92627325232228]),
            {
              "classe": 1,
              "system:index": "38"
            })]),
    urbano = 
    /* color: #ff0303 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.06368870437357, -22.958550904577006]),
            {
              "classe": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.060040900113314, -22.958037196863188]),
            {
              "classe": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08145565688822, -22.953729878503854]),
            {
              "classe": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09266664928458, -22.952149176816075]),
            {
              "classe": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09255552625251, -22.9541116786645]),
            {
              "classe": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08804941510749, -22.954585884231054]),
            {
              "classe": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.085431579108956, -22.9516615900907]),
            {
              "classe": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.066925825805136, -22.93289627564024]),
            {
              "classe": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07555180999703, -22.933884356894126]),
            {
              "classe": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.063449682921835, -22.9277976617972]),
            {
              "classe": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09279433834902, -22.91685752194545]),
            {
              "classe": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1117962701867, -22.908565183451365]),
            {
              "classe": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.105487714583674, -22.897140390026916]),
            {
              "classe": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12346008985976, -22.89648296635852]),
            {
              "classe": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.115129459334575, -22.890102124413705]),
            {
              "classe": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11349867625352, -22.886781070444254]),
            {
              "classe": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.126587856246196, -22.886820607279017]),
            {
              "classe": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12594412608262, -22.882945942734516]),
            {
              "classe": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.116116512252056, -22.877489594941157]),
            {
              "classe": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10925005717393, -22.874941363966403]),
            {
              "classe": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.106417644454204, -22.871857186437616]),
            {
              "classe": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.095431316329204, -22.870789570206238]),
            {
              "classe": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09586046977159, -22.872568925929826]),
            {
              "classe": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10654639048692, -22.864858216123018]),
            {
              "classe": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10452936930772, -22.862564689788673]),
            {
              "classe": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10161112589952, -22.86375100134672]),
            {
              "classe": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10311316294786, -22.86849614400208]),
            {
              "classe": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11075209422227, -22.866242221905228]),
            {
              "classe": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.123154628707134, -22.875099525028613]),
            {
              "classe": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11573027415391, -22.872687548815925]),
            {
              "classe": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08748543910038, -22.879432124625676]),
            {
              "classe": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09542477778446, -22.880420595550913]),
            {
              "classe": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09284985713016, -22.87820641068408]),
            {
              "classe": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09538186244022, -22.88326735160576]),
            {
              "classe": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.091408466909, -22.8621645670079]),
            {
              "classe": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09037849864728, -22.861610949773]),
            {
              "classe": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05973288460456, -22.88006883188549]),
            {
              "classe": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.067758053977116, -22.882282986379458]),
            {
              "classe": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06389567299567, -22.885801836182214]),
            {
              "classe": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04960486336432, -22.875838114853536]),
            {
              "classe": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.054497677868994, -22.907244607262967]),
            {
              "classe": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05587096888462, -22.905702894296738]),
            {
              "classe": 2,
              "system:index": "41"
            })]);