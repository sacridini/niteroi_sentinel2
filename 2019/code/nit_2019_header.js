var roi = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.MultiPoint(
        [[-43.08688216783667, -22.902793989798756],
         [-43.10966516188447, -22.905080327888633],
         [-43.11264777830903, -22.902747948863755],
         [-43.10962224654023, -22.907432432210143],
         [-43.101618534839794, -22.904012972974183],
         [-43.11640287092988, -22.903123504128118],
         [-43.12189603499238, -22.902985141783297],
         [-43.122089154041454, -22.90470477804333],
         [-43.10327077559297, -22.903024673896216],
         [-43.09479499510591, -22.904645480604263],
         [-43.104579693592235, -22.905060562133226],
         [-43.10354972533052, -22.90747196302659]]),
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
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06876004022323, -22.94326244824735]),
            {
              "classe": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.069618347108, -22.950810628089904]),
            {
              "classe": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.077171447693935, -22.95002026250123]),
            {
              "classe": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03864329677523, -22.958480316350006]),
            {
              "classe": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03748458248079, -22.95994239761918]),
            {
              "classe": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0383858047098, -22.963024571214095]),
            {
              "classe": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.040445741233235, -22.96393340386275]),
            {
              "classe": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04435103755892, -22.956623055191137]),
            {
              "classe": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06846780751116, -22.952189952823705]),
            {
              "classe": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0752114223052, -22.942892629864527]),
            {
              "classe": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09250630603323, -22.94949238848114]),
            {
              "classe": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09340752826223, -22.94791163728711]),
            {
              "classe": 3,
              "system:index": "28"
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
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09025478666296, -22.911273357702857]),
            {
              "classe": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.089375022106076, -22.911273357702857]),
            {
              "classe": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08851671522131, -22.91129312255256]),
            {
              "classe": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.087358000926876, -22.91081876536425]),
            {
              "classe": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08546972578039, -22.910522291278674]),
            {
              "classe": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.079395988826015, -22.915179619889468]),
            {
              "classe": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08043368797898, -22.917224044338894]),
            {
              "classe": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08103450279832, -22.91959570159973]),
            {
              "classe": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.078373751455544, -22.918726098756757]),
            {
              "classe": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07721503716111, -22.92135465392653]),
            {
              "classe": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07725795250535, -22.922244003153462]),
            {
              "classe": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07470448952317, -22.92269855717072]),
            {
              "classe": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08043368797898, -22.922975241478046]),
            {
              "classe": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.069794654533155, -22.91932266874956]),
            {
              "classe": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07198333708931, -22.91940172343604]),
            {
              "classe": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07015943495918, -22.92114091487007]),
            {
              "classe": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07247686354805, -22.920903753716242]),
            {
              "classe": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07194042174507, -22.92238600411737]),
            {
              "classe": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06891488997627, -22.923986816337333]),
            {
              "classe": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.070567130729444, -22.924520416207418]),
            {
              "classe": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.07266998259712, -22.923255583472383]),
            {
              "classe": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.081295966789014, -22.925113302487034]),
            {
              "classe": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08455753295112, -22.924461127436768]),
            {
              "classe": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08359193770576, -22.920449193677836]),
            {
              "classe": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.079371262580224, -22.930762399669003]),
            {
              "classe": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.058128167182275, -22.93263977746896]),
            {
              "classe": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05520992377407, -22.930347396853616]),
            {
              "classe": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04812558930807, -22.934824543057044]),
            {
              "classe": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.046516263899136, -22.93267053160587]),
            {
              "classe": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0429972056716, -22.931702203368314]),
            {
              "classe": 0,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.037546956953335, -22.934231699286038]),
            {
              "classe": 0,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03514369767599, -22.933915514880233]),
            {
              "classe": 0,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.036302411970425, -22.9329867189186]),
            {
              "classe": 0,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0349291209548, -22.93587189404249]),
            {
              "classe": 0,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.037536124924145, -22.931016445686417]),
            {
              "classe": 0,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03695676777693, -22.929198332106964]),
            {
              "classe": 0,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.033030013779126, -22.931431446451683]),
            {
              "classe": 0,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03013322804304, -22.93162906541676]),
            {
              "classe": 0,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03187129948469, -22.929040234120595]),
            {
              "classe": 0,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0307555005345, -22.92759758147019]),
            {
              "classe": 0,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03425310108992, -22.928467127373015]),
            {
              "classe": 0,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.030118455108706, -22.92538558966906]),
            {
              "classe": 0,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03597639959723, -22.922183979369812]),
            {
              "classe": 0,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04078291815192, -22.922895454863514]),
            {
              "classe": 0,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02919577520758, -22.926788740706677]),
            {
              "classe": 0,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02421759527594, -22.92267805997015]),
            {
              "classe": 0,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02258681219489, -22.921077232287026]),
            {
              "classe": 0,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02035955467181, -22.9215221940876]),
            {
              "classe": 0,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01952270545917, -22.919506316721424]),
            {
              "classe": 0,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.017312565230895, -22.92150243072958]),
            {
              "classe": 0,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0142870334621, -22.9213245603777]),
            {
              "classe": 0,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01199106254535, -22.921403613896253]),
            {
              "classe": 0,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03073610858809, -22.91959530699933]),
            {
              "classe": 0,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.02992071704756, -22.916373795776316]),
            {
              "classe": 0,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04037060336958, -22.914851950959484]),
            {
              "classe": 0,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00236190909463, -22.923719810147006]),
            {
              "classe": 0,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.9990788852604, -22.92425341106874]),
            {
              "classe": 0,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99946512335855, -22.92583443849769]),
            {
              "classe": 0,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99734081381875, -22.92190159863306]),
            {
              "classe": 0,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.006408355815665, -22.918410332361614]),
            {
              "classe": 0,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00904764948632, -22.91799529170677]),
            {
              "classe": 0,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.012910030467765, -22.916789690215047]),
            {
              "classe": 0,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01630034266259, -22.916987330538824]),
            {
              "classe": 0,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01554932413842, -22.9153271428613]),
            {
              "classe": 0,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.994291597210584, -22.92991615760614]),
            {
              "classe": 0,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.995514684521375, -22.928809473691317]),
            {
              "classe": 0,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.99671631416005, -22.927920167564412]),
            {
              "classe": 0,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-42.998239808880506, -22.92971853614169]),
            {
              "classe": 0,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.00055723746937, -22.928098029256887]),
            {
              "classe": 0,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01184980344463, -22.932708398636546]),
            {
              "classe": 0,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.011592311379204, -22.932471257733855]),
            {
              "classe": 0,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.01093785237957, -22.932945539123995]),
            {
              "classe": 0,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0155001018458, -22.933717091767512]),
            {
              "classe": 0,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.03099506804782, -22.932782249212888]),
            {
              "classe": 0,
              "system:index": "132"
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
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08711312249979, -22.909565577461112]),
            {
              "classe": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08670542672952, -22.90877497115074]),
            {
              "classe": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.090385417497956, -22.909782993388216]),
            {
              "classe": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.089419822252594, -22.909852171110085]),
            {
              "classe": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08431289628824, -22.908626731954296]),
            {
              "classe": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.085686187303864, -22.907974477564427]),
            {
              "classe": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08361552194437, -22.909328396052096]),
            {
              "classe": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08324001268228, -22.907796589458968]),
            {
              "classe": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08255336717447, -22.907934946894486]),
            {
              "classe": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09573866952837, -22.910366666893513]),
            {
              "classe": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09400059808672, -22.910238194440918]),
            {
              "classe": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09638758594016, -22.89434598160371]),
            {
              "classe": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.095421990694796, -22.89434598160371]),
            {
              "classe": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09978636496888, -22.893824017480668]),
            {
              "classe": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10889906444453, -22.89452916984158]),
            {
              "classe": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.109027810477244, -22.8942573693103]),
            {
              "classe": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.115539166189635, -22.897922017479864]),
            {
              "classe": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.13149285225857, -22.89711293736362]),
            {
              "classe": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.13149285225857, -22.897607109340996]),
            {
              "classe": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.13063444680393, -22.896853414631952]),
            {
              "classe": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.135589951719766, -22.901951308356065]),
            {
              "classe": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.135622138227944, -22.901486801625182]),
            {
              "classe": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.131986469278445, -22.903721993173548]),
            {
              "classe": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.13115592388379, -22.907904407666713]),
            {
              "classe": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.127977860010446, -22.89599371496239]),
            {
              "classe": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1034189457205, -22.87487983122338]),
            {
              "classe": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10385882799894, -22.874425116937434]),
            {
              "classe": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10258209650785, -22.875838680270807]),
            {
              "classe": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10262290935079, -22.876121811294546]),
            {
              "classe": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.100305480761925, -22.877317889359414]),
            {
              "classe": 1,
              "system:index": "68"
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
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11270786012789, -22.903002888001684]),
            {
              "classe": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.112868792668785, -22.90283858255537]),
            {
              "classe": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11265958036562, -22.902692807631837]),
            {
              "classe": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11181736673495, -22.902870702432704]),
            {
              "classe": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11174360598704, -22.9029658266402]),
            {
              "classe": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11269623960359, -22.90497722738049]),
            {
              "classe": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11269623960359, -22.90375174416584]),
            {
              "classe": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11526043142183, -22.90417671137361]),
            {
              "classe": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.114917108667925, -22.904710389236588]),
            {
              "classe": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11419827665193, -22.902644846582398]),
            {
              "classe": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.122169801844194, -22.90469062342726]),
            {
              "classe": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12204105581148, -22.903613382461977]),
            {
              "classe": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12185866559847, -22.902961103956684]),
            {
              "classe": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12131149495943, -22.90376162713929]),
            {
              "classe": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.123146125925615, -22.90375174416584]),
            {
              "classe": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.122116157663896, -22.90478945244508]),
            {
              "classe": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12480909551485, -22.903445371631808]),
            {
              "classe": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12446577276094, -22.902585548242612]),
            {
              "classe": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1096170636545, -22.90509582194256]),
            {
              "classe": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10527188505037, -22.904591794337435]),
            {
              "classe": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10682441498642, -22.9057037676561]),
            {
              "classe": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10349847580795, -22.907522196466992]),
            {
              "classe": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.102425592201996, -22.907294894199282]),
            {
              "classe": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10351993348007, -22.906306619040187]),
            {
              "classe": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10460354592209, -22.905031733445853]),
            {
              "classe": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10108448769455, -22.905338102395962]),
            {
              "classe": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.101427810448456, -22.90478466120771]),
            {
              "classe": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.099689739006806, -22.9059409554057]),
            {
              "classe": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1018140485466, -22.907571609953038]),
            {
              "classe": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11286474968796, -22.906711812726627]),
            {
              "classe": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11204935814743, -22.90747278296295]),
            {
              "classe": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.110933559197235, -22.90853022801865]),
            {
              "classe": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10583493740872, -22.90319811515098]),
            {
              "classe": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10163996250943, -22.902763261831158]),
            {
              "classe": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10207984478787, -22.90258536688934]),
            {
              "classe": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10238561661557, -22.902372880958602]),
            {
              "classe": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.098539328888215, -22.90287197529183]),
            {
              "classe": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09959075482205, -22.902338290194177]),
            {
              "classe": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0998697045596, -22.902219693220605]),
            {
              "classe": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10033104451016, -22.90259524994779]),
            {
              "classe": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10007891686276, -22.90271878811758]),
            {
              "classe": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09987506897763, -22.90313387554379]),
            {
              "classe": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10114107163266, -22.90325247171792]),
            {
              "classe": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.100014543846406, -22.903815802128747]),
            {
              "classe": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1095276102343, -22.90959042850132]),
            {
              "classe": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1092754825869, -22.90955583957801]),
            {
              "classe": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10986020415215, -22.90956078085331]),
            {
              "classe": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.109237931660694, -22.910392153420922]),
            {
              "classe": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1090233549395, -22.910658980383253]),
            {
              "classe": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.108224056653064, -22.910930748045786]),
            {
              "classe": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.108443997792286, -22.91081215858731]),
            {
              "classe": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10708680003075, -22.910836864733046]),
            {
              "classe": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10721380412803, -22.91215797702863]),
            {
              "classe": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10675246417747, -22.912064094565796]),
            {
              "classe": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10812039077506, -22.9119306825331]),
            {
              "classe": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.109729716184, -22.911994917972642]),
            {
              "classe": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1078859004339, -22.91390607791187]),
            {
              "classe": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12582347309306, -22.907872464668614]),
            {
              "classe": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.128618334886575, -22.905347114687835]),
            {
              "classe": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12804434215739, -22.90521863747899]),
            {
              "classe": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1275776377888, -22.90511980877396]),
            {
              "classe": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.127899502870584, -22.90541629467294]),
            {
              "classe": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.128854369279885, -22.90567324859437]),
            {
              "classe": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12901530182078, -22.905895612171832]),
            {
              "classe": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12895629322245, -22.906201979170138]),
            {
              "classe": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.131735462079, -22.904834301457214]),
            {
              "classe": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12473170941592, -22.901657244136565]),
            {
              "classe": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12516616601681, -22.900574212114684]),
            {
              "classe": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.120800759081675, -22.901231084199978]),
            {
              "classe": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.122549559359385, -22.900820932543926]),
            {
              "classe": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12236716914637, -22.902522600477337]),
            {
              "classe": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11931841242507, -22.897966554241677]),
            {
              "classe": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.118771241786035, -22.898001146121]),
            {
              "classe": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11938278544143, -22.89874734022782]),
            {
              "classe": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12002984942357, -22.899082526443575]),
            {
              "classe": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11546406239893, -22.899532749768117]),
            {
              "classe": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06688847483938, -22.936999496487044]),
            {
              "classe": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06624474467581, -22.93673272139652]),
            {
              "classe": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06837978305166, -22.938768103237525]),
            {
              "classe": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0602698821611, -22.938443985954546]),
            {
              "classe": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05757535401471, -22.941413295386194]),
            {
              "classe": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.05411366365695, -22.941525415345325]),
            {
              "classe": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.04544823770212, -22.939944547510713]),
            {
              "classe": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.064140475682635, -22.93101447142393]),
            {
              "classe": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06528846114101, -22.92988803434872]),
            {
              "classe": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06594292014064, -22.930579707347164]),
            {
              "classe": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.06526700346889, -22.93164685304415]),
            {
              "classe": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.0670604350158, -22.931243314229302]),
            {
              "classe": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08235687729708, -22.93579629664871]),
            {
              "classe": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08139128205172, -22.935974147997488]),
            {
              "classe": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.080736823052085, -22.93589510298243]),
            {
              "classe": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.08158440110079, -22.936616387034245]),
            {
              "classe": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10755302944159, -22.935757390970895]),
            {
              "classe": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10680201091742, -22.935806794160957]),
            {
              "classe": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.09990829047311, -22.933262098194163]),
            {
              "classe": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.099260925045485, -22.932368411690703]),
            {
              "classe": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.128412321433444, -22.88911695525071]),
            {
              "classe": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12828357540073, -22.889453012194934]),
            {
              "classe": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12652404628696, -22.888009938254612]),
            {
              "classe": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12597687564792, -22.890243731133996]),
            {
              "classe": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.125633552894016, -22.890530365611603]),
            {
              "classe": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.1251078399271, -22.89059955315342]),
            {
              "classe": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12612339817271, -22.887784519589676]),
            {
              "classe": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.12908897218681, -22.886253052658212]),
            {
              "classe": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.130129669284585, -22.886381547828933]),
            {
              "classe": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11037985782186, -22.876803873630706]),
            {
              "classe": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.110508603854576, -22.87739696852958]),
            {
              "classe": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.10973612765829, -22.87734754405362]),
            {
              "classe": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11008027187305, -22.878728349311324]),
            {
              "classe": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-43.11530521503406, -22.878243993420366]),
            {
              "classe": 2,
              "system:index": "151"
            })]);