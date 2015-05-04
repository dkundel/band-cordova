/// <reference path="cordova-communication" />


/**
 * All the enums
 */

enum ConnectionState {
  BINDING,
  BOUND,
  CONNECTED,
  DISPOSED,
  INVALID_SDK_VERSION,
  UNBINDING,
  UNBOUND
}

enum UserConsent {
  GRANTED,
  DECLINED,
  UNSPECEFIED
}

enum MessageFlags {
  SHOW_DIALOG,
  NONE
}

enum HorizontalAlignment {
  LEFT,
  RIGHT,
  CENTERED
}

enum VerticalAlignment {
  TOP,
  BOTTOM,
  CENTERED
}

enum Color {
  
}

enum ElementColorSource {
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

enum WrappedTextBlockFont {
  SMALL,
  MEDIUM
}

enum TextBlockFont {
  EXTRA_LARGE_NUMBERS,
  EXTRA_LARGE_NUMBERS_BOLD,
  LARGE,
  MEDIUM,
  SMALL
}

enum TextBlockBaselineAlignment {
  AUTOMATIC,
  RELATIVE,
  ABSOLUTE
}

enum Orientation {
  HORIZONTAL,
  VERTICAL
}

enum BandContactState {
  NOT_WORN,
  UNKNOWN,
  WORN
}

enum BandErrorType {
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

enum BarcodeType {
  CODE39,
  PDF417
}

enum HeartRateQuality {
  AQUIRING,
  LOCKED
}

enum MotionType {
  IDLE,
  JOGGING,
  RUNNING,
  UNKNOWN,
  WALKING
}

enum SampleRate {
  MS128,
  MS16,
  MS32
}

enum UVIndexLevel {
  HIGH,
  LOW,
  MEDIUM,
  NONE,
  VERY_HIGH
}

enum VibrationType {
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
  
  constructor(eventObj: ISensorEvent) {
    this.timestamp = new Date(eventObj.timestamp);
  }
}

class BandAccelerometerEvent extends BandSensorEvent {
  private acceleration: {
    x: number;
    y: number;
    z: number;
  }
  
  constructor(eventObj: IAccelerometerEvent) {
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
  
  constructor(eventObj: ICaloriesEvent) {
    this.calories = eventObj.calories;
    super(eventObj);
  }
  
  getCalories(): number {
    return this.calories;
  }
}

class BandContactEvent extends BandSensorEvent {
  private contactState: BandContactState;
  
  constructor(eventObj: IContactEvent) {
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
  
  constructor(eventObj: IDistanceEvent) {
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
  
  constructor(eventObj: IGyroscopeEvent) {
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
  
  constructor(eventObj: IHeartRateEvent) {
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
  
  constructor(eventObj: IPedometerEvent) {
    this.totalSteps = eventObj.totalSteps;
    super(eventObj);
  }
  
  getTotalSteps(): number {
    return this.totalSteps;
  }
}

class BandSkinTemperatureEvent extends BandSensorEvent {
  private skinTemperature: number;
  
  constructor(eventObj: ISkinTemperatureEvent) {
    this.skinTemperature = eventObj.skinTemperature;
    super(eventObj);
  }
  
  getSkinTemperature(): number {
    return this.skinTemperature;
  }
}

class BandUVEvent extends BandSensorEvent {
  private uvIndexLevel: UVIndexLevel;
  
  constructor(eventObj: IUVEvent) {
    this.uvIndexLevel = UVIndexLevel[eventObj.uvIndexLevel];
    super(eventObj);
  }
  
  getUVIndexLevel(): UVIndexLevel {
    return this.uvIndexLevel;
  }
}

