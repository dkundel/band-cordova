module BandPlugin {
  export class WrappedTextBlockData extends PageElementData {
    private text: string;
    
    constructor(id: number, text: string) {
      super(id);
      this.text = text;
    }
    
    getText(): string {
      return this.text;
    }
    
    toJson(): IWrappedTextBlockData {
      var data = <IWrappedTextBlockData> super.toJson();
      data.text = this.text;
      data.type = PageElementDataTypes.WRAPPED_TEXT_BLOCK_DATA;
      
      return data;
    }
    
    static fromJson(json: IWrappedTextBlockData): WrappedTextBlockData {
      var data = <WrappedTextBlockData> super.fromJson(json);
      data.text = json.text;
      
      return data;
    }
  }
}