var wms_layers = [];


/************************************************
 * OpenStreetMap Basemap
 ************************************************/

var lyr_OpenStreetMap_0 = new ol.layer.Tile({
    title: 'OpenStreetMap',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});



/************************************************
 * PM2.5 2021
 ************************************************/

var lyr_PM_2021_0 = new ol.layer.Image({

    opacity: 0.5,

    title: 'PM2.5 2021',

    source: new ol.source.ImageStatic({

        url: "./layers/PM_2021_0.png",

        attributions: ' ',

        projection: 'EPSG:3857',

        alwaysInRange: true,

        imageExtent: [
            -9723000.000000,
            3895848.652173,
            -9611000.000002,
            4008480.041334
        ]

    })

});



/************************************************
 * PM2.5 2022
 ************************************************/

var lyr_PM25_2022_1 = new ol.layer.Image({

    opacity: 0.5,

    title: 'PM2.5 2022',

    source: new ol.source.ImageStatic({

        url: "./layers/PM25_2022_1.png",

        attributions: ' ',

        projection: 'EPSG:3857',

        alwaysInRange: true,

        imageExtent: [
            -9723000.000000,
            3895848.652173,
            -9611000.000002,
            4008480.041334
        ]

    })

});



/************************************************
 * PM2.5 2023
 ************************************************/

var lyr_PM25_2023_2 = new ol.layer.Image({

    opacity: 0.5,

    title: 'PM2.5 2023',

    source: new ol.source.ImageStatic({

        url: "./layers/PM25_2023_2.png",

        attributions: ' ',

        projection: 'EPSG:3857',

        alwaysInRange: true,

        imageExtent: [
            -9723000.000000,
            3895848.652173,
            -9611000.000002,
            4008480.041334
        ]

    })

});



/************************************************
 * PM2.5 2024
 ************************************************/

var lyr_PM25_2024_3 = new ol.layer.Image({

    opacity: 0.5,

    title: 'PM2.5 2024',

    source: new ol.source.ImageStatic({

        url: "./layers/PM25_2024_3.png",

        attributions: ' ',

        projection: 'EPSG:3857',

        alwaysInRange: true,

        imageExtent: [
            -9723000.000000,
            3895848.652173,
            -9611000.000002,
            4008480.041334
        ]

    })

});



/************************************************
 * PM2.5 2025
 ************************************************/

var lyr_PM25_2025_4 = new ol.layer.Image({

    opacity: 0.5,

    title: 'PM2.5 2025',

    source: new ol.source.ImageStatic({

        url: "./layers/PM25_2025_4.png",

        attributions: ' ',

        projection: 'EPSG:3857',

        alwaysInRange: true,

        imageExtent: [
            -9723000.000000,
            3895848.652173,
            -9611000.000002,
            4008480.041334
        ]

    })

});



/************************************************
 * Birmingham Boundary
 ************************************************/

var format_Birmingham_Jefferson_Shelby_5 = new ol.format.GeoJSON();


var features_Birmingham_Jefferson_Shelby_5 =
format_Birmingham_Jefferson_Shelby_5.readFeatures(
    json_Birmingham_Jefferson_Shelby_5,
    {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
    }
);



var jsonSource_Birmingham_Jefferson_Shelby_5 =
new ol.source.Vector({

    attributions: ' '

});


jsonSource_Birmingham_Jefferson_Shelby_5.addFeatures(
    features_Birmingham_Jefferson_Shelby_5
);



var lyr_Birmingham_Jefferson_Shelby_5 =
new ol.layer.Vector({

    declutter: false,

    source: jsonSource_Birmingham_Jefferson_Shelby_5,

    style: style_Birmingham_Jefferson_Shelby_5,

    popuplayertitle:
    'Birmingham_Jefferson_Shelby',

    interactive: true,

    title:
    'Birmingham Jefferson Shelby'

});

/************************************************
 * Initial Visibility Control
 ************************************************/


// OpenStreetMap always visible

lyr_OpenStreetMap_0.setVisible(true);



// PM2.5 layers
// Only 2021 visible initially

lyr_PM_2021_0.setVisible(true);

lyr_PM25_2022_1.setVisible(false);

lyr_PM25_2023_2.setVisible(false);

lyr_PM25_2024_3.setVisible(false);

lyr_PM25_2025_4.setVisible(false);



// Birmingham boundary always visible

lyr_Birmingham_Jefferson_Shelby_5.setVisible(true);


// Put boundary above raster layers

lyr_Birmingham_Jefferson_Shelby_5.setZIndex(10);



/************************************************
 * Layer List
 ************************************************/


var layersList = [

    lyr_OpenStreetMap_0,

    lyr_PM_2021_0,

    lyr_PM25_2022_1,

    lyr_PM25_2023_2,

    lyr_PM25_2024_3,

    lyr_PM25_2025_4,

    lyr_Birmingham_Jefferson_Shelby_5

];



/************************************************
 * Birmingham Boundary Attributes
 ************************************************/


lyr_Birmingham_Jefferson_Shelby_5.set(
'fieldAliases',
{

'STATEFP':'STATEFP',

'COUNTYFP':'COUNTYFP',

'COUNTYNS':'COUNTYNS',

'GEOID':'GEOID',

'GEOIDFQ':'GEOIDFQ',

'NAME':'NAME',

'NAMELSAD':'NAMELSAD',

'LSAD':'LSAD',

'CLASSFP':'CLASSFP',

'MTFCC':'MTFCC',

'CSAFP':'CSAFP',

'CBSAFP':'CBSAFP',

'METDIVFP':'METDIVFP',

'FUNCSTAT':'FUNCSTAT',

'ALAND':'ALAND',

'AWATER':'AWATER',

'INTPTLAT':'INTPTLAT',

'INTPTLON':'INTPTLON'

});




lyr_Birmingham_Jefferson_Shelby_5.set(
'fieldImages',
{

'STATEFP':'TextEdit',

'COUNTYFP':'TextEdit',

'COUNTYNS':'TextEdit',

'GEOID':'TextEdit',

'GEOIDFQ':'TextEdit',

'NAME':'TextEdit',

'NAMELSAD':'TextEdit',

'LSAD':'TextEdit',

'CLASSFP':'TextEdit',

'MTFCC':'TextEdit',

'CSAFP':'TextEdit',

'CBSAFP':'TextEdit',

'METDIVFP':'TextEdit',

'FUNCSTAT':'TextEdit',

'ALAND':'TextEdit',

'AWATER':'TextEdit',

'INTPTLAT':'TextEdit',

'INTPTLON':'TextEdit'

});




lyr_Birmingham_Jefferson_Shelby_5.set(
'fieldLabels',
{

'STATEFP':'no label',

'COUNTYFP':'no label',

'COUNTYNS':'no label',

'GEOID':'no label',

'GEOIDFQ':'no label',

'NAME':'no label',

'NAMELSAD':'no label',

'LSAD':'no label',

'CLASSFP':'no label',

'MTFCC':'no label',

'CSAFP':'no label',

'CBSAFP':'no label',

'METDIVFP':'no label',

'FUNCSTAT':'no label',

'ALAND':'no label',

'AWATER':'no label',

'INTPTLAT':'no label',

'INTPTLON':'no label'

});




/************************************************
 * Keep normal rendering
 ************************************************/


lyr_Birmingham_Jefferson_Shelby_5.on(
'precompose',
function(evt){

evt.context.globalCompositeOperation = 'normal';

});




/************************************************
 * Radio Button Function
 ************************************************/


function showPM25Layer(year){



    // Hide all PM2.5 layers

    lyr_PM_2021_0.setVisible(false);

    lyr_PM25_2022_1.setVisible(false);

    lyr_PM25_2023_2.setVisible(false);

    lyr_PM25_2024_3.setVisible(false);

    lyr_PM25_2025_4.setVisible(false);



    // Show selected year


    if(year === 2021){

        lyr_PM_2021_0.setVisible(true);

    }


    if(year === 2022){

        lyr_PM25_2022_1.setVisible(true);

    }


    if(year === 2023){

        lyr_PM25_2023_2.setVisible(true);

    }


    if(year === 2024){

        lyr_PM25_2024_3.setVisible(true);

    }


    if(year === 2025){

        lyr_PM25_2025_4.setVisible(true);

    }



    // Keep basemap and boundary visible

    lyr_OpenStreetMap_0.setVisible(true);

    lyr_Birmingham_Jefferson_Shelby_5.setVisible(true);



}