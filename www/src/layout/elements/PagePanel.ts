interface PagePanelAttributes extends PageElementAttributes {
  
}

class PagePanel<TAttributes extends PagePanelAttributes> extends PageElement<TAttributes> {
  private elements: PageElement<TAttributes>[] = [];
  
  addElements(...elements: PageElement<TAttributes>[]) {
    this.elements = this.elements.concat(elements);
  } 
  
  getElements(): PageElement<TAttributes>[] {
    return this.elements;
  }
  
  toJson(): IPagePanel {
    var elements: IPageElement[] = [];
    for (let element in this.elements) {
      elements.push(element.toJson());
    }
    
    var panel = <IPagePanel> super.toJson();
    panel.elements = elements;
    
    return panel;
  }
  
  static fromJson(json: IPagePanel): PagePanel<PagePanelAttributes> {
    var panel = new PagePanel<PagePanelAttributes>();
    panel.attributes = {
      elementId: json.elementId,
      rect: json.rect,
      margins: json.margins,
      horizontalAlignment: HorizontalAlignment[json.horizontalAlignment],
      verticalAlignment: VerticalAlignment[json.verticalAlignment],
      isVisible: json.isVisible
    }
    
    var elements: PageElement<PageElementAttributes>[] = [];
    for (let element of json.elements) {
      switch (element.type) {
        // TODO
      }
    }
    
    panel.elements = elements;
    return panel;
  }
}