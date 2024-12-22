var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Kerusakan2023_0 = new ol.format.GeoJSON();
var features_Kerusakan2023_0 = format_Kerusakan2023_0.readFeatures(json_Kerusakan2023_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kerusakan2023_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Kerusakan2023_0.addFeatures(features_Kerusakan2023_0);var lyr_Kerusakan2023_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kerusakan2023_0, 
                style: style_Kerusakan2023_0,
    title: 'Kerusakan 2023<br />\
    <img src="styles/legend/Kerusakan2023_0_0.png" /> Kerusakan Ringan<br />\
    <img src="styles/legend/Kerusakan2023_0_1.png" /> Kerusakan Sedang<br />\
    <img src="styles/legend/Kerusakan2023_0_2.png" /> Kerusakan Berat<br />'
        });

lyr_Kerusakan2023_0.setVisible(true);
var layersList = [baseLayer,lyr_Kerusakan2023_0];
lyr_Kerusakan2023_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Kebakaran': 'Kebakaran', 'Longsor': 'Longsor', 'Angin': 'Angin', 'Jumlah': 'Jumlah', });
lyr_Kerusakan2023_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kebakaran': 'TextEdit', 'Longsor': 'TextEdit', 'Angin': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_Kerusakan2023_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Kabupaten': 'inline label', 'Kebakaran': 'inline label', 'Longsor': 'inline label', 'Angin': 'inline label', 'Jumlah': 'inline label', });
lyr_Kerusakan2023_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});