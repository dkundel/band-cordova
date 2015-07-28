module cordova.plugins.band {
  export class BandAccelerometerEvent extends BandSensorEvent {
    private acceleration: {
      x: number;
      y: number;
      z: number;
    }
    
    constructor(eventObj: IAccelerometerEvent) {
      this.acceleration = eventObj.acceleration;
      super(eventObj);
    }
    
    getAccelerationX(): number {
      return this.acceleration.x;
    }
    
    getAccelerationY(): number {
      return this.acceleration.y;
    }
    
    getAccelerationZ(): number {
      return this.acceleration.z;
    }
  }
}