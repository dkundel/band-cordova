module cordova.plugins.band {
  export class BandIcon {
    private path: string;
    private base64: string = '';
    
    constructor(content: string, type?: string) {
      if (type === 'base64') {
        this.base64 = content;
      } else {
        this.path = content;
      }
    } 
    
    toBandIcon(callback: (base64Icon: string) => void): void {
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
    
    getBase64(): string {
      return this.base64;
    }
   
    toJson(): IBandIcon {
      return {
        iconBase64: this.base64
      }
    }
   
    toString(): string {
      return JSON.stringify(this.toJson());
    }
    
    static fromJson(json: IBandIcon): BandIcon {
      return new BandIcon(json.iconBase64, 'base64');
    }
  }
}