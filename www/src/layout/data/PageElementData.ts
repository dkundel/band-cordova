class PageElementData {
  protected id: number;
  
  constructor(id: number) {
    this.id = id;
  }
  
  getId(): number {
    return this.id;
  }
  
  toJson(): IPageElementData {
    return {
      id: this.id,
      type: PageElementDataTypes[PageElementDataTypes.PAGE_ELEMENT_DATA]
    };
  }
  
  toString(): string {
    return JSON.stringify(this.toJson());
  }
  
  static fromJson(json: IPageElementData): PageElementData {
    return new PageElementData(json.id);
  }
}