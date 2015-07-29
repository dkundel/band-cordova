package co.kundel.band;

import com.microsoft.band.*;
import com.microsoft.band.notifications.MessageFlags;
import com.microsoft.band.notifications.VibrationType;
import com.microsoft.band.sensors.*;
import com.microsoft.band.tiles.BandIcon;
import com.microsoft.band.tiles.BandTile;
import com.microsoft.band.tiles.pages.*;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.*;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.*;
import java.text.SimpleDateFormat;
import java.text.ParseException;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;

public class Band extends CordovaPlugin {
    
    public void onNewIntent(Intent intent) { 
        if (intent.getAction() == "com.microsoft.band.action.ACTION_TILE_OPENED") {
         // handle tile opened event
        }
        else if (intent.getAction() == "com.microsoft.band.action.ACTION_TILE_BUTTON_PRESSED") {
         // handle button pressed event
        }
        else if (intent.getAction() == "com.microsoft.band.action.ACTION_TILE_CLOSED") {
         // handle tile closed event
        }
    }
    
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

    private void success(final CallbackContext callbackContext, final Boolean b) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, b));
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

    enum PageElementDataTypes {
        BARCODE_DATA,
        FILLED_BUTTON_DATA,
        ICON_DATA,
        PAGE_ELEMENT_DATA,
        TEXT_BLOCK_DATA,
        WRAPPED_TEXT_BLOCK_DATA
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

    public JSONObject buildTheme(BandTheme theme) throws JSONException {
        return new JSONObject()
                .put("base", theme.getBaseColor())
                .put("highlights", theme.getHighlightColor())
                .put("lowlights", theme.getLowlightColor())
                .put("secondary", theme.getSecondaryTextColor())
                .put("highContrast", theme.getHighContrastColor())
                .put("muted", theme.getMutedColor());
    }

    public JSONObject buildIcon(Bitmap image) throws JSONException {
        String b64 = toBase64(image);
        return new JSONObject().put("iconBase64", b64);
    }

    public JSONArray buildTiles(List<BandTile> tiles) throws JSONException {
        JSONArray arr = new JSONArray();
        for (int i = 0; i < tiles.size(); i++) {
            BandTile elem = tiles.get(i);
            arr.put(buildTile(elem));
        }
        return arr;
    }

    public JSONObject buildBandIcon(BandIcon icon) throws JSONException {
        return buildIcon(icon.getIcon());
    }

    public JSONObject buildPageLayout(PageLayout layout) throws JSONException {
        JSONObject o = new JSONObject();
        o.put("root", buildPageElement(layout.getRoot()));
        return o;
    }

    public JSONObject buildPageRect(PageRect rect) throws JSONException {
        return new JSONObject()
                .put("x", rect.getOriginX())
                .put("y", rect.getOriginY())
                .put("height", rect.getHeight())
                .put("width", rect.getWidth());
    }

    public JSONObject buildMargins(Margins margins) throws JSONException {
        return new JSONObject()
                .put("left", margins.getLeft())
                .put("top", margins.getTop())
                .put("right", margins.getBottom())
                .put("bottom", margins.getBottom());
    }

    public JSONObject buildPageElement(PageElement elem) throws JSONException {
        JSONObject o = new JSONObject();
        o.put("type", PageElementTypes.PAGE_ELEMENT.ordinal());
        //We convey type information to the client - since Java doesn't support generic methods it's ugly...
        if (elem instanceof PagePanel) {
            PagePanel panel = (PagePanel)elem;
            o.put("type", PageElementTypes.PAGE_PANEL.ordinal());
            if (panel instanceof FilledPanel) {
                FilledPanel filled = (FilledPanel)panel;
                o.put("type", PageElementTypes.FILLED_PANEL.ordinal());
                o.put("backgroundColor", filled.getBackgroundColor());
                o.put("BackgroundColorSource", filled.getBackgroundColorSource().ordinal());

            } else if (panel instanceof  FlowPanel) {
                FlowPanel flow = (FlowPanel)panel;
                o.put("type", PageElementTypes.FLOW_PANEL.ordinal());
                o.put("orientation", flow.getFlowPanelOrientation().ordinal());

                if (flow instanceof ScrollFlowPanel) { //inherits from flowpanel
                    ScrollFlowPanel scroll = (ScrollFlowPanel)flow;
                    o.put("type", PageElementTypes.SCROLL_FLOW_PANEL.ordinal());
                    o.put("color", scroll.getScrollBarColor());
                    o.put("colorSource", scroll.getScrollBarColorSource());
                }
            }

            JSONArray children = new JSONArray();
            List<PageElement> elems = panel.getElements();
            for (int i = 0; i < elems.size(); i++) {
                children.put(i, buildPageElement(elems.get(i)));
            }
            o.put("elements", children);
        } else if (elem instanceof Barcode) {
            Barcode code = (Barcode)elem;
            o.put("type", PageElementTypes.BARCODE.ordinal());
            o.put("barcodeType", code.getBarcodeType().ordinal());

        } else if (elem instanceof FilledButton){
            FilledButton filled = (FilledButton)elem;
            o.put("type", PageElementTypes.FILLED_BUTTON.ordinal());
            o.put("color", filled.getBackgroundColor());
            o.put("colorSource", filled.getBackgroundColorSource().ordinal());

        } else if (elem instanceof Icon) {
            Icon ico = (Icon)elem;
            o.put("type", PageElementTypes.ICON.ordinal());
            o.put("color", ico.getColor());
            o.put("colorSource", ico.getColorSource().ordinal());

        } else if (elem instanceof TextBlock) {
            TextBlock block = (TextBlock)elem;
            o.put("type", PageElementTypes.TEXT_BLOCK.ordinal());
            o.put("color", block.getColor());
            o.put("colorSource", block.getColorSource().ordinal());
            o.put("font", block.getFont().ordinal());
            o.put("baselineAlignment", block.getBaselineAlignment().ordinal());
            o.put("baseline", block.getBaseline());
            o.put("autoWidth", block.isAutoWidthEnabled());

        } else if (elem instanceof TextButton) {
            TextButton button = (TextButton)elem;
            o.put("type", PageElementTypes.TEXT_BUTTON.ordinal());
            o.put("color", button.getPressedColor());
            o.put("colorSource", button.getPressedColorSource().ordinal());

        } else if (elem instanceof WrappedTextBlock) {
            WrappedTextBlock block = (WrappedTextBlock)elem;
            o.put("type", PageElementTypes.WRAPPED_TEXT_BLOCK.ordinal());
            o.put("color", block.getColor());
            o.put("colorSource", block.getColorSource().ordinal());
            o.put("font", block.getFont().ordinal());
            o.put("autoHeight", block.isAutoHeightEnabled());

        }

        o.put("elementId", elem.getId());
        o.put("rect", buildPageRect(elem.getRect()));
        o.put("margins", buildMargins(elem.getMargins()));
        o.put("horizontalAlignment", elem.getHorizontalAlignment().ordinal());
        o.put("verticalAlignment", elem.getVerticalAlignment().ordinal());
        o.put("isVisible", elem.isVisible());
        return o;
    }

    public JSONObject buildTile(BandTile tile) throws JSONException {
        JSONObject o = new JSONObject();
        o.put("uuid", tile.getTileId().toString());
        o.put("tileName", tile.getTileName());
        o.put("badgingEnabled", tile.isBadgingEnabled());
        o.put("theme", buildTheme(tile.getTheme()));
        o.put("tileIcon", buildIcon(tile.getTileIcon().getIcon()));
        o.put("smallTileIcon", buildIcon(tile.getTileSmallIcon().getIcon()));

        JSONArray pageIcons = new JSONArray();
        List<BandIcon> icons = tile.getPageIcons();
        for (int i = 0; i < icons.size(); i++) {
            pageIcons.put(i, buildBandIcon(icons.get(i)));
        }
        o.put("pageIcons", pageIcons);

        JSONArray pageLayouts = new JSONArray();
        List<PageLayout> layouts = tile.getPageLayouts();
        for (int j = 0; j < layouts.size(); j++) {
            pageLayouts.put(j, buildPageLayout(layouts.get(j)));
        }
        o.put("pageLayouts", pageLayouts);

        return o;
    }

    private BarcodeData fromIBarcodeData(JSONObject o) throws JSONException {
        return new BarcodeData(o.getInt("id"), o.getString("barcodeText"), BarcodeType.values()[o.getInt("barcodeType")]);
    }

    private FilledButtonData fromIFilledButtonData(JSONObject o) throws JSONException {
        return new FilledButtonData(o.getInt("id"), o.getInt("color"));
    }

    private IconData fromIIconData(JSONObject o) throws JSONException {
        return new IconData(o.getInt("id"), o.getInt("iconIndex"));
    }

    private TextBlockData fromITextBlockData(JSONObject o) throws JSONException {
        return new TextBlockData(o.getInt("id"), o.getString("text"));
    }

    private WrappedTextBlockData fromIWrappedTextBlockData(JSONObject o) throws JSONException {
        return new WrappedTextBlockData(o.getInt("id"), o.getString("text"));
    }

    private PageElementData fromIPageElementData(JSONObject o) throws JSONException {
        switch(PageElementDataTypes.values()[o.getInt("type")]){
            case BARCODE_DATA:
                return fromIBarcodeData(o);
            case FILLED_BUTTON_DATA:
                return fromIFilledButtonData(o);
            case ICON_DATA:
                return fromIIconData(o);
            case PAGE_ELEMENT_DATA:
                throw new JSONException("PAGE_ELEMENT_DATA is a base class and cannot be instantiated");
            case TEXT_BLOCK_DATA:
                return fromITextBlockData(o);
            case WRAPPED_TEXT_BLOCK_DATA:
                return fromIWrappedTextBlockData(o);
            default:
                throw new JSONException("Invalid enum");
        }
    }

    private PageElementData[] fromIPageElementDataArray(JSONArray a) throws JSONException {
        PageElementData[] ret = new PageElementData[a.length()];
        for (int i = 0; i < a.length(); i++) {
            ret[i] = fromIPageElementData(a.getJSONObject(i));
        }
        return ret;
    }

    private PageData fromIPageData(JSONObject o) throws JSONException {
        PageData data = new PageData(UUID.fromString(o.getString("pageUuid")), o.getInt("layoutId"));
        PageElementData[] elemData = fromIPageElementDataArray(o.getJSONArray("values"));
        for (int i = 0; i < elemData.length; i++) {
            data.update(elemData[i]);
        }
        return data;
    }

    private PageData[] fromIPageDataArray(JSONArray arr) throws JSONException {
        PageData[] ret = new PageData[arr.length()];
        for (int i = 0; i < arr.length(); i++) {
            ret[i] = fromIPageData(arr.getJSONObject(i));
        }
        return ret;
    }
    
    //http://stackoverflow.com/questions/10120709/difference-between-printstacktrace-and-tostring
    public static String exceptionStacktraceToString(Exception e)
    {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PrintStream ps = new PrintStream(baos);
        e.printStackTrace(ps);
        ps.close();
        return baos.toString();
    }

    private Hashtable<Integer, Object> listeners = new Hashtable<>(); //Not particularly typesafe, but the listeners don't share another base class
    private int listenersId = 0;
    
    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSSZ");

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        switch(action) {
            /**
             * Manager Actions
             */
            case "getPairedBands": {
                final BandInfo[] bands = BandClientManager.getInstance().getPairedBands();
                JSONArray bandInfo = new JSONArray();
                for(int i = 0; i < bands.length; i++) {
                    bandInfo.put(i, new JSONObject()
                        .put("macAddress", bands[i].getMacAddress())
                        .put("name", bands[i].getName())
                    );
                }
                success(callbackContext, bandInfo);
                return true;
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
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch (BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
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
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch (BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
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
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
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
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
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
                return true;
            }
            case "unregisterConnectionEventListeners": {
                final BandClient cli = lookupClient(args);
                cli.unregisterConnectionCallback();
                return true;
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
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
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
                            MessageFlags.values()[new Integer(args.getString(5))]
                    );
                    res.await();
                    success(callbackContext);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(ParseException ex) {
                    error(callbackContext, "ParseException");
                }
                return false;
            }
            case "vibrate": {
                final BandClient cli = lookupClient(args);
                try {
                    final BandPendingResult<Void> res = cli.getNotificationManager().vibrate(
                            VibrationType.values()[new Integer(args.getString(1))]
                    );
                    res.await();
                    success(callbackContext);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
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
                    success(callbackContext, buildIcon(image));
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
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
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "getTheme": {
                final BandClient cli = lookupClient(args);
                try {
                    final BandPendingResult<BandTheme> result= cli.getPersonalizationManager().getTheme();
                    final BandTheme theme = result.await();
                    success(callbackContext, buildTheme(theme));
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
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
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
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
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "getTiles": {
                try {
                    final BandClient cli = lookupClient(args);
                    BandPendingResult<List<BandTile>> result = cli.getTileManager().getTiles();
                    final List<BandTile> tiles = result.await();
                    success(callbackContext, buildTiles(tiles));
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "removeTile": {
                try {
                    final BandClient cli = lookupClient(args);
                    UUID id = UUID.fromString(args.getString(1));
                    BandPendingResult<Boolean> result = cli.getTileManager().removeTile(id);
                    Boolean res = result.await();
                    if (res)
                        success(callbackContext);
                    else
                        error(callbackContext, 0);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "getRemainingTileCapacity": {
                try {
                    final BandClient cli = lookupClient(args);
                    BandPendingResult<Integer> result = cli.getTileManager().getRemainingTileCapacity();
                    Integer capacity = result.await();
                    success(callbackContext, capacity);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "setPages": {
                try {
                    final BandClient cli = lookupClient(args);
                    UUID id = UUID.fromString(args.getString(1));
                    PageData[] pages = fromIPageDataArray(new JSONArray(args.getString(2)));
                    BandPendingResult<Boolean> result = cli.getTileManager().setPages(id, pages);
                    Boolean res = result.await();
                    if (res)
                        success(callbackContext);
                    else
                        error(callbackContext, 0);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "removePages": {
                try {
                    final BandClient cli = lookupClient(args);
                    UUID id = UUID.fromString(args.getString(1));
                    BandPendingResult<Boolean> result = cli.getTileManager().removePages(id);
                    Boolean res = result.await();
                    if (res)
                        success(callbackContext);
                    else
                        error(callbackContext, 0);
                    return true;
                } catch(InterruptedException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }

            /**
             * Sensor Manager Actions
             */
            case "requestHeartRateConsent": {
                final BandClient cli = lookupClient(args);
                cli.getSensorManager().requestHeartRateConsent(cordova.getActivity(), new HeartRateConsentListener() {
                    @Override
                    public void userAccepted(boolean b) {
                        success(callbackContext, b);
                    }
                });
                return false;
            }
            case "registerAccelerometerEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    final Integer l = listenersId++;

                    BandAccelerometerEventListener listener = new BandAccelerometerEventListener() {
                        @Override
                        public void onBandAccelerometerChanged(BandAccelerometerEvent bandAccelerometerEvent) {
                            try {
                                success(callbackContext, new JSONObject()
                                    .put("acceleration", new JSONObject()
                                        .put("x", bandAccelerometerEvent.getAccelerationX())
                                        .put("y", bandAccelerometerEvent.getAccelerationY())
                                        .put("z", bandAccelerometerEvent.getAccelerationZ())
                                    )
                                    .put("id", l)
                                    .put("timestamp", (new Date()).getTime())
                                );
                            } catch (JSONException ex) {
                                error(callbackContext, exceptionStacktraceToString(ex));
                            }
                        }
                    };
                    listeners.put(l, listener);

                    return cli.getSensorManager().registerAccelerometerEventListener(listener, SampleRate.values()[new Integer(args.getString(1))]);
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterAccelerometerEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    Integer key = new Integer(args.getString(1));
                    BandAccelerometerEventListener listener = (BandAccelerometerEventListener)listeners.get(key);
                    cli.getSensorManager().unregisterAccelerometerEventListener(listener);
                    listeners.remove(key);
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterAccelerometerEventListeners": {
                try {
                    final BandClient cli = lookupClient(args);
                    cli.getSensorManager().unregisterAccelerometerEventListeners();
                    Set<Map.Entry<Integer, Object>> entries = listeners.entrySet();
                    Iterator<Map.Entry<Integer, Object>> it = entries.iterator();
                    List<Integer> toRemove = new ArrayList<>();
                    while (it.hasNext()) {
                        Map.Entry<Integer, Object> elem = it.next();
                        if (elem.getValue() instanceof BandAccelerometerEventListener) {
                            toRemove.add(elem.getKey());
                        }
                    }
                    for (int i = 0; i < toRemove.size(); i++) {
                        listeners.remove(toRemove.get(i));
                    }
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "registerCaloriesEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    final Integer l = listenersId++;

                    BandCaloriesEventListener listener = new BandCaloriesEventListener() {
                        @Override
                        public void onBandCaloriesChanged(BandCaloriesEvent bandCaloriesEvent) {
                            try {
                                success(callbackContext, new JSONObject()
                                    .put("calories", bandCaloriesEvent.getCalories())
                                    .put("id", l)
                                    .put("timestamp", (new Date()).getTime())
                                );
                            } catch (JSONException ex) {
                                error(callbackContext, exceptionStacktraceToString(ex));
                            }
                        }
                    };
                    listeners.put(l, listener);

                    return cli.getSensorManager().registerCaloriesEventListener(listener);
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterCaloriesEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    Integer key = new Integer(args.getString(1));
                    BandCaloriesEventListener listener = (BandCaloriesEventListener)listeners.get(key);
                    cli.getSensorManager().unregisterCaloriesEventListener(listener);
                    listeners.remove(key);
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterCaloriesEventListeners": {
                try {
                    final BandClient cli = lookupClient(args);
                    cli.getSensorManager().unregisterCaloriesEventListeners();
                    Set<Map.Entry<Integer, Object>> entries = listeners.entrySet();
                    Iterator<Map.Entry<Integer, Object>> it = entries.iterator();
                    List<Integer> toRemove = new ArrayList<>();
                    while (it.hasNext()) {
                        Map.Entry<Integer, Object> elem = it.next();
                        if (elem.getValue() instanceof BandCaloriesEventListener) {
                            toRemove.add(elem.getKey());
                        }
                    }
                    for (int i = 0; i < toRemove.size(); i++) {
                        listeners.remove(toRemove.get(i));
                    }
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "registerContactEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    final Integer l = listenersId++;

                    BandContactEventListener listener = new BandContactEventListener() {
                        @Override
                        public void onBandContactChanged(BandContactEvent bandContactEvent) {
                            try {
                                success(callbackContext, new JSONObject()
                                    .put("contact", bandContactEvent.getContactState().ordinal())
                                    .put("id", l)
                                    .put("timestamp", (new Date()).getTime())
                                );
                            } catch (JSONException ex) {
                                error(callbackContext, exceptionStacktraceToString(ex));
                            }
                        }
                    };
                    listeners.put(l, listener);

                    return cli.getSensorManager().registerContactEventListener(listener);
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterContactEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    Integer key = new Integer(args.getString(1));
                    BandContactEventListener listener = (BandContactEventListener)listeners.get(key);
                    cli.getSensorManager().unregisterContactEventListener(listener);
                    listeners.remove(key);
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterContactEventListeners": {
                try {
                    final BandClient cli = lookupClient(args);
                    cli.getSensorManager().unregisterContactEventListeners();
                    Set<Map.Entry<Integer, Object>> entries = listeners.entrySet();
                    Iterator<Map.Entry<Integer, Object>> it = entries.iterator();
                    List<Integer> toRemove = new ArrayList<>();
                    while (it.hasNext()) {
                        Map.Entry<Integer, Object> elem = it.next();
                        if (elem.getValue() instanceof BandContactEventListener) {
                            toRemove.add(elem.getKey());
                        }
                    }
                    for (int i = 0; i < toRemove.size(); i++) {
                        listeners.remove(toRemove.get(i));
                    }
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "registerDistanceEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    final Integer l = listenersId++;

                    BandDistanceEventListener listener = new BandDistanceEventListener() {
                        @Override
                        public void onBandDistanceChanged(BandDistanceEvent bandDistanceEvent) {
                            try {
                                success(callbackContext, new JSONObject()
                                    .put("motionType", bandDistanceEvent.getMotionType().ordinal())
                                    .put("pace", bandDistanceEvent.getPace())
                                    .put("speed", bandDistanceEvent.getSpeed())
                                    .put("totalDistance", bandDistanceEvent.getTotalDistance())
                                    .put("id", l)
                                    .put("timestamp", (new Date()).getTime())
                                );
                            } catch (JSONException ex) {
                                error(callbackContext, exceptionStacktraceToString(ex));
                            }
                        }
                    };
                    listeners.put(l, listener);

                    return cli.getSensorManager().registerDistanceEventListener(listener);
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterDistanceEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    Integer key = new Integer(args.getString(1));
                    BandDistanceEventListener listener = (BandDistanceEventListener)listeners.get(key);
                    cli.getSensorManager().unregisterDistanceEventListener(listener);
                    listeners.remove(key);
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterDistanceEventListeners": {
                try {
                    final BandClient cli = lookupClient(args);
                    cli.getSensorManager().unregisterDistanceEventListeners();
                    Set<Map.Entry<Integer, Object>> entries = listeners.entrySet();
                    Iterator<Map.Entry<Integer, Object>> it = entries.iterator();
                    List<Integer> toRemove = new ArrayList<>();
                    while (it.hasNext()) {
                        Map.Entry<Integer, Object> elem = it.next();
                        if (elem.getValue() instanceof BandDistanceEventListener) {
                            toRemove.add(elem.getKey());
                        }
                    }
                    for (int i = 0; i < toRemove.size(); i++) {
                        listeners.remove(toRemove.get(i));
                    }
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "registerGyroscopeEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    final Integer l = listenersId++;

                    BandGyroscopeEventListener listener = new BandGyroscopeEventListener() {
                        @Override
                        public void onBandGyroscopeChanged(BandGyroscopeEvent bandGyroscopeEvent) {
                            try {
                                success(callbackContext, new JSONObject()
                                    .put("acceleration", new JSONObject()
                                                    .put("x", bandGyroscopeEvent.getAccelerationX())
                                                    .put("y", bandGyroscopeEvent.getAccelerationY())
                                                    .put("z", bandGyroscopeEvent.getAccelerationZ())
                                    )
                                    .put("angularVelocity", new JSONObject()
                                                    .put("x", bandGyroscopeEvent.getAngularVelocityX())
                                                    .put("y", bandGyroscopeEvent.getAngularVelocityY())
                                                    .put("z", bandGyroscopeEvent.getAngularVelocityZ())
                                    )
                                    .put("id", l)
                                    .put("timestamp", (new Date()).getTime())
                                );
                            } catch (JSONException ex) {
                                error(callbackContext, exceptionStacktraceToString(ex));
                            }
                        }
                    };
                    listeners.put(l, listener);

                    return cli.getSensorManager().registerGyroscopeEventListener(listener, SampleRate.values()[new Integer(args.getString(1))]);
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterGyroscopeEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    Integer key = new Integer(args.getString(1));
                    BandGyroscopeEventListener listener = (BandGyroscopeEventListener)listeners.get(key);
                    cli.getSensorManager().unregisterGyroscopeEventListener(listener);
                    listeners.remove(key);
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterGyroscopeEventListeners": {
                try {
                    final BandClient cli = lookupClient(args);
                    cli.getSensorManager().unregisterGyroscopeEventListeners();
                    Set<Map.Entry<Integer, Object>> entries = listeners.entrySet();
                    Iterator<Map.Entry<Integer, Object>> it = entries.iterator();
                    List<Integer> toRemove = new ArrayList<>();
                    while (it.hasNext()) {
                        Map.Entry<Integer, Object> elem = it.next();
                        if (elem.getValue() instanceof BandGyroscopeEventListener) {
                            toRemove.add(elem.getKey());
                        }
                    }
                    for (int i = 0; i < toRemove.size(); i++) {
                        listeners.remove(toRemove.get(i));
                    }
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "registerHeartRateEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    final Integer l = listenersId++;

                    BandHeartRateEventListener listener = new BandHeartRateEventListener() {
                        @Override
                        public void onBandHeartRateChanged(BandHeartRateEvent bandHeartRateEvent) {
                            try {
                                success(callbackContext, new JSONObject()
                                                .put("heartRate", bandHeartRateEvent.getHeartRate())
                                                .put("quality", bandHeartRateEvent.getQuality().ordinal())
                                                .put("id", l)
                                                .put("timestamp", (new Date()).getTime())
                                );
                            } catch (JSONException ex) {
                                error(callbackContext, exceptionStacktraceToString(ex));
                            }
                        }
                    };
                    listeners.put(l, listener);

                    return cli.getSensorManager().registerHeartRateEventListener(listener);
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterHeartRateEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    Integer key = new Integer(args.getString(1));
                    BandHeartRateEventListener listener = (BandHeartRateEventListener)listeners.get(key);
                    cli.getSensorManager().unregisterHeartRateEventListener(listener);
                    listeners.remove(key);
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterHeartRateEventListeners": {
                try {
                    final BandClient cli = lookupClient(args);
                    cli.getSensorManager().unregisterHeartRateEventListeners();
                    Set<Map.Entry<Integer, Object>> entries = listeners.entrySet();
                    Iterator<Map.Entry<Integer, Object>> it = entries.iterator();
                    List<Integer> toRemove = new ArrayList<>();
                    while (it.hasNext()) {
                        Map.Entry<Integer, Object> elem = it.next();
                        if (elem.getValue() instanceof BandHeartRateEventListener) {
                            toRemove.add(elem.getKey());
                        }
                    }
                    for (int i = 0; i < toRemove.size(); i++) {
                        listeners.remove(toRemove.get(i));
                    }
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "registerPedometerEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    final Integer l = listenersId++;

                    BandPedometerEventListener listener = new BandPedometerEventListener() {
                        @Override
                        public void onBandPedometerChanged(BandPedometerEvent bandPedometerEvent) {
                            try {
                                success(callbackContext, new JSONObject()
                                                .put("totalSteps", bandPedometerEvent.getTotalSteps())
                                                .put("id", l)
                                                .put("timestamp", (new Date()).getTime())
                                );
                            } catch (JSONException ex) {
                                error(callbackContext, exceptionStacktraceToString(ex));
                            }
                        }
                    };
                    listeners.put(l, listener);

                    return cli.getSensorManager().registerPedometerEventListener(listener);
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterPedometerEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    Integer key = new Integer(args.getString(1));
                    BandPedometerEventListener listener = (BandPedometerEventListener)listeners.get(key);
                    cli.getSensorManager().unregisterPedometerEventListener(listener);
                    listeners.remove(key);
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterPedometerEventListeners": {
                try {
                    final BandClient cli = lookupClient(args);
                    cli.getSensorManager().unregisterPedometerEventListeners();
                    Set<Map.Entry<Integer, Object>> entries = listeners.entrySet();
                    Iterator<Map.Entry<Integer, Object>> it = entries.iterator();
                    List<Integer> toRemove = new ArrayList<>();
                    while (it.hasNext()) {
                        Map.Entry<Integer, Object> elem = it.next();
                        if (elem.getValue() instanceof BandPedometerEventListener) {
                            toRemove.add(elem.getKey());
                        }
                    }
                    for (int i = 0; i < toRemove.size(); i++) {
                        listeners.remove(toRemove.get(i));
                    }
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }            
            case "registerSkinTemperatureEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    final Integer l = listenersId++;

                    BandSkinTemperatureEventListener listener = new BandSkinTemperatureEventListener() {
                        @Override
                        public void onBandSkinTemperatureChanged(BandSkinTemperatureEvent bandSkinTemperatureEvent) {
                            try {
                                success(callbackContext, new JSONObject()
                                                .put("skinTemperature", bandSkinTemperatureEvent.getTemperature())
                                                .put("id", l)
                                                .put("timestamp", (new Date()).getTime())
                                );
                            } catch (JSONException ex) {
                                error(callbackContext, exceptionStacktraceToString(ex));
                            }
                        }
                    };
                    listeners.put(l, listener);

                    return cli.getSensorManager().registerSkinTemperatureEventListener(listener);
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterSkinTemperatureEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    Integer key = new Integer(args.getString(1));
                    BandSkinTemperatureEventListener listener = (BandSkinTemperatureEventListener)listeners.get(key);
                    cli.getSensorManager().unregisterSkinTemperatureEventListener(listener);
                    listeners.remove(key);
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterSkinTemperatureEventListeners": {
                try {
                    final BandClient cli = lookupClient(args);
                    cli.getSensorManager().unregisterSkinTemperatureEventListeners();
                    Set<Map.Entry<Integer, Object>> entries = listeners.entrySet();
                    Iterator<Map.Entry<Integer, Object>> it = entries.iterator();
                    List<Integer> toRemove = new ArrayList<>();
                    while (it.hasNext()) {
                        Map.Entry<Integer, Object> elem = it.next();
                        if (elem.getValue() instanceof BandSkinTemperatureEventListener) {
                            toRemove.add(elem.getKey());
                        }
                    }
                    for (int i = 0; i < toRemove.size(); i++) {
                        listeners.remove(toRemove.get(i));
                    }
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "registerUVEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    final Integer l = listenersId++;

                    BandUVEventListener listener = new BandUVEventListener() {
                        @Override
                        public void onBandUVChanged(BandUVEvent bandUVEvent) {
                            try {
                                success(callbackContext, new JSONObject()
                                                .put("uvIndexLevel", bandUVEvent.getUVIndexLevel().ordinal())
                                                .put("id", l)
                                                .put("timestamp", (new Date()).getTime())
                                );
                            } catch (JSONException ex) {
                                error(callbackContext, exceptionStacktraceToString(ex));
                            }
                        }
                    };
                    listeners.put(l, listener);

                    return cli.getSensorManager().registerUVEventListener(listener);
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterUVEventListener": {
                try {
                    final BandClient cli = lookupClient(args);
                    Integer key = new Integer(args.getString(1));
                    BandUVEventListener listener = (BandUVEventListener)listeners.get(key);
                    cli.getSensorManager().unregisterUVEventListener(listener);
                    listeners.remove(key);
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
                return false;
            }
            case "unregisterUVEventListeners": {
                try {
                    final BandClient cli = lookupClient(args);
                    cli.getSensorManager().unregisterUVEventListeners();
                    Set<Map.Entry<Integer, Object>> entries = listeners.entrySet();
                    Iterator<Map.Entry<Integer, Object>> it = entries.iterator();
                    List<Integer> toRemove = new ArrayList<>();
                    while (it.hasNext()) {
                        Map.Entry<Integer, Object> elem = it.next();
                        if (elem.getValue() instanceof BandUVEventListener) {
                            toRemove.add(elem.getKey());
                        }
                    }
                    for (int i = 0; i < toRemove.size(); i++) {
                        listeners.remove(toRemove.get(i));
                    }
                    return true;
                } catch(BandException ex) {
                    error(callbackContext, exceptionStacktraceToString(ex));
                }
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