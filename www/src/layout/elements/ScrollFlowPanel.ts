module cordova.plugins.band {
  export interface ScrollFlowPanelAttributes extends PagePanelAttributes {
    orientation: Orientation;
  }
  
  export class ScrollFlowPanel extends PagePanel<ScrollFlowPanelAttributes> {
    constructor(elementId: number, rect: PageRect, orientation: Orientation, ...elements: PageElement<PageElementAttributes>[]) {
      super(elementId, rect, ...elements);
      this.attributes.orientation = orientation;
    }
    
    toJson(): IScrollFlowPanelElement {
      return util.extend(super.toJson(), {
        orientation: Orientation[this.attributes.orientation],
        type: PageElementTypes[PageElementTypes.SCROLL_FLOW_PANEL]
      });
    }
    
    static fromJson(json: IScrollFlowPanelElement) {
      var panel: ScrollFlowPanel = <ScrollFlowPanel> PageElement.fromJson(json);
      panel.attributes.orientation = Orientation[json.orientation];
      
      return panel;
    }
  }
}