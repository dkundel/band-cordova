module BandPlugin {
  export interface BarcodeAttributes extends PageElementAttributes {
    barcodeType: BarcodeType;
  }
  
  export class Barcode extends PageElement<BarcodeAttributes> {
    
    constructor(elementId: number, rect: PageRect, type: BarcodeType) {
      var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
      super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
    }
    
    toJson(): IBarcode {
      return util.extend(super.toJson(), {
        barcodeType: this.attributes.barcodeType,
        type: PageElementTypes.BARCODE
      });
    }
    
    static fromJson(json: IBarcode) {
      var barcode: Barcode = <Barcode> PageElement.fromJson(json);
      barcode.attributes.barcodeType = json.barcodeType;
      
      return barcode;
    }
  }
}