/// <reference path="BandIcon" />
/// <reference path="BandTheme" />


module BandCordova {
  export class BandTile {
    private pageIcons: BandIcon[];
    private pageLayouts: PageLayout[];
    private theme: BandTheme;
    private tileIcon: BandIcon;
    private tileId: string;
    private tileName: string;
    private tileSmallIcon: BandIcon;
    private badgingEnabled: boolean;
    
    constructor(json: IBandTile) {
      let icons = [];
      for (let icon of json.pageIcons) {
        icons.push(BandIcon.fromJson(icon));
      }
      
      let layouts = [];
      for (let layout of json.pageLayouts) {
        layouts.push(PageLayout.fromJson(layout))
      }
      
      this.pageIcons = icons;
      this.pageLayouts = layouts;
      this.theme = BandTheme.fromJson(json.theme);
      this.tileIcon = BandIcon.fromJson(json.tileIcon);
      this.tileId = json.tileId;
      this.tileName = json.tileName;
      this.tileSmallIcon = BandIcon.fromJson(json.tileSmallIcon);
      this.badgingEnabled = json.badingEnabled;
    }
    
    toJson(): IBandTile {
      let icons = [], layouts = [];
      for (let icon of this.pageIcons) {
        icons.push(icon.toJson())
      }
      
      for (let layout of this.pageLayouts) {
        
      }
      
      return {
        pageIcons: 
      };
    }
    
    toString(): string {
      return JSON.stringify(this.toJson());
    }
  }
}