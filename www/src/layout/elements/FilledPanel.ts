module BandPlugin {
  export interface FilledPanelAttributes extends PagePanelAttributes {
    backgroundColor: number;
    backgroundColorSource: ElementColorSource;
  }
  
  export class FilledPanel extends PagePanel<FilledPanelAttributes> {
    constructor(elementId: number, rect: PageRect, backgroundColorSource: ElementColorSource, backgroundColor: number, ...elements: PageElement<PageElementAttributes>[]) {
      super(elementId, rect, ...elements);
      this.attributes.backgroundColorSource = backgroundColorSource;
      this.attributes.backgroundColor = backgroundColor;
    }
    
    toJson(): IFilledPanelElement {
      return util.extend(super.toJson(), {
        backgroundColor: this.attributes.backgroundColor,
        backgroundColorSource: this.attributes.backgroundColorSource,
        type: PageElementTypes.FILLED_PANEL
      });
    }
    
    static fromJson(json: IFilledPanelElement) {
      var panel: FilledPanel = <FilledPanel> PageElement.fromJson(json);
      panel.attributes.backgroundColor = json.backgroundColor;
      panel.attributes.backgroundColorSource = json.backgroundColorSource;
      
      return panel;
    }
  }
}