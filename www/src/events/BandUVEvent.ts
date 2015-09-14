module BandPlugin {
  export class BandUVEvent extends BandSensorEvent {
    private uvIndexLevel: UVIndexLevel;
    
    constructor(eventObj: IUVEvent) {
      this.uvIndexLevel = eventObj.uvIndexLevel;
      super(eventObj);
    }
    
    getUVIndexLevel(): UVIndexLevel {
      return this.uvIndexLevel;
    }
  }
}