var size = 0;
var placement = 'point';

function categories_Birmingham_Jefferson_Shelby_5(
    feature,
    value,
    size,
    resolution,
    labelText,
    labelFont,
    labelFill,
    bufferColor,
    bufferWidth,
    placement,
    textAlign,
    offsetX,
    offsetY,
    overflow,
    repeat
) {

    return [new ol.style.Style({

        stroke: new ol.style.Stroke({
            color: 'rgba(130,130,130,1.0)',
            lineDash: null,
            lineCap: 'round',
            lineJoin: 'round',
            width: 1
        }),

        text: null

    })];
}


var style_Birmingham_Jefferson_Shelby_5 = function(feature, resolution) {

    var context = {
        feature: feature,
        variables: {}
    };

    var labelText = "";
    var value = feature.get("NAME");

    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;

    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';

    var style = categories_Birmingham_Jefferson_Shelby_5(
        feature,
        value,
        size,
        resolution,
        labelText,
        labelFont,
        labelFill,
        bufferColor,
        bufferWidth,
        placement,
        textAlign,
        offsetX,
        offsetY,
        overflow,
        repeat
    );

    return style;
};