module cordova.plugins.band {
  export class BandPedometerEvent extends BandSensorEvent {
    private totalSteps: number;
    
    constructor(eventObj: IPedometerEvent) {
      this.totalSteps = eventObj.totalSteps;
      super(eventObj);
    }
    
    getTotalSteps(): number {
      return this.totalSteps;
    }
  }
}