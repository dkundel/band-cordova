/// <reference path="src/types/cordova.d.ts" />
var BandPlugin;
(function (BandPlugin) {
    var util;
    (function (util) {
        function extend(first, second) {
            var result = {};
            for (var id in first) {
                result[id] = first[id];
            }
            for (var id in second) {
                result[id] = second[id];
            }
            return result;
        }
        util.extend = extend;
    })(util = BandPlugin.util || (BandPlugin.util = {}));
})(BandPlugin || (BandPlugin = {}));
cordova.define('band', function (require, exports, module) {
    module.exports = BandPlugin;
});
/// <reference path="types/cordova.d.ts" />
var BandPlugin;
(function (BandPlugin) {
    var BandClient = (function () {
        function BandClient(data, index) {
            this.index = index;
            this.connectionState = BandPlugin.ConnectionState[data.connectionState];
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
            this.exec(success, error, 'getFirmwareVersion', []);
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
            this.exec(success, error, 'getHardwareVersion', []);
        };
        BandClient.prototype.getConnectionState = function () {
            return this.connectionState;
        };
        BandClient.prototype.getSensorManager = function () {
            return !this.sensorManager ? new BandPlugin.BandSensorManager(this) : this.sensorManager;
        };
        BandClient.prototype.getBandTileManager = function () {
            return !this.tileManager ? new BandPlugin.BandTileManager(this) : this.tileManager;
        };
        BandClient.prototype.getNotificationManager = function () {
            return !this.notificationManager ? new BandPlugin.BandNotificationManager(this) : this.notificationManager;
        };
        BandClient.prototype.getPersonalizationManager = function () {
            return !this.personalizationManager ? new BandPlugin.BandPersonalizationManager(this) : this.personalizationManager;
        };
        BandClient.prototype.exec = function (success, error, action, args) {
            cordova.exec(success, error, 'Band', action, [this.index.toString()].concat(args));
        };
        BandClient.prototype.connect = function (callback) {
            var success = function (state) {
                callback(null, BandPlugin.ConnectionState[state]);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, 'connect', []);
        };
        BandClient.prototype.disconnect = function (callback) {
            var success = function (state) {
                callback(null);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, 'disconnect', []);
        };
        BandClient.prototype.isConnected = function () {
            return this.connectionState === BandPlugin.ConnectionState.CONNECTED;
        };
        return BandClient;
    })();
    BandPlugin.BandClient = BandClient;
})(BandPlugin || (BandPlugin = {}));
/// <reference path="types/cordova.d.ts" />
var BandPlugin;
(function (BandPlugin) {
    var BandClientManager = (function () {
        function BandClientManager() {
        }
        BandClientManager.prototype.getPairedBands = function (callback) {
            var success = function (bandList) {
                var bandInfo = [];
                for (var _i = 0; _i < bandList.length; _i++) {
                    var band = bandList[_i];
                    bandInfo.push(new BandPlugin.BandInfo(band));
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
                callback(null, new BandPlugin.BandClient(bandClient, index));
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
    BandPlugin.BandClientManager = BandClientManager;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var BandManagerBase = (function () {
        function BandManagerBase(host) {
            this.host = host;
        }
        BandManagerBase.prototype.exec = function (success, error, action, args) {
            this.host.exec(success, error, action, args);
        };
        return BandManagerBase;
    })();
    BandPlugin.BandManagerBase = BandManagerBase;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
    BandPlugin.BandIcon = BandIcon;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
    BandPlugin.BandInfo = BandInfo;
})(BandPlugin || (BandPlugin = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BandPlugin;
(function (BandPlugin) {
    var BandNotificationManager = (function (_super) {
        __extends(BandNotificationManager, _super);
        function BandNotificationManager() {
            _super.apply(this, arguments);
        }
        BandNotificationManager.prototype.showDialog = function (tileUuid, dialogTitle, dialogBody, callback) {
            var success = function () {
                callback(null);
            };
            var error = function (errorMsg) {
                callback(errorMsg);
            };
            this.exec(success, error, 'showDialog', [tileUuid, dialogTitle, dialogBody]);
        };
        BandNotificationManager.prototype.sendMessage = function (tileUuid, messageTitle, messageBody, date, flags, callback) {
            var success = function () {
                callback(null);
            };
            var error = function (errorMsg) {
                callback(errorMsg);
            };
            this.exec(success, error, 'sendMessage', [tileUuid, messageTitle, messageBody, date.toISOString(), BandPlugin.MessageFlags[flags]]);
        };
        BandNotificationManager.prototype.vibrate = function (type, callback) {
            var success = function () {
                callback(null);
            };
            var error = function (errorMsg) {
                callback(errorMsg);
            };
            this.exec(success, error, 'vibrate', [BandPlugin.VibrationType[type]]);
        };
        return BandNotificationManager;
    })(BandPlugin.BandManagerBase);
    BandPlugin.BandNotificationManager = BandNotificationManager;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var BandPersonalizationManager = (function (_super) {
        __extends(BandPersonalizationManager, _super);
        function BandPersonalizationManager() {
            _super.apply(this, arguments);
        }
        BandPersonalizationManager.prototype.getMeTileImage = function (callback) {
            var success = function (iconData) {
                callback(null, BandPlugin.BandIcon.fromJson(iconData));
            };
            var error = function (errorMsg) {
                callback(errorMsg);
            };
            this.exec(success, error, 'getMeTileImage', []);
        };
        BandPersonalizationManager.prototype.getTheme = function (callback) {
            var success = function (themeData) {
                callback(null, BandPlugin.BandTheme.fromJson(themeData));
            };
            var error = function (errorMsg) {
                callback(errorMsg);
            };
            this.exec(success, error, 'getMeTileImage', []);
        };
        BandPersonalizationManager.prototype.setMeTileImage = function (icon, callback) {
            var _this = this;
            var success = function () {
                callback();
            };
            var error = function (errorMsg) {
                callback(errorMsg);
            };
            if (icon.getBase64().length === 0) {
                icon.toBandIcon(function () {
                    _this.exec(success, error, 'setMeTileImage', [icon.toString()]);
                });
            }
            else {
                this.exec(success, error, 'setMeTileImage', [icon.toString()]);
            }
        };
        BandPersonalizationManager.prototype.setTheme = function (theme, callback) {
            var success = function () {
                callback();
            };
            var error = function (errorMsg) {
                callback(errorMsg);
            };
            this.exec(success, error, 'setTheme', [theme.toString()]);
        };
        return BandPersonalizationManager;
    })(BandPlugin.BandManagerBase);
    BandPlugin.BandPersonalizationManager = BandPersonalizationManager;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var BandSensorManager = (function (_super) {
        __extends(BandSensorManager, _super);
        function BandSensorManager() {
            _super.apply(this, arguments);
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
                callback(null, new BandPlugin.BandAccelerometerEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, "registerAccelerometerEventListener", [reportingInterval.toString()]);
        };
        BandSensorManager.prototype.registerCaloriesEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandPlugin.BandCaloriesEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, "registerCaloriesEventListener", []);
        };
        BandSensorManager.prototype.registerContactEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandPlugin.BandContactEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, "registerContactEventListener", []);
        };
        BandSensorManager.prototype.registerDistanceEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandPlugin.BandDistanceEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, "registerDistanceEventListener", []);
        };
        BandSensorManager.prototype.registerGyroscopeEventListener = function (reportingInterval, callback) {
            var success = function (event) {
                callback(null, new BandPlugin.BandGyroscopeEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, "registerGyroscopeEventListener", [BandPlugin.SampleRate[reportingInterval]]);
        };
        BandSensorManager.prototype.registerHeartRateEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandPlugin.BandHeartRateEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, "registerHeartRateEventListener", []);
        };
        BandSensorManager.prototype.registerPedometerEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandPlugin.BandPedometerEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, "registerPedometerEventListener", []);
        };
        BandSensorManager.prototype.registerSkinTemperatureEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandPlugin.BandSkinTemperatureEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, "registerSkinTemperatureEventListener", []);
        };
        BandSensorManager.prototype.registerUVEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandPlugin.BandUVEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, "registerUVEventListener", []);
        };
        BandSensorManager.prototype.requestHeartRateConsent = function (callback) {
            var success = function (consentGiven) {
                callback(null, consentGiven);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, "requestHeartRateConsent", []);
        };
        BandSensorManager.prototype.unregisterAccelerometerEventListener = function (eventId) {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterAccelerometerEventListener", [eventId.toString()]);
        };
        BandSensorManager.prototype.unregisterAccelerometerEventListeners = function () {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterAccelerometerEventListeners", []);
        };
        BandSensorManager.prototype.unregisterAllListeners = function () {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterAllListeners", []);
        };
        BandSensorManager.prototype.unregisterCaloriesEventListener = function (eventId) {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterCaloriesEventListener", [eventId.toString()]);
        };
        BandSensorManager.prototype.unregisterCaloriesEventListeners = function () {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterCaloriesEventListeners", []);
        };
        BandSensorManager.prototype.unregisterContactEventListener = function (eventId) {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterContactEventListener", [eventId.toString()]);
        };
        BandSensorManager.prototype.unregisterContactEventListeners = function () {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterContactEventListeners", []);
        };
        BandSensorManager.prototype.unregisterDistanceEventListener = function (eventId) {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterDistanceEventListener", [eventId.toString()]);
        };
        BandSensorManager.prototype.unregisterDistanceEventListeners = function () {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterDistanceEventListeners", []);
        };
        BandSensorManager.prototype.unregisterGyroscopeEventListener = function (eventId) {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterGyroscopeEventListener", [eventId.toString()]);
        };
        BandSensorManager.prototype.unregisterGyroscopeEventListeners = function () {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterGyroscopeEventListeners", []);
        };
        BandSensorManager.prototype.unregisterHeartRateEventListener = function (eventId) {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterHeartRateEventListener", [eventId.toString()]);
        };
        BandSensorManager.prototype.unregisterHeartRateEventListeners = function () {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterHeartRateEventListeners", []);
        };
        BandSensorManager.prototype.unregisterPedometerEventListener = function (eventId) {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterPedometerEventListener", [eventId.toString()]);
        };
        BandSensorManager.prototype.unregisterPedometerEventListeners = function () {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterPedometerEventListeners", []);
        };
        BandSensorManager.prototype.unregisterSkinTemperatureEventListener = function (eventId) {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterSkinTemperatureEventListener", [eventId.toString()]);
        };
        BandSensorManager.prototype.unregisterSkinTemperatureEventListeners = function () {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterSkinTemperatureEventListeners", []);
        };
        BandSensorManager.prototype.unregisterUVEventListener = function (eventId) {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterUVEventListener", [eventId.toString()]);
        };
        BandSensorManager.prototype.unregisterUVEventListeners = function () {
            this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterUVEventListeners", []);
        };
        return BandSensorManager;
    })(BandPlugin.BandManagerBase);
    BandPlugin.BandSensorManager = BandSensorManager;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
    BandPlugin.BandTheme = BandTheme;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var BandTile = (function () {
        function BandTile(json) {
            var icons = [];
            for (var _i = 0, _a = json.pageIcons; _i < _a.length; _i++) {
                var icon = _a[_i];
                icons.push(BandPlugin.BandIcon.fromJson(icon));
            }
            var layouts = [];
            for (var _b = 0, _c = json.pageLayouts; _b < _c.length; _b++) {
                var layout = _c[_b];
                layouts.push(BandPlugin.PageLayout.fromJson(layout));
            }
            this.uuid = json.uuid;
            this.pageIcons = icons;
            this.pageLayouts = layouts;
            this.theme = BandPlugin.BandTheme.fromJson(json.theme);
            this.tileIcon = BandPlugin.BandIcon.fromJson(json.tileIcon);
            this.tileName = json.tileName;
            this.tileSmallIcon = BandPlugin.BandIcon.fromJson(json.tileSmallIcon);
            this.badgingEnabled = json.badgingEnabled;
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
                tileName: this.tileName,
                tileSmallIcon: this.tileSmallIcon.toJson(),
                badgingEnabled: this.badgingEnabled
            };
        };
        BandTile.prototype.toString = function () {
            return JSON.stringify(this.toJson());
        };
        return BandTile;
    })();
    BandPlugin.BandTile = BandTile;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
            this.tile.badgingEnabled = badgingEnabled;
            this.tile.tileSmallIcon = icon.toJson();
            return this;
        };
        BandTileBuilder.prototype.build = function () {
            return new BandPlugin.BandTile(this.tile);
        };
        return BandTileBuilder;
    })();
    BandPlugin.BandTileBuilder = BandTileBuilder;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var BandTileManager = (function (_super) {
        __extends(BandTileManager, _super);
        function BandTileManager() {
            _super.apply(this, arguments);
        }
        BandTileManager.prototype.addTitle = function (tile, callback) {
            var success = function () {
                callback(null);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, 'addTile', [tile.toString()]);
        };
        BandTileManager.prototype.getRemainingTileCapacity = function (callback) {
            var success = function (capacity) {
                callback(null, capacity);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, 'getRemainingTileCapacity', []);
        };
        BandTileManager.prototype.getTiles = function (callback) {
            var success = function (tiles) {
                var bandTiles = [];
                for (var _i = 0; _i < tiles.length; _i++) {
                    var tile = tiles[_i];
                    bandTiles.push(new BandPlugin.BandTile(tile));
                }
                callback(null, bandTiles);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, 'getTiles', []);
        };
        BandTileManager.prototype.removePages = function (tileId, callback) {
            var success = function () {
                callback(null);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, 'removePages', [tileId]);
        };
        BandTileManager.prototype.removeTile = function (tile, callback) {
            var success = function () {
                callback(null);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, 'removeTile', [tile.uuid]);
        };
        BandTileManager.prototype.setPages = function (tileId, pageData, callback) {
            var success = function () {
                callback(null);
            };
            var error = function (error) {
                callback(error);
            };
            this.exec(success, error, 'setPages', [tileId, pageData.toString()]);
        };
        return BandTileManager;
    })(BandPlugin.BandManagerBase);
    BandPlugin.BandTileManager = BandTileManager;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    (function (ConnectionState) {
        ConnectionState[ConnectionState["BINDING"] = 0] = "BINDING";
        ConnectionState[ConnectionState["BOUND"] = 1] = "BOUND";
        ConnectionState[ConnectionState["CONNECTED"] = 2] = "CONNECTED";
        ConnectionState[ConnectionState["DISPOSED"] = 3] = "DISPOSED";
        ConnectionState[ConnectionState["INVALID_SDK_VERSION"] = 4] = "INVALID_SDK_VERSION";
        ConnectionState[ConnectionState["UNBINDING"] = 5] = "UNBINDING";
        ConnectionState[ConnectionState["UNBOUND"] = 6] = "UNBOUND";
    })(BandPlugin.ConnectionState || (BandPlugin.ConnectionState = {}));
    var ConnectionState = BandPlugin.ConnectionState;
    (function (UserConsent) {
        UserConsent[UserConsent["GRANTED"] = 0] = "GRANTED";
        UserConsent[UserConsent["DECLINED"] = 1] = "DECLINED";
        UserConsent[UserConsent["UNSPECEFIED"] = 2] = "UNSPECEFIED";
    })(BandPlugin.UserConsent || (BandPlugin.UserConsent = {}));
    var UserConsent = BandPlugin.UserConsent;
    (function (MessageFlags) {
        MessageFlags[MessageFlags["SHOW_DIALOG"] = 0] = "SHOW_DIALOG";
        MessageFlags[MessageFlags["NONE"] = 1] = "NONE";
    })(BandPlugin.MessageFlags || (BandPlugin.MessageFlags = {}));
    var MessageFlags = BandPlugin.MessageFlags;
    (function (HorizontalAlignment) {
        HorizontalAlignment[HorizontalAlignment["LEFT"] = 0] = "LEFT";
        HorizontalAlignment[HorizontalAlignment["RIGHT"] = 1] = "RIGHT";
        HorizontalAlignment[HorizontalAlignment["CENTERED"] = 2] = "CENTERED";
    })(BandPlugin.HorizontalAlignment || (BandPlugin.HorizontalAlignment = {}));
    var HorizontalAlignment = BandPlugin.HorizontalAlignment;
    (function (VerticalAlignment) {
        VerticalAlignment[VerticalAlignment["TOP"] = 0] = "TOP";
        VerticalAlignment[VerticalAlignment["BOTTOM"] = 1] = "BOTTOM";
        VerticalAlignment[VerticalAlignment["CENTERED"] = 2] = "CENTERED";
    })(BandPlugin.VerticalAlignment || (BandPlugin.VerticalAlignment = {}));
    var VerticalAlignment = BandPlugin.VerticalAlignment;
    (function (Color) {
    })(BandPlugin.Color || (BandPlugin.Color = {}));
    var Color = BandPlugin.Color;
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
    })(BandPlugin.ElementColorSource || (BandPlugin.ElementColorSource = {}));
    var ElementColorSource = BandPlugin.ElementColorSource;
    (function (WrappedTextBlockFont) {
        WrappedTextBlockFont[WrappedTextBlockFont["SMALL"] = 0] = "SMALL";
        WrappedTextBlockFont[WrappedTextBlockFont["MEDIUM"] = 1] = "MEDIUM";
    })(BandPlugin.WrappedTextBlockFont || (BandPlugin.WrappedTextBlockFont = {}));
    var WrappedTextBlockFont = BandPlugin.WrappedTextBlockFont;
    (function (TextBlockFont) {
        TextBlockFont[TextBlockFont["EXTRA_LARGE_NUMBERS"] = 0] = "EXTRA_LARGE_NUMBERS";
        TextBlockFont[TextBlockFont["EXTRA_LARGE_NUMBERS_BOLD"] = 1] = "EXTRA_LARGE_NUMBERS_BOLD";
        TextBlockFont[TextBlockFont["LARGE"] = 2] = "LARGE";
        TextBlockFont[TextBlockFont["MEDIUM"] = 3] = "MEDIUM";
        TextBlockFont[TextBlockFont["SMALL"] = 4] = "SMALL";
    })(BandPlugin.TextBlockFont || (BandPlugin.TextBlockFont = {}));
    var TextBlockFont = BandPlugin.TextBlockFont;
    (function (TextBlockBaselineAlignment) {
        TextBlockBaselineAlignment[TextBlockBaselineAlignment["AUTOMATIC"] = 0] = "AUTOMATIC";
        TextBlockBaselineAlignment[TextBlockBaselineAlignment["RELATIVE"] = 1] = "RELATIVE";
        TextBlockBaselineAlignment[TextBlockBaselineAlignment["ABSOLUTE"] = 2] = "ABSOLUTE";
    })(BandPlugin.TextBlockBaselineAlignment || (BandPlugin.TextBlockBaselineAlignment = {}));
    var TextBlockBaselineAlignment = BandPlugin.TextBlockBaselineAlignment;
    (function (Orientation) {
        Orientation[Orientation["HORIZONTAL"] = 0] = "HORIZONTAL";
        Orientation[Orientation["VERTICAL"] = 1] = "VERTICAL";
    })(BandPlugin.Orientation || (BandPlugin.Orientation = {}));
    var Orientation = BandPlugin.Orientation;
    (function (BandContactState) {
        BandContactState[BandContactState["NOT_WORN"] = 0] = "NOT_WORN";
        BandContactState[BandContactState["UNKNOWN"] = 1] = "UNKNOWN";
        BandContactState[BandContactState["WORN"] = 2] = "WORN";
    })(BandPlugin.BandContactState || (BandPlugin.BandContactState = {}));
    var BandContactState = BandPlugin.BandContactState;
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
    })(BandPlugin.BandErrorType || (BandPlugin.BandErrorType = {}));
    var BandErrorType = BandPlugin.BandErrorType;
    (function (BarcodeType) {
        BarcodeType[BarcodeType["CODE39"] = 0] = "CODE39";
        BarcodeType[BarcodeType["PDF417"] = 1] = "PDF417";
    })(BandPlugin.BarcodeType || (BandPlugin.BarcodeType = {}));
    var BarcodeType = BandPlugin.BarcodeType;
    (function (HeartRateQuality) {
        HeartRateQuality[HeartRateQuality["AQUIRING"] = 0] = "AQUIRING";
        HeartRateQuality[HeartRateQuality["LOCKED"] = 1] = "LOCKED";
    })(BandPlugin.HeartRateQuality || (BandPlugin.HeartRateQuality = {}));
    var HeartRateQuality = BandPlugin.HeartRateQuality;
    (function (MotionType) {
        MotionType[MotionType["IDLE"] = 0] = "IDLE";
        MotionType[MotionType["JOGGING"] = 1] = "JOGGING";
        MotionType[MotionType["RUNNING"] = 2] = "RUNNING";
        MotionType[MotionType["UNKNOWN"] = 3] = "UNKNOWN";
        MotionType[MotionType["WALKING"] = 4] = "WALKING";
    })(BandPlugin.MotionType || (BandPlugin.MotionType = {}));
    var MotionType = BandPlugin.MotionType;
    (function (SampleRate) {
        SampleRate[SampleRate["MS128"] = 0] = "MS128";
        SampleRate[SampleRate["MS16"] = 1] = "MS16";
        SampleRate[SampleRate["MS32"] = 2] = "MS32";
    })(BandPlugin.SampleRate || (BandPlugin.SampleRate = {}));
    var SampleRate = BandPlugin.SampleRate;
    (function (UVIndexLevel) {
        UVIndexLevel[UVIndexLevel["HIGH"] = 0] = "HIGH";
        UVIndexLevel[UVIndexLevel["LOW"] = 1] = "LOW";
        UVIndexLevel[UVIndexLevel["MEDIUM"] = 2] = "MEDIUM";
        UVIndexLevel[UVIndexLevel["NONE"] = 3] = "NONE";
        UVIndexLevel[UVIndexLevel["VERY_HIGH"] = 4] = "VERY_HIGH";
    })(BandPlugin.UVIndexLevel || (BandPlugin.UVIndexLevel = {}));
    var UVIndexLevel = BandPlugin.UVIndexLevel;
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
    })(BandPlugin.VibrationType || (BandPlugin.VibrationType = {}));
    var VibrationType = BandPlugin.VibrationType;
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
    })(BandPlugin.PageElementTypes || (BandPlugin.PageElementTypes = {}));
    var PageElementTypes = BandPlugin.PageElementTypes;
    (function (PageElementDataTypes) {
        PageElementDataTypes[PageElementDataTypes["BARCODE_DATA"] = 0] = "BARCODE_DATA";
        PageElementDataTypes[PageElementDataTypes["FILLED_BUTTON_DATA"] = 1] = "FILLED_BUTTON_DATA";
        PageElementDataTypes[PageElementDataTypes["ICON_DATA"] = 2] = "ICON_DATA";
        PageElementDataTypes[PageElementDataTypes["PAGE_ELEMENT_DATA"] = 3] = "PAGE_ELEMENT_DATA";
        PageElementDataTypes[PageElementDataTypes["TEXT_BLOCK_DATA"] = 4] = "TEXT_BLOCK_DATA";
        PageElementDataTypes[PageElementDataTypes["WRAPPED_TEXT_BLOCK_DATA"] = 5] = "WRAPPED_TEXT_BLOCK_DATA";
    })(BandPlugin.PageElementDataTypes || (BandPlugin.PageElementDataTypes = {}));
    var PageElementDataTypes = BandPlugin.PageElementDataTypes;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
                switch (value.type) {
                    case BandPlugin.PageElementDataTypes.BARCODE_DATA:
                        data.update(BandPlugin.BarcodeData.fromJson(value));
                        break;
                    case BandPlugin.PageElementDataTypes.FILLED_BUTTON_DATA:
                        data.update(BandPlugin.FilledButtonData.fromJson(value));
                        break;
                    case BandPlugin.PageElementDataTypes.ICON_DATA:
                        data.update(BandPlugin.IconData.fromJson(value));
                        break;
                    case BandPlugin.PageElementDataTypes.TEXT_BLOCK_DATA:
                        data.update(BandPlugin.TextBlockData.fromJson(value));
                        break;
                    case BandPlugin.PageElementDataTypes.WRAPPED_TEXT_BLOCK_DATA:
                        data.update(BandPlugin.WrappedTextBlockData.fromJson(value));
                        break;
                    case BandPlugin.PageElementDataTypes.PAGE_ELEMENT_DATA:
                    default:
                        data.update(BandPlugin.PageElementData.fromJson(value));
                        break;
                }
            }
            return data;
        };
        return PageData;
    })();
    BandPlugin.PageData = PageData;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
            switch (json.root.type) {
                case BandPlugin.PageElementTypes.FILLED_PANEL:
                    root = BandPlugin.FilledPanel.fromJson(json.root);
                    break;
                case BandPlugin.PageElementTypes.FLOW_PANEL:
                    root = BandPlugin.FlowPanel.fromJson(json.root);
                    break;
                case BandPlugin.PageElementTypes.SCROLL_FLOW_PANEL:
                    root = BandPlugin.ScrollFlowPanel.fromJson(json.root);
                    break;
                case BandPlugin.PageElementTypes.PAGE_PANEL:
                default:
                    root = BandPlugin.PagePanel.fromJson(json.root);
                    break;
            }
            var layout = new PageLayout(root);
            return layout;
        };
        return PageLayout;
    })();
    BandPlugin.PageLayout = PageLayout;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
                type: BandPlugin.PageElementDataTypes.PAGE_ELEMENT_DATA
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
    BandPlugin.PageElementData = PageElementData;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
            data.barcodeType = this.barcodeType;
            data.type = BandPlugin.PageElementDataTypes.BARCODE_DATA;
            return data;
        };
        BarcodeData.fromJson = function (json) {
            var data = _super.fromJson.call(this, json);
            data.barcodeText = json.barcodeText;
            data.barcodeType = BarcodeData[json.barcodeType];
            return data;
        };
        return BarcodeData;
    })(BandPlugin.PageElementData);
    BandPlugin.BarcodeData = BarcodeData;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
            data.type = BandPlugin.PageElementDataTypes.FILLED_BUTTON_DATA;
            return data;
        };
        FilledButtonData.fromJson = function (json) {
            var data = _super.fromJson.call(this, json);
            data.pressedColor = json.color;
            return data;
        };
        return FilledButtonData;
    })(BandPlugin.PageElementData);
    BandPlugin.FilledButtonData = FilledButtonData;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
            data.type = BandPlugin.PageElementDataTypes.ICON_DATA;
            return data;
        };
        IconData.fromJson = function (json) {
            var data = _super.fromJson.call(this, json);
            data.iconIndex = json.iconIndex;
            return data;
        };
        return IconData;
    })(BandPlugin.PageElementData);
    BandPlugin.IconData = IconData;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
            data.type = BandPlugin.PageElementDataTypes.TEXT_BLOCK_DATA;
            return data;
        };
        TextBlockData.fromJson = function (json) {
            var data = _super.fromJson.call(this, json);
            data.text = json.text;
            return data;
        };
        return TextBlockData;
    })(BandPlugin.PageElementData);
    BandPlugin.TextBlockData = TextBlockData;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
            data.type = BandPlugin.PageElementDataTypes.WRAPPED_TEXT_BLOCK_DATA;
            return data;
        };
        WrappedTextBlockData.fromJson = function (json) {
            var data = _super.fromJson.call(this, json);
            data.text = json.text;
            return data;
        };
        return WrappedTextBlockData;
    })(BandPlugin.PageElementData);
    BandPlugin.WrappedTextBlockData = WrappedTextBlockData;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
                horizontalAlignment: this.attributes.horizontalAlignment,
                verticalAlignment: this.attributes.verticalAlignment,
                isVisible: this.attributes.isVisible,
                type: BandPlugin.PageElementTypes.PAGE_ELEMENT
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
                horizontalAlignment: json.horizontalAlignment,
                verticalAlignment: json.verticalAlignment,
                isVisible: json.isVisible
            };
            return element;
        };
        return PageElement;
    })();
    BandPlugin.PageElement = PageElement;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var PagePanel = (function (_super) {
        __extends(PagePanel, _super);
        function PagePanel(elementId, rect) {
            var elements = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                elements[_i - 2] = arguments[_i];
            }
            _super.call(this, elementId, rect, { top: 0, left: 0, right: 0, bottom: 0 }, BandPlugin.HorizontalAlignment.CENTERED, BandPlugin.VerticalAlignment.CENTERED, true);
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
            return BandPlugin.util.extend(_super.prototype.toJson.call(this), {
                elements: elements,
                type: BandPlugin.PageElementTypes.PAGE_PANEL
            });
        };
        PagePanel.fromJson = function (json) {
            var panel = new PagePanel(json.elementId, json.rect);
            panel.attributes = {
                elementId: json.elementId,
                rect: json.rect,
                margins: json.margins,
                horizontalAlignment: json.horizontalAlignment,
                verticalAlignment: json.verticalAlignment,
                isVisible: json.isVisible
            };
            var elements = [];
            for (var _i = 0, _a = json.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                switch (element.type) {
                    case BandPlugin.PageElementTypes.PAGE_ELEMENT:
                        elements.push(BandPlugin.PageElement.fromJson(element));
                        break;
                    case BandPlugin.PageElementTypes.BARCODE:
                        elements.push(BandPlugin.Barcode.fromJson(element));
                        break;
                    case BandPlugin.PageElementTypes.FILLED_BUTTON:
                        elements.push(BandPlugin.FilledButton.fromJson(element));
                        break;
                    case BandPlugin.PageElementTypes.PAGE_PANEL:
                        elements.push(PagePanel.fromJson(element));
                        break;
                    case BandPlugin.PageElementTypes.FILLED_PANEL:
                        elements.push(BandPlugin.FilledPanel.fromJson(element));
                        break;
                    case BandPlugin.PageElementTypes.FLOW_PANEL:
                        elements.push(BandPlugin.FlowPanel.fromJson(element));
                        break;
                    case BandPlugin.PageElementTypes.ICON:
                        elements.push(BandPlugin.Icon.fromJson(element));
                        break;
                    case BandPlugin.PageElementTypes.SCROLL_FLOW_PANEL:
                        elements.push(BandPlugin.ScrollFlowPanel.fromJson(element));
                        break;
                    case BandPlugin.PageElementTypes.TEXT_BLOCK:
                        elements.push(BandPlugin.TextBlock.fromJson(element));
                        break;
                    case BandPlugin.PageElementTypes.TEXT_BUTTON:
                        elements.push(BandPlugin.TextButton.fromJson(element));
                        break;
                    case BandPlugin.PageElementTypes.WRAPPED_TEXT_BLOCK:
                        elements.push(BandPlugin.WrappedTextBlock.fromJson(element));
                        break;
                    default:
                        elements.push(BandPlugin.PageElement.fromJson(element));
                        break;
                }
            }
            panel.elements = elements;
            return panel;
        };
        return PagePanel;
    })(BandPlugin.PageElement);
    BandPlugin.PagePanel = PagePanel;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var Barcode = (function (_super) {
        __extends(Barcode, _super);
        function Barcode(elementId, rect, type) {
            var margins = { top: 0, left: 0, right: 0, bottom: 0 };
            _super.call(this, elementId, rect, margins, BandPlugin.HorizontalAlignment.CENTERED, BandPlugin.VerticalAlignment.CENTERED, true);
        }
        Barcode.prototype.toJson = function () {
            return BandPlugin.util.extend(_super.prototype.toJson.call(this), {
                barcodeType: this.attributes.barcodeType,
                type: BandPlugin.PageElementTypes.BARCODE
            });
        };
        Barcode.fromJson = function (json) {
            var barcode = BandPlugin.PageElement.fromJson(json);
            barcode.attributes.barcodeType = json.barcodeType;
            return barcode;
        };
        return Barcode;
    })(BandPlugin.PageElement);
    BandPlugin.Barcode = Barcode;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var FilledButton = (function (_super) {
        __extends(FilledButton, _super);
        function FilledButton(elementId, rect, colorSource, color) {
            var margins = { top: 0, left: 0, right: 0, bottom: 0 };
            _super.call(this, elementId, rect, margins, BandPlugin.HorizontalAlignment.CENTERED, BandPlugin.VerticalAlignment.CENTERED, true);
            this.attributes.colorSource = colorSource;
            this.attributes.color = color;
        }
        FilledButton.prototype.toJson = function () {
            return BandPlugin.util.extend(_super.prototype.toJson.call(this), {
                color: this.attributes.color,
                colorSource: this.attributes.colorSource,
                type: BandPlugin.PageElementTypes.FILLED_BUTTON
            });
        };
        FilledButton.fromJson = function (json) {
            var button = BandPlugin.PageElement.fromJson(json);
            button.attributes.color = json.color;
            button.attributes.colorSource = json.colorSource;
            return button;
        };
        return FilledButton;
    })(BandPlugin.PageElement);
    BandPlugin.FilledButton = FilledButton;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
            return BandPlugin.util.extend(_super.prototype.toJson.call(this), {
                backgroundColor: this.attributes.backgroundColor,
                backgroundColorSource: this.attributes.backgroundColorSource,
                type: BandPlugin.PageElementTypes.FILLED_PANEL
            });
        };
        FilledPanel.fromJson = function (json) {
            var panel = BandPlugin.PageElement.fromJson(json);
            panel.attributes.backgroundColor = json.backgroundColor;
            panel.attributes.backgroundColorSource = json.backgroundColorSource;
            return panel;
        };
        return FilledPanel;
    })(BandPlugin.PagePanel);
    BandPlugin.FilledPanel = FilledPanel;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
            return BandPlugin.util.extend(_super.prototype.toJson.call(this), {
                orientation: this.attributes.orientation,
                type: BandPlugin.PageElementTypes.FLOW_PANEL
            });
        };
        FlowPanel.fromJson = function (json) {
            var panel = BandPlugin.PageElement.fromJson(json);
            panel.attributes.orientation = json.orientation;
            return panel;
        };
        return FlowPanel;
    })(BandPlugin.PagePanel);
    BandPlugin.FlowPanel = FlowPanel;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var Icon = (function (_super) {
        __extends(Icon, _super);
        function Icon(elementId, rect, colorSource, color) {
            var margins = { top: 0, left: 0, right: 0, bottom: 0 };
            _super.call(this, elementId, rect, margins, BandPlugin.HorizontalAlignment.CENTERED, BandPlugin.VerticalAlignment.CENTERED, true);
            this.attributes.colorSource = colorSource;
            this.attributes.color = color;
        }
        Icon.prototype.toJson = function () {
            return BandPlugin.util.extend(_super.prototype.toJson.call(this), {
                color: this.attributes.color,
                colorSource: this.attributes.colorSource,
                type: BandPlugin.PageElementTypes.ICON
            });
        };
        Icon.fromJson = function (json) {
            var icon = BandPlugin.PageElement.fromJson(json);
            icon.attributes.color = json.color;
            icon.attributes.colorSource = json.colorSource;
            return icon;
        };
        return Icon;
    })(BandPlugin.PageElement);
    BandPlugin.Icon = Icon;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var ScrollFlowPanel = (function (_super) {
        __extends(ScrollFlowPanel, _super);
        function ScrollFlowPanel(elementId, rect, orientation) {
            var elements = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                elements[_i - 3] = arguments[_i];
            }
            _super.apply(this, [elementId, rect].concat(elements));
            this.attributes.orientation = orientation;
        }
        ScrollFlowPanel.prototype.toJson = function () {
            return BandPlugin.util.extend(_super.prototype.toJson.call(this), {
                orientation: this.attributes.orientation,
                type: BandPlugin.PageElementTypes.SCROLL_FLOW_PANEL
            });
        };
        ScrollFlowPanel.fromJson = function (json) {
            var panel = BandPlugin.PageElement.fromJson(json);
            panel.attributes.orientation = json.orientation;
            return panel;
        };
        return ScrollFlowPanel;
    })(BandPlugin.PagePanel);
    BandPlugin.ScrollFlowPanel = ScrollFlowPanel;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var TextBlock = (function (_super) {
        __extends(TextBlock, _super);
        function TextBlock(elementId, rect, colorSource, color, font, baselineAlignment, baseline, autoWidth) {
            var margins = { top: 0, left: 0, right: 0, bottom: 0 };
            _super.call(this, elementId, rect, margins, BandPlugin.HorizontalAlignment.CENTERED, BandPlugin.VerticalAlignment.CENTERED, true);
            this.attributes.colorSource = colorSource;
            this.attributes.color = color;
            this.attributes.font = font;
            this.attributes.baselineAlignment = baselineAlignment;
            this.attributes.baseline = baseline;
            this.attributes.autoWidth = autoWidth;
        }
        TextBlock.prototype.toJson = function () {
            return BandPlugin.util.extend(_super.prototype.toJson.call(this), {
                color: this.attributes.color,
                colorSource: this.attributes.colorSource,
                font: this.attributes.font,
                baselineAlignment: this.attributes.baselineAlignment,
                baseline: this.attributes.baseline,
                autoWidth: this.attributes.autoWidth,
                type: BandPlugin.PageElementTypes.TEXT_BLOCK
            });
        };
        TextBlock.fromJson = function (json) {
            var textBlock = BandPlugin.PageElement.fromJson(json);
            textBlock.attributes.color = json.color;
            textBlock.attributes.colorSource = json.colorSource;
            textBlock.attributes.font = json.font;
            textBlock.attributes.baselineAlignment = json.baselineAlignment;
            textBlock.attributes.baseline = json.baseline;
            textBlock.attributes.autoWidth = json.autoWidth;
            return textBlock;
        };
        return TextBlock;
    })(BandPlugin.PageElement);
    BandPlugin.TextBlock = TextBlock;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var TextButton = (function (_super) {
        __extends(TextButton, _super);
        function TextButton(elementId, rect, colorSource, color) {
            var margins = { top: 0, left: 0, right: 0, bottom: 0 };
            _super.call(this, elementId, rect, margins, BandPlugin.HorizontalAlignment.CENTERED, BandPlugin.VerticalAlignment.CENTERED, true);
            this.attributes.colorSource = colorSource;
            this.attributes.color = color;
        }
        TextButton.prototype.toJson = function () {
            return BandPlugin.util.extend(_super.prototype.toJson.call(this), {
                color: this.attributes.color,
                colorSource: this.attributes.colorSource,
                type: BandPlugin.PageElementTypes.TEXT_BUTTON
            });
        };
        TextButton.fromJson = function (json) {
            var button = BandPlugin.PageElement.fromJson(json);
            button.attributes.color = json.color;
            button.attributes.colorSource = json.colorSource;
            return button;
        };
        return TextButton;
    })(BandPlugin.PageElement);
    BandPlugin.TextButton = TextButton;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var WrappedTextBlock = (function (_super) {
        __extends(WrappedTextBlock, _super);
        function WrappedTextBlock(elementId, rect, colorSource, color, font, autoHeight) {
            var margins = { top: 0, left: 0, right: 0, bottom: 0 };
            _super.call(this, elementId, rect, margins, BandPlugin.HorizontalAlignment.CENTERED, BandPlugin.VerticalAlignment.CENTERED, true);
            this.attributes.colorSource = colorSource;
            this.attributes.color = color;
            this.attributes.font = font;
            this.attributes.autoHeight = autoHeight;
        }
        WrappedTextBlock.prototype.toJson = function () {
            return BandPlugin.util.extend(_super.prototype.toJson.call(this), {
                color: this.attributes.color,
                colorSource: this.attributes.colorSource,
                font: this.attributes.font,
                autoHeight: this.attributes.autoHeight,
                type: BandPlugin.PageElementTypes.WRAPPED_TEXT_BLOCK
            });
        };
        WrappedTextBlock.fromJson = function (json) {
            var textBlock = BandPlugin.PageElement.fromJson(json);
            textBlock.attributes.color = json.color;
            textBlock.attributes.colorSource = json.colorSource;
            textBlock.attributes.font = json.font;
            textBlock.attributes.autoHeight = json.autoHeight;
            return textBlock;
        };
        return WrappedTextBlock;
    })(BandPlugin.PageElement);
    BandPlugin.WrappedTextBlock = WrappedTextBlock;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var BandSensorEvent = (function () {
        function BandSensorEvent(eventObj) {
            this.timestamp = new Date(eventObj.timestamp);
        }
        return BandSensorEvent;
    })();
    BandPlugin.BandSensorEvent = BandSensorEvent;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
    })(BandPlugin.BandSensorEvent);
    BandPlugin.BandAccelerometerEvent = BandAccelerometerEvent;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
    })(BandPlugin.BandSensorEvent);
    BandPlugin.BandCaloriesEvent = BandCaloriesEvent;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var BandContactEvent = (function (_super) {
        __extends(BandContactEvent, _super);
        function BandContactEvent(eventObj) {
            this.contactState = eventObj.contactState;
            _super.call(this, eventObj);
        }
        BandContactEvent.prototype.getContactState = function () {
            return this.contactState;
        };
        return BandContactEvent;
    })(BandPlugin.BandSensorEvent);
    BandPlugin.BandContactEvent = BandContactEvent;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var BandDistanceEvent = (function (_super) {
        __extends(BandDistanceEvent, _super);
        function BandDistanceEvent(eventObj) {
            this.motionType = BandPlugin.MotionType[eventObj.motionType];
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
    })(BandPlugin.BandSensorEvent);
    BandPlugin.BandDistanceEvent = BandDistanceEvent;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
    })(BandPlugin.BandSensorEvent);
    BandPlugin.BandGyroscopeEvent = BandGyroscopeEvent;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var BandHeartRateEvent = (function (_super) {
        __extends(BandHeartRateEvent, _super);
        function BandHeartRateEvent(eventObj) {
            this.heartRate = eventObj.heartRate;
            this.quality = eventObj.quality;
            _super.call(this, eventObj);
        }
        BandHeartRateEvent.prototype.getHeartRate = function () {
            return this.heartRate;
        };
        BandHeartRateEvent.prototype.getQuality = function () {
            return this.quality;
        };
        return BandHeartRateEvent;
    })(BandPlugin.BandSensorEvent);
    BandPlugin.BandHeartRateEvent = BandHeartRateEvent;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
    })(BandPlugin.BandSensorEvent);
    BandPlugin.BandPedometerEvent = BandPedometerEvent;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
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
    })(BandPlugin.BandSensorEvent);
    BandPlugin.BandSkinTemperatureEvent = BandSkinTemperatureEvent;
})(BandPlugin || (BandPlugin = {}));
var BandPlugin;
(function (BandPlugin) {
    var BandUVEvent = (function (_super) {
        __extends(BandUVEvent, _super);
        function BandUVEvent(eventObj) {
            this.uvIndexLevel = eventObj.uvIndexLevel;
            _super.call(this, eventObj);
        }
        BandUVEvent.prototype.getUVIndexLevel = function () {
            return this.uvIndexLevel;
        };
        return BandUVEvent;
    })(BandPlugin.BandSensorEvent);
    BandPlugin.BandUVEvent = BandUVEvent;
})(BandPlugin || (BandPlugin = {}));
//# sourceMappingURL=band.js.map