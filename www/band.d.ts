/// <reference path="src/types/cordova.d.ts" />
declare module cordova.plugins.band {
    module util {
        function extend<T, U>(first: T, second: U): T & U;
    }
}
declare module cordova.plugins.band {
    class BandClient {
        private index;
        private firmware;
        private hardware;
        private connectionState;
        private sensorManager;
        private tileManager;
        private notificationManager;
        private personalizationManager;
        constructor(data: IBandClient, index: number);
        getFirmwareVersion(callback: (error: BandErrorMessage, version?: string) => void): void;
        getHardwareVersion(callback: (error: BandErrorMessage, version?: string) => void): void;
        getConnectionState(): ConnectionState;
        getSensorManager(): BandSensorManager;
        getBandTileManager(): BandTileManager;
        getNotificationManager(): BandNotificationManager;
        getPersonalizationManager(): BandPersonalizationManager;
        exec(success: (yields: any) => any, error: (message: any) => any, action: string, args: string[]): void;
        connect(callback: (error: BandErrorMessage, state?: ConnectionState) => void): void;
        disconnect(callback: (error?: BandErrorMessage) => void): void;
        isConnected(): boolean;
    }
}
declare module cordova.plugins.band {
    class BandClientManager {
        private pairedBands;
        constructor();
        getPairedBands(callback: (error: BandErrorMessage, bands?: BandInfo[]) => void): void;
        create(index: number, callback: (error: BandErrorMessage, bandClient?: BandClient) => void): void;
        static getInstance(): BandClientManager;
    }
}
declare module cordova.plugins.band {
    abstract class BandManagerBase {
        private host;
        constructor(host: BandClient);
        exec(success: (args: any) => any, error: (args: any) => any, action: string, args: string[]): void;
    }
}
declare module cordova.plugins.band {
    class BandIcon {
        private path;
        private base64;
        constructor(content: string, type?: string);
        toBandIcon(callback: (base64Icon: string) => void): void;
        getBase64(): string;
        toJson(): IBandIcon;
        toString(): string;
        static fromJson(json: IBandIcon): BandIcon;
    }
}
declare module cordova.plugins.band {
    class BandInfo {
        private macAddress;
        private name;
        constructor(bandInfo: IBandInfo);
        getMacAddress(): string;
        getName(): string;
    }
}
declare module cordova.plugins.band {
    class BandNotificationManager extends BandManagerBase {
        showDialog(tileUuid: string, dialogTitle: string, dialogBody: string, callback: (error?: BandErrorMessage) => void): void;
        sendMessage(tileUuid: string, messageTitle: string, messageBody: string, date: Date, flags: MessageFlags, callback: (error?: BandErrorMessage) => void): void;
        vibrate(type: VibrationType, callback: (error?: BandErrorMessage) => void): void;
    }
}
declare module cordova.plugins.band {
    class BandPersonalizationManager extends BandManagerBase {
        getMeTileImage(callback: (error: BandErrorMessage, icon?: BandIcon) => void): void;
        getTheme(callback: (error: BandErrorMessage, theme?: BandTheme) => void): void;
        setMeTileImage(icon: BandIcon, callback: (error?: BandErrorMessage) => void): void;
        setTheme(theme: BandTheme, callback: (error?: BandErrorMessage) => void): void;
    }
}
declare module cordova.plugins.band {
    class BandSensorManager extends BandManagerBase {
        private currentHeartRateConsent;
        handleSuccessfulUnregister(...args: any[]): void;
        handleErrorUnregister(...args: any[]): void;
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
declare module cordova.plugins.band {
    class BandTheme {
        private baseColor;
        private highlightsColor;
        private lowlightsColor;
        private secondaryColor;
        private highContrastColor;
        private mutedColor;
        constructor(base: number, highlights: number, lowlights: number, secondary: number, highContrast: number, muted: number);
        static fromJson(json: IBandTheme): BandTheme;
        toJson(): IBandTheme;
        toString(): string;
        getBaseColor(): number;
        getHighContrastColor(): number;
        getHighlightColor(): number;
        getLowlightColor(): number;
        getMutedColor(): number;
        getSecondaryTextColor(): number;
        hashCode(): string;
        setBaseColor(color: number): BandTheme;
        setHighContrastColor(color: number): BandTheme;
        setHighlightColor(color: number): BandTheme;
        setLowlightColor(color: number): BandTheme;
        setMutedColor(color: number): BandTheme;
        setSecondaryTextColor(color: number): BandTheme;
    }
}
declare module cordova.plugins.band {
    class BandTile {
        private uuid;
        private pageIcons;
        private pageLayouts;
        private theme;
        private tileIcon;
        private tileId;
        private tileName;
        private tileSmallIcon;
        private badgingEnabled;
        static BandTileBuilder: BandTileBuilder;
        constructor(json: IBandTile);
        toJson(): IBandTile;
        toString(): string;
    }
}
declare module cordova.plugins.band {
    class BandTileBuilder {
        private tile;
        constructor(uuid: string, tileName: string, tileIcon: BandIcon);
        addPageLayout(pageLayout: PageLayout): BandTileBuilder;
        setPageIcons(...icons: BandIcon[]): BandTileBuilder;
        setPageLayouts(...pageLayouts: PageLayout[]): BandTileBuilder;
        setTheme(theme: BandTheme): BandTileBuilder;
        setTileSmallIcon(icon: BandIcon, badgingEnabled: boolean): BandTileBuilder;
        build(): BandTile;
    }
}
declare module cordova.plugins.band {
    class BandTileManager extends BandManagerBase {
        addTitle(tile: BandTile, callback: (error: BandErrorMessage) => void): void;
        getRemainingTileCapacity(callback: (error: BandErrorMessage, capacity?: number) => void): void;
        getTiles(callback: (error: BandErrorMessage, tiles?: BandTile[]) => void): void;
        removePages(tileId: string, callback: (error: BandErrorMessage) => void): void;
        removeTile(tile: BandTile, callback: (error: BandErrorMessage) => void): void;
        setPages(tileId: string, pageData: PageData[], callback: (error: BandErrorMessage) => void): void;
    }
}
declare module cordova.plugins.band {
    enum ConnectionState {
        BINDING = 0,
        BOUND = 1,
        CONNECTED = 2,
        DISPOSED = 3,
        INVALID_SDK_VERSION = 4,
        UNBINDING = 5,
        UNBOUND = 6,
    }
    enum UserConsent {
        GRANTED = 0,
        DECLINED = 1,
        UNSPECEFIED = 2,
    }
    enum MessageFlags {
        SHOW_DIALOG = 0,
        NONE = 1,
    }
    enum HorizontalAlignment {
        LEFT = 0,
        RIGHT = 1,
        CENTERED = 2,
    }
    enum VerticalAlignment {
        TOP = 0,
        BOTTOM = 1,
        CENTERED = 2,
    }
    enum Color {
    }
    enum ElementColorSource {
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
    enum WrappedTextBlockFont {
        SMALL = 0,
        MEDIUM = 1,
    }
    enum TextBlockFont {
        EXTRA_LARGE_NUMBERS = 0,
        EXTRA_LARGE_NUMBERS_BOLD = 1,
        LARGE = 2,
        MEDIUM = 3,
        SMALL = 4,
    }
    enum TextBlockBaselineAlignment {
        AUTOMATIC = 0,
        RELATIVE = 1,
        ABSOLUTE = 2,
    }
    enum Orientation {
        HORIZONTAL = 0,
        VERTICAL = 1,
    }
    enum BandContactState {
        NOT_WORN = 0,
        UNKNOWN = 1,
        WORN = 2,
    }
    enum BandErrorType {
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
    enum BarcodeType {
        CODE39 = 0,
        PDF417 = 1,
    }
    enum HeartRateQuality {
        AQUIRING = 0,
        LOCKED = 1,
    }
    enum MotionType {
        IDLE = 0,
        JOGGING = 1,
        RUNNING = 2,
        UNKNOWN = 3,
        WALKING = 4,
    }
    enum SampleRate {
        MS128 = 0,
        MS16 = 1,
        MS32 = 2,
    }
    enum UVIndexLevel {
        HIGH = 0,
        LOW = 1,
        MEDIUM = 2,
        NONE = 3,
        VERY_HIGH = 4,
    }
    enum VibrationType {
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
    enum PageElementTypes {
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
    enum PageElementDataTypes {
        BARCODE_DATA = 0,
        FILLED_BUTTON_DATA = 1,
        ICON_DATA = 2,
        PAGE_ELEMENT_DATA = 3,
        TEXT_BLOCK_DATA = 4,
        WRAPPED_TEXT_BLOCK_DATA = 5,
    }
}
declare module cordova.plugins.band {
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
        horizontalAlignment: number;
        verticalAlignment: number;
        isVisible: boolean;
        type: number;
    }
    interface IPagePanel extends IPageElement {
        elements: IPageElement[];
    }
    interface IBarcode extends IPageElement {
        barcodeType: number;
    }
    interface IFilledPanelElement extends IPagePanel {
        backgroundColor: number;
        backgroundColorSource: number;
    }
    interface ITextBlockElement extends IPageElement {
        colorSource: number;
        color: number;
        font: number;
        baselineAlignment: number;
        baseline: number;
        autoWidth: boolean;
    }
    interface IWrappedTextBlockElement extends IPageElement {
        colorSource: number;
        color: number;
        font: number;
        autoHeight: boolean;
    }
    interface IIconElement extends IPageElement {
        colorSource: number;
        color: number;
    }
    interface ITextButtonElement extends IPageElement {
        colorSource: number;
        color: number;
    }
    interface IFilledButtonElement extends IPageElement {
        colorSource: number;
        color: number;
    }
    interface IScrollFlowPanelElement extends IPagePanel {
        orientation: number;
    }
    interface IFlowPanelElement extends IPagePanel {
        orientation: number;
    }
    interface IPageElementData {
        id: number;
        type: number;
    }
    interface IBarcodeData extends IPageElementData {
        barcodeText: string;
        barcodeType: number;
    }
    interface IFilledButtonData extends IPageElementData {
        color: number;
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
    interface ITileEvent {
    }
    interface ITextButtonEvent extends ITileEvent {
        tileId: string;
        tileName: string;
        timestamp: number;
    }
    interface IBandInfo {
        macAddress: string;
        name: string;
    }
    interface IPageLayout {
        root: IPageElement;
    }
    interface IPageData {
        pageUuid: string;
        layoutId: number;
        values: IPageElementData[];
    }
    interface IBandIcon {
        iconBase64: string;
    }
    interface IBandTheme {
        base: number;
        highlights: number;
        lowlights: number;
        secondary: number;
        highContrast: number;
        muted: number;
    }
    interface IBandClient {
        connectionState: string;
    }
    interface IBandTile {
        uuid: string;
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
}
declare module cordova.plugins.band {
    class PageData {
        private pageUuid;
        private layoutId;
        private values;
        constructor(pageUuid: string, layoutId: number);
        update(data: PageElementData): PageData;
        getValues(): PageElementData[];
        toJson(): IPageData;
        static fromJson(json: IPageData): PageData;
    }
}
declare module cordova.plugins.band {
    class PageLayout {
        private root;
        constructor(root: PagePanel<PagePanelAttributes>);
        getRoot(): PagePanel<PagePanelAttributes>;
        setRoot(root: PagePanel<PagePanelAttributes>): PageLayout;
        toJson(): IPageLayout;
        static fromJson(json: IPageLayout): PageLayout;
    }
}
declare module cordova.plugins.band {
    class BarcodeData extends PageElementData {
        private barcodeText;
        private barcodeType;
        constructor(id: number, barcodeText: string, type: BarcodeType);
        getBarCode(): string;
        getBarcodeType(): BarcodeType;
        toJson(): IBarcodeData;
        static fromJson(json: IBarcodeData): BarcodeData;
    }
}
declare module cordova.plugins.band {
    class FilledButtonData extends PageElementData {
        private pressedColor;
        constructor(id: number, color: number);
        getPressedColor(): number;
        setPressedColor(color: number): void;
        toJson(): IFilledButtonData;
        static fromJson(json: IFilledButtonData): FilledButtonData;
    }
}
declare module cordova.plugins.band {
    class IconData extends PageElementData {
        private iconIndex;
        constructor(id: number, iconIndex: number);
        getIconIndex(): number;
        toJson(): IIconData;
        static fromJson(json: IIconData): IconData;
    }
}
declare module cordova.plugins.band {
    class PageElementData {
        protected id: number;
        constructor(id: number);
        getId(): number;
        toJson(): IPageElementData;
        toString(): string;
        static fromJson(json: IPageElementData): PageElementData;
    }
}
declare module cordova.plugins.band {
    class TextBlockData extends PageElementData {
        private text;
        constructor(id: number, text: string);
        getText(): string;
        toJson(): ITextBlockData;
        static fromJson(json: ITextBlockData): TextBlockData;
    }
}
declare module cordova.plugins.band {
    class WrappedTextBlockData extends PageElementData {
        private text;
        constructor(id: number, text: string);
        getText(): string;
        toJson(): IWrappedTextBlockData;
        static fromJson(json: IWrappedTextBlockData): WrappedTextBlockData;
    }
}
declare module cordova.plugins.band {
    interface BarcodeAttributes extends PageElementAttributes {
        barcodeType: BarcodeType;
    }
    class Barcode extends PageElement<BarcodeAttributes> {
        constructor(elementId: number, rect: PageRect, type: BarcodeType);
        toJson(): IBarcode;
        static fromJson(json: IBarcode): Barcode;
    }
}
declare module cordova.plugins.band {
    interface FilledButtonAttributes extends PageElementAttributes {
        color: number;
        colorSource: ElementColorSource;
    }
    class FilledButton extends PageElement<FilledButtonAttributes> {
        constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: number);
        toJson(): IFilledButtonElement;
        static fromJson(json: IFilledButtonElement): FilledButton;
    }
}
declare module cordova.plugins.band {
    interface FilledPanelAttributes extends PagePanelAttributes {
        backgroundColor: number;
        backgroundColorSource: ElementColorSource;
    }
    class FilledPanel extends PagePanel<FilledPanelAttributes> {
        constructor(elementId: number, rect: PageRect, backgroundColorSource: ElementColorSource, backgroundColor: number, ...elements: PageElement<PageElementAttributes>[]);
        toJson(): IFilledPanelElement;
        static fromJson(json: IFilledPanelElement): FilledPanel;
    }
}
declare module cordova.plugins.band {
    interface FlowPanelAttributes extends PagePanelAttributes {
        orientation: Orientation;
    }
    class FlowPanel extends PagePanel<FlowPanelAttributes> {
        constructor(elementId: number, rect: PageRect, orientation: Orientation, ...elements: PageElement<PageElementAttributes>[]);
        toJson(): IFlowPanelElement;
        static fromJson(json: IFlowPanelElement): FlowPanel;
    }
}
declare module cordova.plugins.band {
    interface IconAttributes extends PageElementAttributes {
        color: number;
        colorSource: ElementColorSource;
    }
    class Icon extends PageElement<IconAttributes> {
        constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: number);
        toJson(): IIconElement;
        static fromJson(json: IIconElement): Icon;
    }
}
declare module cordova.plugins.band {
    interface PageElementAttributes {
        elementId: number;
        rect: PageRect;
        margins: Margins;
        horizontalAlignment: HorizontalAlignment;
        verticalAlignment: VerticalAlignment;
        isVisible: boolean;
    }
    class PageElement<TPageElementAttributes extends PageElementAttributes> {
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
}
declare module cordova.plugins.band {
    interface PagePanelAttributes extends PageElementAttributes {
    }
    class PagePanel<TAttributes extends PagePanelAttributes> extends PageElement<TAttributes> {
        protected elements: PageElement<PageElementAttributes>[];
        constructor(elementId: number, rect: PageRect, ...elements: PageElement<PageElementAttributes>[]);
        addElements(...elements: PageElement<PageElementAttributes>[]): void;
        getElements(): PageElement<PageElementAttributes>[];
        toJson(): IPagePanel;
        static fromJson(json: IPagePanel): PagePanel<PagePanelAttributes>;
    }
}
declare module cordova.plugins.band {
    interface ScrollFlowPanelAttributes extends PagePanelAttributes {
        orientation: Orientation;
    }
    class ScrollFlowPanel extends PagePanel<ScrollFlowPanelAttributes> {
        constructor(elementId: number, rect: PageRect, orientation: Orientation, ...elements: PageElement<PageElementAttributes>[]);
        toJson(): IScrollFlowPanelElement;
        static fromJson(json: IScrollFlowPanelElement): ScrollFlowPanel;
    }
}
declare module cordova.plugins.band {
    interface TextBlockAttributes extends PageElementAttributes {
        color: number;
        colorSource: ElementColorSource;
        font: TextBlockFont;
        baselineAlignment: TextBlockBaselineAlignment;
        baseline: number;
        autoWidth: boolean;
    }
    class TextBlock extends PageElement<TextBlockAttributes> {
        constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: number, font?: TextBlockFont, baselineAlignment?: TextBlockBaselineAlignment, baseline?: number, autoWidth?: boolean);
        toJson(): ITextBlockElement;
        static fromJson(json: ITextBlockElement): TextBlock;
    }
}
declare module cordova.plugins.band {
    interface TextButtonAttributes extends PageElementAttributes {
        color: number;
        colorSource: ElementColorSource;
    }
    class TextButton extends PageElement<TextButtonAttributes> {
        constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: number);
        toJson(): ITextButtonElement;
        static fromJson(json: ITextButtonElement): TextButton;
    }
}
declare module cordova.plugins.band {
    interface WrappedTextBlockAttributes extends PageElementAttributes {
        color: number;
        colorSource: ElementColorSource;
        font: WrappedTextBlockFont;
        autoHeight: boolean;
    }
    class WrappedTextBlock extends PageElement<WrappedTextBlockAttributes> {
        constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: number, font?: WrappedTextBlockFont, autoHeight?: boolean);
        toJson(): IWrappedTextBlockElement;
        static fromJson(json: IWrappedTextBlockElement): WrappedTextBlock;
    }
}
declare module cordova.plugins.band {
    class BandAccelerometerEvent extends BandSensorEvent {
        private acceleration;
        constructor(eventObj: IAccelerometerEvent);
        getAccelerationX(): number;
        getAccelerationY(): number;
        getAccelerationZ(): number;
    }
}
declare module cordova.plugins.band {
    class BandCaloriesEvent extends BandSensorEvent {
        private calories;
        constructor(eventObj: ICaloriesEvent);
        getCalories(): number;
    }
}
declare module cordova.plugins.band {
    class BandContactEvent extends BandSensorEvent {
        private contactState;
        constructor(eventObj: IContactEvent);
        getContactState(): BandContactState;
    }
}
declare module cordova.plugins.band {
    class BandDistanceEvent extends BandSensorEvent {
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
}
declare module cordova.plugins.band {
    class BandGyroscopeEvent extends BandSensorEvent {
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
}
declare module cordova.plugins.band {
    class BandHeartRateEvent extends BandSensorEvent {
        private heartRate;
        private quality;
        constructor(eventObj: IHeartRateEvent);
        getHeartRate(): number;
        getQuality(): HeartRateQuality;
    }
}
declare module cordova.plugins.band {
    class BandPedometerEvent extends BandSensorEvent {
        private totalSteps;
        constructor(eventObj: IPedometerEvent);
        getTotalSteps(): number;
    }
}
declare module cordova.plugins.band {
    class BandSensorEvent {
        private timestamp;
        constructor(eventObj: ISensorEvent);
    }
}
declare module cordova.plugins.band {
    class BandSkinTemperatureEvent extends BandSensorEvent {
        private skinTemperature;
        constructor(eventObj: ISkinTemperatureEvent);
        getSkinTemperature(): number;
    }
}
declare module cordova.plugins.band {
    class BandUVEvent extends BandSensorEvent {
        private uvIndexLevel;
        constructor(eventObj: IUVEvent);
        getUVIndexLevel(): UVIndexLevel;
    }
}
