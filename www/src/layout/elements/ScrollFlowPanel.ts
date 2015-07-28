module BandPlugin {
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
        orientation: this.attributes.orientation,
        type: PageElementTypes.SCROLL_FLOW_PANEL
      });
    }
    
    static fromJson(json: IScrollFlowPanelElement) {
      var panel: ScrollFlowPanel = <ScrollFlowPanel> PageElement.fromJson(json);
      panel.attributes.orientation = json.orientation;
      
      return panel;
    }
  }
}