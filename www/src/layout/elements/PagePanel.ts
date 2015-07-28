module cordova.plugins.band {
  export interface PagePanelAttributes extends PageElementAttributes {
    
  }
  
  export class PagePanel<TAttributes extends PagePanelAttributes> extends PageElement<TAttributes> {
    protected elements: PageElement<PageElementAttributes>[] = [];
    
    constructor(elementId: number, rect: PageRect, ...elements: PageElement<PageElementAttributes>[]) {
      super(elementId, rect, {top: 0, left: 0, right: 0, bottom: 0}, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
      this.addElements(...elements);
    }
    
    addElements(...elements: PageElement<PageElementAttributes>[]) {
      this.elements = this.elements.concat(elements);
    } 
    
    getElements(): PageElement<PageElementAttributes>[] {
      return this.elements;
    }
    
    toJson(): IPagePanel {
      var elements: IPageElement[] = [];
      for (let element in this.elements) {
        elements.push(element.toJson());
      }
      
      var panel = <IPagePanel> super.toJson();
      panel.elements = elements;
      panel.type = PageElementTypes[PageElementTypes.PAGE_PANEL];
      
      return panel;
    }
    
    static fromJson(json: IPagePanel): PagePanel<PagePanelAttributes> {
      var panel = new PagePanel<PagePanelAttributes>(json.elementId, json.rect);
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
        switch (PageElementTypes[element.type]) {
          case PageElementTypes.PAGE_ELEMENT:
            elements.push(PageElement.fromJson(<IPageElement> element));
            break;
          case PageElementTypes.BARCODE:
            elements.push(Barcode.fromJson(<IBarcode> element));
            break;
          case PageElementTypes.FILLED_BUTTON:
            elements.push(FilledButton.fromJson(<IFilledButtonElement> element));
            break;
          case PageElementTypes.PAGE_PANEL:
            elements.push(PagePanel.fromJson(<IPagePanel> element));
            break;
          case PageElementTypes.FILLED_PANEL:
            elements.push(FilledPanel.fromJson(<IFilledPanelElement> element));
            break;
          case PageElementTypes.FLOW_PANEL:
            elements.push(FlowPanel.fromJson(<IFlowPanelElement> element));
            break;
          case PageElementTypes.ICON:
            elements.push(Icon.fromJson(<IIconElement> element));
            break;
          case PageElementTypes.SCROLL_FLOW_PANEL:
            elements.push(ScrollFlowPanel.fromJson(<IScrollFlowPanelElement> element));
            break;
          case PageElementTypes.TEXT_BLOCK:
            elements.push(TextBlock.fromJson(<ITextBlockElement> element));
            break;
          case PageElementTypes.TEXT_BUTTON:
            elements.push(TextButton.fromJson(<ITextButtonElement> element));
            break;
          case PageElementTypes.WRAPPED_TEXT_BLOCK:
            elements.push(WrappedTextBlock.fromJson(<IWrappedTextBlockElement> element));
            break;
          default:
            elements.push(PageElement.fromJson(element));
            break;
        }
      }
      
      panel.elements = elements;
      return panel;
    }
  }
}
