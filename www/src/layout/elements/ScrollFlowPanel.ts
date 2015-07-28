module cordova.plugins.band {
  interface ScrollFlowPanelAttributes extends PagePanelAttributes {
    color: string;
    colorSource: ElementColorSource;
    orientation: Orientation;
  }
  
  export class ScrollFlowPanel extends PagePanel<ScrollFlowPanelAttributes> {
    constructor(elementId: number, rect: PageRect, orientation: Orientation, colorSource: ElementColorSource, color: string, ...elements: PageElement<PageElementAttributes>[]) {
      super(elementId, rect, ...elements);
      this.attributes.color = color;
      this.attributes.colorSource = colorSource;
      this.attributes.orientation = orientation;
    }
    
    toJson(): IScrollFlowPanelElement {
      var json = <IScrollFlowPanelElement> super.toJson();
      json.color = this.attributes.color;
      json.colorSource = ElementColorSource[this.attributes.colorSource];
      json.orientation = Orientation[this.attributes.orientation];
      json.type = PageElementTypes[PageElementTypes.SCROLL_FLOW_PANEL];
      
      return json;
    }
    
    static fromJson(json: IScrollFlowPanelElement) {
      var panel: ScrollFlowPanel = <ScrollFlowPanel> PageElement.fromJson(json);
      panel.attributes.color = json.color;
      panel.attributes.colorSource = ElementColorSource[json.colorSource];
      panel.attributes.orientation = Orientation[json.orientation];
      
      return panel;
    }
  }
}