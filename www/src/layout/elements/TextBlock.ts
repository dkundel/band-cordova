module cordova.plugins.band {
  export interface TextBlockAttributes extends PageElementAttributes {
    color: number;
    colorSource: ElementColorSource;
    font: TextBlockFont;
    baselineAlignment: TextBlockBaselineAlignment;
    baseline: number;
    autoWidth: boolean;
  }
  
  export class TextBlock extends PageElement<TextBlockAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: number,
      font?: TextBlockFont, baselineAlignment?: TextBlockBaselineAlignment, baseline?: number,
      autoWidth?: boolean) {
      var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
      super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
      this.attributes.colorSource = colorSource;
      this.attributes.color = color;
      this.attributes.font = font;
      this.attributes.baselineAlignment = baselineAlignment;
      this.attributes.baseline = baseline;
      this.attributes.autoWidth = autoWidth;
    }
    
    toJson(): ITextBlockElement {
      return util.extend(super.toJson(), {
        color: this.attributes.color,
        colorSource: this.attributes.colorSource,
        font: this.attributes.font,
        baselineAlignment: this.attributes.baselineAlignment,
        baseline: this.attributes.baseline,
        autoWidth: this.attributes.autoWidth,
        type: PageElementTypes.TEXT_BLOCK
      });
    }
    
    static fromJson(json: ITextBlockElement) {
      var textBlock: TextBlock = <TextBlock> PageElement.fromJson(json);
      textBlock.attributes.color = json.color;
      textBlock.attributes.colorSource = json.colorSource;
      textBlock.attributes.font = json.font;
      textBlock.attributes.baselineAlignment = json.baselineAlignment;
      textBlock.attributes.baseline = json.baseline;
      textBlock.attributes.autoWidth = json.autoWidth;
      
      return textBlock;
    }
  }
}