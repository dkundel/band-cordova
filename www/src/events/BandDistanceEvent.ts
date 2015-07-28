module cordova.plugins.band {
  export class BandDistanceEvent extends BandSensorEvent {
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
}