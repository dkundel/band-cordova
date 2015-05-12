module BandCordova {
  export class BandPersonalizationManager {
    getMeTileImage(callback: (error: BandErrorMessage, icon?: BandIcon) => void): void {
      let success = (iconData: IBandIcon) => {
        callback(null, BandIcon.fromJson(iconData));
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      cordova.exec(success, error, 'Band', 'getMeTileImage', []);
    }
    
    getTheme(callback: (error: BandErrorMessage, theme?: BandTheme) => void): void {
      let success = (themeData: IBandTheme) => {
        callback(null, BandTheme.fromJson(themeData));
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      cordova.exec(success, error, 'Band', 'getMeTileImage', []);
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
          cordova.exec(success, error, 'Band', 'setMeTileImage', [icon.toString()]);
        })
      } else {
        cordova.exec(success, error, 'Band', 'setMeTileImage', [icon.toString()]);
      }
    }
    
    setTheme(theme: BandTheme, callback: (error?: BandErrorMessage) => void): void {
      let success = () => {
        callback();
      }
      
      let error = (errorMsg: BandErrorMessage) => {
        callback(errorMsg);
      }
      
      cordova.exec(success, error, 'Band', 'setTheme', [theme.toString()]);
    }
  }
}