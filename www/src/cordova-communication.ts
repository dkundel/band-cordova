/**
 * Event data
 */
interface ISensorEvent {
  timestamp: number;
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

interface IPageElement {
  elementId: number;
  rect: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  margins: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
  horizontalAlignment: string;
  verticalAlignment: string;
}

interface IFilledPanelElement extends IPageElement {
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
  autoHeight: string;
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

interface IScrollFlowPanelElement extends IPageElement {
  colorSource: string;
  color: string;
  orientation: string;
}

interface IFlowPanelElement extends IPageElement {
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

//TODO