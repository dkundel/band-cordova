interface FilledPanelAttributes extends PagePanelAttributes {
  backgroundColor: string;
  backgroundColorSource: ElementColorSource;
}

class FilledPanel extends PagePanel<FilledPanelAttributes> {
  constructor(elementId: number, rect: PageRect, backgroundColorSource: ElementColorSource, backgroundColor: string, ...elements: PageElement<PageElementAttributes>[]) {
    super(elementId, rect, ...elements);
    this.attributes.backgroundColorSource = backgroundColorSource;
    this.attributes.backgroundColor = backgroundColor;
  }
  
  toJson(): IFilledPanelElement {
    var json = <IFilledPanelElement> super.toJson()
    json.backgroundColor = this.attributes.backgroundColor;
    json.backgroundColorSource = ElementColorSource[this.attributes.backgroundColorSource];
    json.type = PageElementTypes[PageElementTypes.FILLED_PANEL];
    
    return json;
  }
  
  static fromJson(json: IFilledPanelElement) {
    var panel: FilledPanel = <FilledPanel> PageElement.fromJson(json);
    panel.attributes.backgroundColor = json.backgroundColor;
    panel.attributes.backgroundColorSource = ElementColorSource[json.backgroundColorSource];
    
    return panel;
  }
}