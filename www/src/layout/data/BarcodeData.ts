module cordova.plugins.band {
  export class BarcodeData extends PageElementData {
    private barcodeText: string;
    private barcodeType: BarcodeType;
    
    constructor(id: number, barcodeText: string, type: BarcodeType) {
      super(id);
      this.barcodeText = barcodeText;
      this.barcodeType = type;
    }
    
    getBarCode(): string {
      return this.barcodeText;
    }
    
    getBarcodeType(): BarcodeType {
      return this.barcodeType;
    }
    
    toJson(): IBarcodeData {
      var data = <IBarcodeData> super.toJson();
      data.barcodeText = this.barcodeText;
      data.barcodeType = BarcodeType[this.barcodeType];
      data.type = PageElementDataTypes[PageElementDataTypes.BARCODE_DATA];
      
      return data;
    }
    
    static fromJson(json: IBarcodeData): BarcodeData {
      var data = <BarcodeData> super.fromJson(json);
      data.barcodeText = json.barcodeText;
      data.barcodeType = BarcodeData[json.barcodeType];
      
      return data;
    }
  }
}