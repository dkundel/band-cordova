module cordova.plugins.band {
  export class FilledButtonData extends PageElementData {
    private pressedColor: string;
    
    constructor(id: number, color: string) {
      super(id);
      this.pressedColor = color;
    }
    
    getPressedColor(): string {
      return this.pressedColor;
    }
    
    setPressedColor(color: string): void {
      this.pressedColor = color;
    }
    
    toJson(): IFilledButtonData {
      var data = <IFilledButtonData> super.toJson();
      data.color = this.pressedColor;
      data.type = PageElementDataTypes[PageElementDataTypes.BARCODE_DATA];
      
      return data;
    }
    
    static fromJson(json: IFilledButtonData): FilledButtonData {
      var data = <FilledButtonData> super.fromJson(json);
      data.pressedColor = json.color;
      
      return data;
    }
  }
}