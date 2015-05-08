/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />

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