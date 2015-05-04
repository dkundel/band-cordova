/// <reference path="cordova-communication" />


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

/**
 * Event data
 */

class BandSensorEvent {
  private timestamp: Date;
  
  constructor(eventObj: SensorEventData) {
    this.timestamp = new Date(eventObj.timestamp);
  }
}

class BandAccelerometerEvent extends BandSensorEvent {
  private acceleration: {
    x: number;
    y: number;
    z: number;
  }
  
  constructor(eventObj: AccelerometerEventData) {
    this.acceleration = eventObj.acceleration;
    super(eventObj);
  }
  
  getAccelerationX(): number {
    return this.acceleration.x;
  }
  
  getAccelerationY(): number {
    return this.acceleration.y;
  }
  
  getAccelerationZ(): number {
    return this.acceleration.z;
  }
}

class BandCaloriesEvent extends BandSensorEvent {
  private calories: number;
  
  constructor(eventObj: CaloriesEventData) {
    this.calories = eventObj.calories;
    super(eventObj);
  }
  
  getCalories(): number {
    return this.calories;
  }
}

class BandContactEvent extends BandSensorEvent {
  private contactState: BandContactState;
  
  constructor(eventObj: ContactEventData) {
    this.contactState = BandContactState[eventObj.contactState];
    super(eventObj);
  }
  
  getContactState(): BandContactState {
    return this.contactState;
  }
}

class BandDistanceEvent extends BandSensorEvent {
  private motionType: MotionType;
  private pace: number;
  private speed: number;
  private totalDistance: number;
  
  constructor(eventObj: DistanceEventData) {
    this.motionType = MotionType[eventObj.motionType];
    this.pace = eventObj.pace;
    this.speed = eventObj.speed;
    this.totalDistance = eventObj.totalDistance;
    super(eventObj);
  }
  
  getMotionType(): MotionType {
    return this.motionType;
  }
  
  getPace(): number {
    return this.pace;
  }
  
  getSpeed(): number {
    return this.speed;
  }
  
  getTotalDistance(): number {
    return this.totalDistance;
  }
}

class BandGyroscopeEvent extends BandSensorEvent {
  private acceleration: {
    x: number; 
    y: number;
    z: number;
  }
  
  private angularVelocity: {
    x: number;
    y: number;
    z: number;
  }
  
  constructor(eventObj: GyroscopeEventData) {
    this.acceleration = eventObj.acceleration;
    this.angularVelocity = eventObj.angularVelocity;
    super(eventObj);
  }
  
  getAccelerationX(): number {
    return this.acceleration.x;
  }
  
  getAccelerationY(): number {
    return this.acceleration.y;
  }
  
  getAccelerationZ(): number {
    return this.acceleration.z;
  }
  
  getAngularVelocityX(): number {
    return this.angularVelocity.x;
  }
  
  getAngularVelocityY(): number {
    return this.angularVelocity.y;
  }
  
  getAngularVelocityZ(): number {
    return this.angularVelocity.z;
  }
}


class BandHeartRateEvent extends BandSensorEvent {
  private heartRate: number;
  private quality: HeartRateQuality;
  
  constructor(eventObj: HeartRateEventData) {
    this.heartRate = eventObj.heartRate;
    this.quality = HeartRateQuality[eventObj.quality];
    super(eventObj);
  }
  
  getHeartRate(): number {
    return this.heartRate;
  }
  
  getQuality(): HeartRateQuality {
    return this.quality;
  }
}

class BandPedometerEvent extends BandSensorEvent {
  private totalSteps: number;
  
  constructor(eventObj: PedometerEventData) {
    this.totalSteps = eventObj.totalSteps;
    super(eventObj);
  }
  
  getTotalSteps(): number {
    return this.totalSteps;
  }
}

class BandSkinTemperatureEvent extends BandSensorEvent {
  private skinTemperature: number;
  
  constructor(eventObj: SkinTemperatureEventData) {
    this.skinTemperature = eventObj.skinTemperature;
    super(eventObj);
  }
  
  getSkinTemperature(): number {
    return this.skinTemperature;
  }
}

class BandUVEvent extends BandSensorEvent {
  private uvIndexLevel: UVIndexLevel;
  
  constructor(eventObj: UVEventData) {
    this.uvIndexLevel = UVIndexLevel[eventObj.uvIndexLevel];
    super(eventObj);
  }
  
  getUVIndexLevel(): UVIndexLevel {
    return this.uvIndexLevel;
  }
}

