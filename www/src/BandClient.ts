/// <reference path="types/cordova.d.ts" />
module cordova.plugins.band {
  export class BandClient {
    private firmware: string;
    private hardware: string;
    private connectionState: ConnectionState;
    
    private sensorManager: BandSensorManager;
    private tileManager: BandTileManager;
    private notificationManager: BandNotificationManager;
    private personalizationManager: BandPersonalizationManager;
    
    constructor(data: IBandClient, private index: number) {
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
      
      this.exec(success, error, 'getFirmwareVersion', []);
    }
    
    getHardwareVersion(callback: (error: BandErrorMessage, version?: string) => void): void {
      let success = (version: string) => {
        this.hardware = version;
        callback(null, version);
      }
      
      let error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, 'getHardwareVersion', []);
    }
    
    getConnectionState(): ConnectionState {
      return this.connectionState;
    }
    
    getSensorManager(): BandSensorManager {
      return !this.sensorManager ? new BandSensorManager(this) : this.sensorManager;
    }
    
    getBandTileManager(): BandTileManager {
      return !this.tileManager ? new BandTileManager(this) : this.tileManager;
    }
    
    getNotificationManager(): BandNotificationManager {
      return !this.notificationManager ? new BandNotificationManager(this) : this.notificationManager;
    }
    
    getPersonalizationManager(): BandPersonalizationManager {
      return !this.personalizationManager ? new BandPersonalizationManager(this) : this.personalizationManager;
    }
    
    exec(success: (yields: any) => any, error: (message: any) => any, action: string, args: string[]) {
      cordova.exec(success, error, 'Band', action, [this.index.toString()].concat(args));
    }
    
    connect(callback: (error: BandErrorMessage, state?: ConnectionState) => void): void {
      let success = (state: string) => {
        callback(null, ConnectionState[state]);
      }
      
      let error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, 'connect', []);
    }
    
    disconnect(callback: (error?: BandErrorMessage) => void) {
      let success = (state: string) => {
        callback(null);
      }
      
      let error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, 'disconnect', []);
    }
    
    isConnected(): boolean {
      return this.connectionState === ConnectionState.CONNECTED;
    }
  }
}