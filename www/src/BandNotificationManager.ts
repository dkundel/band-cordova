module BandPlugin {
  export class BandNotificationManager extends BandManagerBase {    
    showDialog(tileUuid: string, dialogTitle: string, dialogBody: string, callback: (error?: BandErrorMessage) => void): void {
      let success = () => {
        callback(null);
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      this.exec(success, error, 'showDialog', [tileUuid, dialogTitle, dialogBody]);
    }
    
    sendMessage(tileUuid: string, messageTitle: string, messageBody: string, date: Date, flags: MessageFlags, callback: (error?: BandErrorMessage) => void): void {
      let success = () => {
        callback(null);
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      this.exec(success, error, 'sendMessage', [tileUuid, messageTitle, messageBody, date.toISOString(), MessageFlags[flags]]);
    }
    
    vibrate(type: VibrationType, callback: (error?: BandErrorMessage) => void): void {
      let success = () => {
        callback(null);
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      this.exec(success, error, 'vibrate', [VibrationType[type]]);
    }
  }
}