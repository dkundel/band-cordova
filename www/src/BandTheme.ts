module cordova.plugins.band {
  export class BandTheme {
    private baseColor: string;
    private highlightsColor: string;
    private lowlightsColor: string;
    private secondaryColor: string;
    private highContrastColor: string;
    private mutedColor: string;
    
    constructor(base: string, highlights: string, lowlights: string, secondary: string, highContrast: string, muted: string) {
      this.baseColor = base;
      this.highlightsColor = highlights;
      this.lowlightsColor = lowlights;
      this.secondaryColor = secondary;
      this.highContrastColor = highContrast;
      this.mutedColor = muted;
    }
    
    static fromJson(json: IBandTheme): BandTheme {
      return new BandTheme(json.base, json.highlights, json.lowlights, json.secondary, json.highContrast, json.muted);
    }
    
    toJson(): IBandTheme {
      return {
        base: this.baseColor,
        highlights: this.highlightsColor,
        lowlights: this.lowlightsColor,
        secondary: this.secondaryColor,
        highContrast: this.highContrastColor,
        muted: this.mutedColor
      };
    }
    
    toString(): string {
      return JSON.stringify(this.toJson());
    }
    
    getBaseColor(): string {
      return this.baseColor;
    }
    
    getHighContrastColor(): string {
      return this.highContrastColor;
    }
    
    getHighlightColor(): string {
      return this.highlightsColor;
    }
    
    getLowlightColor(): string {
      return this.lowlightsColor;
    }
    
    getMutedColor(): string {
      return this.mutedColor;
    }
    
    getSecondaryTextColor(): string {
      return this.secondaryColor;
    }
    
    hashCode(): string {
      //TODO
      return '';
    }
    
    setBaseColor(color: string): BandTheme {
      this.baseColor = color;
      return this;
    }
    
    setHighContrastColor(color: string): BandTheme {
      this.highContrastColor = color;
      return this;
    }
    
    setHighlightColor(color: string): BandTheme {
      this.highlightsColor = color;
      return this;
    }
    
    setLowlightColor(color: string): BandTheme {
      this.lowlightsColor = color;
      return this;
    }
    
    setMutedColor(color: string): BandTheme {
      this.mutedColor = color;
      return this;
    }
    
    setSecondaryTextColor(color: string): BandTheme {
      this.secondaryColor = color;
      return this;
    }
  }
}