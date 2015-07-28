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
        orientation: Orientation[this.attributes.orientation],
        type: PageElementTypes[PageElementTypes.FLOW_PANEL]
      });
    }
    
    static fromJson(json: IFlowPanelElement) {
      var panel: FlowPanel = <FlowPanel> PageElement.fromJson(json);
      panel.attributes.orientation = Orientation[json.orientation];
      
      return panel;
    }
  }
}