module cordova.plugins.band {
  /**
   * Event data
   */
  export interface ISensorEvent {
    timestamp: number;
    id: number;
  }
  
  export interface IAccelerometerEvent extends ISensorEvent {
    acceleration: {
      x: number;
      y: number;
      z: number;
    };
  }
  
  export interface ICaloriesEvent extends ISensorEvent {
    calories: number;
  }
  
  export interface IContactEvent extends ISensorEvent {
    contactState: string;
  }
  
  export interface IDistanceEvent extends ISensorEvent {
    motionType: string;
    pace: number;
    speed: number;
    totalDistance: number;
  }
  
  export interface IGyroscopeEvent extends ISensorEvent {
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
  
  export interface IHeartRateEvent extends ISensorEvent {
    heartRate: number;
    quality: string;
  }
  
  export interface IPedometerEvent extends ISensorEvent {
    totalSteps: number;
  }
  
  export interface ISkinTemperatureEvent extends ISensorEvent {
    skinTemperature: number;
  }
  
  export interface IUVEvent extends ISensorEvent {
    uvIndexLevel: string;
  }
  
  /**
   * Page elements
   */
   
  export interface PageRect {
    x: number;
    y: number;
    width: number;
    height: number;
  }
  
  export interface Margins {
    top: number;
    left: number;
    right: number;
    bottom: number;
  }
  
  export interface IPageElement {
    elementId: number;
    rect: PageRect;
    margins: Margins;
    horizontalAlignment: string;
    verticalAlignment: string;
    isVisible: boolean;
    type: string;
  }
  
  export interface IPagePanel extends IPageElement {
    elements: IPageElement[];
  }
  
  export interface IBarcode extends IPageElement {
    barcodeType: string;
  }
  
  export interface IFilledPanelElement extends IPagePanel {
    backgroundColor: string;
    backgroundColorSource: string;
  }
  
  export interface ITextBlockElement extends IPageElement {
    colorSource: string;
    color: string;
    font: string;
    baselineAlignment: string;
    baseline: number;
    autoWidth: boolean;
  }
  
  export interface IWrappedTextBlockElement extends IPageElement {
    colorSource: string;
    color: string;
    font: string;
    autoHeight: boolean;
  }
  
  export interface IIconElement extends IPageElement {
    colorSource: string;
    color: string;
  }
  
  export interface ITextButtonElement extends IPageElement {
    colorSource: string;
    color: string;
  }
  
  export interface IFilledButtonElement extends IPageElement {
    colorSource: string;
    color: string;
  }
  
  export interface IScrollFlowPanelElement extends IPagePanel {
    orientation: string;
  }
  
  export interface IFlowPanelElement extends IPagePanel {
    orientation: string;
  }
  
  /**
   * Page element data
   */
   
  export interface IPageElementData {
     id: number;
     type: string;
   }
   
  export interface IBarcodeData extends IPageElementData {
    barcodeText: string;
    barcodeType: string;
  }
  
  export interface IFilledButtonData extends IPageElementData {
    color: string;
  }
  
  export interface IIconData extends IPageElementData {
    iconIndex: number;
  }
  
  export interface ITextBlockData extends IPageElementData {
    text: string;
  }
  
  export interface IWrappedTextBlockData extends IPageElementData {
    text: string;
  }
  
  
  /**
   * Tile event data
   */
   
  export interface ITileEvent {
     
  }
   
  export interface ITextButtonEvent extends ITileEvent {
    tileId: string;
    tileName: string;
    timestamp: number;
  }
  
  /**
   * BandInfo
   */
  
  export interface IBandInfo {
    macAddress: string;
    name: string;
  }
  
  
  /**
   * BandTile data
   */
   
  export interface IPageLayout {
    root: IPageElement;
  }
  
  export interface IPageData {
    pageUuid: string;
    layoutId: number;
    values: IPageElementData[];
  }
  
  export interface IBandIcon {
    iconBase64: string;
  }
  
  export interface IBandTheme {
    base: number;
    highlights: number;
    lowlights: number;
    secondary: number;
    highContrast: number;
    muted: number;
  }
  
  
  /**
   * Band data
   */
  
  export interface IBandClient {
    connectionState: string;
  }
  
  export interface IBandTile {
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
  
  export interface BandErrorMessage {
    message: string;
  }
  
  export interface IBandTile {
    
  }
}