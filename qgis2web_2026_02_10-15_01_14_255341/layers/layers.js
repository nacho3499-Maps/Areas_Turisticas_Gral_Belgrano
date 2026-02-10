var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_3857_1 = new ol.format.GeoJSON();
var features_Departamentos_3857_1 = format_Departamentos_3857_1.readFeatures(json_Departamentos_3857_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_3857_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_3857_1.addFeatures(features_Departamentos_3857_1);
var lyr_Departamentos_3857_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_3857_1, 
                style: style_Departamentos_3857_1,
                popuplayertitle: 'Departamentos_3857',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_3857_1.png" /> Departamentos_3857'
            });
var format_Areas_Turisticas_3857_2 = new ol.format.GeoJSON();
var features_Areas_Turisticas_3857_2 = format_Areas_Turisticas_3857_2.readFeatures(json_Areas_Turisticas_3857_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_Turisticas_3857_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Turisticas_3857_2.addFeatures(features_Areas_Turisticas_3857_2);
var lyr_Areas_Turisticas_3857_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_Turisticas_3857_2, 
                style: style_Areas_Turisticas_3857_2,
                popuplayertitle: 'Areas_Turisticas_3857',
                interactive: true,
                title: '<img src="styles/legend/Areas_Turisticas_3857_2.png" /> Areas_Turisticas_3857'
            });
var format_Rutas_de_acceso_3857_3 = new ol.format.GeoJSON();
var features_Rutas_de_acceso_3857_3 = format_Rutas_de_acceso_3857_3.readFeatures(json_Rutas_de_acceso_3857_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_de_acceso_3857_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_de_acceso_3857_3.addFeatures(features_Rutas_de_acceso_3857_3);
var lyr_Rutas_de_acceso_3857_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutas_de_acceso_3857_3, 
                style: style_Rutas_de_acceso_3857_3,
                popuplayertitle: 'Rutas_de_acceso_3857',
                interactive: true,
                title: '<img src="styles/legend/Rutas_de_acceso_3857_3.png" /> Rutas_de_acceso_3857'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_Departamentos_3857_1.setVisible(true);lyr_Areas_Turisticas_3857_2.setVisible(true);lyr_Rutas_de_acceso_3857_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Departamentos_3857_1,lyr_Areas_Turisticas_3857_2,lyr_Rutas_de_acceso_3857_3];
lyr_Departamentos_3857_1.set('fieldAliases', {'id': 'id', 'centr_lon': 'centr_lon', 'prov_nombr': 'prov_nombr', 'prov_id': 'prov_id', 'centr_lat': 'centr_lat', 'nombre': 'nombre', });
lyr_Areas_Turisticas_3857_2.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Tipo': 'Tipo', });
lyr_Rutas_de_acceso_3857_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Tipo': 'Tipo', 'Dist Km': 'Dist Km', });
lyr_Departamentos_3857_1.set('fieldImages', {'id': 'TextEdit', 'centr_lon': 'TextEdit', 'prov_nombr': 'TextEdit', 'prov_id': 'TextEdit', 'centr_lat': 'TextEdit', 'nombre': 'TextEdit', });
lyr_Areas_Turisticas_3857_2.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Rutas_de_acceso_3857_3.set('fieldImages', {'id': '', 'Nombre': '', 'Tipo': '', 'Dist Km': '', });
lyr_Departamentos_3857_1.set('fieldLabels', {'id': 'no label', 'centr_lon': 'no label', 'prov_nombr': 'no label', 'prov_id': 'no label', 'centr_lat': 'no label', 'nombre': 'no label', });
lyr_Areas_Turisticas_3857_2.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'inline label - always visible', 'Tipo': 'inline label - always visible', });
lyr_Rutas_de_acceso_3857_3.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Dist Km': 'inline label - always visible', });
lyr_Rutas_de_acceso_3857_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});