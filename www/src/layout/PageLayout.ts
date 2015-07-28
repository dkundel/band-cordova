module cordova.plugins.band {
  export class PageLayout {
    private root: PagePanel<PagePanelAttributes>;
    
    constructor(root: PagePanel<PagePanelAttributes>) {
      this.root = root;
    }
    
    getRoot(): PagePanel<PagePanelAttributes> {
      return this.root;
    }
    
    setRoot(root: PagePanel<PagePanelAttributes>): PageLayout {
      this.root = root;
      return this;
    }
    
    toJson(): IPageLayout {
      return {
        root: this.root.toJson()
      }
    }
    
    static fromJson(json: IPageLayout): PageLayout {
      let root: PagePanel<PagePanelAttributes>;
      switch (json.root.type) {
        case PageElementTypes.FILLED_PANEL:
          root = FilledPanel.fromJson(<IFilledPanelElement> json.root)
          break;
        case PageElementTypes.FLOW_PANEL:
          root = FlowPanel.fromJson(<IFlowPanelElement> json.root)
          break;
        case PageElementTypes.SCROLL_FLOW_PANEL:
          root = ScrollFlowPanel.fromJson(<IScrollFlowPanelElement> json.root)
          break;
        case PageElementTypes.PAGE_PANEL:
        default:
          root = PagePanel.fromJson(<IPagePanel> json.root)
          break;
      }
      let layout = new PageLayout(root);
      return layout;
    }
  }
}