module cordova.plugins.band {
  export class BandNotificationManager {
    showDialog(tileUuid: string, dialogTitle: string, dialogBody: string, callback: (error?: BandErrorMessage) => void): void {
      let success = () => {
        callback(null);
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      cordova.exec(success, error, 'Band', 'showDialog', [tileUuid, dialogTitle, dialogBody]);
    }
    
    sendMessage(tileUuid: string, messageTitle: string, messageBody: string, date: Date, flags: MessageFlags, callback: (error?: BandErrorMessage) => void): void {
      let success = () => {
        callback(null);
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      cordova.exec(success, error, 'Band', 'vibrate', [tileUuid, messageTitle, messageBody, date.toISOString(), MessageFlags[flags]]);
    }
    
    vibrate(type: VibrationType, callback: (error?: BandErrorMessage) => void): void {
      let success = () => {
        callback(null);
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      cordova.exec(success, error, 'Band', 'vibrate', [VibrationType[type]]);
    }
  }
}