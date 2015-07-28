/// <reference path="types/cordova.d.ts" />

module cordova.plugins.band {
  export class BandSensorManager {
    private currentHeartRateConsent: UserConsent;
    
    handleSuccessfulUnregister(...args: any[]) {
      return;
    }
    
    handleErrorUnregister(...args: any[]) {
      return;
    }
    
    constructor() {
      
    }
    
    getCurrentgetCurrentHeartRateConsent(): UserConsent {
      return this.currentHeartRateConsent;
    }
  
    registerAccelerometerEventListener(reportingInterval: SampleRate, callback: (error: BandErrorMessage, event?: BandAccelerometerEvent, eventId?: number) => void): void {
      var success = (event: IAccelerometerEvent) => {
        callback(null, new BandAccelerometerEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, "Band", "registerAccelerometerEventListener", [SampleRate[reportingInterval]]);
    }
    
    registerCaloriesEventListener(callback: (error: BandErrorMessage, event?: BandCaloriesEvent, eventId?: number) => void): void {
      var success = (event: ICaloriesEvent) => {
        callback(null, new BandCaloriesEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, "Band", "registerCaloriesEventListener", []);
    }
    
    registerContactEventListener(callback: (error: BandErrorMessage, event?: BandContactEvent, eventId?: number) => void): void {
      var success = (event: IContactEvent) => {
        callback(null, new BandContactEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, "Band", "registerContactEventListener", []);
    }
    
    registerDistanceEventListener(callback: (error: BandErrorMessage, event?: BandDistanceEvent, eventId?: number) => void): void {
      var success = (event: IDistanceEvent) => {
        callback(null, new BandDistanceEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, "Band", "registerDistanceEventListener", []);
    }
    
    registerGyroscopeEventListener(reportingInterval: SampleRate, callback: (error: BandErrorMessage, event?: BandGyroscopeEvent, eventId?: number) => void): void {
      var success = (event: IGyroscopeEvent) => {
        callback(null, new BandGyroscopeEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, "Band", "registerGyroscopeEventListener", [SampleRate[reportingInterval]]);
    }
    
    registerHeartRateEventListener(callback: (error: BandErrorMessage, event?: BandHeartRateEvent, eventId?: number) => void): void {
      var success = (event: IHeartRateEvent) => {
        callback(null, new BandHeartRateEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, "Band", "registerHeartRateEventListener", []);
    }
    
    registerPedometerEventListener(callback: (error: BandErrorMessage, event?: BandPedometerEvent, eventId?: number) => void): void {
      var success = (event: IPedometerEvent) => {
        callback(null, new BandPedometerEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, "Band", "registerPedometerEventListener", []);
    }
    
    registerSkinTemperatureEventListener(callback: (error: BandErrorMessage, event?: BandSkinTemperatureEvent, eventId?: number) => void): void {
      var success = (event: ISkinTemperatureEvent) => {
        callback(null, new BandSkinTemperatureEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, "Band", "registerSkinTemperatureEventListener", []);
    }
    
    registerUVEventListener(callback: (error: BandErrorMessage, event?: BandUVEvent, eventId?: number) => void): void {
      var success = (event: IUVEvent) => {
        callback(null, new BandUVEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, "Band", "registerUVEventListener", []);
    }
    
    requestHeartRateConsent(callback: (error: BandErrorMessage, consentGiven?: boolean) => void): void {
      var success = (consentGiven: boolean) => {
        callback(null, consentGiven)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, "Band", "requestHeartRateConsent", []);
    }
    
    unregisterAccelerometerEventListener(eventId: number): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterAccelerometerEventListener", [eventId.toString()]);
    }
    
    unregisterAccelerometerEventListeners(): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterAccelerometerEventListeners", []);
    }
    
    unregisterAllListeners(): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterAllListeners", []);
    }
    
    unregisterCaloriesEventListener(eventId: number): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterCaloriesEventListener", [eventId.toString()]);
    }
    
    unregisterCaloriesEventListeners(): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterCaloriesEventListeners", []);
    }
    
    unregisterContactEventListener(eventId: number): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterContactEventListener", [eventId.toString()]);
    }
    
    unregisterContactEventListeners(): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterContactEventListeners", []);
    }
    
    unregisterDistanceEventListener(eventId: number): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterDistanceEventListener", [eventId.toString()]);
    }
    
    unregisterDistanceEventListeners(): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterDistanceEventListeners", []);
    }
    
    unregisterGyroscopeEventListener(eventId: number): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterGyroscopeEventListener", [eventId.toString()]);
    }
    
    unregisterGyroscopeEventListeners(): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterGyroscopeEventListeners", []);
    }
    
    unregisterHeartRateEventListener(eventId: number): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterHeartRateEventListener", [eventId.toString()]);
    }
    
    unregisterHeartRateEventListeners(): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterHeartRateEventListeners", []);
    }
    
    unregisterPedometerEventListener(eventId: number): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterPedometerEventListener", [eventId.toString()]);
    }
    
    unregisterPedometerEventListeners(): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterPedometerEventListeners", []);
    }
    
    unregisterSkinTemperatureEventListener(eventId: number): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterSkinTemperatureEventListener", [eventId.toString()]);
    }
    
    unregisterSkinTemperatureEventListeners(): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterSkinTemperatureEventListeners", []);
    }
    
    unregisterUVEventListener(eventId: number): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterUVEventListener", [eventId.toString()]);
    }
    
    unregisterUVEventListeners(): void {
      cordova.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "Band", "unregisterUVEventListeners", []);
    }
  }
  
}