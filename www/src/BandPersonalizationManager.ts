module BandPlugin {
  export class BandPersonalizationManager extends BandManagerBase {
    getMeTileImage(callback: (error: BandErrorMessage, icon?: BandIcon) => void): void {
      let success = (iconData: IBandIcon) => {
        callback(null, BandIcon.fromJson(iconData));
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      this.exec(success, error, 'getMeTileImage', []);
    }
    
    getTheme(callback: (error: BandErrorMessage, theme?: BandTheme) => void): void {
      let success = (themeData: IBandTheme) => {
        callback(null, BandTheme.fromJson(themeData));
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      this.exec(success, error, 'getMeTileImage', []);
    }
    
    setMeTileImage(icon: BandIcon, callback: (error?: BandErrorMessage) => void): void {
      let success = () => {
        callback();
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      if (icon.getBase64().length === 0) {
        icon.toBandIcon(() => {
          this.exec(success, error, 'setMeTileImage', [icon.toString()]);
        })
      } else {
        this.exec(success, error, 'setMeTileImage', [icon.toString()]);
      }
    }
    
    setTheme(theme: BandTheme, callback: (error?: BandErrorMessage) => void): void {
      let success = () => {
        callback();
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      this.exec(success, error, 'setTheme', [theme.toString()]);
    }
  }
}