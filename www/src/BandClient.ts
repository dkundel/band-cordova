module BandCordova {
  export class BandClient {
    private index: number;
    private firmware: string;
    private hardware: string;
    private connectionState: ConnectionState;
    
    private sensorManager: BandSensorManager;
    private tileManager: BandTileManager;
    private notificationManager: BandNotificationManager;
    private personalizationManager: BandPersonalizationManager;
    
    constructor(data: IBandClient) {
      this.connectionState = ConnectionState[data.connectionState];
    }
    
    getFirmwareVersion(callback: (error: BandErrorMessage, version?: string) => void): void {
      let success = (version: string) => {
        this.firmware = version;
        callback(null, version);
      }
      
      let error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'getFirmwareVersion', []);
    }
    
    getHardwareVersion(callback: (error: BandErrorMessage, version?: string) => void): void {
      let success = (version: string) => {
        this.hardware = version;
        callback(null, version);
      }
      
      let error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'getHardwareVersion', []);
    }
    
    getConnectionState(): ConnectionState {
      return this.connectionState;
    }
    
    getSensorManager(): BandSensorManager {
      return !this.sensorManager ? new BandSensorManager() : this.sensorManager;
    }
    
    getBandTileManager(): BandTileManager {
      return !this.tileManager ? new BandTileManager() : this.tileManager;
    }
    
    getNotificationManager(): BandNotificationManager {
      return !this.notificationManager ? new BandNotificationManager() : this.notificationManager;
    }
    
    getPersonalizationManager(): BandPersonalizationManager {
      return !this.personalizationManager ? new BandPersonalizationManager() : this.personalizationManager;
    }
    
    connect(callback: (error: BandErrorMessage, state?: ConnectionState) => void): void {
      let success = (state: string) => {
        callback(null, ConnectionState[state]);
      }
      
      let error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'connect', []);
    }
    
    disconnect(callback: (error?: BandErrorMessage) => void) {
      let success = (state: string) => {
        callback(null);
      }
      
      let error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'disconnect', []);
    }
    
    isConnected(): boolean {
      return this.connectionState === ConnectionState.CONNECTED;
    }
  }
}