module BandPlugin {
  export interface IconAttributes extends PageElementAttributes {
    color: number;
    colorSource: ElementColorSource;
  }
  
  export class Icon extends PageElement<IconAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: number) {
      var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
      super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
      this.attributes.colorSource = colorSource;
      this.attributes.color = color;
    }
    
    toJson(): IIconElement {
      return util.extend(super.toJson(), {
        color: this.attributes.color,
        colorSource: this.attributes.colorSource,
        type: PageElementTypes.ICON
      });
    }
    
    static fromJson(json: IIconElement) {
      var icon: Icon = <Icon> PageElement.fromJson(json);
      icon.attributes.color = json.color;
      icon.attributes.colorSource = json.colorSource;
      
      return icon;
    }
  }
}