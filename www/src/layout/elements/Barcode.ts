interface BarcodeAttributes extends PageElementAttributes {
  barcodeType: BarcodeType;
}

class Barcode extends PageElement<BarcodeAttributes> {
  
  constructor(elementId: number, rect: PageRect, type: BarcodeType) {
    var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
    super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
  }
  
  toJson(): IBarcode {
    var json = <IBarcode> super.toJson()
    json.barcodeType = BarcodeType[this.attributes.barcodeType];
    
    return json;
  }
  
  static fromJson(json: IBarcode) {
    var barcode: Barcode = <Barcode> PageElement.fromJson(json);
    barcode.attributes.barcodeType = BarcodeType[json.barcodeType];
    
    return barcode;
  }
}