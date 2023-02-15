var wms_layers = [];

var lyr_Madrid_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Madrid",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Madrid_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -349.000000, 749.000000, 0.000000]
                            })
                        });

lyr_Madrid_0.setVisible(true);
var layersList = [lyr_Madrid_0];
