module cordova.plugins.band {
  export class BandTile {
    public uuid: string;
    private pageIcons: BandIcon[];
    private pageLayouts: PageLayout[];
    private theme: BandTheme;
    private tileIcon: BandIcon;
    private tileName: string;
    private tileSmallIcon: BandIcon;
    private badgingEnabled: boolean;
    
    static BandTileBuilder: BandTileBuilder;
    
    constructor(json: IBandTile) {
      let icons: BandIcon[] = [];
      for (let icon of json.pageIcons) {
        icons.push(BandIcon.fromJson(icon));
      }
      
      let layouts: PageLayout[] = [];
      for (let layout of json.pageLayouts) {
        layouts.push(PageLayout.fromJson(layout))
      }
      
      this.uuid = json.uuid;
      this.pageIcons = icons;
      this.pageLayouts = layouts;
      this.theme = BandTheme.fromJson(json.theme);
      this.tileIcon = BandIcon.fromJson(json.tileIcon);
      this.tileName = json.tileName;
      this.tileSmallIcon = BandIcon.fromJson(json.tileSmallIcon);
      this.badgingEnabled = json.badgingEnabled;
    }
    
    toJson(): IBandTile {
      let icons: IBandIcon[] = [], layouts: IPageLayout[] = [];
      for (let icon of this.pageIcons) {
        icons.push(icon.toJson());
      }
      
      for (let layout of this.pageLayouts) {
        layouts.push(layout.toJson());
      }
      
      return {
        uuid: this.uuid,
        pageIcons: icons,
        pageLayouts: layouts,
        theme: this.theme.toJson(),
        tileIcon: this.tileIcon.toJson(),
        tileName: this.tileName,
        tileSmallIcon: this.tileSmallIcon.toJson(),
        badgingEnabled: this.badgingEnabled
      };
    }
    
    toString(): string {
      return JSON.stringify(this.toJson());
    }
  }
}