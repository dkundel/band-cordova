package co.kundel.band;

import com.microsoft.band.*;
import com.microsoft.band.notifications.MessageFlags;
import com.microsoft.band.notifications.VibrationType;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.util.Date;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.UUID;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;
import org.json.JSONStringer;

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
        compresed.compress(Bitmap.CompressFormat.PNG, 100, baos);
        byte[] b = stream.toByteArray();
        String result = Base64.encodeToString(b, Base64.DEFAULT);

        return result;
    }

    private Bitmap fromBase64(String image) {
        byte[] bytes = Base64.decode(image, 0);
        return BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
    }

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
                final Integer index = args.getInt(0);
                lookupClient(index); //create client as a sideeffect
                success(callbackContext, index);
                return true;
            }

            /**
             * Client Actions
             */
            case "getFirmwareVersion": {
                final BandClient cli = lookupClient(args.getInt(0));
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
                final BandClient cli = lookupClient(args.getInt(0));
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
                final BandClient cli = lookupClient(args.getInt(0));
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
                final BandClient cli = lookupClient(args.getInt(0));
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
                final BandClient cli = lookupClient(args.getInt(0));
                cli.registerConnectionCallback(new BandConnectionCallback() {
                    @Override
                    public void onStateChanged(ConnectionState connectionState) {
                        callbackContext.success(connectionState.ordinal());
                    }
                });
            }
            case "unregisterConnectionEventListeners": {
                final BandClient cli = lookupClient(args.getInt(0));
                cli.unregisterConnectionCallback();
            }

            /**
             * Notification Manager Actions
             */
            case "showDialog": {
                final BandClient cli = lookupClient(args.getInt(0));
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
                final BandClient cli = lookupClient(args.getInt(0));
                try {
                    final BandPendingResult<Void> res = cli.getNotificationManager().sendMessage(
                            UUID.fromString(args.getString(1)),
                            args.getString(2),
                            args.getString(3),
                            javax.xml.bind.DatatypeConverter.parseDateTime(args.getString(4)).getTime(), //WTF Java
                            MessageFlags.values()[args.getInt(5)]
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
            case "vibrate": {
                final BandClient cli = lookupClient(args.getInt(0));
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
                final BandClient cli = lookupClient(args.getInt(0));
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
                final BandClient cli = lookupClient(args.getInt(0));
                try {
                    Bitmap image = fromBase64((String)(new JSONObject(args.getString(1)).get("iconBase64")));
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
            case "setTheme": {
                return false;
            }
            case "requestHeartRateConsent": {
                return false;
            }
            case "addTile": {
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
            default: {
                return false;
            }
        }
    }
    
    @Override
    public void pluginInitialize() {
        clients = [];
    }
}