module cordova.plugins.band {
  interface PageElementAttributes {
    elementId: number;
    rect: PageRect;
    margins: Margins;
    horizontalAlignment: HorizontalAlignment;
    verticalAlignment: VerticalAlignment;
    isVisible: boolean;
  }
  
  export class PageElement<TPageElementAttributes extends PageElementAttributes> {
    protected attributes: TPageElementAttributes;
    
    constructor(elementId?: number, rect?: PageRect, margins?: Margins,
      horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment,
      isVisible?: boolean) {
      this.attributes = <TPageElementAttributes> { elementId, rect, margins, horizontalAlignment, verticalAlignment, isVisible };
    }
    
    getAttributes(): PageElementAttributes {
      return this.attributes;
    }
    
    setAttributes(attr: TPageElementAttributes) {
      this.attributes = attr;
    }
    
    isVisible(): boolean {
      return this.attributes.isVisible;
    }
    
    setVisible(visible: boolean) {
      this.attributes.isVisible = visible;
    }
    
    getId(): number {
      return this.attributes.elementId;
    }
    
    setId(id: number): void {
      this.attributes.elementId = id;
    }
    
    toJson(): IPageElement {
      return {
        elementId: this.attributes.elementId,
        rect: this.attributes.rect,
        margins: this.attributes.margins,
        horizontalAlignment: HorizontalAlignment[this.attributes.horizontalAlignment],
        verticalAlignment: VerticalAlignment[this.attributes.verticalAlignment],
        isVisible: this.attributes.isVisible,
        type: PageElementTypes[PageElementTypes.PAGE_ELEMENT]
      };
    }
    
    toString(): string {
      return JSON.stringify(this.toJson());
    }
    
    static fromJson(json: IPageElement): PageElement<PageElementAttributes> {
      var element = new PageElement();
      element.attributes = {
        elementId: json.elementId,
        rect: json.rect,
        margins: json.margins,
        horizontalAlignment: HorizontalAlignment[json.horizontalAlignment],
        verticalAlignment: VerticalAlignment[json.verticalAlignment],
        isVisible: json.isVisible
      }
      return element;
    }
  }
}