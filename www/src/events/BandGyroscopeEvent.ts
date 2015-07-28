module BandPlugin {
  export class BandGyroscopeEvent extends BandSensorEvent {
    private acceleration: {
      x: number; 
      y: number;
      z: number;
    }
    
    private angularVelocity: {
      x: number;
      y: number;
      z: number;
    }
    
    constructor(eventObj: IGyroscopeEvent) {
      this.acceleration = eventObj.acceleration;
      this.angularVelocity = eventObj.angularVelocity;
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
    
    getAngularVelocityX(): number {
      return this.angularVelocity.x;
    }
    
    getAngularVelocityY(): number {
      return this.angularVelocity.y;
    }
    
    getAngularVelocityZ(): number {
      return this.angularVelocity.z;
    }
  }
}