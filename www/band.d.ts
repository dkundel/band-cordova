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
  GRANTED,
  DECLINED,
  UNSPECEFIED
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

declare enum WrappedTextBlockFont {
  SMALL,
  MEDIUM
}

declare enum TextBlockFont {
  EXTRA_LARGE_NUMBERS,
  EXTRA_LARGE_NUMBERS_BOLD,
  LARGE,
  MEDIUM,
  SMALL
}

declare enum TextBlockBaselineAlignment {
  AUTOMATIC,
  RELATIVE,
  ABSOLUTE
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

declare enum UVIndexLevel {
  HIGH,
  LOW,
  MEDIUM,
  NONE,
  VERY_HIGH
}

declare enum VibrationType {
  NOTIFICATION_ALARM,
  NOTIFICATION_ONE_TONE,
  NOTIFICATION_TIMER,
  NOTIFICATION_TWO_TONE,
  ONE_TONE_HIGH,
  RAMP_DOWN,
  RAMP_UP,
  THREE_TONE_HIGH,
  TWO_TONE_HIGH
}

interface BandErrorMessage {
  message: string;
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
  getUVIndexLevel(): UVIndexLevel;
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
  elementId: number,
  rect: PageRect;
  margins: Margins;
  horizontalAlignment: HorizontalAlignment;
  verticalAlignment: VerticalAlignment;
  visible: boolean
}

interface FilledPanelAttributes extends BasePageElementAttributes {
  backgroundColor: string;
  backgroundColorSource: ElementColorSource;
}

interface TextBlockAttributes extends BasePageElementAttributes {
  colorSource: ElementColorSource;
  color: string;
  font: TextBlockFont;
  baselineAlignment: TextBlockBaselineAlignment;
  baseline: number;
  autoWidth: boolean;
}

interface WrappedTextBlockAttributes extends BasePageElementAttributes {
  colorSource: ElementColorSource,
  color: string,
  font: WrappedTextBlockFont,
  autoHeight: boolean
}

interface IconAttributes extends BasePageElementAttributes {
  colorSource: ElementColorSource,
  color: string
}

interface TextButtonAttributes extends BasePageElementAttributes {
  colorSource: ElementColorSource,
  color: string
}

interface FilledButtonAttributes extends BasePageElementAttributes {
  colorSource: ElementColorSource,
  color: string
}

interface ScrollFlowPanelAttributes extends BasePageElementAttributes {
  colorSource: ElementColorSource,
  color: string,
  orientation: Orientation
}

interface FlowPanelAttributes extends BasePageElementAttributes {
  orientation: Orientation
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
  new (id: number, color: string): FilledButtonData;
  getPressedColor(): string;
  setPressedColor(color: string): void;
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
  new (bound: PageRect, orientation: Orientation, ...elements: PageElement[]): ScrollFlowPanel;
  getAttributes(): ScrollFlowPanelAttributes;
  setAttributes(attr: ScrollFlowPanelAttributes): void;
}

interface TextBlock extends PageElement {
  new (bound: PageRect, font: TextBlockFont, baseline: number): TextBlock;
  getAttributes(): TextBlockAttributes;
  setAttributes(attr: TextBlockAttributes): void;
}

interface TextBlockData extends PageElementData {
  new (id: number, text: string): TextBlockData;
  getText(): string;
}

interface TextButton extends PageElement {
  new (bound: PageRect): TextButton;
  getAttributes(): TextButtonAttributes;
  setAttributes(attr: TextButtonAttributes): void;
}

interface TextButtonData extends PageElementData {
  new (id: number, text: string): TextButtonData;
  getText(): string;
}

interface WrappedTextBlock extends PageElement {
  new (bound: PageRect, font: WrappedTextBlockFont): WrappedTextBlock;
  getAttributes(): WrappedTextBlockAttributes;
  setAttributes(attr: WrappedTextBlockAttributes): void;
}

interface WrappedTextBlockData extends PageElementData {
  new (id: number, text: string): WrappedTextBlockData;
  getText(): string;
}

/**
 * User events
 */

interface TileEvent {
  
}

interface TextButtonEvent extends TileEvent {
  getTileID(): string;
  getTileName(): string;
  getTimestamp(): Date;
  toString(): string;
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
  registerAccelerometerEventListener(reportingInterval: SampleRate, callback: (error: BandErrorMessage, event?: BandAccelerometerEvent) => void): void;
  registerCaloriesEventListener(callback: (error: BandErrorMessage, event?: BandCaloriesEvent) => void): void;
  registerContactEventListener(callback: (error: BandErrorMessage, event?: BandContactEvent) => void): void;
  registerDistanceEventListener(callback: (error: BandErrorMessage, event?: BandDistanceEvent) => void): void;
  registerGyroscopeEventListener(reportingInterval: SampleRate, callback: (error: BandErrorMessage, event?: BandGyroscopeEvent) => void): void;
  registerHeartRateEventListener(callback: (error: BandErrorMessage, event?: BandHeartRateEvent) => void): void;
  registerPedometerEventListener(callback: (error: BandErrorMessage, event?: BandPedometerEvent) => void): void;
  registerSkinTemperatureEventListener(callback: (error: BandErrorMessage, event?: BandSkinTemperatureEvent) => void): void;
  registerUVEventListener(callback: (error: BandErrorMessage, event?: BandUVEvent) => void): void;
  requestHeartRateConsent(callback: (consentGiven: boolean) => void): void;
  unregisterAccelerometerEventListener(callback: (error: BandErrorMessage, event?: BandAccelerometerEvent) => void): void;
  unregisterAccelerometerEventListeners(): void;
  unregisterAllListeners(): void;
  unregisterCaloriesEventListener(callback: (error: BandErrorMessage, event?: BandCaloriesEvent) => void): void;
  unregisterCaloriesEventListeners(): void;
  unregisterContactEventListener(callback: (error: BandErrorMessage, event?: BandContactEvent) => void): void;
  unregisterContactEventListeners(): void;
  unregisterDistanceEventListener(callback: (error: BandErrorMessage, event?: BandDistanceEvent) => void): void;
  unregisterDistanceEventListeners(): void;
  unregisterGyroscopeEventListener(callback: (error: BandErrorMessage, event?: BandGyroscopeEvent) => void): void;
  unregisterGyroscopeEventListeners(): void;
  unregisterHeartRateEventListener(callback: (error: BandErrorMessage, event?: BandHeartRateEvent) => void): void;
  unregisterHeartRateEventListeners(): void;
  unregisterPedometerEventListener(callback: (error: BandErrorMessage, event?: BandPedometerEvent) => void): void;
  unregisterPedometerEventListeners(): void;
  unregisterSkinTemperatureEventListener(callback: (error: BandErrorMessage, event?: BandSkinTemperatureEvent) => void): void;
  unregisterSkinTemperatureEventListeners(): void;
  unregisterUVEventListener(callback: (error: BandErrorMessage, event?: BandUVEvent) => void): void;
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
  new (base: string, highlights: string, lowlights: string, secondary: string, highContrast: string, muted: string): BandTheme;
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
  setMeTileImage(icon: BandIcon, callback: () => void): void;
  setTheme(theme: BandTheme, callback: () => void): void;
}

interface BandClient {
  getFirmwareVersion(callback: (version: string) => void): void;
  getHardwareVersion(callback: (version: string) => void): void;
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
  getInstance() : BandClientManager;
  getPairedBands(callback: (bands: BandInfo[]) => void): void;
  create(index: number, callback: (bandClient: BandClient) => void): BandClient;
}