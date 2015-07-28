module BandPlugin {
  export interface TextButtonAttributes extends PageElementAttributes {
    color: number;
    colorSource: ElementColorSource;
  }
  
  export class TextButton extends PageElement<TextButtonAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: number) {
      var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
      super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
      this.attributes.colorSource = colorSource;
      this.attributes.color = color;
    }
    
    toJson(): ITextButtonElement {
      return util.extend(super.toJson(), {
        color: this.attributes.color,
        colorSource: this.attributes.colorSource,
        type: PageElementTypes.TEXT_BUTTON
      });
    }
    
    static fromJson(json: ITextButtonElement) {
      var button: TextButton = <TextButton> PageElement.fromJson(json);
      button.attributes.color = json.color;
      button.attributes.colorSource = json.colorSource;
      
      return button;
    }
  }
}