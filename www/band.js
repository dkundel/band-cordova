cordova.define('band', function (require, exports, module) {
    module.exports = cordova.plugins.band;
});
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandClient = (function () {
                function BandClient(data) {
                    this.connectionState = band.ConnectionState[data.connectionState];
                }
                BandClient.prototype.getFirmwareVersion = function (callback) {
                    var _this = this;
                    var success = function (version) {
                        _this.firmware = version;
                        callback(null, version);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'getFirmwareVersion', []);
                };
                BandClient.prototype.getHardwareVersion = function (callback) {
                    var _this = this;
                    var success = function (version) {
                        _this.hardware = version;
                        callback(null, version);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'getHardwareVersion', []);
                };
                BandClient.prototype.getConnectionState = function () {
                    return this.connectionState;
                };
                BandClient.prototype.getSensorManager = function () {
                    return !this.sensorManager ? new band.BandSensorManager() : this.sensorManager;
                };
                BandClient.prototype.getBandTileManager = function () {
                    return !this.tileManager ? new band.BandTileManager() : this.tileManager;
                };
                BandClient.prototype.getNotificationManager = function () {
                    return !this.notificationManager ? new band.BandNotificationManager() : this.notificationManager;
                };
                BandClient.prototype.getPersonalizationManager = function () {
                    return !this.personalizationManager ? new band.BandPersonalizationManager() : this.personalizationManager;
                };
                BandClient.prototype.connect = function (callback) {
                    var success = function (state) {
                        callback(null, band.ConnectionState[state]);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'connect', []);
                };
                BandClient.prototype.disconnect = function (callback) {
                    var success = function (state) {
                        callback(null);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'disconnect', []);
                };
                BandClient.prototype.isConnected = function () {
                    return this.connectionState === band.ConnectionState.CONNECTED;
                };
                return BandClient;
            })();
            band.BandClient = BandClient;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band_1) {
            var BandClientManager = (function () {
                function BandClientManager() {
                }
                BandClientManager.prototype.getPairedBands = function (callback) {
                    var success = function (bandList) {
                        var bandInfo = [];
                        for (var _i = 0; _i < bandList.length; _i++) {
                            var band_2 = bandList[_i];
                            bandInfo.push(new band_1.BandInfo(band_2));
                        }
                        callback(null, bandInfo);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'getPairedBands', []);
                };
                BandClientManager.prototype.create = function (index, callback) {
                    var success = function (bandClient) {
                        callback(null, new band_1.BandClient(bandClient));
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'create', [index.toString()]);
                };
                BandClientManager.getInstance = function () {
                    return new BandClientManager();
                };
                return BandClientManager;
            })();
            band_1.BandClientManager = BandClientManager;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandIcon = (function () {
                function BandIcon(content, type) {
                    this.base64 = '';
                    if (type === 'base64') {
                        this.base64 = content;
                    }
                    else {
                        this.path = content;
                    }
                }
                BandIcon.prototype.toBandIcon = function (callback) {
                    var _this = this;
                    if (this.base64.length !== 0) {
                        callback(this.base64);
                        return;
                    }
                    var img = new Image();
                    img.crossOrigin = 'Anonymous';
                    img.onload = function () {
                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext('2d');
                        canvas.height = img.height;
                        canvas.width = img.width;
                        ctx.drawImage(img, 0, 0);
                        _this.base64 = canvas.toDataURL();
                        callback(_this.base64);
                        canvas = null;
                    };
                };
                BandIcon.prototype.getBase64 = function () {
                    return this.base64;
                };
                BandIcon.prototype.toJson = function () {
                    return {
                        iconBase64: this.base64
                    };
                };
                BandIcon.prototype.toString = function () {
                    return JSON.stringify(this.toJson());
                };
                BandIcon.fromJson = function (json) {
                    return new BandIcon(json.iconBase64, 'base64');
                };
                return BandIcon;
            })();
            band.BandIcon = BandIcon;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandInfo = (function () {
                function BandInfo(bandInfo) {
                    this.macAddress = bandInfo.macAddress;
                    this.name = bandInfo.name;
                }
                BandInfo.prototype.getMacAddress = function () {
                    return this.macAddress;
                };
                BandInfo.prototype.getName = function () {
                    return this.name;
                };
                return BandInfo;
            })();
            band.BandInfo = BandInfo;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandNotificationManager = (function () {
                function BandNotificationManager() {
                }
                BandNotificationManager.prototype.showDialog = function (tileUuid, dialogTitle, dialogBody, callback) {
                    var success = function () {
                        callback(null);
                    };
                    var error = function (errorMsg) {
                        callback(errorMsg);
                    };
                    cordova.exec(success, error, 'Band', 'showDialog', [tileUuid, dialogTitle, dialogBody]);
                };
                BandNotificationManager.prototype.sendMessage = function (tileUuid, messageTitle, messageBody, date, flags, callback) {
                    var success = function () {
                        callback(null);
                    };
                    var error = function (errorMsg) {
                        callback(errorMsg);
                    };
                    cordova.exec(success, error, 'Band', 'vibrate', [tileUuid, messageTitle, messageBody, date.toISOString(), band.MessageFlags[flags]]);
                };
                BandNotificationManager.prototype.vibrate = function (type, callback) {
                    var success = function () {
                        callback(null);
                    };
                    var error = function (errorMsg) {
                        callback(errorMsg);
                    };
                    cordova.exec(success, error, 'Band', 'vibrate', [band.VibrationType[type]]);
                };
                return BandNotificationManager;
            })();
            band.BandNotificationManager = BandNotificationManager;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandPersonalizationManager = (function () {
                function BandPersonalizationManager() {
                }
                BandPersonalizationManager.prototype.getMeTileImage = function (callback) {
                    var success = function (iconData) {
                        callback(null, band.BandIcon.fromJson(iconData));
                    };
                    var error = function (errorMsg) {
                        callback(errorMsg);
                    };
                    cordova.exec(success, error, 'Band', 'getMeTileImage', []);
                };
                BandPersonalizationManager.prototype.getTheme = function (callback) {
                    var success = function (themeData) {
                        callback(null, band.BandTheme.fromJson(themeData));
                    };
                    var error = function (errorMsg) {
                        callback(errorMsg);
                    };
                    cordova.exec(success, error, 'Band', 'getMeTileImage', []);
                };
                BandPersonalizationManager.prototype.setMeTileImage = function (icon, callback) {
                    var success = function () {
                        callback();
                    };
                    var error = function (errorMsg) {
                        callback(errorMsg);
                    };
                    if (icon.getBase64().length === 0) {
                        icon.toBandIcon(function () {
                            cordova.exec(success, error, 'Band', 'setMeTileImage', [icon.toString()]);
                        });
                    }
                    else {
                        cordova.exec(success, error, 'Band', 'setMeTileImage', [icon.toString()]);
                    }
                };
                BandPersonalizationManager.prototype.setTheme = function (theme, callback) {
                    var success = function () {
                        callback();
                    };
                    var error = function (errorMsg) {
                        callback(errorMsg);
                    };
                    cordova.exec(success, error, 'Band', 'setTheme', [theme.toString()]);
                };
                return BandPersonalizationManager;
            })();
            band.BandPersonalizationManager = BandPersonalizationManager;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
/// <reference path="types/cordova.d.ts" />
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandSensorManager = (function () {
                function BandSensorManager() {
                }
                BandSensorManager.prototype.handleSuccessfulUnregister = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    return;
                };
                BandSensorManager.prototype.handleErrorUnregister = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    return;
                };
                BandSensorManager.prototype.getCurrentgetCurrentHeartRateConsent = function () {
                    return this.currentHeartRateConsent;
                };
                BandSensorManager.prototype.registerAccelerometerEventListener = function (reportingInterval, callback) {
                    var success = function (event) {
                        callback(null, new band.BandAccelerometerEvent(event), event.id);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, "Band", "registerAccelerometerEventListener", [band.SampleRate[reportingInterval]]);
                };
                BandSensorManager.prototype.registerCaloriesEventListener = function (callback) {
                    var success = function (event) {
                        callback(null, new band.BandCaloriesEvent(event), event.id);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, "Band", "registerCaloriesEventListener", []);
                };
                BandSensorManager.prototype.registerContactEventListener = function (callback) {
                    var success = function (event) {
                        callback(null, new band.BandContactEvent(event), event.id);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, "Band", "registerContactEventListener", []);
                };
                BandSensorManager.prototype.registerDistanceEventListener = function (callback) {
                    var success = function (event) {
                        callback(null, new band.BandDistanceEvent(event), event.id);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, "Band", "registerDistanceEventListener", []);
                };
                BandSensorManager.prototype.registerGyroscopeEventListener = function (reportingInterval, callback) {
                    var success = function (event) {
                        callback(null, new band.BandGyroscopeEvent(event), event.id);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, "Band", "registerGyroscopeEventListener", [band.SampleRate[reportingInterval]]);
                };
                BandSensorManager.prototype.registerHeartRateEventListener = function (callback) {
                    var success = function (event) {
                        callback(null, new band.BandHeartRateEvent(event), event.id);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, "Band", "registerHeartRateEventListener", []);
                };
                BandSensorManager.prototype.registerPedometerEventListener = function (callback) {
                    var success = function (event) {
                        callback(null, new band.BandPedometerEvent(event), event.id);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, "Band", "registerPedometerEventListener", []);
                };
                BandSensorManager.prototype.registerSkinTemperatureEventListener = function (callback) {
                    var success = function (event) {
                        callback(null, new band.BandSkinTemperatureEvent(event), event.id);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, "Band", "registerSkinTemperatureEventListener", []);
                };
                BandSensorManager.prototype.registerUVEventListener = function (callback) {
                    var success = function (event) {
                        callback(null, new band.BandUVEvent(event), event.id);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, "Band", "registerUVEventListener", []);
                };
                BandSensorManager.prototype.requestHeartRateConsent = function (callback) {
                    var success = function (consentGiven) {
                        callback(null, consentGiven);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, "Band", "requestHeartRateConsent", []);
                };
                BandSensorManager.prototype.unregisterAccelerometerEventListener = function (eventId) {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterAccelerometerEventListener", [eventId.toString()]);
                };
                BandSensorManager.prototype.unregisterAccelerometerEventListeners = function () {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterAccelerometerEventListeners", []);
                };
                BandSensorManager.prototype.unregisterAllListeners = function () {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterAllListeners", []);
                };
                BandSensorManager.prototype.unregisterCaloriesEventListener = function (eventId) {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterCaloriesEventListener", [eventId.toString()]);
                };
                BandSensorManager.prototype.unregisterCaloriesEventListeners = function () {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterCaloriesEventListeners", []);
                };
                BandSensorManager.prototype.unregisterContactEventListener = function (eventId) {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterContactEventListener", [eventId.toString()]);
                };
                BandSensorManager.prototype.unregisterContactEventListeners = function () {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterContactEventListeners", []);
                };
                BandSensorManager.prototype.unregisterDistanceEventListener = function (eventId) {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterDistanceEventListener", [eventId.toString()]);
                };
                BandSensorManager.prototype.unregisterDistanceEventListeners = function () {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterDistanceEventListeners", []);
                };
                BandSensorManager.prototype.unregisterGyroscopeEventListener = function (eventId) {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterGyroscopeEventListener", [eventId.toString()]);
                };
                BandSensorManager.prototype.unregisterGyroscopeEventListeners = function () {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterGyroscopeEventListeners", []);
                };
                BandSensorManager.prototype.unregisterHeartRateEventListener = function (eventId) {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterHeartRateEventListener", [eventId.toString()]);
                };
                BandSensorManager.prototype.unregisterHeartRateEventListeners = function () {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterHeartRateEventListeners", []);
                };
                BandSensorManager.prototype.unregisterPedometerEventListener = function (eventId) {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterPedometerEventListener", [eventId.toString()]);
                };
                BandSensorManager.prototype.unregisterPedometerEventListeners = function () {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterPedometerEventListeners", []);
                };
                BandSensorManager.prototype.unregisterSkinTemperatureEventListener = function (eventId) {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterSkinTemperatureEventListener", [eventId.toString()]);
                };
                BandSensorManager.prototype.unregisterSkinTemperatureEventListeners = function () {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterSkinTemperatureEventListeners", []);
                };
                BandSensorManager.prototype.unregisterUVEventListener = function (eventId) {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterUVEventListener", [eventId.toString()]);
                };
                BandSensorManager.prototype.unregisterUVEventListeners = function () {
                    cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterUVEventListeners", []);
                };
                return BandSensorManager;
            })();
            band.BandSensorManager = BandSensorManager;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandTheme = (function () {
                function BandTheme(base, highlights, lowlights, secondary, highContrast, muted) {
                    this.baseColor = base;
                    this.highlightsColor = highlights;
                    this.lowlightsColor = lowlights;
                    this.secondaryColor = secondary;
                    this.highContrastColor = highContrast;
                    this.mutedColor = muted;
                }
                BandTheme.fromJson = function (json) {
                    return new BandTheme(json.base, json.highlights, json.lowlights, json.secondary, json.highContrast, json.muted);
                };
                BandTheme.prototype.toJson = function () {
                    return {
                        base: this.baseColor,
                        highlights: this.highlightsColor,
                        lowlights: this.lowlightsColor,
                        secondary: this.secondaryColor,
                        highContrast: this.highContrastColor,
                        muted: this.mutedColor
                    };
                };
                BandTheme.prototype.toString = function () {
                    return JSON.stringify(this.toJson());
                };
                BandTheme.prototype.getBaseColor = function () {
                    return this.baseColor;
                };
                BandTheme.prototype.getHighContrastColor = function () {
                    return this.highContrastColor;
                };
                BandTheme.prototype.getHighlightColor = function () {
                    return this.highlightsColor;
                };
                BandTheme.prototype.getLowlightColor = function () {
                    return this.lowlightsColor;
                };
                BandTheme.prototype.getMutedColor = function () {
                    return this.mutedColor;
                };
                BandTheme.prototype.getSecondaryTextColor = function () {
                    return this.secondaryColor;
                };
                BandTheme.prototype.hashCode = function () {
                    return '';
                };
                BandTheme.prototype.setBaseColor = function (color) {
                    this.baseColor = color;
                    return this;
                };
                BandTheme.prototype.setHighContrastColor = function (color) {
                    this.highContrastColor = color;
                    return this;
                };
                BandTheme.prototype.setHighlightColor = function (color) {
                    this.highlightsColor = color;
                    return this;
                };
                BandTheme.prototype.setLowlightColor = function (color) {
                    this.lowlightsColor = color;
                    return this;
                };
                BandTheme.prototype.setMutedColor = function (color) {
                    this.mutedColor = color;
                    return this;
                };
                BandTheme.prototype.setSecondaryTextColor = function (color) {
                    this.secondaryColor = color;
                    return this;
                };
                return BandTheme;
            })();
            band.BandTheme = BandTheme;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandTile = (function () {
                function BandTile(json) {
                    var icons = [];
                    for (var _i = 0, _a = json.pageIcons; _i < _a.length; _i++) {
                        var icon = _a[_i];
                        icons.push(band.BandIcon.fromJson(icon));
                    }
                    var layouts = [];
                    for (var _b = 0, _c = json.pageLayouts; _b < _c.length; _b++) {
                        var layout = _c[_b];
                        layouts.push(band.PageLayout.fromJson(layout));
                    }
                    this.uuid = json.uuid;
                    this.pageIcons = icons;
                    this.pageLayouts = layouts;
                    this.theme = band.BandTheme.fromJson(json.theme);
                    this.tileIcon = band.BandIcon.fromJson(json.tileIcon);
                    this.tileId = json.tileId;
                    this.tileName = json.tileName;
                    this.tileSmallIcon = band.BandIcon.fromJson(json.tileSmallIcon);
                    this.badgingEnabled = json.badingEnabled;
                }
                BandTile.prototype.toJson = function () {
                    var icons = [], layouts = [];
                    for (var _i = 0, _a = this.pageIcons; _i < _a.length; _i++) {
                        var icon = _a[_i];
                        icons.push(icon.toJson());
                    }
                    for (var _b = 0, _c = this.pageLayouts; _b < _c.length; _b++) {
                        var layout = _c[_b];
                        layouts.push(layout.toJson());
                    }
                    return {
                        uuid: this.uuid,
                        pageIcons: icons,
                        pageLayouts: layouts,
                        theme: this.theme.toJson(),
                        tileIcon: this.tileIcon.toJson(),
                        tileId: this.tileId,
                        tileName: this.tileName,
                        tileSmallIcon: this.tileSmallIcon.toJson(),
                        badingEnabled: this.badgingEnabled
                    };
                };
                BandTile.prototype.toString = function () {
                    return JSON.stringify(this.toJson());
                };
                return BandTile;
            })();
            band.BandTile = BandTile;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandTileBuilder = (function () {
                function BandTileBuilder(uuid, tileName, tileIcon) {
                    this.tile.uuid = uuid;
                    this.tile.tileName = tileName;
                    this.tile.tileIcon = tileIcon.toJson();
                }
                BandTileBuilder.prototype.addPageLayout = function (pageLayout) {
                    this.tile.pageLayouts = !this.tile.pageLayouts ? [] : this.tile.pageLayouts;
                    this.tile.pageLayouts.push(pageLayout.toJson());
                    return this;
                };
                BandTileBuilder.prototype.setPageIcons = function () {
                    var icons = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        icons[_i - 0] = arguments[_i];
                    }
                    var iconJsons = [];
                    for (var _a = 0; _a < icons.length; _a++) {
                        var icon = icons[_a];
                        iconJsons.push(icon.toJson());
                    }
                    this.tile.pageIcons = iconJsons;
                    return this;
                };
                BandTileBuilder.prototype.setPageLayouts = function () {
                    var pageLayouts = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        pageLayouts[_i - 0] = arguments[_i];
                    }
                    var layouts = [];
                    for (var _a = 0; _a < pageLayouts.length; _a++) {
                        var layout = pageLayouts[_a];
                        layouts.push(layout.toJson());
                    }
                    this.tile.pageLayouts = layouts;
                    return this;
                };
                BandTileBuilder.prototype.setTheme = function (theme) {
                    this.tile.theme = theme.toJson();
                    return this;
                };
                BandTileBuilder.prototype.setTileSmallIcon = function (icon, badgingEnabled) {
                    this.tile.badingEnabled = badgingEnabled;
                    this.tile.tileSmallIcon = icon.toJson();
                    return this;
                };
                BandTileBuilder.prototype.build = function () {
                    return new band.BandTile(this.tile);
                };
                return BandTileBuilder;
            })();
            band.BandTileBuilder = BandTileBuilder;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandTileManager = (function () {
                function BandTileManager() {
                }
                BandTileManager.prototype.addTitle = function (tile, callback) {
                    var success = function () {
                        callback(null);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'addTile', [tile.toString()]);
                };
                BandTileManager.prototype.getRemainingTileCapacity = function (callback) {
                    var success = function (capacity) {
                        callback(null, capacity);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'getRemainingTileCapacity', []);
                };
                BandTileManager.prototype.getTiles = function (callback) {
                    var success = function (tiles) {
                        var bandTiles = [];
                        for (var _i = 0; _i < tiles.length; _i++) {
                            var tile = tiles[_i];
                            bandTiles.push(new band.BandTile(tile));
                        }
                        callback(null, bandTiles);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'getTiles', []);
                };
                BandTileManager.prototype.removePages = function (tileId, callback) {
                    var success = function () {
                        callback(null);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'removePages', [tileId]);
                };
                BandTileManager.prototype.removeTile = function (tile, callback) {
                    var success = function () {
                        callback(null);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'addTile', [tile.toString()]);
                };
                BandTileManager.prototype.setPages = function (tileId, pageData, callback) {
                    var success = function () {
                        callback(null);
                    };
                    var error = function (error) {
                        callback(error);
                    };
                    cordova.exec(success, error, 'Band', 'setPages', [tileId, pageData.toString()]);
                };
                return BandTileManager;
            })();
            band.BandTileManager = BandTileManager;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            (function (ConnectionState) {
                ConnectionState[ConnectionState["BINDING"] = 0] = "BINDING";
                ConnectionState[ConnectionState["BOUND"] = 1] = "BOUND";
                ConnectionState[ConnectionState["CONNECTED"] = 2] = "CONNECTED";
                ConnectionState[ConnectionState["DISPOSED"] = 3] = "DISPOSED";
                ConnectionState[ConnectionState["INVALID_SDK_VERSION"] = 4] = "INVALID_SDK_VERSION";
                ConnectionState[ConnectionState["UNBINDING"] = 5] = "UNBINDING";
                ConnectionState[ConnectionState["UNBOUND"] = 6] = "UNBOUND";
            })(band.ConnectionState || (band.ConnectionState = {}));
            var ConnectionState = band.ConnectionState;
            (function (UserConsent) {
                UserConsent[UserConsent["GRANTED"] = 0] = "GRANTED";
                UserConsent[UserConsent["DECLINED"] = 1] = "DECLINED";
                UserConsent[UserConsent["UNSPECEFIED"] = 2] = "UNSPECEFIED";
            })(band.UserConsent || (band.UserConsent = {}));
            var UserConsent = band.UserConsent;
            (function (MessageFlags) {
                MessageFlags[MessageFlags["SHOW_DIALOG"] = 0] = "SHOW_DIALOG";
                MessageFlags[MessageFlags["NONE"] = 1] = "NONE";
            })(band.MessageFlags || (band.MessageFlags = {}));
            var MessageFlags = band.MessageFlags;
            (function (HorizontalAlignment) {
                HorizontalAlignment[HorizontalAlignment["LEFT"] = 0] = "LEFT";
                HorizontalAlignment[HorizontalAlignment["RIGHT"] = 1] = "RIGHT";
                HorizontalAlignment[HorizontalAlignment["CENTERED"] = 2] = "CENTERED";
            })(band.HorizontalAlignment || (band.HorizontalAlignment = {}));
            var HorizontalAlignment = band.HorizontalAlignment;
            (function (VerticalAlignment) {
                VerticalAlignment[VerticalAlignment["TOP"] = 0] = "TOP";
                VerticalAlignment[VerticalAlignment["BOTTOM"] = 1] = "BOTTOM";
                VerticalAlignment[VerticalAlignment["CENTERED"] = 2] = "CENTERED";
            })(band.VerticalAlignment || (band.VerticalAlignment = {}));
            var VerticalAlignment = band.VerticalAlignment;
            (function (Color) {
            })(band.Color || (band.Color = {}));
            var Color = band.Color;
            (function (ElementColorSource) {
                ElementColorSource[ElementColorSource["BAND_BASE"] = 0] = "BAND_BASE";
                ElementColorSource[ElementColorSource["BAND_HIGH_CONTRAST"] = 1] = "BAND_HIGH_CONTRAST";
                ElementColorSource[ElementColorSource["BAND_HIGHLIGHT"] = 2] = "BAND_HIGHLIGHT";
                ElementColorSource[ElementColorSource["BAND_LOWLIGHT"] = 3] = "BAND_LOWLIGHT";
                ElementColorSource[ElementColorSource["BAND_MUTED"] = 4] = "BAND_MUTED";
                ElementColorSource[ElementColorSource["BAND_SECONDARY_TEXT"] = 5] = "BAND_SECONDARY_TEXT";
                ElementColorSource[ElementColorSource["CUSTOM"] = 6] = "CUSTOM";
                ElementColorSource[ElementColorSource["TILE_BASE"] = 7] = "TILE_BASE";
                ElementColorSource[ElementColorSource["TILE_HIGH_CONTRAST"] = 8] = "TILE_HIGH_CONTRAST";
                ElementColorSource[ElementColorSource["TILE_HIGHLIGHT"] = 9] = "TILE_HIGHLIGHT";
                ElementColorSource[ElementColorSource["TILE_LOWLIGHT"] = 10] = "TILE_LOWLIGHT";
                ElementColorSource[ElementColorSource["TILE_MUTED"] = 11] = "TILE_MUTED";
                ElementColorSource[ElementColorSource["TILE_SECONDARY_TEXT"] = 12] = "TILE_SECONDARY_TEXT";
            })(band.ElementColorSource || (band.ElementColorSource = {}));
            var ElementColorSource = band.ElementColorSource;
            (function (WrappedTextBlockFont) {
                WrappedTextBlockFont[WrappedTextBlockFont["SMALL"] = 0] = "SMALL";
                WrappedTextBlockFont[WrappedTextBlockFont["MEDIUM"] = 1] = "MEDIUM";
            })(band.WrappedTextBlockFont || (band.WrappedTextBlockFont = {}));
            var WrappedTextBlockFont = band.WrappedTextBlockFont;
            (function (TextBlockFont) {
                TextBlockFont[TextBlockFont["EXTRA_LARGE_NUMBERS"] = 0] = "EXTRA_LARGE_NUMBERS";
                TextBlockFont[TextBlockFont["EXTRA_LARGE_NUMBERS_BOLD"] = 1] = "EXTRA_LARGE_NUMBERS_BOLD";
                TextBlockFont[TextBlockFont["LARGE"] = 2] = "LARGE";
                TextBlockFont[TextBlockFont["MEDIUM"] = 3] = "MEDIUM";
                TextBlockFont[TextBlockFont["SMALL"] = 4] = "SMALL";
            })(band.TextBlockFont || (band.TextBlockFont = {}));
            var TextBlockFont = band.TextBlockFont;
            (function (TextBlockBaselineAlignment) {
                TextBlockBaselineAlignment[TextBlockBaselineAlignment["AUTOMATIC"] = 0] = "AUTOMATIC";
                TextBlockBaselineAlignment[TextBlockBaselineAlignment["RELATIVE"] = 1] = "RELATIVE";
                TextBlockBaselineAlignment[TextBlockBaselineAlignment["ABSOLUTE"] = 2] = "ABSOLUTE";
            })(band.TextBlockBaselineAlignment || (band.TextBlockBaselineAlignment = {}));
            var TextBlockBaselineAlignment = band.TextBlockBaselineAlignment;
            (function (Orientation) {
                Orientation[Orientation["HORIZONTAL"] = 0] = "HORIZONTAL";
                Orientation[Orientation["VERTICAL"] = 1] = "VERTICAL";
            })(band.Orientation || (band.Orientation = {}));
            var Orientation = band.Orientation;
            (function (BandContactState) {
                BandContactState[BandContactState["NOT_WORN"] = 0] = "NOT_WORN";
                BandContactState[BandContactState["UNKNOWN"] = 1] = "UNKNOWN";
                BandContactState[BandContactState["WORN"] = 2] = "WORN";
            })(band.BandContactState || (band.BandContactState = {}));
            var BandContactState = band.BandContactState;
            (function (BandErrorType) {
                BandErrorType[BandErrorType["BAND_FULL_ERROR"] = 0] = "BAND_FULL_ERROR";
                BandErrorType[BandErrorType["DEVICE_ERROR"] = 1] = "DEVICE_ERROR";
                BandErrorType[BandErrorType["INVALID_PAGE_DATA_ERROR"] = 2] = "INVALID_PAGE_DATA_ERROR";
                BandErrorType[BandErrorType["PERMISSION_ERROR"] = 3] = "PERMISSION_ERROR";
                BandErrorType[BandErrorType["SERVICE_ERROR"] = 4] = "SERVICE_ERROR";
                BandErrorType[BandErrorType["TILE_ALREADY_EXISTS_ERROR"] = 5] = "TILE_ALREADY_EXISTS_ERROR";
                BandErrorType[BandErrorType["TILE_NOT_FOUND_ERROR"] = 6] = "TILE_NOT_FOUND_ERROR";
                BandErrorType[BandErrorType["TOO_MANY_CONCURRENT_COMMANDS_ERROR"] = 7] = "TOO_MANY_CONCURRENT_COMMANDS_ERROR";
                BandErrorType[BandErrorType["UNKNOWN_ERROR"] = 8] = "UNKNOWN_ERROR";
                BandErrorType[BandErrorType["UNSUPPORTED_SDK_VERSION_ERROR"] = 9] = "UNSUPPORTED_SDK_VERSION_ERROR";
            })(band.BandErrorType || (band.BandErrorType = {}));
            var BandErrorType = band.BandErrorType;
            (function (BarcodeType) {
                BarcodeType[BarcodeType["CODE39"] = 0] = "CODE39";
                BarcodeType[BarcodeType["PDF417"] = 1] = "PDF417";
            })(band.BarcodeType || (band.BarcodeType = {}));
            var BarcodeType = band.BarcodeType;
            (function (HeartRateQuality) {
                HeartRateQuality[HeartRateQuality["AQUIRING"] = 0] = "AQUIRING";
                HeartRateQuality[HeartRateQuality["LOCKED"] = 1] = "LOCKED";
            })(band.HeartRateQuality || (band.HeartRateQuality = {}));
            var HeartRateQuality = band.HeartRateQuality;
            (function (MotionType) {
                MotionType[MotionType["IDLE"] = 0] = "IDLE";
                MotionType[MotionType["JOGGING"] = 1] = "JOGGING";
                MotionType[MotionType["RUNNING"] = 2] = "RUNNING";
                MotionType[MotionType["UNKNOWN"] = 3] = "UNKNOWN";
                MotionType[MotionType["WALKING"] = 4] = "WALKING";
            })(band.MotionType || (band.MotionType = {}));
            var MotionType = band.MotionType;
            (function (SampleRate) {
                SampleRate[SampleRate["MS128"] = 0] = "MS128";
                SampleRate[SampleRate["MS16"] = 1] = "MS16";
                SampleRate[SampleRate["MS32"] = 2] = "MS32";
            })(band.SampleRate || (band.SampleRate = {}));
            var SampleRate = band.SampleRate;
            (function (UVIndexLevel) {
                UVIndexLevel[UVIndexLevel["HIGH"] = 0] = "HIGH";
                UVIndexLevel[UVIndexLevel["LOW"] = 1] = "LOW";
                UVIndexLevel[UVIndexLevel["MEDIUM"] = 2] = "MEDIUM";
                UVIndexLevel[UVIndexLevel["NONE"] = 3] = "NONE";
                UVIndexLevel[UVIndexLevel["VERY_HIGH"] = 4] = "VERY_HIGH";
            })(band.UVIndexLevel || (band.UVIndexLevel = {}));
            var UVIndexLevel = band.UVIndexLevel;
            (function (VibrationType) {
                VibrationType[VibrationType["NOTIFICATION_ALARM"] = 0] = "NOTIFICATION_ALARM";
                VibrationType[VibrationType["NOTIFICATION_ONE_TONE"] = 1] = "NOTIFICATION_ONE_TONE";
                VibrationType[VibrationType["NOTIFICATION_TIMER"] = 2] = "NOTIFICATION_TIMER";
                VibrationType[VibrationType["NOTIFICATION_TWO_TONE"] = 3] = "NOTIFICATION_TWO_TONE";
                VibrationType[VibrationType["ONE_TONE_HIGH"] = 4] = "ONE_TONE_HIGH";
                VibrationType[VibrationType["RAMP_DOWN"] = 5] = "RAMP_DOWN";
                VibrationType[VibrationType["RAMP_UP"] = 6] = "RAMP_UP";
                VibrationType[VibrationType["THREE_TONE_HIGH"] = 7] = "THREE_TONE_HIGH";
                VibrationType[VibrationType["TWO_TONE_HIGH"] = 8] = "TWO_TONE_HIGH";
            })(band.VibrationType || (band.VibrationType = {}));
            var VibrationType = band.VibrationType;
            (function (PageElementTypes) {
                PageElementTypes[PageElementTypes["PAGE_ELEMENT"] = 0] = "PAGE_ELEMENT";
                PageElementTypes[PageElementTypes["BARCODE"] = 1] = "BARCODE";
                PageElementTypes[PageElementTypes["FILLED_BUTTON"] = 2] = "FILLED_BUTTON";
                PageElementTypes[PageElementTypes["PAGE_PANEL"] = 3] = "PAGE_PANEL";
                PageElementTypes[PageElementTypes["FILLED_PANEL"] = 4] = "FILLED_PANEL";
                PageElementTypes[PageElementTypes["FLOW_PANEL"] = 5] = "FLOW_PANEL";
                PageElementTypes[PageElementTypes["ICON"] = 6] = "ICON";
                PageElementTypes[PageElementTypes["SCROLL_FLOW_PANEL"] = 7] = "SCROLL_FLOW_PANEL";
                PageElementTypes[PageElementTypes["TEXT_BLOCK"] = 8] = "TEXT_BLOCK";
                PageElementTypes[PageElementTypes["TEXT_BUTTON"] = 9] = "TEXT_BUTTON";
                PageElementTypes[PageElementTypes["WRAPPED_TEXT_BLOCK"] = 10] = "WRAPPED_TEXT_BLOCK";
            })(band.PageElementTypes || (band.PageElementTypes = {}));
            var PageElementTypes = band.PageElementTypes;
            (function (PageElementDataTypes) {
                PageElementDataTypes[PageElementDataTypes["BARCODE_DATA"] = 0] = "BARCODE_DATA";
                PageElementDataTypes[PageElementDataTypes["FILLED_BUTTON_DATA"] = 1] = "FILLED_BUTTON_DATA";
                PageElementDataTypes[PageElementDataTypes["ICON_DATA"] = 2] = "ICON_DATA";
                PageElementDataTypes[PageElementDataTypes["PAGE_ELEMENT_DATA"] = 3] = "PAGE_ELEMENT_DATA";
                PageElementDataTypes[PageElementDataTypes["TEXT_BLOCK_DATA"] = 4] = "TEXT_BLOCK_DATA";
                PageElementDataTypes[PageElementDataTypes["WRAPPED_TEXT_BLOCK_DATA"] = 5] = "WRAPPED_TEXT_BLOCK_DATA";
            })(band.PageElementDataTypes || (band.PageElementDataTypes = {}));
            var PageElementDataTypes = band.PageElementDataTypes;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var PageData = (function () {
                function PageData(pageUuid, layoutId) {
                    this.pageUuid = pageUuid;
                    this.layoutId = layoutId;
                }
                PageData.prototype.update = function (data) {
                    this.values.push(data);
                    return this;
                };
                PageData.prototype.getValues = function () {
                    return this.values;
                };
                PageData.prototype.toJson = function () {
                    var values = [];
                    for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
                        var v = _a[_i];
                        values.push(v.toJson());
                    }
                    return {
                        pageUuid: this.pageUuid,
                        layoutId: this.layoutId,
                        values: values
                    };
                };
                PageData.fromJson = function (json) {
                    var data = new PageData(json.pageUuid, json.layoutId);
                    for (var _i = 0, _a = json.values; _i < _a.length; _i++) {
                        var value = _a[_i];
                        switch (band.PageElementDataTypes[value.type]) {
                            case band.PageElementDataTypes.BARCODE_DATA:
                                data.update(band.BarcodeData.fromJson(value));
                                break;
                            case band.PageElementDataTypes.FILLED_BUTTON_DATA:
                                data.update(band.FilledButtonData.fromJson(value));
                                break;
                            case band.PageElementDataTypes.ICON_DATA:
                                data.update(band.IconData.fromJson(value));
                                break;
                            case band.PageElementDataTypes.TEXT_BLOCK_DATA:
                                data.update(band.TextBlockData.fromJson(value));
                                break;
                            case band.PageElementDataTypes.WRAPPED_TEXT_BLOCK_DATA:
                                data.update(band.WrappedTextBlockData.fromJson(value));
                                break;
                            case band.PageElementDataTypes.PAGE_ELEMENT_DATA:
                            default:
                                data.update(band.PageElementData.fromJson(value));
                                break;
                        }
                    }
                    return data;
                };
                return PageData;
            })();
            band.PageData = PageData;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var PageLayout = (function () {
                function PageLayout(root) {
                    this.root = root;
                }
                PageLayout.prototype.getRoot = function () {
                    return this.root;
                };
                PageLayout.prototype.setRoot = function (root) {
                    this.root = root;
                    return this;
                };
                PageLayout.prototype.toJson = function () {
                    return {
                        root: this.root.toJson()
                    };
                };
                PageLayout.fromJson = function (json) {
                    var root;
                    switch (band.PageElementTypes[json.root.type]) {
                        case band.PageElementTypes.FILLED_PANEL:
                            root = band.FilledPanel.fromJson(json.root);
                            break;
                        case band.PageElementTypes.FLOW_PANEL:
                            root = band.FlowPanel.fromJson(json.root);
                            break;
                        case band.PageElementTypes.SCROLL_FLOW_PANEL:
                            root = band.ScrollFlowPanel.fromJson(json.root);
                            break;
                        case band.PageElementTypes.PAGE_PANEL:
                        default:
                            root = band.PagePanel.fromJson(json.root);
                            break;
                    }
                    var layout = new PageLayout(root);
                    return layout;
                };
                return PageLayout;
            })();
            band.PageLayout = PageLayout;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BarcodeData = (function (_super) {
                __extends(BarcodeData, _super);
                function BarcodeData(id, barcodeText, type) {
                    _super.call(this, id);
                    this.barcodeText = barcodeText;
                    this.barcodeType = type;
                }
                BarcodeData.prototype.getBarCode = function () {
                    return this.barcodeText;
                };
                BarcodeData.prototype.getBarcodeType = function () {
                    return this.barcodeType;
                };
                BarcodeData.prototype.toJson = function () {
                    var data = _super.prototype.toJson.call(this);
                    data.barcodeText = this.barcodeText;
                    data.barcodeType = band.BarcodeType[this.barcodeType];
                    data.type = band.PageElementDataTypes[band.PageElementDataTypes.BARCODE_DATA];
                    return data;
                };
                BarcodeData.fromJson = function (json) {
                    var data = _super.fromJson.call(this, json);
                    data.barcodeText = json.barcodeText;
                    data.barcodeType = BarcodeData[json.barcodeType];
                    return data;
                };
                return BarcodeData;
            })(band.PageElementData);
            band.BarcodeData = BarcodeData;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var FilledButtonData = (function (_super) {
                __extends(FilledButtonData, _super);
                function FilledButtonData(id, color) {
                    _super.call(this, id);
                    this.pressedColor = color;
                }
                FilledButtonData.prototype.getPressedColor = function () {
                    return this.pressedColor;
                };
                FilledButtonData.prototype.setPressedColor = function (color) {
                    this.pressedColor = color;
                };
                FilledButtonData.prototype.toJson = function () {
                    var data = _super.prototype.toJson.call(this);
                    data.color = this.pressedColor;
                    data.type = band.PageElementDataTypes[band.PageElementDataTypes.BARCODE_DATA];
                    return data;
                };
                FilledButtonData.fromJson = function (json) {
                    var data = _super.fromJson.call(this, json);
                    data.pressedColor = json.color;
                    return data;
                };
                return FilledButtonData;
            })(band.PageElementData);
            band.FilledButtonData = FilledButtonData;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var IconData = (function (_super) {
                __extends(IconData, _super);
                function IconData(id, iconIndex) {
                    _super.call(this, id);
                    this.iconIndex = iconIndex;
                }
                IconData.prototype.getIconIndex = function () {
                    return this.iconIndex;
                };
                IconData.prototype.toJson = function () {
                    var data = _super.prototype.toJson.call(this);
                    data.iconIndex = this.iconIndex;
                    data.type = band.PageElementDataTypes[band.PageElementDataTypes.BARCODE_DATA];
                    return data;
                };
                IconData.fromJson = function (json) {
                    var data = _super.fromJson.call(this, json);
                    data.iconIndex = json.iconIndex;
                    return data;
                };
                return IconData;
            })(band.PageElementData);
            band.IconData = IconData;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var PageElementData = (function () {
                function PageElementData(id) {
                    this.id = id;
                }
                PageElementData.prototype.getId = function () {
                    return this.id;
                };
                PageElementData.prototype.toJson = function () {
                    return {
                        id: this.id,
                        type: band.PageElementDataTypes[band.PageElementDataTypes.PAGE_ELEMENT_DATA]
                    };
                };
                PageElementData.prototype.toString = function () {
                    return JSON.stringify(this.toJson());
                };
                PageElementData.fromJson = function (json) {
                    return new PageElementData(json.id);
                };
                return PageElementData;
            })();
            band.PageElementData = PageElementData;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var TextBlockData = (function (_super) {
                __extends(TextBlockData, _super);
                function TextBlockData(id, text) {
                    _super.call(this, id);
                    this.text = text;
                }
                TextBlockData.prototype.getText = function () {
                    return this.text;
                };
                TextBlockData.prototype.toJson = function () {
                    var data = _super.prototype.toJson.call(this);
                    data.text = this.text;
                    data.type = band.PageElementDataTypes[band.PageElementDataTypes.BARCODE_DATA];
                    return data;
                };
                TextBlockData.fromJson = function (json) {
                    var data = _super.fromJson.call(this, json);
                    data.text = json.text;
                    return data;
                };
                return TextBlockData;
            })(band.PageElementData);
            band.TextBlockData = TextBlockData;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var WrappedTextBlockData = (function (_super) {
                __extends(WrappedTextBlockData, _super);
                function WrappedTextBlockData(id, text) {
                    _super.call(this, id);
                    this.text = text;
                }
                WrappedTextBlockData.prototype.getText = function () {
                    return this.text;
                };
                WrappedTextBlockData.prototype.toJson = function () {
                    var data = _super.prototype.toJson.call(this);
                    data.text = this.text;
                    data.type = band.PageElementDataTypes[band.PageElementDataTypes.BARCODE_DATA];
                    return data;
                };
                WrappedTextBlockData.fromJson = function (json) {
                    var data = _super.fromJson.call(this, json);
                    data.text = json.text;
                    return data;
                };
                return WrappedTextBlockData;
            })(band.PageElementData);
            band.WrappedTextBlockData = WrappedTextBlockData;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var Barcode = (function (_super) {
                __extends(Barcode, _super);
                function Barcode(elementId, rect, type) {
                    var margins = { top: 0, left: 0, right: 0, bottom: 0 };
                    _super.call(this, elementId, rect, margins, band.HorizontalAlignment.CENTERED, band.VerticalAlignment.CENTERED, true);
                }
                Barcode.prototype.toJson = function () {
                    var json = _super.prototype.toJson.call(this);
                    json.barcodeType = band.BarcodeType[this.attributes.barcodeType];
                    json.type = band.PageElementTypes[band.PageElementTypes.BARCODE];
                    return json;
                };
                Barcode.fromJson = function (json) {
                    var barcode = band.PageElement.fromJson(json);
                    barcode.attributes.barcodeType = band.BarcodeType[json.barcodeType];
                    return barcode;
                };
                return Barcode;
            })(band.PageElement);
            band.Barcode = Barcode;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var FilledButton = (function (_super) {
                __extends(FilledButton, _super);
                function FilledButton(elementId, rect, colorSource, color) {
                    var margins = { top: 0, left: 0, right: 0, bottom: 0 };
                    _super.call(this, elementId, rect, margins, band.HorizontalAlignment.CENTERED, band.VerticalAlignment.CENTERED, true);
                    this.attributes.colorSource = colorSource;
                    this.attributes.color = color;
                }
                FilledButton.prototype.toJson = function () {
                    var json = _super.prototype.toJson.call(this);
                    json.color = this.attributes.color;
                    json.colorSource = band.ElementColorSource[this.attributes.colorSource];
                    json.type = band.PageElementTypes[band.PageElementTypes.FILLED_BUTTON];
                    return json;
                };
                FilledButton.fromJson = function (json) {
                    var button = band.PageElement.fromJson(json);
                    button.attributes.color = json.color;
                    button.attributes.colorSource = band.ElementColorSource[json.colorSource];
                    return button;
                };
                return FilledButton;
            })(band.PageElement);
            band.FilledButton = FilledButton;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var FilledPanel = (function (_super) {
                __extends(FilledPanel, _super);
                function FilledPanel(elementId, rect, backgroundColorSource, backgroundColor) {
                    var elements = [];
                    for (var _i = 4; _i < arguments.length; _i++) {
                        elements[_i - 4] = arguments[_i];
                    }
                    _super.apply(this, [elementId, rect].concat(elements));
                    this.attributes.backgroundColorSource = backgroundColorSource;
                    this.attributes.backgroundColor = backgroundColor;
                }
                FilledPanel.prototype.toJson = function () {
                    var json = _super.prototype.toJson.call(this);
                    json.backgroundColor = this.attributes.backgroundColor;
                    json.backgroundColorSource = band.ElementColorSource[this.attributes.backgroundColorSource];
                    json.type = band.PageElementTypes[band.PageElementTypes.FILLED_PANEL];
                    return json;
                };
                FilledPanel.fromJson = function (json) {
                    var panel = band.PageElement.fromJson(json);
                    panel.attributes.backgroundColor = json.backgroundColor;
                    panel.attributes.backgroundColorSource = band.ElementColorSource[json.backgroundColorSource];
                    return panel;
                };
                return FilledPanel;
            })(band.PagePanel);
            band.FilledPanel = FilledPanel;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var FlowPanel = (function (_super) {
                __extends(FlowPanel, _super);
                function FlowPanel(elementId, rect, orientation) {
                    var elements = [];
                    for (var _i = 3; _i < arguments.length; _i++) {
                        elements[_i - 3] = arguments[_i];
                    }
                    _super.apply(this, [elementId, rect].concat(elements));
                    this.attributes.orientation = orientation;
                }
                FlowPanel.prototype.toJson = function () {
                    var json = _super.prototype.toJson.call(this);
                    json.orientation = band.Orientation[this.attributes.orientation];
                    json.type = band.PageElementTypes[band.PageElementTypes.FLOW_PANEL];
                    return json;
                };
                FlowPanel.fromJson = function (json) {
                    var panel = band.PageElement.fromJson(json);
                    panel.attributes.orientation = band.Orientation[json.orientation];
                    return panel;
                };
                return FlowPanel;
            })(band.PagePanel);
            band.FlowPanel = FlowPanel;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var Icon = (function (_super) {
                __extends(Icon, _super);
                function Icon(elementId, rect, colorSource, color) {
                    var margins = { top: 0, left: 0, right: 0, bottom: 0 };
                    _super.call(this, elementId, rect, margins, band.HorizontalAlignment.CENTERED, band.VerticalAlignment.CENTERED, true);
                    this.attributes.colorSource = colorSource;
                    this.attributes.color = color;
                }
                Icon.prototype.toJson = function () {
                    var json = _super.prototype.toJson.call(this);
                    json.color = this.attributes.color;
                    json.colorSource = band.ElementColorSource[this.attributes.colorSource];
                    json.type = band.PageElementTypes[band.PageElementTypes.ICON];
                    return json;
                };
                Icon.fromJson = function (json) {
                    var icon = band.PageElement.fromJson(json);
                    icon.attributes.color = json.color;
                    icon.attributes.colorSource = band.ElementColorSource[json.colorSource];
                    return icon;
                };
                return Icon;
            })(band.PageElement);
            band.Icon = Icon;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var PageElement = (function () {
                function PageElement(elementId, rect, margins, horizontalAlignment, verticalAlignment, isVisible) {
                    this.attributes = { elementId: elementId, rect: rect, margins: margins, horizontalAlignment: horizontalAlignment, verticalAlignment: verticalAlignment, isVisible: isVisible };
                }
                PageElement.prototype.getAttributes = function () {
                    return this.attributes;
                };
                PageElement.prototype.setAttributes = function (attr) {
                    this.attributes = attr;
                };
                PageElement.prototype.isVisible = function () {
                    return this.attributes.isVisible;
                };
                PageElement.prototype.setVisible = function (visible) {
                    this.attributes.isVisible = visible;
                };
                PageElement.prototype.getId = function () {
                    return this.attributes.elementId;
                };
                PageElement.prototype.setId = function (id) {
                    this.attributes.elementId = id;
                };
                PageElement.prototype.toJson = function () {
                    return {
                        elementId: this.attributes.elementId,
                        rect: this.attributes.rect,
                        margins: this.attributes.margins,
                        horizontalAlignment: band.HorizontalAlignment[this.attributes.horizontalAlignment],
                        verticalAlignment: band.VerticalAlignment[this.attributes.verticalAlignment],
                        isVisible: this.attributes.isVisible,
                        type: band.PageElementTypes[band.PageElementTypes.PAGE_ELEMENT]
                    };
                };
                PageElement.prototype.toString = function () {
                    return JSON.stringify(this.toJson());
                };
                PageElement.fromJson = function (json) {
                    var element = new PageElement();
                    element.attributes = {
                        elementId: json.elementId,
                        rect: json.rect,
                        margins: json.margins,
                        horizontalAlignment: band.HorizontalAlignment[json.horizontalAlignment],
                        verticalAlignment: band.VerticalAlignment[json.verticalAlignment],
                        isVisible: json.isVisible
                    };
                    return element;
                };
                return PageElement;
            })();
            band.PageElement = PageElement;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var PagePanel = (function (_super) {
                __extends(PagePanel, _super);
                function PagePanel(elementId, rect) {
                    var elements = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        elements[_i - 2] = arguments[_i];
                    }
                    _super.call(this, elementId, rect, { top: 0, left: 0, right: 0, bottom: 0 }, band.HorizontalAlignment.CENTERED, band.VerticalAlignment.CENTERED, true);
                    this.elements = [];
                    this.addElements.apply(this, elements);
                }
                PagePanel.prototype.addElements = function () {
                    var elements = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        elements[_i - 0] = arguments[_i];
                    }
                    this.elements = this.elements.concat(elements);
                };
                PagePanel.prototype.getElements = function () {
                    return this.elements;
                };
                PagePanel.prototype.toJson = function () {
                    var elements = [];
                    for (var element in this.elements) {
                        elements.push(element.toJson());
                    }
                    var panel = _super.prototype.toJson.call(this);
                    panel.elements = elements;
                    panel.type = band.PageElementTypes[band.PageElementTypes.PAGE_PANEL];
                    return panel;
                };
                PagePanel.fromJson = function (json) {
                    var panel = new PagePanel(json.elementId, json.rect);
                    panel.attributes = {
                        elementId: json.elementId,
                        rect: json.rect,
                        margins: json.margins,
                        horizontalAlignment: band.HorizontalAlignment[json.horizontalAlignment],
                        verticalAlignment: band.VerticalAlignment[json.verticalAlignment],
                        isVisible: json.isVisible
                    };
                    var elements = [];
                    for (var _i = 0, _a = json.elements; _i < _a.length; _i++) {
                        var element = _a[_i];
                        switch (band.PageElementTypes[element.type]) {
                            case band.PageElementTypes.PAGE_ELEMENT:
                                elements.push(band.PageElement.fromJson(element));
                                break;
                            case band.PageElementTypes.BARCODE:
                                elements.push(band.Barcode.fromJson(element));
                                break;
                            case band.PageElementTypes.FILLED_BUTTON:
                                elements.push(band.FilledButton.fromJson(element));
                                break;
                            case band.PageElementTypes.PAGE_PANEL:
                                elements.push(PagePanel.fromJson(element));
                                break;
                            case band.PageElementTypes.FILLED_PANEL:
                                elements.push(band.FilledPanel.fromJson(element));
                                break;
                            case band.PageElementTypes.FLOW_PANEL:
                                elements.push(band.FlowPanel.fromJson(element));
                                break;
                            case band.PageElementTypes.ICON:
                                elements.push(band.Icon.fromJson(element));
                                break;
                            case band.PageElementTypes.SCROLL_FLOW_PANEL:
                                elements.push(band.ScrollFlowPanel.fromJson(element));
                                break;
                            case band.PageElementTypes.TEXT_BLOCK:
                                elements.push(band.TextBlock.fromJson(element));
                                break;
                            case band.PageElementTypes.TEXT_BUTTON:
                                elements.push(band.TextButton.fromJson(element));
                                break;
                            case band.PageElementTypes.WRAPPED_TEXT_BLOCK:
                                elements.push(band.WrappedTextBlock.fromJson(element));
                                break;
                            default:
                                elements.push(band.PageElement.fromJson(element));
                                break;
                        }
                    }
                    panel.elements = elements;
                    return panel;
                };
                return PagePanel;
            })(band.PageElement);
            band.PagePanel = PagePanel;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var ScrollFlowPanel = (function (_super) {
                __extends(ScrollFlowPanel, _super);
                function ScrollFlowPanel(elementId, rect, orientation, colorSource, color) {
                    var elements = [];
                    for (var _i = 5; _i < arguments.length; _i++) {
                        elements[_i - 5] = arguments[_i];
                    }
                    _super.apply(this, [elementId, rect].concat(elements));
                    this.attributes.color = color;
                    this.attributes.colorSource = colorSource;
                    this.attributes.orientation = orientation;
                }
                ScrollFlowPanel.prototype.toJson = function () {
                    var json = _super.prototype.toJson.call(this);
                    json.color = this.attributes.color;
                    json.colorSource = band.ElementColorSource[this.attributes.colorSource];
                    json.orientation = band.Orientation[this.attributes.orientation];
                    json.type = band.PageElementTypes[band.PageElementTypes.SCROLL_FLOW_PANEL];
                    return json;
                };
                ScrollFlowPanel.fromJson = function (json) {
                    var panel = band.PageElement.fromJson(json);
                    panel.attributes.color = json.color;
                    panel.attributes.colorSource = band.ElementColorSource[json.colorSource];
                    panel.attributes.orientation = band.Orientation[json.orientation];
                    return panel;
                };
                return ScrollFlowPanel;
            })(band.PagePanel);
            band.ScrollFlowPanel = ScrollFlowPanel;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var TextBlock = (function (_super) {
                __extends(TextBlock, _super);
                function TextBlock(elementId, rect, colorSource, color, font, baselineAlignment, baseline, autoWidth) {
                    var margins = { top: 0, left: 0, right: 0, bottom: 0 };
                    _super.call(this, elementId, rect, margins, band.HorizontalAlignment.CENTERED, band.VerticalAlignment.CENTERED, true);
                    this.attributes.colorSource = colorSource;
                    this.attributes.color = color;
                    this.attributes.font = font;
                    this.attributes.baselineAlignment = baselineAlignment;
                    this.attributes.baseline = baseline;
                    this.attributes.autoWidth = autoWidth;
                }
                TextBlock.prototype.toJson = function () {
                    var json = _super.prototype.toJson.call(this);
                    json.color = this.attributes.color;
                    json.colorSource = band.ElementColorSource[this.attributes.colorSource];
                    json.font = band.TextBlockFont[this.attributes.font];
                    json.baselineAlignment = band.TextBlockBaselineAlignment[this.attributes.baselineAlignment];
                    json.baseline = this.attributes.baseline;
                    json.autoWidth = this.attributes.autoWidth;
                    json.type = band.PageElementTypes[band.PageElementTypes.TEXT_BLOCK];
                    return json;
                };
                TextBlock.fromJson = function (json) {
                    var textBlock = band.PageElement.fromJson(json);
                    textBlock.attributes.color = json.color;
                    textBlock.attributes.colorSource = band.ElementColorSource[json.colorSource];
                    textBlock.attributes.font = band.TextBlockFont[json.font];
                    textBlock.attributes.baselineAlignment = band.TextBlockBaselineAlignment[json.baselineAlignment];
                    textBlock.attributes.baseline = json.baseline;
                    textBlock.attributes.autoWidth = json.autoWidth;
                    return textBlock;
                };
                return TextBlock;
            })(band.PageElement);
            band.TextBlock = TextBlock;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var TextButton = (function (_super) {
                __extends(TextButton, _super);
                function TextButton(elementId, rect, colorSource, color) {
                    var margins = { top: 0, left: 0, right: 0, bottom: 0 };
                    _super.call(this, elementId, rect, margins, band.HorizontalAlignment.CENTERED, band.VerticalAlignment.CENTERED, true);
                    this.attributes.colorSource = colorSource;
                    this.attributes.color = color;
                }
                TextButton.prototype.toJson = function () {
                    var json = _super.prototype.toJson.call(this);
                    json.color = this.attributes.color;
                    json.colorSource = band.ElementColorSource[this.attributes.colorSource];
                    json.type = band.PageElementTypes[band.PageElementTypes.TEXT_BUTTON];
                    return json;
                };
                TextButton.fromJson = function (json) {
                    var button = band.PageElement.fromJson(json);
                    button.attributes.color = json.color;
                    button.attributes.colorSource = band.ElementColorSource[json.colorSource];
                    return button;
                };
                return TextButton;
            })(band.PageElement);
            band.TextButton = TextButton;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var WrappedTextBlock = (function (_super) {
                __extends(WrappedTextBlock, _super);
                function WrappedTextBlock(elementId, rect, colorSource, color, font, autoHeight) {
                    var margins = { top: 0, left: 0, right: 0, bottom: 0 };
                    _super.call(this, elementId, rect, margins, band.HorizontalAlignment.CENTERED, band.VerticalAlignment.CENTERED, true);
                    this.attributes.colorSource = colorSource;
                    this.attributes.color = color;
                    this.attributes.font = font;
                    this.attributes.autoHeight = autoHeight;
                }
                WrappedTextBlock.prototype.toJson = function () {
                    var json = _super.prototype.toJson.call(this);
                    json.color = this.attributes.color;
                    json.colorSource = band.ElementColorSource[this.attributes.colorSource];
                    json.font = band.WrappedTextBlockFont[this.attributes.font];
                    json.autoHeight = this.attributes.autoHeight;
                    json.type = band.PageElementTypes[band.PageElementTypes.WRAPPED_TEXT_BLOCK];
                    return json;
                };
                WrappedTextBlock.fromJson = function (json) {
                    var textBlock = band.PageElement.fromJson(json);
                    textBlock.attributes.color = json.color;
                    textBlock.attributes.colorSource = band.ElementColorSource[json.colorSource];
                    textBlock.attributes.font = band.WrappedTextBlockFont[json.font];
                    textBlock.attributes.autoHeight = json.autoHeight;
                    return textBlock;
                };
                return WrappedTextBlock;
            })(band.PageElement);
            band.WrappedTextBlock = WrappedTextBlock;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandAccelerometerEvent = (function (_super) {
                __extends(BandAccelerometerEvent, _super);
                function BandAccelerometerEvent(eventObj) {
                    this.acceleration = eventObj.acceleration;
                    _super.call(this, eventObj);
                }
                BandAccelerometerEvent.prototype.getAccelerationX = function () {
                    return this.acceleration.x;
                };
                BandAccelerometerEvent.prototype.getAccelerationY = function () {
                    return this.acceleration.y;
                };
                BandAccelerometerEvent.prototype.getAccelerationZ = function () {
                    return this.acceleration.z;
                };
                return BandAccelerometerEvent;
            })(band.BandSensorEvent);
            band.BandAccelerometerEvent = BandAccelerometerEvent;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandCaloriesEvent = (function (_super) {
                __extends(BandCaloriesEvent, _super);
                function BandCaloriesEvent(eventObj) {
                    this.calories = eventObj.calories;
                    _super.call(this, eventObj);
                }
                BandCaloriesEvent.prototype.getCalories = function () {
                    return this.calories;
                };
                return BandCaloriesEvent;
            })(band.BandSensorEvent);
            band.BandCaloriesEvent = BandCaloriesEvent;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandContactEvent = (function (_super) {
                __extends(BandContactEvent, _super);
                function BandContactEvent(eventObj) {
                    this.contactState = band.BandContactState[eventObj.contactState];
                    _super.call(this, eventObj);
                }
                BandContactEvent.prototype.getContactState = function () {
                    return this.contactState;
                };
                return BandContactEvent;
            })(band.BandSensorEvent);
            band.BandContactEvent = BandContactEvent;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandDistanceEvent = (function (_super) {
                __extends(BandDistanceEvent, _super);
                function BandDistanceEvent(eventObj) {
                    this.motionType = band.MotionType[eventObj.motionType];
                    this.pace = eventObj.pace;
                    this.speed = eventObj.speed;
                    this.totalDistance = eventObj.totalDistance;
                    _super.call(this, eventObj);
                }
                BandDistanceEvent.prototype.getMotionType = function () {
                    return this.motionType;
                };
                BandDistanceEvent.prototype.getPace = function () {
                    return this.pace;
                };
                BandDistanceEvent.prototype.getSpeed = function () {
                    return this.speed;
                };
                BandDistanceEvent.prototype.getTotalDistance = function () {
                    return this.totalDistance;
                };
                return BandDistanceEvent;
            })(band.BandSensorEvent);
            band.BandDistanceEvent = BandDistanceEvent;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandGyroscopeEvent = (function (_super) {
                __extends(BandGyroscopeEvent, _super);
                function BandGyroscopeEvent(eventObj) {
                    this.acceleration = eventObj.acceleration;
                    this.angularVelocity = eventObj.angularVelocity;
                    _super.call(this, eventObj);
                }
                BandGyroscopeEvent.prototype.getAccelerationX = function () {
                    return this.acceleration.x;
                };
                BandGyroscopeEvent.prototype.getAccelerationY = function () {
                    return this.acceleration.y;
                };
                BandGyroscopeEvent.prototype.getAccelerationZ = function () {
                    return this.acceleration.z;
                };
                BandGyroscopeEvent.prototype.getAngularVelocityX = function () {
                    return this.angularVelocity.x;
                };
                BandGyroscopeEvent.prototype.getAngularVelocityY = function () {
                    return this.angularVelocity.y;
                };
                BandGyroscopeEvent.prototype.getAngularVelocityZ = function () {
                    return this.angularVelocity.z;
                };
                return BandGyroscopeEvent;
            })(band.BandSensorEvent);
            band.BandGyroscopeEvent = BandGyroscopeEvent;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandHeartRateEvent = (function (_super) {
                __extends(BandHeartRateEvent, _super);
                function BandHeartRateEvent(eventObj) {
                    this.heartRate = eventObj.heartRate;
                    this.quality = band.HeartRateQuality[eventObj.quality];
                    _super.call(this, eventObj);
                }
                BandHeartRateEvent.prototype.getHeartRate = function () {
                    return this.heartRate;
                };
                BandHeartRateEvent.prototype.getQuality = function () {
                    return this.quality;
                };
                return BandHeartRateEvent;
            })(band.BandSensorEvent);
            band.BandHeartRateEvent = BandHeartRateEvent;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandPedometerEvent = (function (_super) {
                __extends(BandPedometerEvent, _super);
                function BandPedometerEvent(eventObj) {
                    this.totalSteps = eventObj.totalSteps;
                    _super.call(this, eventObj);
                }
                BandPedometerEvent.prototype.getTotalSteps = function () {
                    return this.totalSteps;
                };
                return BandPedometerEvent;
            })(band.BandSensorEvent);
            band.BandPedometerEvent = BandPedometerEvent;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandSensorEvent = (function () {
                function BandSensorEvent(eventObj) {
                    this.timestamp = new Date(eventObj.timestamp);
                }
                return BandSensorEvent;
            })();
            band.BandSensorEvent = BandSensorEvent;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandSkinTemperatureEvent = (function (_super) {
                __extends(BandSkinTemperatureEvent, _super);
                function BandSkinTemperatureEvent(eventObj) {
                    this.skinTemperature = eventObj.skinTemperature;
                    _super.call(this, eventObj);
                }
                BandSkinTemperatureEvent.prototype.getSkinTemperature = function () {
                    return this.skinTemperature;
                };
                return BandSkinTemperatureEvent;
            })(band.BandSensorEvent);
            band.BandSkinTemperatureEvent = BandSkinTemperatureEvent;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
var cordova;
(function (cordova) {
    var plugins;
    (function (plugins) {
        var band;
        (function (band) {
            var BandUVEvent = (function (_super) {
                __extends(BandUVEvent, _super);
                function BandUVEvent(eventObj) {
                    this.uvIndexLevel = band.UVIndexLevel[eventObj.uvIndexLevel];
                    _super.call(this, eventObj);
                }
                BandUVEvent.prototype.getUVIndexLevel = function () {
                    return this.uvIndexLevel;
                };
                return BandUVEvent;
            })(band.BandSensorEvent);
            band.BandUVEvent = BandUVEvent;
        })(band = plugins.band || (plugins.band = {}));
    })(plugins = cordova.plugins || (cordova.plugins = {}));
})(cordova || (cordova = {}));
//# sourceMappingURL=band.js.map