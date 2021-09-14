var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZONASI_TNKpS_2 = new ol.format.GeoJSON();
var features_ZONASI_TNKpS_2 = format_ZONASI_TNKpS_2.readFeatures(json_ZONASI_TNKpS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONASI_TNKpS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONASI_TNKpS_2.addFeatures(features_ZONASI_TNKpS_2);
var lyr_ZONASI_TNKpS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONASI_TNKpS_2, 
                style: style_ZONASI_TNKpS_2,
                interactive: true,
    title: 'ZONASI_TNKpS<br />\
    <img src="styles/legend/ZONASI_TNKpS_2_0.png" /> Inti I<br />\
    <img src="styles/legend/ZONASI_TNKpS_2_1.png" /> Inti II<br />\
    <img src="styles/legend/ZONASI_TNKpS_2_2.png" /> Inti III<br />\
    <img src="styles/legend/ZONASI_TNKpS_2_3.png" /> Pemanfaatan Tradisional<br />\
    <img src="styles/legend/ZONASI_TNKpS_2_4.png" /> Pemanfaatan Wisata<br />\
    <img src="styles/legend/ZONASI_TNKpS_2_5.png" /> Perlindungan<br />'
        });
var format_dive_3 = new ol.format.GeoJSON();
var features_dive_3 = format_dive_3.readFeatures(json_dive_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dive_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dive_3.addFeatures(features_dive_3);
var lyr_dive_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dive_3, 
                style: style_dive_3,
                interactive: true,
                title: '<img src="styles/legend/dive_3.png" /> dive'
            });
var format_Pemancingan_4 = new ol.format.GeoJSON();
var features_Pemancingan_4 = format_Pemancingan_4.readFeatures(json_Pemancingan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemancingan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemancingan_4.addFeatures(features_Pemancingan_4);
var lyr_Pemancingan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemancingan_4, 
                style: style_Pemancingan_4,
                interactive: true,
                title: '<img src="styles/legend/Pemancingan_4.png" /> Pemancingan'
            });
var format_toponimi_5 = new ol.format.GeoJSON();
var features_toponimi_5 = format_toponimi_5.readFeatures(json_toponimi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_toponimi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_toponimi_5.addFeatures(features_toponimi_5);
var lyr_toponimi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_toponimi_5, 
                style: style_toponimi_5,
                interactive: true,
                title: '<img src="styles/legend/toponimi_5.png" /> toponimi'
            });
var format_RESORT_6 = new ol.format.GeoJSON();
var features_RESORT_6 = format_RESORT_6.readFeatures(json_RESORT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESORT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESORT_6.addFeatures(features_RESORT_6);
var lyr_RESORT_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESORT_6, 
                style: style_RESORT_6,
                interactive: true,
                title: '<img src="styles/legend/RESORT_6.png" /> RESORT'
            });
var format_rute_7 = new ol.format.GeoJSON();
var features_rute_7 = format_rute_7.readFeatures(json_rute_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute_7.addFeatures(features_rute_7);
var lyr_rute_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute_7, 
                style: style_rute_7,
                interactive: true,
    title: 'rute<br />\
    <img src="styles/legend/rute_7_0.png" /> Rute  Perjalanan Turin ke Kepulauan, Marina Ancol<br />\
    <img src="styles/legend/rute_7_1.png" /> Rute Perahu Tradisional/Transportasi Umum<br />\
    <img src="styles/legend/rute_7_2.png" /> Rute Transportasi Kapal Kerapu<br />'
        });
var format_pulau_RBI_8 = new ol.format.GeoJSON();
var features_pulau_RBI_8 = format_pulau_RBI_8.readFeatures(json_pulau_RBI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pulau_RBI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pulau_RBI_8.addFeatures(features_pulau_RBI_8);
var lyr_pulau_RBI_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pulau_RBI_8, 
                style: style_pulau_RBI_8,
                interactive: true,
                title: '<img src="styles/legend/pulau_RBI_8.png" /> pulau_RBI'
            });
var format_batas_RT_9 = new ol.format.GeoJSON();
var features_batas_RT_9 = format_batas_RT_9.readFeatures(json_batas_RT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_RT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_RT_9.addFeatures(features_batas_RT_9);
var lyr_batas_RT_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_RT_9, 
                style: style_batas_RT_9,
                interactive: true,
                title: '<img src="styles/legend/batas_RT_9.png" /> batas_RT'
            });
var format_Batas_RW_10 = new ol.format.GeoJSON();
var features_Batas_RW_10 = format_Batas_RW_10.readFeatures(json_Batas_RW_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_RW_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_RW_10.addFeatures(features_Batas_RW_10);
var lyr_Batas_RW_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_RW_10, 
                style: style_Batas_RW_10,
                interactive: true,
                title: '<img src="styles/legend/Batas_RW_10.png" /> Batas_RW'
            });

lyr_google_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ZONASI_TNKpS_2.setVisible(false);lyr_dive_3.setVisible(false);lyr_Pemancingan_4.setVisible(false);lyr_toponimi_5.setVisible(true);lyr_RESORT_6.setVisible(false);lyr_rute_7.setVisible(false);lyr_pulau_RBI_8.setVisible(true);lyr_batas_RT_9.setVisible(false);lyr_Batas_RW_10.setVisible(false);
var layersList = [lyr_google_0,lyr_OpenStreetMap_1,lyr_ZONASI_TNKpS_2,lyr_dive_3,lyr_Pemancingan_4,lyr_toponimi_5,lyr_RESORT_6,lyr_rute_7,lyr_pulau_RBI_8,lyr_batas_RT_9,lyr_Batas_RW_10];
lyr_ZONASI_TNKpS_2.set('fieldAliases', {'Id': 'Id', 'Zona': 'Zona', 'hektar': 'hektar', 'perimeter': 'perimeter', 'Perbaikan': 'Perbaikan', 'Kode': 'Kode', });
lyr_dive_3.set('fieldAliases', {'Id': 'Id', });
lyr_Pemancingan_4.set('fieldAliases', {'Id': 'Id', });
lyr_toponimi_5.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'STATUS': 'STATUS', });
lyr_RESORT_6.set('fieldAliases', {'Id': 'Id', 'KET': 'KET', 'DESKRIPSI': 'DESKRIPSI', 'FOTO': 'FOTO', });
lyr_rute_7.set('fieldAliases', {'Id': 'Id', 'keterangan': 'keterangan', });
lyr_pulau_RBI_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', });
lyr_batas_RT_9.set('fieldAliases', {'WADMRT': 'WADMRT', 'WADMRW': 'WADMRW', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', });
lyr_Batas_RW_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMRW': 'WADMRW', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZONASI_TNKpS_2.set('fieldImages', {'Id': 'TextEdit', 'Zona': 'TextEdit', 'hektar': 'TextEdit', 'perimeter': 'TextEdit', 'Perbaikan': 'TextEdit', 'Kode': 'TextEdit', });
lyr_dive_3.set('fieldImages', {'Id': 'Range', });
lyr_Pemancingan_4.set('fieldImages', {'Id': 'Range', });
lyr_toponimi_5.set('fieldImages', {'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KLSTPN': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_RESORT_6.set('fieldImages', {'Id': 'Range', 'KET': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_rute_7.set('fieldImages', {'Id': 'Range', 'keterangan': 'TextEdit', });
lyr_pulau_RBI_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', });
lyr_batas_RT_9.set('fieldImages', {'WADMRT': 'TextEdit', 'WADMRW': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_Batas_RW_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMRW': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZONASI_TNKpS_2.set('fieldLabels', {'Id': 'inline label', 'Zona': 'inline label', 'hektar': 'inline label', 'perimeter': 'inline label', 'Perbaikan': 'inline label', 'Kode': 'inline label', });
lyr_dive_3.set('fieldLabels', {'Id': 'inline label', });
lyr_Pemancingan_4.set('fieldLabels', {'Id': 'inline label', });
lyr_toponimi_5.set('fieldLabels', {'FCODE': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'KLSTPN': 'inline label', 'STATUS': 'inline label', });
lyr_RESORT_6.set('fieldLabels', {'Id': 'inline label', 'KET': 'inline label', 'DESKRIPSI': 'inline label', 'FOTO': 'inline label', });
lyr_rute_7.set('fieldLabels', {'Id': 'inline label', 'keterangan': 'inline label', });
lyr_pulau_RBI_8.set('fieldLabels', {'OBJECTID': 'inline label', 'KDPPUM': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', 'KDPBPS': 'inline label', });
lyr_batas_RT_9.set('fieldLabels', {'WADMRT': 'inline label', 'WADMRW': 'inline label', 'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', });
lyr_Batas_RW_10.set('fieldLabels', {'OBJECTID': 'inline label', 'WADMRW': 'inline label', 'WADMKD': 'inline label', 'WADMKC': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_Batas_RW_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});