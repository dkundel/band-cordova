module BandPlugin {
  export interface WrappedTextBlockAttributes extends PageElementAttributes {
    color: number;
    colorSource: ElementColorSource;
    font: WrappedTextBlockFont;
    autoHeight: boolean;
  }
  
  export class WrappedTextBlock extends PageElement<WrappedTextBlockAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: number,
      font?: WrappedTextBlockFont, autoHeight?: boolean) {
      var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
      super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
      this.attributes.colorSource = colorSource;
      this.attributes.color = color;
      this.attributes.font = font;
      this.attributes.autoHeight = autoHeight;
    }
    
    toJson(): IWrappedTextBlockElement {      
      return util.extend(super.toJson(), {
        color: this.attributes.color,
        colorSource: this.attributes.colorSource,
        font: this.attributes.font,
        autoHeight: this.attributes.autoHeight,
        type: PageElementTypes.WRAPPED_TEXT_BLOCK
      });
    }
    
    static fromJson(json: IWrappedTextBlockElement) {
      var textBlock: WrappedTextBlock = <WrappedTextBlock> PageElement.fromJson(json);
      textBlock.attributes.color = json.color;
      textBlock.attributes.colorSource = json.colorSource;
      textBlock.attributes.font = json.font;
      textBlock.attributes.autoHeight = json.autoHeight;
      
      return textBlock;
    }
  }
}