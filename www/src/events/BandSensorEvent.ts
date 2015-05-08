/// <reference path="../enums" />
/// <reference path="../interfaces" />

class BandSensorEvent {
  private timestamp: Date;
  
  constructor(eventObj: ISensorEvent) {
    this.timestamp = new Date(eventObj.timestamp);
  }
}