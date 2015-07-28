module cordova.plugins.band {
  export class PageData {
    private pageUuid: string;
    private layoutId: number;
    private values: PageElementData[];
    
    constructor(pageUuid: string, layoutId: number) {
      this.pageUuid = pageUuid;
      this.layoutId = layoutId;
    }
    
    update(data: PageElementData): PageData {
      this.values.push(data);
      return this;
    }
    
    getValues(): PageElementData[] {
      return this.values;
    }
    
    toJson(): IPageData {
      let values: IPageElementData[] = [];
      for (let v of this.values) {
        values.push(v.toJson());
      }
      
      return {
        pageUuid: this.pageUuid,
        layoutId: this.layoutId,
        values
      }
    }
    
    static fromJson(json: IPageData): PageData {
      var data = new PageData(json.pageUuid, json.layoutId);
      
      for (let value of json.values) {
        switch (PageElementDataTypes[value.type]) {
          case PageElementDataTypes.BARCODE_DATA:
            data.update(BarcodeData.fromJson(<IBarcodeData> value));
            break;
          case PageElementDataTypes.FILLED_BUTTON_DATA:
            data.update(FilledButtonData.fromJson(<IFilledButtonData> value));
            break;
          case PageElementDataTypes.ICON_DATA:
            data.update(IconData.fromJson(<IIconData> value));
            break;
          case PageElementDataTypes.TEXT_BLOCK_DATA:
            data.update(TextBlockData.fromJson(<ITextBlockData> value));
            break;
          case PageElementDataTypes.WRAPPED_TEXT_BLOCK_DATA:
            data.update(WrappedTextBlockData.fromJson(<IWrappedTextBlockData> value));
            break;
          case PageElementDataTypes.PAGE_ELEMENT_DATA:
          default:
            data.update(PageElementData.fromJson(<IPageElementData> value));
            break;
        }
      }
      
      return data;
    } 
  }
}