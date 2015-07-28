module cordova.plugins.band {
  export class BandSkinTemperatureEvent extends BandSensorEvent {
    private skinTemperature: number;
    
    constructor(eventObj: ISkinTemperatureEvent) {
      this.skinTemperature = eventObj.skinTemperature;
      super(eventObj);
    }
    
    getSkinTemperature(): number {
      return this.skinTemperature;
    }
  }
}