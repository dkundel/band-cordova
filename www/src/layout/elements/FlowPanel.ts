module cordova.plugins.band {
  interface FlowPanelAttributes extends PagePanelAttributes {
    orientation: Orientation;
  }
  
  export class FlowPanel extends PagePanel<FlowPanelAttributes> {
    constructor(elementId: number, rect: PageRect, orientation: Orientation, ...elements: PageElement<PageElementAttributes>[]) {
      super(elementId, rect, ...elements);
      this.attributes.orientation = orientation;
    }
    
    toJson(): IFlowPanelElement {
      var json = <IFlowPanelElement> super.toJson()
      json.orientation = Orientation[this.attributes.orientation];
      json.type = PageElementTypes[PageElementTypes.FLOW_PANEL];
      
      return json;
    }
    
    static fromJson(json: IFlowPanelElement) {
      var panel: FlowPanel = <FlowPanel> PageElement.fromJson(json);
      panel.attributes.orientation = Orientation[json.orientation];
      
      return panel;
    }
  }
}