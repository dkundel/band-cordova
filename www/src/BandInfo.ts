module cordova.plugins.band {
  export class BandInfo {
    private macAddress: string;
    private name: string;
    
    constructor(bandInfo: IBandInfo) {
      this.macAddress = bandInfo.macAddress;
      this.name = bandInfo.name;
    }
    
    getMacAddress(): string {
      return this.macAddress;
    }
    
    getName(): string {
      return this.name;
    }
  }
}