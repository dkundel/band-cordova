module cordova.plugins.band {
  export interface FilledPanelAttributes extends PagePanelAttributes {
    backgroundColor: string;
    backgroundColorSource: ElementColorSource;
  }
  
  export class FilledPanel extends PagePanel<FilledPanelAttributes> {
    constructor(elementId: number, rect: PageRect, backgroundColorSource: ElementColorSource, backgroundColor: string, ...elements: PageElement<PageElementAttributes>[]) {
      super(elementId, rect, ...elements);
      this.attributes.backgroundColorSource = backgroundColorSource;
      this.attributes.backgroundColor = backgroundColor;
    }
    
    toJson(): IFilledPanelElement {
      return util.extend(super.toJson(), {
        backgroundColor: this.attributes.backgroundColor,
        backgroundColorSource: ElementColorSource[this.attributes.backgroundColorSource],
        type: PageElementTypes[PageElementTypes.FILLED_PANEL]
      });
    }
    
    static fromJson(json: IFilledPanelElement) {
      var panel: FilledPanel = <FilledPanel> PageElement.fromJson(json);
      panel.attributes.backgroundColor = json.backgroundColor;
      panel.attributes.backgroundColorSource = ElementColorSource[json.backgroundColorSource];
      
      return panel;
    }
  }
}