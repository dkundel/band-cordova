module cordova.plugins.band {
  export class BandTheme {
    private baseColor: number;
    private highlightsColor: number;
    private lowlightsColor: number;
    private secondaryColor: number;
    private highContrastColor: number;
    private mutedColor: number;
    
    constructor(base: number, highlights: number, lowlights: number, secondary: number, highContrast: number, muted: number) {
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
    
    getBaseColor(): number {
      return this.baseColor;
    }
    
    getHighContrastColor(): number {
      return this.highContrastColor;
    }
    
    getHighlightColor(): number {
      return this.highlightsColor;
    }
    
    getLowlightColor(): number {
      return this.lowlightsColor;
    }
    
    getMutedColor(): number {
      return this.mutedColor;
    }
    
    getSecondaryTextColor(): number {
      return this.secondaryColor;
    }
    
    hashCode(): string {
      //TODO
      return '';
    }
    
    setBaseColor(color: number): BandTheme {
      this.baseColor = color;
      return this;
    }
    
    setHighContrastColor(color: number): BandTheme {
      this.highContrastColor = color;
      return this;
    }
    
    setHighlightColor(color: number): BandTheme {
      this.highlightsColor = color;
      return this;
    }
    
    setLowlightColor(color: number): BandTheme {
      this.lowlightsColor = color;
      return this;
    }
    
    setMutedColor(color: number): BandTheme {
      this.mutedColor = color;
      return this;
    }
    
    setSecondaryTextColor(color: number): BandTheme {
      this.secondaryColor = color;
      return this;
    }
  }
}