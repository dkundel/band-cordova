/**
 * All the enums
 */
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["BINDING"] = 0] = "BINDING";
    ConnectionState[ConnectionState["BOUND"] = 1] = "BOUND";
    ConnectionState[ConnectionState["CONNECTED"] = 2] = "CONNECTED";
    ConnectionState[ConnectionState["DISPOSED"] = 3] = "DISPOSED";
    ConnectionState[ConnectionState["INVALID_SDK_VERSION"] = 4] = "INVALID_SDK_VERSION";
    ConnectionState[ConnectionState["UNBINDING"] = 5] = "UNBINDING";
    ConnectionState[ConnectionState["UNBOUND"] = 6] = "UNBOUND";
})(ConnectionState || (ConnectionState = {}));
var UserConsent;
(function (UserConsent) {
    UserConsent[UserConsent["GRANTED"] = 0] = "GRANTED";
    UserConsent[UserConsent["DECLINED"] = 1] = "DECLINED";
    UserConsent[UserConsent["UNSPECEFIED"] = 2] = "UNSPECEFIED";
})(UserConsent || (UserConsent = {}));
var MessageFlags;
(function (MessageFlags) {
    MessageFlags[MessageFlags["SHOW_DIALOG"] = 0] = "SHOW_DIALOG";
    MessageFlags[MessageFlags["NONE"] = 1] = "NONE";
})(MessageFlags || (MessageFlags = {}));
var HorizontalAlignment;
(function (HorizontalAlignment) {
    HorizontalAlignment[HorizontalAlignment["LEFT"] = 0] = "LEFT";
    HorizontalAlignment[HorizontalAlignment["RIGHT"] = 1] = "RIGHT";
    HorizontalAlignment[HorizontalAlignment["CENTERED"] = 2] = "CENTERED";
})(HorizontalAlignment || (HorizontalAlignment = {}));
var VerticalAlignment;
(function (VerticalAlignment) {
    VerticalAlignment[VerticalAlignment["TOP"] = 0] = "TOP";
    VerticalAlignment[VerticalAlignment["BOTTOM"] = 1] = "BOTTOM";
    VerticalAlignment[VerticalAlignment["CENTERED"] = 2] = "CENTERED";
})(VerticalAlignment || (VerticalAlignment = {}));
var Color;
(function (Color) {
})(Color || (Color = {}));
var ElementColorSource;
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
})(ElementColorSource || (ElementColorSource = {}));
var WrappedTextBlockFont;
(function (WrappedTextBlockFont) {
    WrappedTextBlockFont[WrappedTextBlockFont["SMALL"] = 0] = "SMALL";
    WrappedTextBlockFont[WrappedTextBlockFont["MEDIUM"] = 1] = "MEDIUM";
})(WrappedTextBlockFont || (WrappedTextBlockFont = {}));
var TextBlockFont;
(function (TextBlockFont) {
    TextBlockFont[TextBlockFont["EXTRA_LARGE_NUMBERS"] = 0] = "EXTRA_LARGE_NUMBERS";
    TextBlockFont[TextBlockFont["EXTRA_LARGE_NUMBERS_BOLD"] = 1] = "EXTRA_LARGE_NUMBERS_BOLD";
    TextBlockFont[TextBlockFont["LARGE"] = 2] = "LARGE";
    TextBlockFont[TextBlockFont["MEDIUM"] = 3] = "MEDIUM";
    TextBlockFont[TextBlockFont["SMALL"] = 4] = "SMALL";
})(TextBlockFont || (TextBlockFont = {}));
var TextBlockBaselineAlignment;
(function (TextBlockBaselineAlignment) {
    TextBlockBaselineAlignment[TextBlockBaselineAlignment["AUTOMATIC"] = 0] = "AUTOMATIC";
    TextBlockBaselineAlignment[TextBlockBaselineAlignment["RELATIVE"] = 1] = "RELATIVE";
    TextBlockBaselineAlignment[TextBlockBaselineAlignment["ABSOLUTE"] = 2] = "ABSOLUTE";
})(TextBlockBaselineAlignment || (TextBlockBaselineAlignment = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["HORIZONTAL"] = 0] = "HORIZONTAL";
    Orientation[Orientation["VERTICAL"] = 1] = "VERTICAL";
})(Orientation || (Orientation = {}));
var BandContactState;
(function (BandContactState) {
    BandContactState[BandContactState["NOT_WORN"] = 0] = "NOT_WORN";
    BandContactState[BandContactState["UNKNOWN"] = 1] = "UNKNOWN";
    BandContactState[BandContactState["WORN"] = 2] = "WORN";
})(BandContactState || (BandContactState = {}));
var BandErrorType;
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
})(BandErrorType || (BandErrorType = {}));
var BarcodeType;
(function (BarcodeType) {
    BarcodeType[BarcodeType["CODE39"] = 0] = "CODE39";
    BarcodeType[BarcodeType["PDF417"] = 1] = "PDF417";
})(BarcodeType || (BarcodeType = {}));
var HeartRateQuality;
(function (HeartRateQuality) {
    HeartRateQuality[HeartRateQuality["AQUIRING"] = 0] = "AQUIRING";
    HeartRateQuality[HeartRateQuality["LOCKED"] = 1] = "LOCKED";
})(HeartRateQuality || (HeartRateQuality = {}));
var MotionType;
(function (MotionType) {
    MotionType[MotionType["IDLE"] = 0] = "IDLE";
    MotionType[MotionType["JOGGING"] = 1] = "JOGGING";
    MotionType[MotionType["RUNNING"] = 2] = "RUNNING";
    MotionType[MotionType["UNKNOWN"] = 3] = "UNKNOWN";
    MotionType[MotionType["WALKING"] = 4] = "WALKING";
})(MotionType || (MotionType = {}));
var SampleRate;
(function (SampleRate) {
    SampleRate[SampleRate["MS128"] = 0] = "MS128";
    SampleRate[SampleRate["MS16"] = 1] = "MS16";
    SampleRate[SampleRate["MS32"] = 2] = "MS32";
})(SampleRate || (SampleRate = {}));
var UVIndexLevel;
(function (UVIndexLevel) {
    UVIndexLevel[UVIndexLevel["HIGH"] = 0] = "HIGH";
    UVIndexLevel[UVIndexLevel["LOW"] = 1] = "LOW";
    UVIndexLevel[UVIndexLevel["MEDIUM"] = 2] = "MEDIUM";
    UVIndexLevel[UVIndexLevel["NONE"] = 3] = "NONE";
    UVIndexLevel[UVIndexLevel["VERY_HIGH"] = 4] = "VERY_HIGH";
})(UVIndexLevel || (UVIndexLevel = {}));
var VibrationType;
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
})(VibrationType || (VibrationType = {}));
var PageElementTypes;
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
})(PageElementTypes || (PageElementTypes = {}));
var PageElementDataTypes;
(function (PageElementDataTypes) {
    PageElementDataTypes[PageElementDataTypes["BARCODE_DATA"] = 0] = "BARCODE_DATA";
    PageElementDataTypes[PageElementDataTypes["FILLED_BUTTON_DATA"] = 1] = "FILLED_BUTTON_DATA";
    PageElementDataTypes[PageElementDataTypes["ICON_DATA"] = 2] = "ICON_DATA";
    PageElementDataTypes[PageElementDataTypes["PAGE_ELEMENT_DATA"] = 3] = "PAGE_ELEMENT_DATA";
    PageElementDataTypes[PageElementDataTypes["TEXT_BLOCK_DATA"] = 4] = "TEXT_BLOCK_DATA";
    PageElementDataTypes[PageElementDataTypes["WRAPPED_TEXT_BLOCK_DATA"] = 5] = "WRAPPED_TEXT_BLOCK_DATA";
})(PageElementDataTypes || (PageElementDataTypes = {}));
/// <reference path="enums" />
/// <reference path="../enums" />
/// <reference path="../interfaces" />
var BandSensorEvent = (function () {
    function BandSensorEvent(eventObj) {
        this.timestamp = new Date(eventObj.timestamp);
    }
    return BandSensorEvent;
})();
/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
})(BandSensorEvent);
/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />
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
})(BandSensorEvent);
/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />
var BandContactEvent = (function (_super) {
    __extends(BandContactEvent, _super);
    function BandContactEvent(eventObj) {
        this.contactState = BandContactState[eventObj.contactState];
        _super.call(this, eventObj);
    }
    BandContactEvent.prototype.getContactState = function () {
        return this.contactState;
    };
    return BandContactEvent;
})(BandSensorEvent);
/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />
var BandDistanceEvent = (function (_super) {
    __extends(BandDistanceEvent, _super);
    function BandDistanceEvent(eventObj) {
        this.motionType = MotionType[eventObj.motionType];
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
})(BandSensorEvent);
/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />
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
})(BandSensorEvent);
/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />
var BandHeartRateEvent = (function (_super) {
    __extends(BandHeartRateEvent, _super);
    function BandHeartRateEvent(eventObj) {
        this.heartRate = eventObj.heartRate;
        this.quality = HeartRateQuality[eventObj.quality];
        _super.call(this, eventObj);
    }
    BandHeartRateEvent.prototype.getHeartRate = function () {
        return this.heartRate;
    };
    BandHeartRateEvent.prototype.getQuality = function () {
        return this.quality;
    };
    return BandHeartRateEvent;
})(BandSensorEvent);
/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />
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
})(BandSensorEvent);
/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />
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
})(BandSensorEvent);
/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />
var BandUVEvent = (function (_super) {
    __extends(BandUVEvent, _super);
    function BandUVEvent(eventObj) {
        this.uvIndexLevel = UVIndexLevel[eventObj.uvIndexLevel];
        _super.call(this, eventObj);
    }
    BandUVEvent.prototype.getUVIndexLevel = function () {
        return this.uvIndexLevel;
    };
    return BandUVEvent;
})(BandSensorEvent);
/// <reference path="BandAccelerometerEvent" />
/// <reference path="BandCaloriesEvent" />
/// <reference path="BandContactEvent" />
/// <reference path="BandDistanceEvent" />
/// <reference path="BandGyroscopeEvent" />
/// <reference path="BandHeartRateEvent" />
/// <reference path="BandPedoMeterEvent" />
/// <reference path="BandSensorEvent" />
/// <reference path="BandSkinTemperatureEvent" />
/// <reference path="BandUVEvent" /> 
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
            horizontalAlignment: HorizontalAlignment[this.attributes.horizontalAlignment],
            verticalAlignment: VerticalAlignment[this.attributes.verticalAlignment],
            isVisible: this.attributes.isVisible,
            type: PageElementTypes[PageElementTypes.PAGE_ELEMENT]
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
            horizontalAlignment: HorizontalAlignment[json.horizontalAlignment],
            verticalAlignment: VerticalAlignment[json.verticalAlignment],
            isVisible: json.isVisible
        };
        return element;
    };
    return PageElement;
})();
var PagePanel = (function (_super) {
    __extends(PagePanel, _super);
    function PagePanel(elementId, rect) {
        var elements = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            elements[_i - 2] = arguments[_i];
        }
        _super.call(this, elementId, rect, { top: 0, left: 0, right: 0, bottom: 0 }, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
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
        panel.type = PageElementTypes[PageElementTypes.PAGE_PANEL];
        return panel;
    };
    PagePanel.fromJson = function (json) {
        var panel = new PagePanel(json.elementId, json.rect);
        panel.attributes = {
            elementId: json.elementId,
            rect: json.rect,
            margins: json.margins,
            horizontalAlignment: HorizontalAlignment[json.horizontalAlignment],
            verticalAlignment: VerticalAlignment[json.verticalAlignment],
            isVisible: json.isVisible
        };
        var elements = [];
        for (var _i = 0, _a = json.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            switch (PageElementTypes[element.type]) {
                case PageElementTypes.PAGE_ELEMENT:
                    elements.push(PageElement.fromJson(element));
                    break;
                case PageElementTypes.BARCODE:
                    elements.push(Barcode.fromJson(element));
                    break;
                case PageElementTypes.FILLED_BUTTON:
                    elements.push(FilledButton.fromJson(element));
                    break;
                case PageElementTypes.PAGE_PANEL:
                    elements.push(PagePanel.fromJson(element));
                    break;
                case PageElementTypes.FILLED_PANEL:
                    elements.push(FilledPanel.fromJson(element));
                    break;
                case PageElementTypes.FLOW_PANEL:
                    elements.push(FlowPanel.fromJson(element));
                    break;
                case PageElementTypes.ICON:
                    elements.push(Icon.fromJson(element));
                    break;
                case PageElementTypes.SCROLL_FLOW_PANEL:
                    elements.push(ScrollFlowPanel.fromJson(element));
                    break;
                case PageElementTypes.TEXT_BLOCK:
                    elements.push(TextBlock.fromJson(element));
                    break;
                case PageElementTypes.TEXT_BUTTON:
                    elements.push(TextButton.fromJson(element));
                    break;
                case PageElementTypes.WRAPPED_TEXT_BLOCK:
                    elements.push(WrappedTextBlock.fromJson(element));
                    break;
                default:
                    elements.push(PageElement.fromJson(element));
                    break;
            }
        }
        panel.elements = elements;
        return panel;
    };
    return PagePanel;
})(PageElement);
var Barcode = (function (_super) {
    __extends(Barcode, _super);
    function Barcode(elementId, rect, type) {
        var margins = { top: 0, left: 0, right: 0, bottom: 0 };
        _super.call(this, elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
    }
    Barcode.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json.barcodeType = BarcodeType[this.attributes.barcodeType];
        return json;
    };
    Barcode.fromJson = function (json) {
        var barcode = PageElement.fromJson(json);
        barcode.attributes.barcodeType = BarcodeType[json.barcodeType];
        return barcode;
    };
    return Barcode;
})(PageElement);
var FilledButton = (function (_super) {
    __extends(FilledButton, _super);
    function FilledButton(elementId, rect, colorSource, color) {
        var margins = { top: 0, left: 0, right: 0, bottom: 0 };
        _super.call(this, elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
        this.attributes.colorSource = colorSource;
        this.attributes.color = color;
    }
    FilledButton.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json.color = this.attributes.color;
        json.colorSource = ElementColorSource[this.attributes.colorSource];
        json.type = PageElementTypes[PageElementTypes.FILLED_BUTTON];
        return json;
    };
    FilledButton.fromJson = function (json) {
        var button = PageElement.fromJson(json);
        button.attributes.color = json.color;
        button.attributes.colorSource = ElementColorSource[json.colorSource];
        return button;
    };
    return FilledButton;
})(PageElement);
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
        json.backgroundColorSource = ElementColorSource[this.attributes.backgroundColorSource];
        json.type = PageElementTypes[PageElementTypes.FILLED_PANEL];
        return json;
    };
    FilledPanel.fromJson = function (json) {
        var panel = PageElement.fromJson(json);
        panel.attributes.backgroundColor = json.backgroundColor;
        panel.attributes.backgroundColorSource = ElementColorSource[json.backgroundColorSource];
        return panel;
    };
    return FilledPanel;
})(PagePanel);
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
        json.orientation = Orientation[this.attributes.orientation];
        json.type = PageElementTypes[PageElementTypes.FLOW_PANEL];
        return json;
    };
    FlowPanel.fromJson = function (json) {
        var panel = PageElement.fromJson(json);
        panel.attributes.orientation = Orientation[json.orientation];
        return panel;
    };
    return FlowPanel;
})(PagePanel);
var Icon = (function (_super) {
    __extends(Icon, _super);
    function Icon(elementId, rect, colorSource, color) {
        var margins = { top: 0, left: 0, right: 0, bottom: 0 };
        _super.call(this, elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
        this.attributes.colorSource = colorSource;
        this.attributes.color = color;
    }
    Icon.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json.color = this.attributes.color;
        json.colorSource = ElementColorSource[this.attributes.colorSource];
        json.type = PageElementTypes[PageElementTypes.ICON];
        return json;
    };
    Icon.fromJson = function (json) {
        var icon = PageElement.fromJson(json);
        icon.attributes.color = json.color;
        icon.attributes.colorSource = ElementColorSource[json.colorSource];
        return icon;
    };
    return Icon;
})(PageElement);
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
        json.colorSource = ElementColorSource[this.attributes.colorSource];
        json.orientation = Orientation[this.attributes.orientation];
        json.type = PageElementTypes[PageElementTypes.SCROLL_FLOW_PANEL];
        return json;
    };
    ScrollFlowPanel.fromJson = function (json) {
        var panel = PageElement.fromJson(json);
        panel.attributes.color = json.color;
        panel.attributes.colorSource = ElementColorSource[json.colorSource];
        panel.attributes.orientation = Orientation[json.orientation];
        return panel;
    };
    return ScrollFlowPanel;
})(PagePanel);
var TextBlock = (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock(elementId, rect, colorSource, color, font, baselineAlignment, baseline, autoWidth) {
        var margins = { top: 0, left: 0, right: 0, bottom: 0 };
        _super.call(this, elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
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
        json.colorSource = ElementColorSource[this.attributes.colorSource];
        json.font = TextBlockFont[this.attributes.font];
        json.baselineAlignment = TextBlockBaselineAlignment[this.attributes.baselineAlignment];
        json.baseline = this.attributes.baseline;
        json.autoWidth = this.attributes.autoWidth;
        json.type = PageElementTypes[PageElementTypes.TEXT_BLOCK];
        return json;
    };
    TextBlock.fromJson = function (json) {
        var textBlock = PageElement.fromJson(json);
        textBlock.attributes.color = json.color;
        textBlock.attributes.colorSource = ElementColorSource[json.colorSource];
        textBlock.attributes.font = TextBlockFont[json.font];
        textBlock.attributes.baselineAlignment = TextBlockBaselineAlignment[json.baselineAlignment];
        textBlock.attributes.baseline = json.baseline;
        textBlock.attributes.autoWidth = json.autoWidth;
        return textBlock;
    };
    return TextBlock;
})(PageElement);
var TextButton = (function (_super) {
    __extends(TextButton, _super);
    function TextButton(elementId, rect, colorSource, color) {
        var margins = { top: 0, left: 0, right: 0, bottom: 0 };
        _super.call(this, elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
        this.attributes.colorSource = colorSource;
        this.attributes.color = color;
    }
    TextButton.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json.color = this.attributes.color;
        json.colorSource = ElementColorSource[this.attributes.colorSource];
        json.type = PageElementTypes[PageElementTypes.TEXT_BUTTON];
        return json;
    };
    TextButton.fromJson = function (json) {
        var button = PageElement.fromJson(json);
        button.attributes.color = json.color;
        button.attributes.colorSource = ElementColorSource[json.colorSource];
        return button;
    };
    return TextButton;
})(PageElement);
var WrappedTextBlock = (function (_super) {
    __extends(WrappedTextBlock, _super);
    function WrappedTextBlock(elementId, rect, colorSource, color, font, autoHeight) {
        var margins = { top: 0, left: 0, right: 0, bottom: 0 };
        _super.call(this, elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
        this.attributes.colorSource = colorSource;
        this.attributes.color = color;
        this.attributes.font = font;
        this.attributes.autoHeight = autoHeight;
    }
    WrappedTextBlock.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json.color = this.attributes.color;
        json.colorSource = ElementColorSource[this.attributes.colorSource];
        json.font = WrappedTextBlockFont[this.attributes.font];
        json.autoHeight = this.attributes.autoHeight;
        json.type = PageElementTypes[PageElementTypes.WRAPPED_TEXT_BLOCK];
        return json;
    };
    WrappedTextBlock.fromJson = function (json) {
        var textBlock = PageElement.fromJson(json);
        textBlock.attributes.color = json.color;
        textBlock.attributes.colorSource = ElementColorSource[json.colorSource];
        textBlock.attributes.font = WrappedTextBlockFont[json.font];
        textBlock.attributes.autoHeight = json.autoHeight;
        return textBlock;
    };
    return WrappedTextBlock;
})(PageElement);
/// <reference path="PageElement" />
/// <reference path="PagePanel" />
/// <reference path="Barcode" />
/// <reference path="FilledButton" />
/// <reference path="FilledPanel" />
/// <reference path="FlowPanel" />
/// <reference path="Icon" />
/// <reference path="ScrollFlowPanel" />
/// <reference path="TextBlock" />
/// <reference path="TextButton" />
/// <reference path="WrappedTextBlock" />
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
            type: PageElementDataTypes[PageElementDataTypes.PAGE_ELEMENT_DATA]
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
        data.barcodeType = BarcodeType[this.barcodeType];
        return data;
    };
    BarcodeData.fromJson = function (json) {
        var data = _super.fromJson.call(this, json);
        data.barcodeText = json.barcodeText;
        data.barcodeType = BarcodeData[json.barcodeType];
        return data;
    };
    return BarcodeData;
})(PageElementData);
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
        data.type = PageElementDataTypes[PageElementDataTypes.BARCODE_DATA];
        return data;
    };
    FilledButtonData.fromJson = function (json) {
        var data = _super.fromJson.call(this, json);
        data.pressedColor = json.color;
        return data;
    };
    return FilledButtonData;
})(PageElementData);
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
        data.type = PageElementDataTypes[PageElementDataTypes.BARCODE_DATA];
        return data;
    };
    IconData.fromJson = function (json) {
        var data = _super.fromJson.call(this, json);
        data.iconIndex = json.iconIndex;
        return data;
    };
    return IconData;
})(PageElementData);
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
        data.type = PageElementDataTypes[PageElementDataTypes.BARCODE_DATA];
        return data;
    };
    TextBlockData.fromJson = function (json) {
        var data = _super.fromJson.call(this, json);
        data.text = json.text;
        return data;
    };
    return TextBlockData;
})(PageElementData);
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
        data.type = PageElementDataTypes[PageElementDataTypes.BARCODE_DATA];
        return data;
    };
    WrappedTextBlockData.fromJson = function (json) {
        var data = _super.fromJson.call(this, json);
        data.text = json.text;
        return data;
    };
    return WrappedTextBlockData;
})(PageElementData);
/// <reference path="../../enums" />
/// <reference path="../../interfaces" />
/// <reference path="PageElementData" />
/// <reference path="BarcodeData" />
/// <reference path="FilledButtonData" />
/// <reference path="IconData" />
/// <reference path="TextBlockData" />
/// <reference path="WrappedTextBlockData" />
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
        switch (PageElementTypes[json.root.type]) {
            case PageElementTypes.FILLED_PANEL:
                root = FilledPanel.fromJson(json.root);
                break;
            case PageElementTypes.FLOW_PANEL:
                root = FlowPanel.fromJson(json.root);
                break;
            case PageElementTypes.SCROLL_FLOW_PANEL:
                root = ScrollFlowPanel.fromJson(json.root);
                break;
            case PageElementTypes.PAGE_PANEL:
            default:
                root = PagePanel.fromJson(json.root);
                break;
        }
        var layout = new PageLayout(root);
        return layout;
    };
    return PageLayout;
})();
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
            switch (PageElementDataTypes[value.type]) {
                case PageElementDataTypes.BARCODE_DATA:
                    data.update(BarcodeData.fromJson(value));
                    break;
                case PageElementDataTypes.FILLED_BUTTON_DATA:
                    data.update(FilledButtonData.fromJson(value));
                    break;
                case PageElementDataTypes.ICON_DATA:
                    data.update(IconData.fromJson(value));
                    break;
                case PageElementDataTypes.TEXT_BLOCK_DATA:
                    data.update(TextBlockData.fromJson(value));
                    break;
                case PageElementDataTypes.WRAPPED_TEXT_BLOCK_DATA:
                    data.update(WrappedTextBlockData.fromJson(value));
                    break;
                case PageElementDataTypes.PAGE_ELEMENT_DATA:
                default:
                    data.update(PageElementData.fromJson(value));
                    break;
            }
        }
        return data;
    };
    return PageData;
})();
/// <reference path="elements/_all" />
/// <reference path="data/_all" />
/// <reference path="PageLayout" />
/// <reference path="PageData" />
var BandCordova;
(function (BandCordova) {
    var BandClient = (function () {
        function BandClient() {
        }
        return BandClient;
    })();
    BandCordova.BandClient = BandClient;
})(BandCordova || (BandCordova = {}));
var BandCordova;
(function (BandCordova) {
    var BandClientManager = (function () {
        function BandClientManager() {
        }
        return BandClientManager;
    })();
    BandCordova.BandClientManager = BandClientManager;
})(BandCordova || (BandCordova = {}));
var BandCordova;
(function (BandCordova) {
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
        BandIcon.prototype.toJson = function () {
            return {
                iconBase64: this.base64
            };
        };
        BandIcon.fromJson = function (json) {
            return new BandIcon(json.iconBase64, 'base64');
        };
        return BandIcon;
    })();
    BandCordova.BandIcon = BandIcon;
})(BandCordova || (BandCordova = {}));
var BandCordova;
(function (BandCordova) {
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
    BandCordova.BandInfo = BandInfo;
})(BandCordova || (BandCordova = {}));
var BandCordova;
(function (BandCordova) {
    var BandNotificationManager = (function () {
        function BandNotificationManager() {
        }
        return BandNotificationManager;
    })();
    BandCordova.BandNotificationManager = BandNotificationManager;
})(BandCordova || (BandCordova = {}));
var BandCordova;
(function (BandCordova) {
    var BandPersonalizationManager = (function () {
        function BandPersonalizationManager() {
        }
        return BandPersonalizationManager;
    })();
    BandCordova.BandPersonalizationManager = BandPersonalizationManager;
})(BandCordova || (BandCordova = {}));
/// <reference path="types/cordova" />
/// <reference path="enums" />
/// <reference path="interfaces" />
/// <reference path="events/_all" />
var BandCordova;
(function (BandCordova) {
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
                callback(null, new BandAccelerometerEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            cordova.exec(success, error, "Band", "registerAccelerometerEventListener", [SampleRate[reportingInterval]]);
        };
        BandSensorManager.prototype.registerCaloriesEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandCaloriesEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            cordova.exec(success, error, "Band", "registerCaloriesEventListener", []);
        };
        BandSensorManager.prototype.registerContactEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandContactEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            cordova.exec(success, error, "Band", "registerContactEventListener", []);
        };
        BandSensorManager.prototype.registerDistanceEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandDistanceEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            cordova.exec(success, error, "Band", "registerDistanceEventListener", []);
        };
        BandSensorManager.prototype.registerGyroscopeEventListener = function (reportingInterval, callback) {
            var success = function (event) {
                callback(null, new BandGyroscopeEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            cordova.exec(success, error, "Band", "registerGyroscopeEventListener", [SampleRate[reportingInterval]]);
        };
        BandSensorManager.prototype.registerHeartRateEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandHeartRateEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            cordova.exec(success, error, "Band", "registerHeartRateEventListener", []);
        };
        BandSensorManager.prototype.registerPedometerEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandPedometerEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            cordova.exec(success, error, "Band", "registerPedometerEventListener", []);
        };
        BandSensorManager.prototype.registerSkinTemperatureEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandSkinTemperatureEvent(event), event.id);
            };
            var error = function (error) {
                callback(error);
            };
            cordova.exec(success, error, "Band", "registerSkinTemperatureEventListener", []);
        };
        BandSensorManager.prototype.registerUVEventListener = function (callback) {
            var success = function (event) {
                callback(null, new BandUVEvent(event), event.id);
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
    BandCordova.BandSensorManager = BandSensorManager;
})(BandCordova || (BandCordova = {}));
/// <reference path="interfaces" />
var BandCordova;
(function (BandCordova) {
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
    BandCordova.BandTheme = BandTheme;
})(BandCordova || (BandCordova = {}));
var BandCordova;
(function (BandCordova) {
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
            return new BandCordova.BandTile(this.tile);
        };
        return BandTileBuilder;
    })();
    BandCordova.BandTileBuilder = BandTileBuilder;
})(BandCordova || (BandCordova = {}));
/// <reference path="BandIcon" />
/// <reference path="BandTheme" />
/// <reference path="BandTileBuilder" />
var BandCordova;
(function (BandCordova) {
    var BandTile = (function () {
        function BandTile(json) {
            var icons = [];
            for (var _i = 0, _a = json.pageIcons; _i < _a.length; _i++) {
                var icon = _a[_i];
                icons.push(BandCordova.BandIcon.fromJson(icon));
            }
            var layouts = [];
            for (var _b = 0, _c = json.pageLayouts; _b < _c.length; _b++) {
                var layout = _c[_b];
                layouts.push(PageLayout.fromJson(layout));
            }
            this.uuid = json.uuid;
            this.pageIcons = icons;
            this.pageLayouts = layouts;
            this.theme = BandCordova.BandTheme.fromJson(json.theme);
            this.tileIcon = BandCordova.BandIcon.fromJson(json.tileIcon);
            this.tileId = json.tileId;
            this.tileName = json.tileName;
            this.tileSmallIcon = BandCordova.BandIcon.fromJson(json.tileSmallIcon);
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
    BandCordova.BandTile = BandTile;
})(BandCordova || (BandCordova = {}));
/// <reference path="BandTile" />
/// <reference path="types/cordova" />
/// <reference path="interfaces" />
/// <reference path="layout/_all" />
var BandCordova;
(function (BandCordova) {
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
                    bandTiles.push(new BandCordova.BandTile(tile));
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
    BandCordova.BandTileManager = BandTileManager;
})(BandCordova || (BandCordova = {}));
/// <reference path="enums" />
/// <reference path="interfaces" />
/// <reference path="events/_all" />
/// <reference path="layout/_all" />
/// <reference path="BandClient" />
/// <reference path="BandClientManager" />
/// <reference path="BandIcon" />
/// <reference path="BandInfo" />
/// <reference path="BandNotificationManager" />
/// <reference path="BandPersonalizationManager" />
/// <reference path="BandSensorManager" />
/// <reference path="BandTheme" />
/// <reference path="BandTile" />
/// <reference path="BandTileBuilder" />
/// <reference path="BandTileManager" />
/// <reference path="src/_all" />
//# sourceMappingURL=band.js.map