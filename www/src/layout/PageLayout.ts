class PageLayout {
  private root: PagePanel;
  
  constructor(root: PagePanel) {
    this.root = root;
  }
  
  getRoot(): PagePanel {
    return this.root;
  }
  
  setRoot(root: PagePanel): PageLayout {
    this.root = root;
    return this;
  }
  
  static fromJson(json: IPageLayout): PageLayout {
    var root = new PagePanel();
    //TODO
    var layout = new PageLayout(root);
    return layout;
  }
}