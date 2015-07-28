module cordova.plugins.band {
  export /*abstract*/ class BandManagerBase {    
	  constructor(private host: BandClient) {}
    exec(success: (args: any) => any, error: (args: any) => any, action: string, args: string[]) {
      this.host.exec(success, error, action, args);
    }
  }
}