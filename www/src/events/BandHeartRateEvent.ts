/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />

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