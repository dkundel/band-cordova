module BandPlugin {
  export class BandSensorManager extends BandManagerBase {
    private currentHeartRateConsent: UserConsent;
    
    handleSuccessfulUnregister(...args: any[]) {
      return;
    }
    
    handleErrorUnregister(...args: any[]) {
      return;
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
      
      this.exec(success, error, "registerAccelerometerEventListener", [reportingInterval.toString()]);
    }
    
    registerCaloriesEventListener(callback: (error: BandErrorMessage, event?: BandCaloriesEvent, eventId?: number) => void): void {
      var success = (event: ICaloriesEvent) => {
        callback(null, new BandCaloriesEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, "registerCaloriesEventListener", []);
    }
    
    registerContactEventListener(callback: (error: BandErrorMessage, event?: BandContactEvent, eventId?: number) => void): void {
      var success = (event: IContactEvent) => {
        callback(null, new BandContactEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, "registerContactEventListener", []);
    }
    
    registerDistanceEventListener(callback: (error: BandErrorMessage, event?: BandDistanceEvent, eventId?: number) => void): void {
      var success = (event: IDistanceEvent) => {
        callback(null, new BandDistanceEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, "registerDistanceEventListener", []);
    }
    
    registerGyroscopeEventListener(reportingInterval: SampleRate, callback: (error: BandErrorMessage, event?: BandGyroscopeEvent, eventId?: number) => void): void {
      var success = (event: IGyroscopeEvent) => {
        callback(null, new BandGyroscopeEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, "registerGyroscopeEventListener", [SampleRate[reportingInterval]]);
    }
    
    registerHeartRateEventListener(callback: (error: BandErrorMessage, event?: BandHeartRateEvent, eventId?: number) => void): void {
      var success = (event: IHeartRateEvent) => {
        callback(null, new BandHeartRateEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, "registerHeartRateEventListener", []);
    }
    
    registerPedometerEventListener(callback: (error: BandErrorMessage, event?: BandPedometerEvent, eventId?: number) => void): void {
      var success = (event: IPedometerEvent) => {
        callback(null, new BandPedometerEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, "registerPedometerEventListener", []);
    }
    
    registerSkinTemperatureEventListener(callback: (error: BandErrorMessage, event?: BandSkinTemperatureEvent, eventId?: number) => void): void {
      var success = (event: ISkinTemperatureEvent) => {
        callback(null, new BandSkinTemperatureEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, "registerSkinTemperatureEventListener", []);
    }
    
    registerUVEventListener(callback: (error: BandErrorMessage, event?: BandUVEvent, eventId?: number) => void): void {
      var success = (event: IUVEvent) => {
        callback(null, new BandUVEvent(event), event.id)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, "registerUVEventListener", []);
    }
    
    requestHeartRateConsent(callback: (error: BandErrorMessage, consentGiven?: boolean) => void): void {
      var success = (consentGiven: boolean) => {
        callback(null, consentGiven)
      };
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, "requestHeartRateConsent", []);
    }
    
    unregisterAccelerometerEventListener(eventId: number): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterAccelerometerEventListener", [eventId.toString()]);
    }
    
    unregisterAccelerometerEventListeners(): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterAccelerometerEventListeners", []);
    }
    
    unregisterAllListeners(): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterAllListeners", []);
    }
    
    unregisterCaloriesEventListener(eventId: number): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterCaloriesEventListener", [eventId.toString()]);
    }
    
    unregisterCaloriesEventListeners(): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterCaloriesEventListeners", []);
    }
    
    unregisterContactEventListener(eventId: number): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterContactEventListener", [eventId.toString()]);
    }
    
    unregisterContactEventListeners(): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterContactEventListeners", []);
    }
    
    unregisterDistanceEventListener(eventId: number): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterDistanceEventListener", [eventId.toString()]);
    }
    
    unregisterDistanceEventListeners(): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterDistanceEventListeners", []);
    }
    
    unregisterGyroscopeEventListener(eventId: number): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterGyroscopeEventListener", [eventId.toString()]);
    }
    
    unregisterGyroscopeEventListeners(): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterGyroscopeEventListeners", []);
    }
    
    unregisterHeartRateEventListener(eventId: number): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterHeartRateEventListener", [eventId.toString()]);
    }
    
    unregisterHeartRateEventListeners(): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterHeartRateEventListeners", []);
    }
    
    unregisterPedometerEventListener(eventId: number): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterPedometerEventListener", [eventId.toString()]);
    }
    
    unregisterPedometerEventListeners(): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterPedometerEventListeners", []);
    }
    
    unregisterSkinTemperatureEventListener(eventId: number): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterSkinTemperatureEventListener", [eventId.toString()]);
    }
    
    unregisterSkinTemperatureEventListeners(): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterSkinTemperatureEventListeners", []);
    }
    
    unregisterUVEventListener(eventId: number): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterUVEventListener", [eventId.toString()]);
    }
    
    unregisterUVEventListeners(): void {
      this.exec(this.handleSuccessfulUnregister, this.handleErrorUnregister, "unregisterUVEventListeners", []);
    }
  }
  
}