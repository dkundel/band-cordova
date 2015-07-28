module cordova.plugins.band {
  export class BandContactEvent extends BandSensorEvent {
    private contactState: BandContactState;
    
    constructor(eventObj: IContactEvent) {
      this.contactState = eventObj.contactState;
      super(eventObj);
    }
    
    getContactState(): BandContactState {
      return this.contactState;
    }
  }
}