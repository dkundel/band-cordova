module cordova.plugins.band {
  export interface FilledButtonAttributes extends PageElementAttributes {
    color: number;
    colorSource: ElementColorSource;
  }
  
  export class FilledButton extends PageElement<FilledButtonAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: number) {
      var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
      super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
      this.attributes.colorSource = colorSource;
      this.attributes.color = color;
    }
    
    toJson(): IFilledButtonElement {
      return util.extend(super.toJson(), {
        color: this.attributes.color,
        colorSource: this.attributes.colorSource,
        type: PageElementTypes.FILLED_BUTTON
      });
    }
    
    static fromJson(json: IFilledButtonElement) {
      var button: FilledButton = <FilledButton> PageElement.fromJson(json);
      button.attributes.color = json.color;
      button.attributes.colorSource = json.colorSource;
      
      return button;
    }
  }
}