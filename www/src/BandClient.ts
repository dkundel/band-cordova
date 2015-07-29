/// <reference path="types/cordova.d.ts" />
module BandPlugin {
  export class BandClient {
    private firmware: string;
    private hardware: string;
    private connectionState: ConnectionState;
    private lastErr: string;
    private connectionStatusId: number;
    
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
      let success = (state: number) => {
        this.exec(({state, id}) => (this.connectionState = state, this.connectionStatusId = id), err => this.lastErr = err, 'registerConnectionEventListener', []);
        this.connectionState = state;
        callback(null, state);
      }
      
      let error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      this.exec(success, error, 'connect', []);
    }
    
    disconnect(callback: (error?: BandErrorMessage) => void) {
      let success = (state: string) => {
        if (this.connectionStatusId) {
          this.exec(() => void 0, () => void 0, 'unregisterConnectionEventListener', [this.connectionStatusId.toString()]);
        }
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