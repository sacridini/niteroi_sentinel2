var s2 = ee.ImageCollection("COPERNICUS/S2"),
    nit = ee.FeatureCollection("users/elacerda/mun_niteroi"),
    roi = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Point([-43.0882496307671, -22.907001582875704]),
    imageVisParam = {"opacity":1,"bands":["B4","B3","B2"],"min":428.28,"max":2361.72,"gamma":1},
    floresta = 
    /* color: #037f21 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.08310944533912, -22.922755696597353]),
            {
              "classe": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.080191201930916, -22.924297215606842]),
            {
              "classe": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07980496383277, -22.92042362168262]),
            {
              "classe": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07388264632789, -22.92560156414595]),
            {
              "classe": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0806203553733, -22.931253596019562]),
            {
              "classe": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05710274673072, -22.927894025083717]),
            {
              "classe": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05366951919166, -22.925087731372138]),
            {
              "classe": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.058261461025154, -22.919870242081984]),
            {
              "classe": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.060235566860115, -22.920660783676805]),
            {
              "classe": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05933434463111, -22.917933395683388]),
            {
              "classe": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09461075759498, -22.939237183170444]),
            {
              "classe": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10720479458688, -22.94231647687061]),
            {
              "classe": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11359918087838, -22.939984738763833]),
            {
              "classe": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09973752468942, -22.94085420512686]),
            {
              "classe": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09707677334664, -22.942079352796053]),
            {
              "classe": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09111154049752, -22.943106887452327]),
            {
              "classe": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.088794111908655, -22.940419472643406]),
            {
              "classe": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10415780514596, -22.94697983258134]),
            {
              "classe": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10763394802926, -22.94366017211324]),
            {
              "classe": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11415708035348, -22.94389729341841]),
            {
              "classe": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04763655490888, -22.933427381109265]),
            {
              "classe": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05008272953046, -22.93647063634066]),
            {
              "classe": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0481086236955, -22.93571970958796]),
            {
              "classe": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.051928089332705, -22.936035889780907]),
            {
              "classe": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.037980602455264, -22.93160929989558]),
            {
              "classe": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03639273471845, -22.929672621321178]),
            {
              "classe": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03609232730878, -22.93449450436672]),
            {
              "classe": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.036642967388595, -22.92110724999342]),
            {
              "classe": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04342359177824, -22.92438793751373]),
            {
              "classe": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.032212875475466, -22.92850609659204]),
            {
              "classe": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02581848918396, -22.917873541641047]),
            {
              "classe": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01123053406366, -22.913244412394068]),
            {
              "classe": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.025220936285336, -22.90624757626513]),
            {
              "classe": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.028482502447446, -22.905417419203566]),
            {
              "classe": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03285986755975, -22.904903509904273]),
            {
              "classe": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00947100494989, -22.91684151526744]),
            {
              "classe": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02183062409051, -22.914627924796743]),
            {
              "classe": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0053572169246, -22.90597552879784]),
            {
              "classe": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00321144971269, -22.90150842431758]),
            {
              "classe": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.008532952398234, -22.910205306245633]),
            {
              "classe": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99540085706132, -22.91119355298686]),
            {
              "classe": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99990696820634, -22.911746968015184]),
            {
              "classe": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.995272111028605, -22.904987244022713]),
            {
              "classe": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00630135449784, -22.898503917306904]),
            {
              "classe": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.020248841375285, -22.89549934374706]),
            {
              "classe": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01664395245927, -22.89308772998794]),
            {
              "classe": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.98386427876017, -22.911679649457735]),
            {
              "classe": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99347731586955, -22.923261322669962]),
            {
              "classe": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99291941639445, -22.91938769913041]),
            {
              "classe": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99592349049113, -22.92136405150772]),
            {
              "classe": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.9990817423855, -22.923742956779904]),
            {
              "classe": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99925340376245, -22.927655980730535]),
            {
              "classe": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99474729261743, -22.928762674070004]),
            {
              "classe": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.98807704175224, -22.935232250022448]),
            {
              "classe": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.992711898929976, -22.935825089412837]),
            {
              "classe": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.990480301029585, -22.935943656979436]),
            {
              "classe": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00241076672783, -22.943294643318374]),
            {
              "classe": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00796270880724, -22.947566615126902]),
            {
              "classe": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.011353021002066, -22.946618153128792]),
            {
              "classe": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0145287564757, -22.949779667270615]),
            {
              "classe": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.011653428411734, -22.94918688899537]),
            {
              "classe": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.021094804144155, -22.949582074800745]),
            {
              "classe": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.022382264471304, -22.950253888021063]),
            {
              "classe": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.015387063360464, -22.952704002087327]),
            {
              "classe": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01706076178576, -22.954403248688415]),
            {
              "classe": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.95669316269838, -22.9053518628519]),
            {
              "classe": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.96085595108949, -22.91029320140845]),
            {
              "classe": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.96789406754457, -22.908158565246136]),
            {
              "classe": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.96793698288881, -22.9127440385165]),
            {
              "classe": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.98166989304506, -22.91266497994657]),
            {
              "classe": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.006947030801406, -22.901833520051497]),
            {
              "classe": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.022224893350234, -22.90290089211933]),
            {
              "classe": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01681755997621, -22.899975481969225]),
            {
              "classe": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03085087754213, -22.90582623916731]),
            {
              "classe": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.044455041665664, -22.89756394778075]),
            {
              "classe": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04282425858461, -22.896338397583236]),
            {
              "classe": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.056642999429336, -22.889894193431935]),
            {
              "classe": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.061149110574355, -22.893531450575985]),
            {
              "classe": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05190314544563, -22.883238558739293]),
            {
              "classe": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.042504685057445, -22.880747649927514]),
            {
              "classe": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11049545321714, -22.938593386229673]),
            {
              "classe": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11054909739744, -22.939156569730972]),
            {
              "classe": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10977662120115, -22.93834637518297]),
            {
              "classe": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.108639364578835, -22.939452981159057]),
            {
              "classe": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10900414500486, -22.941023950892735]),
            {
              "classe": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.106622343399636, -22.9402137675205]),
            {
              "classe": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10553873095762, -22.940717662626938]),
            {
              "classe": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11469042811643, -22.939838315045296]),
            {
              "classe": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11316693339597, -22.94049041604644]),
            {
              "classe": 0,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11268413577329, -22.939927238094057]),
            {
              "classe": 0,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11397159610044, -22.938879918479238]),
            {
              "classe": 0,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11450803790342, -22.938296972919556]),
            {
              "classe": 0,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11393940959226, -22.9376942638543]),
            {
              "classe": 0,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.120249310928976, -22.935653421557063]),
            {
              "classe": 0,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.119015494782126, -22.933370972770486]),
            {
              "classe": 0,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11939100404421, -22.932580505347417]),
            {
              "classe": 0,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11742762704531, -22.93309430969727]),
            {
              "classe": 0,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.116537133652365, -22.933529065701414]),
            {
              "classe": 0,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11582903047243, -22.934082389506187]),
            {
              "classe": 0,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.116794625717795, -22.934764160370722]),
            {
              "classe": 0,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08288338180952, -22.93250081110224]),
            {
              "classe": 0,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08279755112105, -22.933449372014454]),
            {
              "classe": 0,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.079814934696486, -22.932085813613863]),
            {
              "classe": 0,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07661590366677, -22.927078788073423]),
            {
              "classe": 0,
              "system:index": "103"
            })]),
    agua = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.07903243012974, -22.944820511062403]),
            {
              "classe": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.082766065078474, -22.947349761881863]),
            {
              "classe": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08130694337437, -22.949286187590133]),
            {
              "classe": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07559920259068, -22.948891000920607]),
            {
              "classe": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.077015408950544, -22.946559376078525]),
            {
              "classe": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07856036134312, -22.94916763171046]),
            {
              "classe": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07079268403599, -22.949444261934772]),
            {
              "classe": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07070685334752, -22.94557138733285]),
            {
              "classe": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06534243531773, -22.947586876722692]),
            {
              "classe": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06963396974156, -22.950787886408293]),
            {
              "classe": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.068217763381696, -22.946598895478317]),
            {
              "classe": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07336760469029, -22.94754735761141]),
            {
              "classe": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07186556764195, -22.942765459967433]),
            {
              "classe": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.068217763381696, -22.944030110487706]),
            {
              "classe": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.072723874526716, -22.94434627127149]),
            {
              "classe": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07362509675572, -22.95043222240494]),
            {
              "classe": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08242274232457, -22.950353185832782]),
            {
              "classe": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.076715001540876, -22.950748368231878]),
            {
              "classe": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07190848298619, -22.95122258558721]),
            {
              "classe": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09160662599156, -22.948495813096947]),
            {
              "classe": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04283171180435, -22.958155778743564]),
            {
              "classe": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04077177528091, -22.962225867393816]),
            {
              "classe": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.035664849316554, -22.959657379106485]),
            {
              "classe": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04716616157241, -22.9632532490494]),
            {
              "classe": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04527788642593, -22.96550555844114]),
            {
              "classe": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0450203943605, -22.966098265203225]),
            {
              "classe": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04416208747573, -22.9613960534353]),
            {
              "classe": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04231672767349, -22.963490336015262]),
            {
              "classe": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.039098076855616, -22.959262222732583]),
            {
              "classe": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04231672767349, -22.959775925793515]),
            {
              "classe": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04407625678726, -22.95855093835013]),
            {
              "classe": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03982763770767, -22.96345082154982]),
            {
              "classe": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0380681085939, -22.961633143657313]),
            {
              "classe": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04450541022964, -22.96293713244828]),
            {
              "classe": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08177513255292, -22.943692604174863]),
            {
              "classe": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0842213071745, -22.94570812154417]),
            {
              "classe": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06559604777509, -22.945036285756057]),
            {
              "classe": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.067956391708194, -22.95254484900689]),
            {
              "classe": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08507961405927, -22.948000242073952]),
            {
              "classe": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07885688914472, -22.94657755114276]),
            {
              "classe": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08061641825849, -22.94641947344939]),
            {
              "classe": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08035892619306, -22.94768408982627]),
            {
              "classe": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07555240763837, -22.946379953997177]),
            {
              "classe": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.074393693343936, -22.944601566704257]),
            {
              "classe": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.074179116622744, -22.941795619233318]),
            {
              "classe": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07606739176923, -22.94298123793731]),
            {
              "classe": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08048767222577, -22.942151305934942]),
            {
              "classe": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07383579386884, -22.93985908635071]),
            {
              "classe": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07151836527997, -22.94120280598703]),
            {
              "classe": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0682997144621, -22.941953702327208]),
            {
              "classe": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.067141000167666, -22.94472012658414]),
            {
              "classe": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0703167356413, -22.94298123793731]),
            {
              "classe": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.044106924216955, -22.956116432347347]),
            {
              "classe": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04496523110172, -22.959001114421426]),
            {
              "classe": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04015871254703, -22.957618055350842]),
            {
              "classe": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.083031141441076, -22.943431004521035]),
            {
              "classe": 3,
              "system:index": "55"
            })]),
    urbano = 
    /* color: #ff0000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.096199925156704, -22.905950058973477]),
            {
              "classe": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0932816817485, -22.905969824599225]),
            {
              "classe": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09375375053512, -22.905851230801535]),
            {
              "classe": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09461205741989, -22.90579193386379]),
            {
              "classe": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.096629078599086, -22.90662208863252]),
            {
              "classe": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0982169463359, -22.901858512421526]),
            {
              "classe": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09997647544967, -22.902649159058612]),
            {
              "classe": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.099182541581264, -22.90013884007133]),
            {
              "classe": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10283034584152, -22.905732636900115]),
            {
              "classe": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1057271315776, -22.90879627941572]),
            {
              "classe": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1052765204631, -22.90915205277]),
            {
              "classe": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10577004692184, -22.90968571105094]),
            {
              "classe": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11154216072189, -22.908974166209557]),
            {
              "classe": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1107696845256, -22.91006124710051]),
            {
              "classe": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11295836708175, -22.907531299928607]),
            {
              "classe": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11409562370407, -22.906365136509105]),
            {
              "classe": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1152543379985, -22.90513966583723]),
            {
              "classe": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.114138539048305, -22.903894418165162]),
            {
              "classe": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11293690940963, -22.90332120507607]),
            {
              "classe": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.111906941147915, -22.90233290095689]),
            {
              "classe": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10956805488693, -22.90278752174622]),
            {
              "classe": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10969680091964, -22.90330143906428]),
            {
              "classe": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10969680091964, -22.90355839699299]),
            {
              "classe": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.102846864980734, -22.89858339826909]),
            {
              "classe": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10093713216213, -22.899354297410824]),
            {
              "classe": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10046506337551, -22.898998498351364]),
            {
              "classe": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10044360570339, -22.898464798012284]),
            {
              "classe": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.105550531667745, -22.89717995525029]),
            {
              "classe": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.104820970815695, -22.89731832351706]),
            {
              "classe": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10449910573391, -22.897338090400773]),
            {
              "classe": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10497117452053, -22.89585556612821]),
            {
              "classe": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10548615865139, -22.89611253816285]),
            {
              "classe": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09550834111599, -22.897002052985627]),
            {
              "classe": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.098834280294454, -22.896231140476203]),
            {
              "classe": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.098598245901144, -22.896685781716855]),
            {
              "classe": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09898448399929, -22.896586946794145]),
            {
              "classe": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.090594534200704, -22.898622931664995]),
            {
              "classe": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.092332605642355, -22.898267130687152]),
            {
              "classe": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0882454764889, -22.890643212412183]),
            {
              "classe": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08758028865321, -22.890405997912556]),
            {
              "classe": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0992318046139, -22.892540913480858]),
            {
              "classe": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-43.11754151487398, -22.890306720685576],
                  [-43.11730548048067, -22.89148290603742],
                  [-43.1160502066617, -22.890919524409888],
                  [-43.11440869474458, -22.89049451566937],
                  [-43.114591084957596, -22.889189829360358],
                  [-43.118067227840896, -22.889614842187015]]]),
            {
              "classe": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11466618681001, -22.888527597419568]),
            {
              "classe": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1144301524167, -22.88917994532529]),
            {
              "classe": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11425849103975, -22.889743334174902]),
            {
              "classe": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.114086829662796, -22.89040556018313]),
            {
              "classe": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11393662595796, -22.89133464794116]),
            {
              "classe": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11356621819716, -22.88683447660243]),
            {
              "classe": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11472493249159, -22.88780312535729]),
            {
              "classe": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11796504098158, -22.888188606101995]),
            {
              "classe": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11868387299757, -22.88837640401688]),
            {
              "classe": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11363446595916, -22.884056716161194]),
            {
              "classe": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11738955858001, -22.882811274974518]),
            {
              "classe": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11652052285918, -22.882643238384016]),
            {
              "classe": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11566221597442, -22.882129242816063]),
            {
              "classe": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11505067231902, -22.881793167738643]),
            {
              "classe": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.113258956697074, -22.882406009902173]),
            {
              "classe": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11116683366546, -22.882751967966335]),
            {
              "classe": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12055456521758, -22.883631685929476]),
            {
              "classe": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12079059961089, -22.88401717852136]),
            {
              "classe": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12008249643096, -22.883641570368585]),
            {
              "classe": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12013614061126, -22.883947987623944]),
            {
              "classe": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11804401757964, -22.88434336370557]),
            {
              "classe": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12825346132449, -22.889113202682914]),
            {
              "classe": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12822127481631, -22.88966670780998]),
            {
              "classe": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12684798380069, -22.887057306732075]),
            {
              "classe": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12623644014529, -22.886899159599754]),
            {
              "classe": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.126397372686185, -22.88794688091782]),
            {
              "classe": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.126461672371605, -22.889163804860456]),
            {
              "classe": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.125968145912864, -22.888402731908396]),
            {
              "classe": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1265153165519, -22.889934757525182]),
            {
              "classe": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12625782448647, -22.890409187757292]),
            {
              "classe": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.125474619454124, -22.890517911118547]),
            {
              "classe": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12526004273293, -22.890171972848567]),
            {
              "classe": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12579648453591, -22.890092901120184]),
            {
              "classe": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12532441574929, -22.889361485448436]),
            {
              "classe": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.124680685585716, -22.889173688896708]),
            {
              "classe": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12504546601174, -22.887513160710554]),
            {
              "classe": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.124723600929954, -22.892020261373784]),
            {
              "classe": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.123894055521546, -22.896502823781535]),
            {
              "classe": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12404425922638, -22.897105716063837]),
            {
              "classe": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12336834255463, -22.89641387223439]),
            {
              "classe": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11632976729885, -22.904495008048382]),
            {
              "classe": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12181220252529, -22.90432699831046]),
            {
              "classe": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12125430305019, -22.90422816895562]),
            {
              "classe": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12874303061977, -22.905305405037236]),
            {
              "classe": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12802419860378, -22.905295522176303]),
            {
              "classe": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12835679252163, -22.905582124851044]),
            {
              "classe": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.131716962598134, -22.904882265226206]),
            {
              "classe": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-43.118994078802935, -22.89763530135738],
                  [-43.11962708013045, -22.897734135516284],
                  [-43.119723639654985, -22.897971337203888],
                  [-43.11917646901595, -22.89847538941284],
                  [-43.118747315573565, -22.898821306511717],
                  [-43.1183932639836, -22.899048622982093],
                  [-43.11817868726241, -22.89869282312083],
                  [-43.11810358540999, -22.89801087077817],
                  [-43.11806067006575, -22.897724252103647]]]),
            {
              "classe": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05235853369564, -22.8948250716697]),
            {
              "classe": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.052165414646566, -22.895437854987875]),
            {
              "classe": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07337327493568, -22.891308027826426]),
            {
              "classe": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.072579341067275, -22.891209188986217]),
            {
              "classe": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06721492303749, -22.892533623463887]),
            {
              "classe": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.068094687594375, -22.892751066694935]),
            {
              "classe": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06848092569252, -22.892256877029485]),
            {
              "classe": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.067837195528945, -22.891426634339663]),
            {
              "classe": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07266517175575, -22.89140686659465]),
            {
              "classe": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.071098761691054, -22.898938168960807]),
            {
              "classe": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.110168368680384, -22.87496128224955]),
            {
              "classe": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10954609618893, -22.87494151210672]),
            {
              "classe": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11808645880192, -22.883012301018475]),
            {
              "classe": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12923159065303, -22.886014917044438]),
            {
              "classe": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12948908271846, -22.884729956392217]),
            {
              "classe": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.130304474258985, -22.884927643438164]),
            {
              "classe": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12826008113489, -22.891356668700624]),
            {
              "classe": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.124318734548496, -22.893651099114212]),
            {
              "classe": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12378229274552, -22.893690633947447]),
            {
              "classe": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.13267003777849, -22.897454255387416]),
            {
              "classe": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1314469504677, -22.89931232800618]),
            {
              "classe": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12582913679293, -22.90778043313458]),
            {
              "classe": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09500494005206, -22.916780293474172]),
            {
              "classe": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09491910936358, -22.917551089160476]),
            {
              "classe": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09470453264239, -22.918499754756155]),
            {
              "classe": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09461870195391, -22.91976463188658]),
            {
              "classe": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.094099489120126, -22.9267933659517]),
            {
              "classe": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10094109242705, -22.93398994937661]),
            {
              "classe": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09534692219812, -22.928044367629795]),
            {
              "classe": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.094166750231565, -22.92494163449035]),
            {
              "classe": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08368922293873, -22.936288371874223]),
            {
              "classe": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.082294474250986, -22.935814102192314]),
            {
              "classe": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08246613562794, -22.93640693903514]),
            {
              "classe": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.081049929268076, -22.936446461399036]),
            {
              "classe": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.054352333966705, -22.941274638083105]),
            {
              "classe": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05673413557193, -22.940701583114674]),
            {
              "classe": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05677705091617, -22.94134379972558]),
            {
              "classe": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05616550726077, -22.941304278791357]),
            {
              "classe": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05764608663699, -22.941373440418676]),
            {
              "classe": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05812888425967, -22.939397380005616]),
            {
              "classe": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.058322003308746, -22.939199772377844]),
            {
              "classe": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.045451868578034, -22.939995999506284]),
            {
              "classe": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04992023276202, -22.942219940746163]),
            {
              "classe": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0498451309096, -22.941528327207738]),
            {
              "classe": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0566633799359, -22.94565048128956]),
            {
              "classe": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05912028339354, -22.94585795940319]),
            {
              "classe": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0596352675244, -22.94621363542939]),
            {
              "classe": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0605364897534, -22.946065437198726]),
            {
              "classe": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.076826664891485, -22.933877270385324]),
            {
              "classe": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.097281973744074, -22.93236027654459]),
            {
              "classe": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.099288266087214, -22.932350395656538]),
            {
              "classe": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09230192504949, -22.86886916307417]),
            {
              "classe": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09435113273687, -22.87029266964318]),
            {
              "classe": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09920461058337, -22.870718110428506]),
            {
              "classe": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09757516581336, -22.87641191272059]),
            {
              "classe": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10271885613152, -22.90692423500848]),
            {
              "classe": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10181763390251, -22.907645673298365]),
            {
              "classe": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10156014183708, -22.90810027627662]),
            {
              "classe": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.101249005591356, -22.907171303348157]),
            {
              "classe": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.103544976508104, -22.906271972428616]),
            {
              "classe": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.103512789999925, -22.907576494450655]),
            {
              "classe": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.106248643195116, -22.9072305996827]),
            {
              "classe": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10767557839104, -22.908554877730662]),
            {
              "classe": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11115172127434, -22.908297929270024]),
            {
              "classe": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11087277153679, -22.908614173460116]),
            {
              "classe": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.112042214667284, -22.907408488530713]),
            {
              "classe": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1095960400457, -22.907428253943863]),
            {
              "classe": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11087277153679, -22.906706814497156]),
            {
              "classe": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10616281250664, -22.90735907498523]),
            {
              "classe": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10545470932671, -22.908050862983263]),
            {
              "classe": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10481097916313, -22.907734617479257]),
            {
              "classe": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.103502061163866, -22.907695086739405]),
            {
              "classe": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.104521300589525, -22.905165095416276]),
            {
              "classe": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1127756242877, -22.90385705878684]),
            {
              "classe": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.112636149418925, -22.905003478012166]),
            {
              "classe": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11506086636839, -22.903540803501905]),
            {
              "classe": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.111895859730815, -22.90286875857265]),
            {
              "classe": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1036990289813, -22.90301700406392]),
            {
              "classe": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1053190832263, -22.904578513395272]),
            {
              "classe": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10753995229063, -22.901495009311937]),
            {
              "classe": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11159545232115, -22.901949632909922]),
            {
              "classe": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.116375441273796, -22.903186318159044]),
            {
              "classe": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.122158283909904, -22.904777474241243]),
            {
              "classe": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12204026671325, -22.904767591341827]),
            {
              "classe": 2,
              "system:index": "173"
            })]),
    graminea = 
    /* color: #01ff03 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-43.13153369759023, -22.89713964713536]),
            {
              "classe": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.13144786690175, -22.897604168753404]),
            {
              "classe": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.13125474785268, -22.897208831306937]),
            {
              "classe": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.130643204197284, -22.896605939482914]),
            {
              "classe": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12974198196828, -22.896487337497224]),
            {
              "classe": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.115932866800186, -22.897575393584614]),
            {
              "classe": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11558954404628, -22.898366065188856]),
            {
              "classe": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11233870672023, -22.898682332540126]),
            {
              "classe": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1125318257693, -22.89903813242891]),
            {
              "classe": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11238162206447, -22.89921603202333]),
            {
              "classe": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.106163434219496, -22.90073251950199]),
            {
              "classe": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10551970405592, -22.900129643339056]),
            {
              "classe": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10559480590834, -22.90061392112428]),
            {
              "classe": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10578792495741, -22.900386607277145]),
            {
              "classe": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.105948857498305, -22.900851117775996]),
            {
              "classe": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09799574560417, -22.903304310550222]),
            {
              "classe": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.086647260923826, -22.907562604762603]),
            {
              "classe": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08679746462866, -22.908343335503776]),
            {
              "classe": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08586405589148, -22.908402631325746]),
            {
              "classe": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.085188139219724, -22.90818521318507]),
            {
              "classe": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0853276140885, -22.90875840571299]),
            {
              "classe": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.088932503004514, -22.9092031223842]),
            {
              "classe": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.089887369413816, -22.909371126080362]),
            {
              "classe": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.090885151167356, -22.909282182973033]),
            {
              "classe": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09149669482275, -22.909351360950442]),
            {
              "classe": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0923335440354, -22.909578659770535]),
            {
              "classe": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.091389406462156, -22.90988501844685]),
            {
              "classe": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09078859164282, -22.90993443107174]),
            {
              "classe": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.090187776823484, -22.909707132848116]),
            {
              "classe": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09276269747778, -22.910082668838367]),
            {
              "classe": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09372829272314, -22.909835605803938]),
            {
              "classe": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09406088664099, -22.910240788944105]),
            {
              "classe": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.095863331099, -22.910428556330146]),
            {
              "classe": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09582041575476, -22.909993726197843]),
            {
              "classe": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.096625078459226, -22.91040879135438]),
            {
              "classe": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.083396423597776, -22.907602135541104]),
            {
              "classe": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.083171118040525, -22.908056738665348]),
            {
              "classe": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08259176089331, -22.907829437293742]),
            {
              "classe": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.081647623320066, -22.906831283281726]),
            {
              "classe": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08425473048254, -22.90851134026535]),
            {
              "classe": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.086443413038694, -22.908452044490907]),
            {
              "classe": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08555291964575, -22.90902523589076]),
            {
              "classe": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06351140457748, -22.906794473367967]),
            {
              "classe": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.063425573889006, -22.90715025197497]),
            {
              "classe": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.052992563316344, -22.90460499580886]),
            {
              "classe": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04641100462166, -22.912561741650467]),
            {
              "classe": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.046807971555864, -22.913530206692542]),
            {
              "classe": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0469581752607, -22.914567840130626]),
            {
              "classe": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04760190542427, -22.91438996067681]),
            {
              "classe": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0474624305555, -22.913431384046063]),
            {
              "classe": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04694744642464, -22.91191938857127]),
            {
              "classe": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.099770845328685, -22.9390816280985]),
            {
              "classe": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10018926993501, -22.939437321931212]),
            {
              "classe": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09908419982087, -22.93896306327993]),
            {
              "classe": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09832245246064, -22.938567846468057]),
            {
              "classe": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10310751334321, -22.940366073643983]),
            {
              "classe": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10360103980195, -22.940998411589653]),
            {
              "classe": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.103729785834666, -22.94154182465177]),
            {
              "classe": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1019702567209, -22.941275058512055]),
            {
              "classe": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.102528156195994, -22.940998411589653]),
            {
              "classe": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10283929244172, -22.941334339921877]),
            {
              "classe": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10291439429414, -22.940860087916437]),
            {
              "classe": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.118042208462946, -22.943750162981356]),
            {
              "classe": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.118278242856256, -22.944293564996254]),
            {
              "classe": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1176559703648, -22.943878603654497]),
            {
              "classe": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11842844656109, -22.943582201917195]),
            {
              "classe": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.037111144809586, -22.927372838909786]),
            {
              "classe": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.992424431589086, -22.913228146772905]),
            {
              "classe": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.991415920999486, -22.912714267079377]),
            {
              "classe": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.98731750562473, -22.916271855783222]),
            {
              "classe": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00449994114765, -22.911744694908386]),
            {
              "classe": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.046063351173814, -22.89164133138988]),
            {
              "classe": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.046031164665635, -22.890998879219627]),
            {
              "classe": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.113349323608986, -22.93820804879997]),
            {
              "classe": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11307037387144, -22.93854398405639]),
            {
              "classe": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.112372999527565, -22.93841553832148]),
            {
              "classe": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12256788470634, -22.931748557392122]),
            {
              "classe": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12131261088737, -22.931788081115652]),
            {
              "classe": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11981057383903, -22.93097784247765]),
            {
              "classe": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.119992964052045, -22.93128415277653]),
            {
              "classe": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1192097590197, -22.93089879454612]),
            {
              "classe": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.120776169084394, -22.932469863531043]),
            {
              "classe": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.122278206132734, -22.93277617045531]),
            {
              "classe": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.123233072542035, -22.932232722210657]),
            {
              "classe": 1,
              "system:index": "83"
            })]);