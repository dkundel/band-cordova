module cordova.plugins.band {
  export interface FlowPanelAttributes extends PagePanelAttributes {
    orientation: Orientation;
  }
  
  export class FlowPanel extends PagePanel<FlowPanelAttributes> {
    constructor(elementId: number, rect: PageRect, orientation: Orientation, ...elements: PageElement<PageElementAttributes>[]) {
      super(elementId, rect, ...elements);
      this.attributes.orientation = orientation;
    }
    
    toJson(): IFlowPanelElement {
      return util.extend(super.toJson(),{
        orientation: this.attributes.orientation,
        type: PageElementTypes.FLOW_PANEL
      });
    }
    
    static fromJson(json: IFlowPanelElement) {
      var panel: FlowPanel = <FlowPanel> PageElement.fromJson(json);
      panel.attributes.orientation = json.orientation;
      
      return panel;
    }
  }
}