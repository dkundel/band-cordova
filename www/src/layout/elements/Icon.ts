module cordova.plugins.band {
  export interface IconAttributes extends PageElementAttributes {
    color: string;
    colorSource: ElementColorSource;
  }
  
  export class Icon extends PageElement<IconAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: string) {
      var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
      super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
      this.attributes.colorSource = colorSource;
      this.attributes.color = color;
    }
    
    toJson(): IIconElement {
      return util.extend(super.toJson(), {
        color: this.attributes.color,
        colorSource: ElementColorSource[this.attributes.colorSource],
        type: PageElementTypes[PageElementTypes.ICON]
      });
    }
    
    static fromJson(json: IIconElement) {
      var icon: Icon = <Icon> PageElement.fromJson(json);
      icon.attributes.color = json.color;
      icon.attributes.colorSource = ElementColorSource[json.colorSource];
      
      return icon;
    }
  }
}