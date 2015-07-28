package co.kundel.band;

import com.microsoft.band.*;
import com.microsoft.band.notifications.MessageFlags;
import com.microsoft.band.notifications.VibrationType;
import com.microsoft.band.tiles.BandTile;
import com.microsoft.band.tiles.pages.*;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.List;
import java.util.UUID;
import java.text.SimpleDateFormat;
import java.text.ParseException;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;

public class Band extends CordovaPlugin {
    private final Dictionary<Integer, BandClient> clients = new Hashtable<>();

    private BandClient lookupClient(int id) {
        synchronized (clients) { //synchronize to ensure nwe never create two clients at once
            if (clients.get(id) != null) {
                return clients.get(id);
            }
            final BandInfo[] bands = BandClientManager.getInstance().getPairedBands();
            final BandClient cli = BandClientManager.getInstance().create(cordova.getActivity(), bands[id]);
            clients.put(id, cli);
            return cli;
        }
    }
    
    private BandClient lookupClient(JSONArray args) throws JSONException {
        return lookupClient(new Integer(args.getString(0)));
    }

    private void success(final CallbackContext callbackContext, final JSONObject obj) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                callbackContext.success(obj);
            }
        });
    }

    private void success(final CallbackContext callbackContext, final JSONArray obj) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                callbackContext.success(obj);
            }
        });
    }

    private void success(final CallbackContext callbackContext, final String obj) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                callbackContext.success(obj);
            }
        });
    }

    private void success(final CallbackContext callbackContext, final int obj) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                callbackContext.success(obj);
            }
        });
    }

    private void success(final CallbackContext callbackContext, final byte[] obj) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                callbackContext.success(obj);
            }
        });
    }

    private void success(final CallbackContext callbackContext) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                callbackContext.success();
            }
        });
    }

    private void error(final CallbackContext callbackContext, final JSONObject obj) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                callbackContext.error(obj);
            }
        });
    }

    private void error(final CallbackContext callbackContext, final String obj) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                callbackContext.error(obj);
            }
        });
    }

    private void error(final CallbackContext callbackContext, final int obj) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                callbackContext.error(obj);
            }
        });
    }

    //http://stackoverflow.com/questions/9768611/encode-and-decode-bitmap-object-in-base64-string-in-android
    private String toBase64(Bitmap image) {
        Bitmap compresed = image;
        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        compresed.compress(Bitmap.CompressFormat.PNG, 100, stream);
        byte[] b = stream.toByteArray();
        String result = Base64.encodeToString(b, Base64.DEFAULT);

        return result;
    }

    private Bitmap fromBase64(String image) {
        byte[] bytes = Base64.decode(image, 0);
        return BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
    }

    private Bitmap fromIBandIcon(JSONObject o) throws JSONException {
        return fromBase64(o.getString("iconBase64"));
    }

    private BandTheme fromIBandTheme(JSONObject theme) throws JSONException {
        return new BandTheme(
                theme.getInt("base"),
                theme.getInt("highlights"),
                theme.getInt("lowlights"),
                theme.getInt("secondary"),
                theme.getInt("highContrast"),
                theme.getInt("muted")
        );
    }

    private enum PageElementTypes { //This _MUST_ be in sync with the one in TS
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

    private PageRect fromIPageRect(JSONObject o) throws JSONException {
        return new PageRect(o.getInt("x"), o.getInt("y"), o.getInt("width"), o.getInt("height"));
    }

    private Margins fromIMargins(JSONObject o) throws JSONException {
        return new Margins(o.getInt("left"), o.getInt("top"), o.getInt("right"), o.getInt("bottom"));
    }

    private PageElement fromIPageElement(JSONObject o) throws JSONException {
        PageElement ret = null;
        PageRect bounds = fromIPageRect(o.getJSONObject("rect"));

        switch (PageElementTypes.values()[o.getInt("type")]) {
            case PAGE_ELEMENT:
                //This is the (abstract) base class enum - this should never exist here
                throw new JSONException("enum PAGE_ELEMENT not valid for instantiation");
            case BARCODE:
                ret = new Barcode(bounds, BarcodeType.values()[o.getInt("barcodeType")]);
                break;
            case FILLED_BUTTON:
                FilledButton filledButton = new FilledButton(bounds);
                filledButton.setBackgroundColor(o.getInt("backgroundColor"));
                filledButton.setBackgroundColorSource(ElementColorSource.values()[o.getInt("backgroundColorSource")]);
                ret = filledButton;
                break;
            case ICON:
                Icon ico = new Icon(bounds);
                ico.setColor(o.getInt("color"));
                ico.setColorSource(ElementColorSource.values()[o.getInt("colorSource")]);

                ret = ico;
                break;
            case TEXT_BLOCK:
                TextBlock block = new TextBlock(bounds, TextBlockFont.values()[o.getInt("font")], o.getInt("baseline"));
                block.setAutoWidthEnabled(o.getBoolean("autoWidth"));
                block.setBaselineAlignment(TextBlockBaselineAlignment.values()[o.getInt("baselineAlignment")]);
                block.setColor(o.getInt("color"));
                block.setColorSource(ElementColorSource.values()[o.getInt("colorSource")]);
                ret = block;
                break;
            case TEXT_BUTTON:
                TextButton button = new TextButton(bounds);
                button.setPressedColor(o.getInt("color"));
                button.setPressedColorSource(ElementColorSource.values()[o.getInt("colorSource")]);
                ret = button;
                break;
            case WRAPPED_TEXT_BLOCK:
                WrappedTextBlock wrappedBlock = new WrappedTextBlock(bounds, WrappedTextBlockFont.values()[o.getInt("font")]);
                wrappedBlock.setColor(o.getInt("color"));
                wrappedBlock.setColorSource(ElementColorSource.values()[o.getInt("colorSource")]);
                wrappedBlock.setAutoHeightEnabled(o.getBoolean("autoHeight"));

                ret = wrappedBlock;
                break;
            case PAGE_PANEL:
                //This is the (abstract) base class of all panels/blocks - this should never exist here
                throw new JSONException("enum PAGE_PANEL not valid for instantiation");
            case FILLED_PANEL:
                FilledPanel filledPanel = new FilledPanel(bounds);
                filledPanel.setBackgroundColor(o.getInt("backgroundColor"));
                filledPanel.setBackgroundColorSource(ElementColorSource.values()[o.getInt("backgroundColorSource")]);

                JSONArray filledChildElems = o.getJSONArray("elements");
                for (int i = 0; i < filledChildElems.length(); i++) {
                    filledPanel.addElements(fromIPageElement(filledChildElems.getJSONObject(i)));
                }

                ret = filledPanel;
                break;
            case FLOW_PANEL:
                FlowPanel panel = new FlowPanel(bounds);
                panel.setFlowPanelOrientation(FlowPanelOrientation.values()[o.getInt("orientation")]);

                JSONArray flowChildElems = o.getJSONArray("elements");
                for (int i = 0; i < flowChildElems.length(); i++) {
                    panel.addElements(fromIPageElement(flowChildElems.getJSONObject(i)));
                }

                ret = panel;
                break;
            case SCROLL_FLOW_PANEL:
                ScrollFlowPanel scrollPanel = new ScrollFlowPanel(bounds);
                scrollPanel.setFlowPanelOrientation(FlowPanelOrientation.values()[o.getInt("orientation")]);

                JSONArray scrollChildElems = o.getJSONArray("elements");
                for (int i = 0; i < scrollChildElems.length(); i++) {
                    scrollPanel.addElements(fromIPageElement(scrollChildElems.getJSONObject(i)));
                }

                ret = scrollPanel;
                break;
        }

        if (ret == null){
            return null;
        }

        ret.setId(o.getInt("elementId"));
        ret.setMargins(fromIMargins(o.getJSONObject("margins")));
        ret.setBounds(bounds);
        ret.setHorizontalAlignment(HorizontalAlignment.values()[o.getInt("horizontalAlignment")]);
        ret.setVerticalAlignment(VerticalAlignment.values()[o.getInt("verticalAlignment")]);
        ret.setVisible(o.getBoolean("isVisible"));
        return ret;
    }

    public PageLayout fromIPageLayout(JSONObject o) throws JSONException {
        PageElement elem = fromIPageElement(o.getJSONObject("root"));
        if (elem instanceof PagePanel) {
            return new PageLayout((PagePanel)elem);
        }
        return null;
    }
    
    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSSZ");

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        switch(action) {
            /**
             * Manager Actions
             */
            case "getPairedBands": {
                final BandInfo[] bands = BandClientManager.getInstance().getPairedBands();
                success(callbackContext, new JSONArray(bands));
                return false;
            }
            case "create": {
                lookupClient(args); //create client as a side-effect
                success(callbackContext, new Integer(args.getString(0)));
                return true;
            }

            /**
             * Client Actions
             */
            case "getFirmwareVersion": {
                final BandClient cli = lookupClient(args);
                try {
                    final BandPendingResult<String> version = cli.getFirmwareVersion();
                    final String ver = version.await();
                    success(callbackContext, ver);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch (BandException ex) {
                    error(callbackContext, "BandException");
                }
                return false;
            }
            case "getHardwareVersion": {
                final BandClient cli = lookupClient(args);
                try {
                    final BandPendingResult<String> version = cli.getHardwareVersion();
                    final String ver = version.await();
                    success(callbackContext, ver);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch (BandException ex) {
                    error(callbackContext, "BandException");
                }
                return false;
            }
            case "connect": {
                final BandClient cli = lookupClient(args);
				final BandPendingResult<ConnectionState> pendingResult = cli.connect();
				try {
					final ConnectionState state = pendingResult.await();
		            success(callbackContext, state.ordinal());
                    return true;
				} catch(InterruptedException ex) {
		            error(callbackContext, "InterruptedException");
				} catch(BandException ex) {
		            error(callbackContext, "BandException");
				}
				return false;
            }
            case "disconnect": {
                final BandClient cli = lookupClient(args);
                final BandPendingResult<Void> pendingResult = cli.disconnect();
                try {
                    pendingResult.await();
                    success(callbackContext);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch(BandException ex) {
                    error(callbackContext, "BandException");
                }
                return false;
            }
            case "registerConnectionEventListener": {
                final BandClient cli = lookupClient(args);
                cli.registerConnectionCallback(new BandConnectionCallback() {
                    @Override
                    public void onStateChanged(ConnectionState connectionState) {
                        callbackContext.success(connectionState.ordinal());
                    }
                });
            }
            case "unregisterConnectionEventListeners": {
                final BandClient cli = lookupClient(args);
                cli.unregisterConnectionCallback();
            }

            /**
             * Notification Manager Actions
             */
            case "showDialog": {
                final BandClient cli = lookupClient(args);
                try {
                    final BandPendingResult<Void> res = cli.getNotificationManager().showDialog(UUID.fromString(args.getString(1)), args.getString(2), args.getString(3));
                    res.await();
                    success(callbackContext);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch(BandException ex) {
                    error(callbackContext, "BandException");
                }
                return false;
            }
            case "sendMessage": {
                final BandClient cli = lookupClient(args);
                try {
                    final BandPendingResult<Void> res = cli.getNotificationManager().sendMessage(
                            UUID.fromString(args.getString(1)),
                            args.getString(2),
                            args.getString(3),
                            dateFormat.parse(args.getString(4)),
                            MessageFlags.values()[args.getInt(5)]
                    );
                    res.await();
                    success(callbackContext);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch(BandException ex) {
                    error(callbackContext, "BandException");
                } catch(ParseException ex) {
                    error(callbackContext, "ParseException");
                }
                return false;
            }
            case "vibrate": {
                final BandClient cli = lookupClient(args);
                try {
                    final BandPendingResult<Void> res = cli.getNotificationManager().vibrate(
                            VibrationType.values()[args.getInt(1)]
                    );
                    res.await();
                    success(callbackContext);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch(BandException ex) {
                    error(callbackContext, "BandException");
                }
                return false;
            }

            /**
             * Personalization Manager Actions
             */
            case "getMeTileImage": {
                final BandClient cli = lookupClient(args);
                try {
                    BandPendingResult<Bitmap> result = cli.getPersonalizationManager().getMeTileImage();
                    Bitmap image = result.await();
                    String b64 = toBase64(image);
                    success(callbackContext, new JSONObject()
                            .put("iconBase64", b64)
                    );
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch(BandException ex) {
                    error(callbackContext, "BandException");
                }
                return false;
            }
            case "setMeTileImage": {
                final BandClient cli = lookupClient(args);
                try {
                    Bitmap image = fromIBandIcon(new JSONObject(args.getString(1)));
                    BandPendingResult<Void> result = cli.getPersonalizationManager().setMeTileImage(image);
                    result.await();
                    success(callbackContext);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch(BandException ex) {
                    error(callbackContext, "BandException");
                }
                return false;
            }
            case "getTheme": {
                final BandClient cli = lookupClient(args);
                try {
                    final BandPendingResult<BandTheme> result= cli.getPersonalizationManager().getTheme();
                    final BandTheme theme = result.await();
                    success(callbackContext, new JSONObject()
                                    .put("base", theme.getBaseColor())
                                    .put("highlights", theme.getHighlightColor())
                                    .put("lowlights", theme.getLowlightColor())
                                    .put("secondary", theme.getSecondaryTextColor())
                                    .put("highContrast", theme.getHighContrastColor())
                                    .put("muted", theme.getMutedColor())
                    );
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch(BandException ex) {
                    error(callbackContext, "BandException");
                }
                return false;
            }
            case "setTheme": {
                final BandClient cli = lookupClient(args);
                try {
                    JSONObject theme = new JSONObject(args.getString(1));
                    final BandPendingResult<Void> result = cli.getPersonalizationManager().setTheme(fromIBandTheme(theme));
                    result.await();
                    success(callbackContext);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch(BandException ex) {
                    error(callbackContext, "BandException");
                }
                return false;
            }

            /**
             * Tile Manager Actions
             */
            case "addTile": {
                final BandClient cli = lookupClient(args);
                try {
                    JSONObject tile = new JSONObject(args.getString(1));
                    BandTile.Builder builder = new BandTile.Builder(
                            UUID.fromString(tile.getString("uuid")),
                            tile.getString("tileName"),
                            fromIBandIcon(tile.getJSONObject("tileIcon")));
                    builder.setTheme(fromIBandTheme(tile.getJSONObject("theme")));
                    builder.setTileSmallIcon(fromIBandIcon(tile.getJSONObject("tileSmallIcon")), tile.getBoolean("badgingEnabled"));

                    JSONArray pageIcons = tile.getJSONArray("pageIcons");
                    Bitmap[] icons = new Bitmap[pageIcons.length()];
                    for (int i = 0; i < pageIcons.length(); i++) {
                        icons[i] = fromIBandIcon(pageIcons.getJSONObject(i));
                    }
                    builder.setPageIcons(icons);

                    JSONArray pageLayouts = tile.getJSONArray("pageLayouts");
                    for (int i = 0; i < pageLayouts.length(); i++) {
                        PageLayout layout = fromIPageLayout(pageLayouts.getJSONObject(i));
                        if (layout == null) {
                            throw new JSONException("Root of layout was not a panel - but must be a panel");
                        }
                        builder.addPageLayout(layout);
                    }

                    BandPendingResult<Boolean> result = cli.getTileManager().addTile(cordova.getActivity(), builder.build());
                    Boolean response = result.await();
                    if (response)
                        success(callbackContext);
                    else
                        error(callbackContext, 0);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, "InterruptedException");
                } catch(BandException ex) {
                    error(callbackContext, "BandException");
                }
                return false;
            }
            case "getTiles": {
                return false;
            }
            case "getRemainingTileCapacity": {
                return false;
            }
            case "setPages": {
                return false;
            }
            case "removePages": {
                return false;
            }

            /**
             * Sensor Manager Actions
             */
            case "requestHeartRateConsent": {
                return false;
            }
            case "registerAccelerometerEventListener": {
                return false;
            }
            case "unregisterAccelerometerEventListeners": {
                return false;
            }            
            case "registerCaloriesEventListener": {
                return false;
            }
            case "unregisterCaloriesEventListeners": {
                return false;
            }            
            case "registerContactEventListener": {
                return false;
            }
            case "unregisterContactEventListeners": {
                return false;
            }            
            case "registerDistanceEventListener": {
                return false;
            }
            case "unregisterDistanceEventListeners": {
                return false;
            }            
            case "registerGyroscopeEventListener": {
                return false;
            }
            case "unregisterGyroscopeEventListeners": {
                return false;
            }            
            case "registerHeartRateEventListener": {
                return false;
            }
            case "unregisterHeartRateEventListeners": {
                return false;
            }            
            case "registerPedometerEventListener": {
                return false;
            }
            case "unregisterPedometerEventListeners": {
                return false;
            }            
            case "registerSkinTemperatureEventListener": {
                return false;
            }
            case "unregisterSkinTemperatureEventListeners": {
                return false;
            }            
            case "registerUVEventListener": {
                return false;
            }
            case "unregisterUVEventListeners": {
                return false;
            }

            /**
             * No action.
             */
            default: {
                error(callbackContext, String.format("Band action could not be found: '%s'", action));
                return false;
            }
        }
    }
    
    @Override
    public void pluginInitialize() {
        //TODO: Any initialization logic
    }
}