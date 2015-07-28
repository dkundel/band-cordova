/// <reference path="types/cordova.d.ts" />
module cordova.plugins.band {
  export class BandClientManager {
    private pairedBands: BandInfo[];
    
    constructor() {
      
    }
    
    getPairedBands(callback: (error: BandErrorMessage, bands?: BandInfo[]) => void): void {
      let success = (bandList: IBandInfo[]) => {
        let bandInfo: BandInfo[] = [];
        for (let band of bandList) {
          bandInfo.push(new BandInfo(band));
        }
        
        callback(null, bandInfo);
      }
      
      let error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'getPairedBands', []);
    }
    
    create(index: number, callback: (error: BandErrorMessage, bandClient?: BandClient) => void): void {
      let success = (bandClient: IBandClient) => {
        callback(null, new BandClient(bandClient, index));
      }
      
      let error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'create', [index.toString()]);
    }
    
    static getInstance() {
      return new BandClientManager();
    }
  }
}