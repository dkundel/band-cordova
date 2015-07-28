module cordova.plugins.band {
  export class FilledButtonData extends PageElementData {
    private pressedColor: number;
    
    constructor(id: number, color: number) {
      super(id);
      this.pressedColor = color;
    }
    
    getPressedColor(): number {
      return this.pressedColor;
    }
    
    setPressedColor(color: number): void {
      this.pressedColor = color;
    }
    
    toJson(): IFilledButtonData {
      var data = <IFilledButtonData> super.toJson();
      data.color = this.pressedColor;
      data.type = PageElementDataTypes.FILLED_BUTTON_DATA;
      
      return data;
    }
    
    static fromJson(json: IFilledButtonData): FilledButtonData {
      var data = <FilledButtonData> super.fromJson(json);
      data.pressedColor = json.color;
      
      return data;
    }
  }
}