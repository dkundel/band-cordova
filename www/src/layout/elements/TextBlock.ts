module cordova.plugins.band {
  interface TextBlockAttributes extends PageElementAttributes {
    color: string;
    colorSource: ElementColorSource;
    font: TextBlockFont;
    baselineAlignment: TextBlockBaselineAlignment;
    baseline: number;
    autoWidth: boolean;
  }
  
  export class TextBlock extends PageElement<TextBlockAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: string,
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
      var json = <ITextBlockElement> super.toJson()
      json.color = this.attributes.color;
      json.colorSource = ElementColorSource[this.attributes.colorSource];
      json.font = TextBlockFont[this.attributes.font];
      json.baselineAlignment = TextBlockBaselineAlignment[this.attributes.baselineAlignment];
      json.baseline = this.attributes.baseline;
      json.autoWidth = this.attributes.autoWidth;
      json.type = PageElementTypes[PageElementTypes.TEXT_BLOCK];
      
      return json;
    }
    
    static fromJson(json: ITextBlockElement) {
      var textBlock: TextBlock = <TextBlock> PageElement.fromJson(json);
      textBlock.attributes.color = json.color;
      textBlock.attributes.colorSource = ElementColorSource[json.colorSource];
      textBlock.attributes.font = TextBlockFont[json.font];
      textBlock.attributes.baselineAlignment = TextBlockBaselineAlignment[json.baselineAlignment];
      textBlock.attributes.baseline = json.baseline;
      textBlock.attributes.autoWidth = json.autoWidth;
      
      return textBlock;
    }
  }
}