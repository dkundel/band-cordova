interface FilledButtonAttributes extends PageElementAttributes {
  color: string;
  colorSource: ElementColorSource;
}

class FilledButton extends PageElement<FilledButtonAttributes> {
  constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: string) {
    var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
    super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
    this.attributes.colorSource = colorSource;
    this.attributes.color = color;
  }
  
  toJson(): IFilledButtonElement {
    var json = <IFilledButtonElement> super.toJson()
    json.color = this.attributes.color;
    json.colorSource = ElementColorSource[this.attributes.colorSource];
    json.type = PageElementTypes[PageElementTypes.FILLED_BUTTON];
    
    return json;
  }
  
  static fromJson(json: IFilledButtonElement) {
    var button: FilledButton = <FilledButton> PageElement.fromJson(json);
    button.attributes.color = json.color;
    button.attributes.colorSource = ElementColorSource[json.colorSource];
    
    return button;
  }
}