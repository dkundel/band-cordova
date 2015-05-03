declare enum ConnectionState {
	CONNECTED
}

declare enum UserConsent {
	GRANTED
}

declare enum MessageFlags {
	SHOW_DIALOG
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
	Automatic,
	Relative
}

declare enum Orientation {
	Horizontal,
	Vertical
}

interface BasePageElementAttributes {
	ElementId: number,
	Rect: {x: number, y: number, width: number, height: number};
	Margins: {x: number, y: number, width: number, height: number};
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

interface BandInfo {}

interface BandHeartRateEvent {}

interface BandSensorManager {
	getCurrentgetCurrentHeartRateConsent(): UserConsent;
	requestHeartRateConsent(callback: (consentGiven: boolean) => void): void;
	registerHeartRateEventListener(callback: (event: BandHeartRateEvent) => void): void;
	unregisterHeartRateEventListener(callback: (event: BandHeartRateEvent) => void): void;
}

interface BandIcon {
	toBandIcon(path: string): BandIcon;
}

interface BandTile {
	Builder: BandTileBuilder;	
}

interface Panel {
}

interface PageLayout {
	new (panel: Panel): PageLayout;
}

interface PageWrappedTextBlockData {
	new (pageElementUuid: string, message: string);
}

interface PageData {
	new (pageUuid: string, layout: string): PageData;
	update(data: PageWrappedTextBlockData): PageData;
}

interface BandTileBuilder {
	new (uuid: string, tileName: string, tileIcon: BandIcon): BandTileBuilder;
	setTileSmallIcon(icon: BandIcon): BandTileBuilder;
	setPageLayouts(pageLayout: PageLayout): BandTileBuilder;
	build(): BandTile;
}

interface BandTileManager {
	getTiles(callback: (tiles: BandTile[]) => void): void;
	addTitle(activity: any, tile: BandTile, callback: (successful: boolean) => void): void;
	removeTile(tile: BandTile, callback: (successful: boolean) => void): void;
	setPages(pageData: PageData, callback: (successful: boolean) => void): void;
}

interface BandNotificationManager {
	showDialog(tileUuid: string, dialogTitle: string, dialogBody: string, callback: (successful: boolean) => void): void;
	sendMessage(tileUuid: string, messageTitle: string, messageBody: string, date: Date, flags: MessageFlags, callback: (successful: boolean) => void): void;
	
}

interface BandClient {
	getFirmwareVersion(callback: (version: string) => void): void;
	getHarwareVersion(callback: (version: string) => void): void;
	getSensorManager(): BandSensorManager;
	getBandTileManager(): BandTileManager;
	getNotificationManager(): BandNotificationManager;
}

interface BandClientManager {
	getInstance() : BandClient;
	getPairedBands(): BandInfo[];
	create(activity, pairedBand: BandInfo): BandClient;
	connect(callback: (state: ConnectionState) => void): void;
}