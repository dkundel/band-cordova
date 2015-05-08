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
}