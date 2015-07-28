module cordova.plugins.band {
  export interface ScrollFlowPanelAttributes extends PagePanelAttributes {
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
      return util.extend(super.toJson(), {
        color: this.attributes.color,
        colorSource: ElementColorSource[this.attributes.colorSource],
        orientation: Orientation[this.attributes.orientation],
        type: PageElementTypes[PageElementTypes.SCROLL_FLOW_PANEL]
      });
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