/**
 * All the enums
 */

declare enum ConnectionState {
	BINDING,
	BOUND,
	CONNECTED,
	DISPOSED,
	INVALID_SDK_VERSION,
	UNBINDING,
	UNBOUND
}

declare enum UserConsent {
	GRANTED
}

declare enum MessageFlags {
	SHOW_DIALOG,
	NONE
}

declare enum HorizontalAlignment {
	LEFT,
	RIGHT,
	CENTERED
}

declare enum VerticalAlignment {
	TOP,
	BOTTOM,
	CENTERED
}

declare enum Color {
	
}

declare enum ElementColorSource {
	BAND_BASE,
	BAND_HIGH_CONTRAST,
	BAND_HIGHLIGHT,
	BAND_LOWLIGHT,
	BAND_MUTED,
	BAND_SECONDARY_TEXT,
	CUSTOM,
	TILE_BASE,
	TILE_HIGH_CONTRAST,
	TILE_HIGHLIGHT,
	TILE_LOWLIGHT,
	TILE_MUTED,
	TILE_SECONDARY_TEXT
}

declare enum BaseFonts {
	TextBlockFont,
	WrappedTextBlockFont,
	Small,
	Medium
}

declare enum TextBlockFonts {
	TextBlockFont,
	WrappedTextBlockFont,
	Small,
	Medium,
	Large,
	ExtraLargeNumbers,
	ExtraLargeNumbersBold
}

declare enum BaselineAlignment {
	AUTOMATIC,
	RELATIVE
}

declare enum Orientation {
	HORIZONTAL,
	VERTICAL
}

declare enum BandContactState {
	NOT_WORN,
	UNKNOWN,
	WORN
}

declare enum BandErrorType {
	BAND_FULL_ERROR,
	DEVICE_ERROR,
	INVALID_PAGE_DATA_ERROR,
	PERMISSION_ERROR,
	SERVICE_ERROR,
	TILE_ALREADY_EXISTS_ERROR,
	TILE_NOT_FOUND_ERROR,
	TOO_MANY_CONCURRENT_COMMANDS_ERROR,
	UNKNOWN_ERROR,
	UNSUPPORTED_SDK_VERSION_ERROR
}

declare enum BarcodeType {
	CODE39,
	PDF417
}

declare enum HeartRateQuality {
	AQUIRING,
	LOCKED
}

declare enum MotionType {
	IDLE,
	JOGGING,
	RUNNING,
	UNKNOWN,
	WALKING
}

declare enum SampleRate {
	MS128,
	MS16,
	MS32
}

/**
 * Sensor Events
 */

interface BandSensorEvent {
	getTimestamp(): Date;
}

interface BandAccelerometerEvent extends BandSensorEvent {
	getAccelerationX(): number;
	getAccelerationY(): number;
	getAccelerationZ(): number;
}

interface BandCaloriesEvent extends BandSensorEvent {
	getCalories(): number;
}

interface BandContactEvent extends BandSensorEvent {
	getContactState(): BandContactState;
}

interface BandDistanceEvent extends BandSensorEvent {
	getMotionType(): MotionType;
	getPace(): number;
	getSpeed(): number;
	getTotalDistance(): number;
}

interface BandGyroscopeEvent extends BandSensorEvent {
	getAccelerationX(): number;
	getAccelerationY(): number;
	getAccelerationZ(): number;
	getAngularVelocityX(): number;
	getAngularVelocityY(): number;
	getAngularVelocityZ(): number;
}


interface BandHeartRateEvent extends BandSensorEvent {
	getHeartRate(): number;
	getQuality(): HeartRateQuality;
}

interface BandPedometerEvent extends BandSensorEvent {
	getTotalSteps(): number;
}

interface BandSkinTemperatureEvent extends BandSensorEvent {
	getSkinTemperature(): number;
}

interface BandUVEvent extends BandSensorEvent {
	getUVIndexLevel(): UVLevelIndex;
}

/**
 * Page Element Attributes
 */

interface Margins {
	top: number,
	left: number,
	right: number,
	bottom: number
}

interface BasePageElementAttributes {
	ElementId: number,
	Rect: PageRect;
	Margins: Margins;
	HorizontalAlignment: HorizontalAlignment,
	VerticalAlignment: VerticalAlignment
}

interface FilledPanelAttributes extends BasePageElementAttributes {
	BackgroundColor: Color
}

interface TextBlockAttributes extends BasePageElementAttributes {
	Color: Color,
	Font: TextBlockFonts,
	BaselineAlignment: BaselineAlignment,
	Baseline: number,
	AutoWidth: boolean
}

interface WrappedTextBlockAttributes extends BasePageElementAttributes {
	Color: Color,
	Font: BaseFonts,
	AutoHeight: boolean
}

interface IconAttributes extends BasePageElementAttributes {
	Color: Color
}

interface TextButtonAttributes extends BasePageElementAttributes {
	Color: Color
}

interface FilledButtonAttributes extends BasePageElementAttributes {
	Color: Color
}

interface ScrollFlowPanelAttributes extends BasePageElementAttributes {
	Color: Color,
	Orientation: Orientation
}

interface FlowPanelAttributes extends BasePageElementAttributes {
	Orientation: Orientation
}


/**
 * Page Elements
 */
 
interface PageElement {
	getAttributes(): BasePageElementAttributes;
	setAttributes(attr: BasePageElementAttributes): void;
	isVisible(): boolean;
	setVisible(visible: boolean): void;
	getId(): number;
	setId(id: number);
}
 
interface PageElementData {
	getId(): number;
}
 
interface PageRect {
	x: number;
	y: number;
	width: number;
	height: number;
}
 
interface Barcode extends PageElement {
	new (bound: PageRect, type: BarcodeType): Barcode;
	getBarcodeType(): BarcodeType;
	setBarcodeType(type: BarcodeType): Barcode;
}
 
interface BarcodeData extends PageElementData {
	new (id: number, barcodeText: string, type: BarcodeType): BarcodeData;
	getBarCode(): string;
	getBarcodeType(): BarcodeType;
}
 
interface FilledButton extends PageElement {
	new (bound: PageRect): FilledButton;
	getAttributes(): FilledButtonAttributes;
	setAttributes(attr: FilledButtonAttributes): void;
}
 
interface FilledButtonData extends PageElementData {
	new (id: number, color: number): FilledButtonData;
	getPressedColor(): number;
	setPressedColor(color: number): void;
}
 
interface PagePanel extends PageElement {
	addElements(...elements: PageElement[]): void;
	getElements(): PageElement[];
}
 
interface FilledPanel extends PagePanel {
	new (bound: PageRect, ...elements: PageElement[]): FilledPanel;
	getAttributes(): FilledPanelAttributes;
	setAttributes(attr: FilledPanelAttributes): void;
}
 
interface FlowPanel extends PagePanel {
	new (bound: PageRect, orientation: Orientation, ...elements: PageElement[]): FlowPanel;
	getAttributes(): FlowPanelAttributes;
	setAttributes(attr: FlowPanelAttributes): void;
}
 
interface Icon extends PageElement {
	new (bound: PageRect): Icon;
	getAttributes(): IconAttributes;
	setAttributes(attr: IconAttributes): void;
} 
 
interface IconData extends PageElementData {
	new (id: number, iconIndex: number): IconData;
	getIconIndex(): number;
}

interface ScrollFlowPanel extends FlowPanel {
	
}

 
/**
 * General Band stuff
 */

interface BandInfo {
	getMacAddress(): string;
	getName(): string;
}

interface BandSensorManager {
	getCurrentgetCurrentHeartRateConsent(): UserConsent;
	unregisterHeartRateEventListener(callback: (event: BandHeartRateEvent) => void): void;
	registerAccelerometerEventListener(reportingInterval: SampleRate, callback: (event: BandAccelerometerEvent) => void): void;
	registerCaloriesEventListener(callback: (event: BandCaloriesEvent) => void): void;
	registerContactEventListener(callback: (event: BandContactEvent) => void): void;
	registerDistanceEventListener(callback: (event: BandDistanceEvent) => void): void;
	registerGyroscopeEventListener(reportingInterval: SampleRate, callback: (event: BandGyroscopeEvent) => void): void;
	registerHeartRateEventListener(callback: (event: BandHeartRateEvent) => void): void;
	registerPedometerEventListener(callback: (event: BandPedometerEvent) => void): void;
	registerSkinTemperatureEventListener(callback: (event: BandSkinTemperatureEvent) => void): void;
	registerUVEventListener(callback: (event: BandUVEvent) => void): void;
	requestHeartRateConsent(callback: (consentGiven: boolean) => void): void;
	unregisterAccelerometerEventListener(callback: (event: BandAccelerometerEvent) => void): void;
	unregisterAccelerometerEventListeners(): void;
	unregisterAllListeners(): void;
	unregisterCaloriesEventListener(callback: (event: BandCaloriesEvent) => void): void;
	unregisterCaloriesEventListeners(): void;
	unregisterContactEventListener(callback: (event: BandContactEvent) => void): void;
	unregisterContactEventListeners(): void;
	unregisterDistanceEventListener(callback: (event: BandDistanceEvent) => void): void;
	unregisterDistanceEventListeners(): void;
	unregisterGyroscopeEventListener(callback: (event: BandGyroscopeEvent) => void): void;
	unregisterGyroscopeEventListeners(): void;
	unregisterHeartRateEventListener(callback: (event: BandHeartRateEvent) => void): void;
	unregisterHeartRateEventListeners(): void;
	unregisterPedometerEventListener(callback: (event: BandPedometerEvent) => void): void;
	unregisterPedometerEventListeners(): void;
	unregisterSkinTemperatureEventListener(callback: (event: BandSkinTemperatureEvent) => void): void;
	unregisterSkinTemperatureEventListeners(): void;
	unregisterUVEventListener(callback: (event: BandUVEvent) => void): void;
	unregisterUVEventListeners(): void;
}

interface BandIcon {
	toBandIcon(path: string): BandIcon;
}

interface BandTile {
	Builder: BandTileBuilder;	
	getPageIcons(): BandIcon[];
	getPageLayouts(): PageLayout[];
	getTheme(): BandTheme;
	getTileIcon(): BandIcon;
	getTileId(): string;
	getTileName(): string;
	getTileSmallIcon(): BandIcon;
	isBadgingEnabled(): boolean;
}

interface BandTheme {
	new (base: number, highlights: number, lowlights: number, secondary: number, highContrast: number, muted: number): BandTheme;
	getBaseColor(): number;
	getHighContrastColor(): number;
	getHighlightColor(): number;
	getLowlightColor(): number;
	getMutedColor(): number;
	getSecondaryTextColor(): number;
	hashCode(): number;
	setBaseColor(color: number): BandTheme;
	setHighContrastColor(color: number): BandTheme;
	setHighlightColor(color: number): BandTheme;
	setLowlightColor(color: number): BandTheme;
	setMutedColor(color: number): BandTheme;
	setSecondaryTextColor(color: number): BandTheme;
}

interface PageLayout {
	new (root: PagePanel): PageLayout;
	getRoot(): PagePanel;
	setRoot(root: PagePanel): void;
}

interface PageWrappedTextBlockData {
	new (pageElementUuid: string, message: string);
}

interface PageData {
	new (pageUuid: string, layoutId: number): PageData;
	getPageId(): string,
	getPageLayoutIndex(): number;
	update(data: PageElementData): PageData;
	getValues(): PageElementData[];
}

interface BandTileBuilder {
	new (uuid: string, tileName: string, tileIcon: BandIcon): BandTileBuilder;
	addPageLayout(pageLayout: PageLayout): BandTileBuilder;
	setPageIcons(...icons: BandIcon[]): BandTileBuilder;
	setPageLayouts(...pageLayouts: PageLayout[]): BandTileBuilder;
	setTheme(theme: BandTheme): BandTileBuilder;
	setTileSmallIcon(icon: BandIcon, badgingEnabled: boolean): BandTileBuilder;
	build(): BandTile;
}

interface BandTileManager {
	addTitle(tile: BandTile, callback: (successful: boolean) => void): void;
	getRemainingTileCapacity(callback: (capacity: number) => void): void;
	getTiles(callback: (tiles: BandTile[]) => void): void;
	removePages(tileId: string, callback: (successful: boolean) => void): void;
	removeTile(tile: BandTile, callback: (successful: boolean) => void): void;
	setPages(tileId: string, pageData: PageData[], callback: (successful: boolean) => void): void;
}

interface BandNotificationManager {
	showDialog(tileUuid: string, dialogTitle: string, dialogBody: string, callback: (successful: boolean) => void): void;
	sendMessage(tileUuid: string, messageTitle: string, messageBody: string, date: Date, flags: MessageFlags, callback: (successful: boolean) => void): void;
	vibrate(type: VibrationType, callback: () => void): void;
}

interface BandPersonalizationManager {
	getMeTileImage(callback: (base64Image: string) => void): void;
	getTheme(callback: (theme: BandTheme) => void): void;
	setMeTileImage(base64Image: string, callback: () => void): void;
	setTheme(theme: BandTheme, callback: () => void): void;
}

interface BandClient {
	getFirmwareVersion(callback: (version: string) => void): void;
	getHarwareVersion(callback: (version: string) => void): void;
	getSensorManager(): BandSensorManager;
	getBandTileManager(): BandTileManager;
	getNotificationManager(): BandNotificationManager;
	connect(callback: (state: ConnectionState) => void): void;
	disconnect(callback: () => void): void;
	getConnectionState(): ConnectionState;
	getPersonalizationManager(): BandPersonalizationManager;
	isConnected(): boolean;
	registerConnectionCallback(callback: (state: ConnectionState) => void): void;
	unregisterConnectionCallback(callback: (state: ConnectionState) => void): void;
}

interface BandClientManager {
	getInstance() : BandClient;
	getPairedBands(): BandInfo[];
	create(activity, pairedBand: BandInfo): BandClient;
}