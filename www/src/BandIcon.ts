module BandCordova {
  export class BandIcon {
    private path: string;
    private base64: string = '';
    
    constructor(path: string) {
      this.path = path;
    } 
    
    toBandIcon(callback(base64Icon: string) => void): void {
      if (this.base64.length !== 0) {
        callback(this.base64);
        return;
      }
      
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        this.base64 = canvas.toDataURL();
        callback(this.base64);
        canvas = null;
      }
    }
  }
}