interface SensorEventData {
  timestamp: number;
}

interface AccelerometerEventData extends SensorEventData {
  acceleration: {
    x: number;
    y: number;
    z: number;
  };
}

interface CaloriesEventData extends SensorEventData {
  calories: number;
}

interface ContactEventData extends SensorEventData {
  contactState: string;
}

interface DistanceEventData extends SensorEventData {
  motionType: string;
  pace: number;
  speed: number;
  totalDistance: number;
}

interface GyroscopeEventData extends SensorEventData {
  acceleration: {
    x: number;
    y: number;
    z: number;
  };
  angularVelocity: {
    x: number;
    y: number;
    z: number;
  };
}

interface HeartRateEventData extends SensorEventData {
  heartRate: number;
  quality: string;
}

interface PedometerEventData extends SensorEventData {
  totalSteps: number;
}

interface SkinTemperatureEventData extends SensorEventData {
  skinTemperature: number;
}

interface UVEventData extends SensorEventData {
  uvIndexLevel: string;
}

