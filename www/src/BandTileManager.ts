module cordova.plugins.band {
  export class BandTileManager {
    addTitle(tile: BandTile, callback: (error: BandErrorMessage) => void): void {
      var success = () => {
        callback(null);
      }
      
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'addTile', [tile.toString()])
    }
    
    getRemainingTileCapacity(callback: (error: BandErrorMessage, capacity?: number) => void): void {
      var success = (capacity: number) => {
        callback(null, capacity);
      }
      
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'getRemainingTileCapacity', [])
    }
    
    getTiles(callback: (error: BandErrorMessage, tiles?: BandTile[]) => void): void {
      var success = (tiles: IBandTile[]) => {
        var bandTiles: BandTile[] = [];
        for (let tile of tiles) {
          bandTiles.push(new BandTile(tile));
        }
        
        callback(null, bandTiles);
      }
      
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'getTiles', [])
    }
    
    removePages(tileId: string, callback: (error: BandErrorMessage) => void): void {
      var success = () => {
        callback(null);
      }
      
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'removePages', [tileId])
    }
    
    removeTile(tile: BandTile, callback: (error: BandErrorMessage) => void): void {
      var success = () => {
        callback(null);
      }
      
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'addTile', [tile.toString()])
    }
    
    setPages(tileId: string, pageData: PageData[], callback: (error: BandErrorMessage) => void): void {
      var success = () => {
        callback(null);
      }
      
      var error = (error: BandErrorMessage) => {
        callback(error);
      }
      
      cordova.exec(success, error, 'Band', 'setPages', [tileId, pageData.toString()])
    }
  }
}