/// <reference path="enums" />


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
  type: PageElementTypes;
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