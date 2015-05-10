interface FilledPanelAttributes extends PagePanelAttributes {
  backgroundColor: string;
  backgroundColorSource: ElementColorSource;
}

class FilledPanel extends PagePanel<FilledPanelAttributes> {
  constructor(elementId: number, rect: PageRect, backgroundColorSource?: ElementColorSource, backgroundColor?: string, ...elements: PageElement<PageElementAttributes>[]) {
    var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
    super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
    this.attributes.backgroundColorSource = backgroundColorSource;
    this.attributes.backgroundColor = backgroundColor;
  }
  
  toJson(): IFilledPanelElement {
    var json = <IFilledPanelElement> super.toJson()
    json.backgroundColor = this.attributes.backgroundColor;
    json.backgroundColorSource = ElementColorSource[this.attributes.backgroundColorSource];
    
    return json;
  }
  
  static fromJson(json: IFilledPanelElement) {
    var panel: FilledPanel = <FilledPanel> PageElement.fromJson(json);
    panel.attributes.backgroundColor = json.backgroundColor;
    panel.attributes.backgroundColorSource = ElementColorSource[json.backgroundColorSource];
    
    return panel;
  }
}