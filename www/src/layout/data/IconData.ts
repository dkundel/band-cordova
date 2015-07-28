module cordova.plugins.band {
  export class IconData extends PageElementData {
    private iconIndex: number;
    
    constructor(id: number, iconIndex: number) {
      super(id);
      this.iconIndex = iconIndex;
    }
    
    getIconIndex(): number {
      return this.iconIndex;
    }
    
    toJson(): IIconData {
      var data = <IIconData> super.toJson();
      data.iconIndex = this.iconIndex;
      data.type = PageElementDataTypes.BARCODE_DATA;
      
      return data;
    }
    
    static fromJson(json: IIconData): IconData {
      var data = <IconData> super.fromJson(json);
      data.iconIndex = json.iconIndex;
      
      return data;
    }
  }
}