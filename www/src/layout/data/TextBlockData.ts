module cordova.plugins.band {
  export class TextBlockData extends PageElementData {
    private text: string;
    
    constructor(id: number, text: string) {
      super(id);
      this.text = text;
    }
    
    getText(): string {
      return this.text;
    }
    
    toJson(): ITextBlockData {
      var data = <ITextBlockData> super.toJson();
      data.text = this.text;
      data.type = PageElementDataTypes.BARCODE_DATA;
      
      return data;
    }
    
    static fromJson(json: ITextBlockData): TextBlockData {
      var data = <TextBlockData> super.fromJson(json);
      data.text = json.text;
      
      return data;
    }
  }
}