/**
 * All the enums
 */
declare enum ConnectionState {
    BINDING = 0,
    BOUND = 1,
    CONNECTED = 2,
    DISPOSED = 3,
    INVALID_SDK_VERSION = 4,
    UNBINDING = 5,
    UNBOUND = 6,
}
declare enum UserConsent {
    GRANTED = 0,
    DECLINED = 1,
    UNSPECEFIED = 2,
}
declare enum MessageFlags {
    SHOW_DIALOG = 0,
    NONE = 1,
}
declare enum HorizontalAlignment {
    LEFT = 0,
    RIGHT = 1,
    CENTERED = 2,
}
declare enum VerticalAlignment {
    TOP = 0,
    BOTTOM = 1,
    CENTERED = 2,
}
declare enum Color {
}
declare enum ElementColorSource {
    BAND_BASE = 0,
    BAND_HIGH_CONTRAST = 1,
    BAND_HIGHLIGHT = 2,
    BAND_LOWLIGHT = 3,
    BAND_MUTED = 4,
    BAND_SECONDARY_TEXT = 5,
    CUSTOM = 6,
    TILE_BASE = 7,
    TILE_HIGH_CONTRAST = 8,
    TILE_HIGHLIGHT = 9,
    TILE_LOWLIGHT = 10,
    TILE_MUTED = 11,
    TILE_SECONDARY_TEXT = 12,
}
declare enum WrappedTextBlockFont {
    SMALL = 0,
    MEDIUM = 1,
}
declare enum TextBlockFont {
    EXTRA_LARGE_NUMBERS = 0,
    EXTRA_LARGE_NUMBERS_BOLD = 1,
    LARGE = 2,
    MEDIUM = 3,
    SMALL = 4,
}
declare enum TextBlockBaselineAlignment {
    AUTOMATIC = 0,
    RELATIVE = 1,
    ABSOLUTE = 2,
}
declare enum Orientation {
    HORIZONTAL = 0,
    VERTICAL = 1,
}
declare enum BandContactState {
    NOT_WORN = 0,
    UNKNOWN = 1,
    WORN = 2,
}
declare enum BandErrorType {
    BAND_FULL_ERROR = 0,
    DEVICE_ERROR = 1,
    INVALID_PAGE_DATA_ERROR = 2,
    PERMISSION_ERROR = 3,
    SERVICE_ERROR = 4,
    TILE_ALREADY_EXISTS_ERROR = 5,
    TILE_NOT_FOUND_ERROR = 6,
    TOO_MANY_CONCURRENT_COMMANDS_ERROR = 7,
    UNKNOWN_ERROR = 8,
    UNSUPPORTED_SDK_VERSION_ERROR = 9,
}
declare enum BarcodeType {
    CODE39 = 0,
    PDF417 = 1,
}
declare enum HeartRateQuality {
    AQUIRING = 0,
    LOCKED = 1,
}
declare enum MotionType {
    IDLE = 0,
    JOGGING = 1,
    RUNNING = 2,
    UNKNOWN = 3,
    WALKING = 4,
}
declare enum SampleRate {
    MS128 = 0,
    MS16 = 1,
    MS32 = 2,
}
declare enum UVIndexLevel {
    HIGH = 0,
    LOW = 1,
    MEDIUM = 2,
    NONE = 3,
    VERY_HIGH = 4,
}
declare enum VibrationType {
    NOTIFICATION_ALARM = 0,
    NOTIFICATION_ONE_TONE = 1,
    NOTIFICATION_TIMER = 2,
    NOTIFICATION_TWO_TONE = 3,
    ONE_TONE_HIGH = 4,
    RAMP_DOWN = 5,
    RAMP_UP = 6,
    THREE_TONE_HIGH = 7,
    TWO_TONE_HIGH = 8,
}
declare enum PageElementTypes {
    PAGE_ELEMENT = 0,
    BARCODE = 1,
    FILLED_BUTTON = 2,
    PAGE_PANEL = 3,
    FILLED_PANEL = 4,
    FLOW_PANEL = 5,
    ICON = 6,
    SCROLL_FLOW_PANEL = 7,
    TEXT_BLOCK = 8,
    TEXT_BUTTON = 9,
    WRAPPED_TEXT_BLOCK = 10,
}
/**
 * Event data
 */
interface ISensorEvent {
    timestamp: number;
    id: number;
}
interface IAccelerometerEvent extends ISensorEvent {
    acceleration: {
        x: number;
        y: number;
        z: number;
    };
}
interface ICaloriesEvent extends ISensorEvent {
    calories: number;
}
interface IContactEvent extends ISensorEvent {
    contactState: string;
}
interface IDistanceEvent extends ISensorEvent {
    motionType: string;
    pace: number;
    speed: number;
    totalDistance: number;
}
interface IGyroscopeEvent extends ISensorEvent {
    acceleration: {
        x: number;
        y: number;
        z: number;
    };
    angularVelocity: {
        x: number;
        y: number;
        z: number;
    };
}
interface IHeartRateEvent extends ISensorEvent {
    heartRate: number;
    quality: string;
}
interface IPedometerEvent extends ISensorEvent {
    totalSteps: number;
}
interface ISkinTemperatureEvent extends ISensorEvent {
    skinTemperature: number;
}
interface IUVEvent extends ISensorEvent {
    uvIndexLevel: string;
}
/**
 * Page elements
 */
interface PageRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface Margins {
    top: number;
    left: number;
    right: number;
    bottom: number;
}
interface IPageElement {
    elementId: number;
    rect: PageRect;
    margins: Margins;
    horizontalAlignment: string;
    verticalAlignment: string;
    isVisible: boolean;
    type: PageElementTypes;
}
interface IPagePanel extends IPageElement {
    elements: IPageElement[];
}
interface IBarcode extends IPageElement {
    barcodeType: string;
}
interface IFilledPanelElement extends IPagePanel {
    backgroundColor: string;
    backgroundColorSource: string;
}
interface ITextBlockElement extends IPageElement {
    colorSource: string;
    color: string;
    font: string;
    baselineAlignment: string;
    baseline: number;
    autoWidth: boolean;
}
interface IWrappedTextBlockElement extends IPageElement {
    colorSource: string;
    color: string;
    font: string;
    autoHeight: boolean;
}
interface IIconElement extends IPageElement {
    colorSource: string;
    color: string;
}
interface ITextButtonElement extends IPageElement {
    colorSource: string;
    color: string;
}
interface IFilledButtonElement extends IPageElement {
    colorSource: string;
    color: string;
}
interface IScrollFlowPanelElement extends IPagePanel {
    colorSource: string;
    color: string;
    orientation: string;
}
interface IFlowPanelElement extends IPagePanel {
    orientation: string;
}
/**
 * Page element data
 */
interface IPageElementData {
    id: number;
}
interface IBarcodeData extends IPageElementData {
    barcodeText: string;
    type: string;
}
interface IFilledButtonData extends IPageElementData {
    color: string;
}
interface IIconData extends IPageElementData {
    iconIndex: number;
}
interface ITextBlockData extends IPageElementData {
    text: string;
}
interface IWrappedTextBlockData extends IPageElementData {
    text: string;
}
/**
 * Tile event data
 */
interface ITileEvent {
}
interface ITextButtonEvent extends ITileEvent {
    tileId: string;
    tileName: string;
    timestamp: number;
}
/**
 * BandInfo
 */
interface IBandInfo {
    macAddress: string;
    name: string;
}
/**
 * BandTile data
 */
interface IPageLayout {
    root: IPageElement;
}
interface IBandIcon {
    iconBase64: string;
}
interface IBandTheme {
    base: string;
    highlights: string;
    lowlights: string;
    secondary: string;
    highContrast: string;
    muted: string;
}
/**
 * Band data
 */
interface IBandClient {
    connectionState: ConnectionState;
}
interface IBandTile {
    pageIcons: IBandIcon[];
    pageLayouts: IPageLayout[];
    theme: IBandTheme;
    tileIcon: IBandIcon;
    tileId: string;
    tileName: string;
    tileSmallIcon: IBandIcon;
    badingEnabled: boolean;
}
interface BandErrorMessage {
    message: string;
}
interface IBandTile {
}
declare class BandSensorEvent {
    private timestamp;
    constructor(eventObj: ISensorEvent);
}
declare class BandAccelerometerEvent extends BandSensorEvent {
    private acceleration;
    constructor(eventObj: IAccelerometerEvent);
    getAccelerationX(): number;
    getAccelerationY(): number;
    getAccelerationZ(): number;
}
declare class BandCaloriesEvent extends BandSensorEvent {
    private calories;
    constructor(eventObj: ICaloriesEvent);
    getCalories(): number;
}
declare class BandContactEvent extends BandSensorEvent {
    private contactState;
    constructor(eventObj: IContactEvent);
    getContactState(): BandContactState;
}
declare class BandDistanceEvent extends BandSensorEvent {
    private motionType;
    private pace;
    private speed;
    private totalDistance;
    constructor(eventObj: IDistanceEvent);
    getMotionType(): MotionType;
    getPace(): number;
    getSpeed(): number;
    getTotalDistance(): number;
}
declare class BandGyroscopeEvent extends BandSensorEvent {
    private acceleration;
    private angularVelocity;
    constructor(eventObj: IGyroscopeEvent);
    getAccelerationX(): number;
    getAccelerationY(): number;
    getAccelerationZ(): number;
    getAngularVelocityX(): number;
    getAngularVelocityY(): number;
    getAngularVelocityZ(): number;
}
declare class BandHeartRateEvent extends BandSensorEvent {
    private heartRate;
    private quality;
    constructor(eventObj: IHeartRateEvent);
    getHeartRate(): number;
    getQuality(): HeartRateQuality;
}
declare class BandPedometerEvent extends BandSensorEvent {
    private totalSteps;
    constructor(eventObj: IPedometerEvent);
    getTotalSteps(): number;
}
declare class BandSkinTemperatureEvent extends BandSensorEvent {
    private skinTemperature;
    constructor(eventObj: ISkinTemperatureEvent);
    getSkinTemperature(): number;
}
declare class BandUVEvent extends BandSensorEvent {
    private uvIndexLevel;
    constructor(eventObj: IUVEvent);
    getUVIndexLevel(): UVIndexLevel;
}
interface PageElementAttributes {
    elementId: number;
    rect: PageRect;
    margins: Margins;
    horizontalAlignment: HorizontalAlignment;
    verticalAlignment: VerticalAlignment;
    isVisible: boolean;
}
declare class PageElement<TPageElementAttributes extends PageElementAttributes> {
    protected attributes: TPageElementAttributes;
    constructor(elementId?: number, rect?: PageRect, margins?: Margins, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment, isVisible?: boolean);
    getAttributes(): PageElementAttributes;
    setAttributes(attr: TPageElementAttributes): void;
    isVisible(): boolean;
    setVisible(visible: boolean): void;
    getId(): number;
    setId(id: number): void;
    toJson(): IPageElement;
    toString(): string;
    static fromJson(json: IPageElement): PageElement<PageElementAttributes>;
}
interface PagePanelAttributes extends PageElementAttributes {
}
declare class PagePanel<TAttributes extends PagePanelAttributes> extends PageElement<TAttributes> {
    protected elements: PageElement<PageElementAttributes>[];
    constructor(elementId: number, rect: PageRect, ...elements: PageElement<PageElementAttributes>[]);
    addElements(...elements: PageElement<PageElementAttributes>[]): void;
    getElements(): PageElement<PageElementAttributes>[];
    toJson(): IPagePanel;
    static fromJson(json: IPagePanel): PagePanel<PagePanelAttributes>;
}
interface BarcodeAttributes extends PageElementAttributes {
    barcodeType: BarcodeType;
}
declare class Barcode extends PageElement<BarcodeAttributes> {
    constructor(elementId: number, rect: PageRect, type: BarcodeType);
    toJson(): IBarcode;
    static fromJson(json: IBarcode): Barcode;
}
interface FilledButtonAttributes extends PageElementAttributes {
    color: string;
    colorSource: ElementColorSource;
}
declare class FilledButton extends PageElement<FilledButtonAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: string);
    toJson(): IFilledButtonElement;
    static fromJson(json: IFilledButtonElement): FilledButton;
}
interface FilledPanelAttributes extends PagePanelAttributes {
    backgroundColor: string;
    backgroundColorSource: ElementColorSource;
}
declare class FilledPanel extends PagePanel<FilledPanelAttributes> {
    constructor(elementId: number, rect: PageRect, backgroundColorSource: ElementColorSource, backgroundColor: string, ...elements: PageElement<PageElementAttributes>[]);
    toJson(): IFilledPanelElement;
    static fromJson(json: IFilledPanelElement): FilledPanel;
}
interface FlowPanelAttributes extends PagePanelAttributes {
    orientation: Orientation;
}
declare class FlowPanel extends PagePanel<FlowPanelAttributes> {
    constructor(elementId: number, rect: PageRect, orientation: Orientation, ...elements: PageElement<PageElementAttributes>[]);
    toJson(): IFlowPanelElement;
    static fromJson(json: IFlowPanelElement): FlowPanel;
}
interface IconAttributes extends PageElementAttributes {
    color: string;
    colorSource: ElementColorSource;
}
declare class Icon extends PageElement<IconAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: string);
    toJson(): IIconElement;
    static fromJson(json: IIconElement): Icon;
}
interface ScrollFlowPanelAttributes extends PagePanelAttributes {
    color: string;
    colorSource: ElementColorSource;
    orientation: Orientation;
}
declare class ScrollFlowPanel extends PagePanel<ScrollFlowPanelAttributes> {
    constructor(elementId: number, rect: PageRect, orientation: Orientation, colorSource: ElementColorSource, color: string, ...elements: PageElement<PageElementAttributes>[]);
    toJson(): IScrollFlowPanelElement;
    static fromJson(json: IScrollFlowPanelElement): ScrollFlowPanel;
}
interface TextBlockAttributes extends PageElementAttributes {
    color: string;
    colorSource: ElementColorSource;
    font: TextBlockFont;
    baselineAlignment: TextBlockBaselineAlignment;
    baseline: number;
    autoWidth: boolean;
}
declare class TextBlock extends PageElement<TextBlockAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: string, font?: TextBlockFont, baselineAlignment?: TextBlockBaselineAlignment, baseline?: number, autoWidth?: boolean);
    toJson(): ITextBlockElement;
    static fromJson(json: ITextBlockElement): TextBlock;
}
interface TextButtonAttributes extends PageElementAttributes {
    color: string;
    colorSource: ElementColorSource;
}
declare class TextButton extends PageElement<TextButtonAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: string);
    toJson(): ITextButtonElement;
    static fromJson(json: ITextButtonElement): TextButton;
}
interface WrappedTextBlockAttributes extends PageElementAttributes {
    color: string;
    colorSource: ElementColorSource;
    font: WrappedTextBlockFont;
    autoHeight: boolean;
}
declare class WrappedTextBlock extends PageElement<WrappedTextBlockAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: string, font?: WrappedTextBlockFont, autoHeight?: boolean);
    toJson(): IWrappedTextBlockElement;
    static fromJson(json: IWrappedTextBlockElement): WrappedTextBlock;
}
declare class PageLayout {
    private root;
    constructor(root: PagePanel<PagePanelAttributes>);
    getRoot(): PagePanel<PagePanelAttributes>;
    setRoot(root: PagePanel<PagePanelAttributes>): PageLayout;
    toJson(): IPageLayout;
    static fromJson(json: IPageLayout): PageLayout;
}
declare class PageData {
}
interface WebGLRenderingContext {
    drawImage(image: HTMLImageElement, x: number, y: number): void;
}
declare module BandCordova {
    class BandIcon {
        private path;
        private base64;
        constructor(content: string, type?: string);
        toBandIcon(callback: (base64Icon: string) => void): void;
        toJson(): IBandIcon;
        static fromJson(json: IBandIcon): BandIcon;
    }
}
declare module BandCordova {
    class BandInfo {
        private macAddress;
        private name;
        constructor(bandInfo: IBandInfo);
        getMacAddress(): string;
        getName(): string;
    }
}
// Type definitions for Apache Cordova
// Project: http://cordova.apache.org
// Definitions by: Microsoft Open Technologies Inc. <http://msopentech.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

//// <reference path="plugins/BatteryStatus.d.ts"/>
//// <reference path="plugins/Camera.d.ts"/>
//// <reference path="plugins/Contacts.d.ts"/>
//// <reference path="plugins/Device.d.ts"/>
//// <reference path="plugins/DeviceMotion.d.ts"/>
//// <reference path="plugins/DeviceOrientation.d.ts"/>
//// <reference path="plugins/Dialogs.d.ts"/>
//// <reference path="plugins/FileSystem.d.ts"/>
//// <reference path="plugins/FileTransfer.d.ts"/>
//// <reference path="plugins/Globalization.d.ts"/>
//// <reference path="plugins/InAppBrowser.d.ts"/>
//// <reference path="plugins/Media.d.ts"/>
//// <reference path="plugins/MediaCapture.d.ts"/>
//// <reference path="plugins/NetworkInformation.d.ts"/>
//// <reference path="plugins/Push.d.ts"/>
//// <reference path="plugins/Splashscreen.d.ts"/>
//// <reference path="plugins/StatusBar.d.ts"/>
//// <reference path="plugins/Vibration.d.ts"/>
//// <reference path="plugins/WebSQL.d.ts"/>

interface Cordova {
    /** Invokes native functionality by specifying corresponding service name, action and optional parameters.
     * @param success A success callback function.
     * @param fail An error callback function.
     * @param service The service name to call on the native side (corresponds to a native class).
     * @param action The action name to call on the native side (generally corresponds to the native class method).
     * @param args An array of arguments to pass into the native environment.
     */
    exec(success: (...args: any[]) => any, fail: (...args: any[]) => any, service: string, action: string, args?: string[]): void;
    /** Gets the operating system name. */
    platformId: string;
    /** Gets Cordova framework version */
    version: string;
    /** Defines custom logic as a Cordova module. Other modules can later access it using module name provided. */
    define(moduleName: string, factory: (require: any, exports: any, module: any) => any): void;
    /** Access a Cordova module by name. */
    require(moduleName: string): any;
    /** Namespace for Cordova plugin functionality */
    plugins:CordovaPlugins;
}

interface CordovaPlugins {}

interface Document {
    addEventListener(type: "deviceready", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resume", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "backbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "menubutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "searchbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "startcallbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "endcallbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumedownbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumeupbutton", listener: (ev: Event) => any, useCapture?: boolean): void;

    removeEventListener(type: "deviceready", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "resume", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "backbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "menubutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "searchbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "startcallbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "endcallbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "volumedownbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "volumeupbutton", listener: (ev: Event) => any, useCapture?: boolean): void;

    addEventListener(type: string, listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: string, listener: (ev: Event) => any, useCapture?: boolean): void;
}

interface Window {
  cordova:Cordova;
}

// cordova/argscheck module
interface ArgsCheck {
    checkArgs(argsSpec: string, functionName: string, args: any[], callee?: any): void;
    getValue(value?: any, defaultValue?: any): any;
    enableChecks: boolean;
}

// cordova/urlutil module
interface UrlUtil {
    makeAbsolute(url: string): string
}

/** Apache Cordova instance */
declare var cordova: Cordova;declare module BandCordova {
    class BandSensorManager {
        private currentHeartRateConsent;
        handleSuccessfulUnregister(...args: any[]): void;
        handleErrorUnregister(...args: any[]): void;
        constructor();
        getCurrentgetCurrentHeartRateConsent(): UserConsent;
        registerAccelerometerEventListener(reportingInterval: SampleRate, callback: (error: BandErrorMessage, event?: BandAccelerometerEvent, eventId?: number) => void): void;
        registerCaloriesEventListener(callback: (error: BandErrorMessage, event?: BandCaloriesEvent, eventId?: number) => void): void;
        registerContactEventListener(callback: (error: BandErrorMessage, event?: BandContactEvent, eventId?: number) => void): void;
        registerDistanceEventListener(callback: (error: BandErrorMessage, event?: BandDistanceEvent, eventId?: number) => void): void;
        registerGyroscopeEventListener(reportingInterval: SampleRate, callback: (error: BandErrorMessage, event?: BandGyroscopeEvent, eventId?: number) => void): void;
        registerHeartRateEventListener(callback: (error: BandErrorMessage, event?: BandHeartRateEvent, eventId?: number) => void): void;
        registerPedometerEventListener(callback: (error: BandErrorMessage, event?: BandPedometerEvent, eventId?: number) => void): void;
        registerSkinTemperatureEventListener(callback: (error: BandErrorMessage, event?: BandSkinTemperatureEvent, eventId?: number) => void): void;
        registerUVEventListener(callback: (error: BandErrorMessage, event?: BandUVEvent, eventId?: number) => void): void;
        requestHeartRateConsent(callback: (error: BandErrorMessage, consentGiven?: boolean) => void): void;
        unregisterAccelerometerEventListener(eventId: number): void;
        unregisterAccelerometerEventListeners(): void;
        unregisterAllListeners(): void;
        unregisterCaloriesEventListener(eventId: number): void;
        unregisterCaloriesEventListeners(): void;
        unregisterContactEventListener(eventId: number): void;
        unregisterContactEventListeners(): void;
        unregisterDistanceEventListener(eventId: number): void;
        unregisterDistanceEventListeners(): void;
        unregisterGyroscopeEventListener(eventId: number): void;
        unregisterGyroscopeEventListeners(): void;
        unregisterHeartRateEventListener(eventId: number): void;
        unregisterHeartRateEventListeners(): void;
        unregisterPedometerEventListener(eventId: number): void;
        unregisterPedometerEventListeners(): void;
        unregisterSkinTemperatureEventListener(eventId: number): void;
        unregisterSkinTemperatureEventListeners(): void;
        unregisterUVEventListener(eventId: number): void;
        unregisterUVEventListeners(): void;
    }
}
declare module BandCordova {
    class BandTheme {
        private baseColor;
        private highlightsColor;
        private lowlightsColor;
        private secondaryColor;
        private highContrastColor;
        private mutedColor;
        constructor(base: string, highlights: string, lowlights: string, secondary: string, highContrast: string, muted: string);
        static fromJson(json: IBandTheme): BandTheme;
        toJson(): IBandTheme;
        getBaseColor(): string;
        getHighContrastColor(): string;
        getHighlightColor(): string;
        getLowlightColor(): string;
        getMutedColor(): string;
        getSecondaryTextColor(): string;
        hashCode(): string;
        setBaseColor(color: string): BandTheme;
        setHighContrastColor(color: string): BandTheme;
        setHighlightColor(color: string): BandTheme;
        setLowlightColor(color: string): BandTheme;
        setMutedColor(color: string): BandTheme;
        setSecondaryTextColor(color: string): BandTheme;
    }
}
declare module BandCordova {
    class BandTile {
        private pageIcons;
        private pageLayouts;
        private theme;
        private tileIcon;
        private tileId;
        private tileName;
        private tileSmallIcon;
        private badgingEnabled;
        constructor(json: IBandTile);
        toJson(): IBandTile;
        toString(): string;
    }
}
declare module BandCordova {
    class BandTileManager {
        addTitle(tile: BandTile, callback: (error: BandErrorMessage) => void): void;
        getRemainingTileCapacity(callback: (error: BandErrorMessage, capacity?: number) => void): void;
        getTiles(callback: (error: BandErrorMessage, tiles?: BandTile[]) => void): void;
        removePages(tileId: string, callback: (error: BandErrorMessage) => void): void;
        removeTile(tile: BandTile, callback: (error: BandErrorMessage) => void): void;
        setPages(tileId: string, pageData: PageData[], callback: (error: BandErrorMessage) => void): void;
    }
}
