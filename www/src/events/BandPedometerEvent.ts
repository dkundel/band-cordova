/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />

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