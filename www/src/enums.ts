/**
 * All the export enums
 */
module BandPlugin {
  export enum ConnectionState {
    BINDING,
    BOUND,
    CONNECTED,
    DISPOSED,
    INVALID_SDK_VERSION,
    UNBINDING,
    UNBOUND
  }
  
  export enum UserConsent {
    GRANTED,
    DECLINED,
    UNSPECEFIED
  }
  
  export enum MessageFlags {
    SHOW_DIALOG,
    NONE
  }
  
  export enum HorizontalAlignment {
    LEFT,
    RIGHT,
    CENTERED
  }
  
  export enum VerticalAlignment {
    TOP,
    BOTTOM,
    CENTERED
  }
  
  export enum Color {
    //TODO
  }
  
  export enum ElementColorSource {
    BAND_BASE,
    BAND_HIGH_CONTRAST,
    BAND_HIGHLIGHT,
    BAND_LOWLIGHT,
    BAND_MUTED,
    BAND_SECONDARY_TEXT,
    CUSTOM,
    TILE_BASE,
    TILE_HIGH_CONTRAST,
    TILE_HIGHLIGHT,
    TILE_LOWLIGHT,
    TILE_MUTED,
    TILE_SECONDARY_TEXT
  }
  
  export enum WrappedTextBlockFont {
    SMALL,
    MEDIUM
  }
  
  export enum TextBlockFont {
    EXTRA_LARGE_NUMBERS,
    EXTRA_LARGE_NUMBERS_BOLD,
    LARGE,
    MEDIUM,
    SMALL
  }
  
  export enum TextBlockBaselineAlignment {
    AUTOMATIC,
    RELATIVE,
    ABSOLUTE
  }
  
  export enum Orientation {
    HORIZONTAL,
    VERTICAL
  }
  
  export enum BandContactState {
    NOT_WORN,
    UNKNOWN,
    WORN
  }
  
  export enum BandErrorType {
    BAND_FULL_ERROR,
    DEVICE_ERROR,
    INVALID_PAGE_DATA_ERROR,
    PERMISSION_ERROR,
    SERVICE_ERROR,
    TILE_ALREADY_EXISTS_ERROR,
    TILE_NOT_FOUND_ERROR,
    TOO_MANY_CONCURRENT_COMMANDS_ERROR,
    UNKNOWN_ERROR,
    UNSUPPORTED_SDK_VERSION_ERROR
  }
  
  export enum BarcodeType {
    CODE39,
    PDF417
  }
  
  export enum HeartRateQuality {
    AQUIRING,
    LOCKED
  }
  
  export enum MotionType {
    IDLE,
    JOGGING,
    RUNNING,
    UNKNOWN,
    WALKING
  }
  
  export enum SampleRate {
    MS128,
    MS16,
    MS32
  }
  
  export enum UVIndexLevel {
    HIGH,
    LOW,
    MEDIUM,
    NONE,
    VERY_HIGH
  }
  
  export enum VibrationType {
    NOTIFICATION_ALARM,
    NOTIFICATION_ONE_TONE,
    NOTIFICATION_TIMER,
    NOTIFICATION_TWO_TONE,
    ONE_TONE_HIGH,
    RAMP_DOWN,
    RAMP_UP,
    THREE_TONE_HIGH,
    TWO_TONE_HIGH
  }
  
  export enum PageElementTypes {
    PAGE_ELEMENT,
    BARCODE,
    FILLED_BUTTON,
    PAGE_PANEL,
    FILLED_PANEL,
    FLOW_PANEL,
    ICON,
    SCROLL_FLOW_PANEL,
    TEXT_BLOCK,
    TEXT_BUTTON,
    WRAPPED_TEXT_BLOCK
  }
  
  export enum PageElementDataTypes {
    BARCODE_DATA,
    FILLED_BUTTON_DATA,
    ICON_DATA,
    PAGE_ELEMENT_DATA,
    TEXT_BLOCK_DATA,
    WRAPPED_TEXT_BLOCK_DATA
  }
}