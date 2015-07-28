module cordova.plugins.band {
  export class BandUVEvent extends BandSensorEvent {
    private uvIndexLevel: UVIndexLevel;
    
    constructor(eventObj: IUVEvent) {
      this.uvIndexLevel = UVIndexLevel[eventObj.uvIndexLevel];
      super(eventObj);
    }
    
    getUVIndexLevel(): UVIndexLevel {
      return this.uvIndexLevel;
    }
  }
}