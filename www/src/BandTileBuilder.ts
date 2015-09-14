module BandPlugin {
  export class BandTileBuilder {
    private tile: IBandTile;
    
    constructor(uuid: string, tileName: string, tileIcon: BandIcon) {
      this.tile.uuid = uuid;
      this.tile.tileName = tileName;
      this.tile.tileIcon = tileIcon.toJson();
    }
    
    addPageLayout(pageLayout: PageLayout): BandTileBuilder {
      this.tile.pageLayouts = !this.tile.pageLayouts ? [] : this.tile.pageLayouts;
      this.tile.pageLayouts.push(pageLayout.toJson());
      return this;
    }
    
    setPageIcons(...icons: BandIcon[]): BandTileBuilder {
      let iconJsons: IBandIcon[] = [];
      for (let icon of icons) {
        iconJsons.push(icon.toJson());
      }
      this.tile.pageIcons = iconJsons;
      return this;
    }
    
    setPageLayouts(...pageLayouts: PageLayout[]): BandTileBuilder {
      let layouts: IPageLayout[] = [];
      for (let layout of pageLayouts) {
        layouts.push(layout.toJson());
      }
      this.tile.pageLayouts = layouts;
      return this;
    }
    
    setTheme(theme: BandTheme): BandTileBuilder {
      this.tile.theme = theme.toJson();
      return this;
    }
    
    setTileSmallIcon(icon: BandIcon, badgingEnabled: boolean): BandTileBuilder {
      this.tile.badgingEnabled = badgingEnabled;
      this.tile.tileSmallIcon = icon.toJson();
      return this;
    }
    
    build(): BandTile {
      return new BandTile(this.tile);
    }
  }
}