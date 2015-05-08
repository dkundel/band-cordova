class PagePanel extends PageElement {
  private elements: PageElement[] = [];
  
  addElements(...elements: PageElement[]) {
    this.elements = this.elements.concat(elements);
  } 
  
  getElements(): PageElement[] {
    return this.elements;
  }
}