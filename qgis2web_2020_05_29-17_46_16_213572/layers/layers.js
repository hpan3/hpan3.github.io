var wms_layers = [];


        var lyr_StamenTonerLite_0 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });
var format_BikeFeat_1 = new ol.format.GeoJSON();
var features_BikeFeat_1 = format_BikeFeat_1.readFeatures(json_BikeFeat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeFeat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeFeat_1.addFeatures(features_BikeFeat_1);
var lyr_BikeFeat_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BikeFeat_1, 
                style: style_BikeFeat_1,
                interactive: true,
                title: 'BikeFeat'
            });

lyr_StamenTonerLite_0.setVisible(true);lyr_BikeFeat_1.setVisible(true);
var layersList = [lyr_StamenTonerLite_0,lyr_BikeFeat_1];
lyr_BikeFeat_1.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', 'COMMENT': 'COMMENT', 'TIMESTAMP': 'TIMESTAMP', 'IGIS_ID': 'IGIS_ID', 'IGIS_UPDAT': 'IGIS_UPDAT', 'IGIS_RETIR': 'IGIS_RETIR', 'Brand': 'Brand', 'Pump': 'Pump', 'FixItSta': 'FixItSta', 'TireLever': 'TireLever', 'Phillips': 'Phillips', 'Allen': 'Allen', 'Wrenches': 'Wrenches', 'Chock': 'Chock', 'Owner': 'Owner', 'Flathead': 'Flathead', 'PHT25': 'PHT25', 'Other': 'Other', });
lyr_BikeFeat_1.set('fieldImages', {'ID': 'Range', 'NAME': 'TextEdit', 'COMMENT': 'TextEdit', 'TIMESTAMP': 'TextEdit', 'IGIS_ID': 'TextEdit', 'IGIS_UPDAT': 'TextEdit', 'IGIS_RETIR': 'TextEdit', 'Brand': 'TextEdit', 'Pump': 'TextEdit', 'FixItSta': 'TextEdit', 'TireLever': 'TextEdit', 'Phillips': 'TextEdit', 'Allen': 'TextEdit', 'Wrenches': 'TextEdit', 'Chock': 'TextEdit', 'Owner': 'TextEdit', 'Flathead': 'TextEdit', 'PHT25': 'TextEdit', 'Other': 'TextEdit', });
lyr_BikeFeat_1.set('fieldLabels', {'ID': 'inline label', 'NAME': 'header label', 'COMMENT': 'inline label', 'TIMESTAMP': 'inline label', 'IGIS_ID': 'inline label', 'IGIS_UPDAT': 'inline label', 'IGIS_RETIR': 'inline label', 'Brand': 'header label', 'Pump': 'header label', 'FixItSta': 'header label', 'TireLever': 'header label', 'Phillips': 'header label', 'Allen': 'header label', 'Wrenches': 'header label', 'Chock': 'header label', 'Owner': 'header label', 'Flathead': 'header label', 'PHT25': 'header label', 'Other': 'header label', });
lyr_BikeFeat_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});