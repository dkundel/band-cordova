/// <reference path="../enums" />
/// <reference path="../interfaces" />
/// <reference path="BandSensorEvent" />

class BandContactEvent extends BandSensorEvent {
  private contactState: BandContactState;
  
  constructor(eventObj: IContactEvent) {
    this.contactState = BandContactState[eventObj.contactState];
    super(eventObj);
  }
  
  getContactState(): BandContactState {
    return this.contactState;
  }
}