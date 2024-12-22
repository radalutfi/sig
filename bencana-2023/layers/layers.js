var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Bencana2023_0 = new ol.format.GeoJSON();
var features_Bencana2023_0 = format_Bencana2023_0.readFeatures(json_Bencana2023_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bencana2023_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Bencana2023_0.addFeatures(features_Bencana2023_0);var lyr_Bencana2023_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bencana2023_0, 
                style: style_Bencana2023_0,
    title: 'Bencana 2023<br />\
    <img src="styles/legend/Bencana2023_0_0.png" /> Bencana Ringan<br />\
    <img src="styles/legend/Bencana2023_0_1.png" /> Bencana Sedang<br />\
    <img src="styles/legend/Bencana2023_0_2.png" /> Bencana Berat<br />'
        });

lyr_Bencana2023_0.setVisible(true);
var layersList = [baseLayer,lyr_Bencana2023_0];
lyr_Bencana2023_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Kebakaran': 'Kebakaran', 'Longsor': 'Longsor', 'Angin': 'Angin', 'Jumlah': 'Jumlah', });
lyr_Bencana2023_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kebakaran': 'TextEdit', 'Longsor': 'TextEdit', 'Angin': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_Bencana2023_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Kabupaten': 'inline label', 'Kebakaran': 'inline label', 'Longsor': 'inline label', 'Angin': 'inline label', 'Jumlah': 'inline label', });
lyr_Bencana2023_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});