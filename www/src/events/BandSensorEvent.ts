module BandPlugin {
  export class BandSensorEvent {
    private timestamp: Date;
    
    constructor(eventObj: ISensorEvent) {
      this.timestamp = new Date(eventObj.timestamp);
    }
  }
}