package co.kundel.band;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.microsoft.band.BandClient;
import com.microsoft.band.BandClientManager;
import com.microsoft.band.BandPendingResult;
import com.microsoft.band.BandException;
import com.microsoft.band.BandInfo;
import com.microsoft.band.BandIOException;
import com.microsoft.band.ConnectionState;

public class Band extends CordovaPlugin {
    private BandClient lookupClient(int id) {
        final BandInfo[] bands = BandClientManager.getInstance().getPairedBands();
        return BandClientManager.getInstance().create(cordova.getActivity(), bands[id]);
    }

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        switch(action) {
            case "getPairedBands": {
                final BandInfo[] bands = BandClientManager.getInstance().getPairedBands();
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        try {
                            callbackContext.success(new JSONArray(bands));
                        } catch (JSONException ex) {
                            callbackContext.error("JSONException");
                        }
                    }
                });
                return true;
            }
            case "create": {
                final BandClient cli = lookupClient(args.getInt(0));
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        callbackContext.success(new JSONObject());
                    }
                });
                return true;
            }
            case "getFirmwareVersion": {
                return false;
            }
            case "getHardwareVersion": {
                return false;
            }
            case "connect": {
                final BandClient cli = lookupClient(args.getInt(0));
				final BandPendingResult<ConnectionState> pendingResult = cli.connect();
				try {
					final ConnectionState state = pendingResult.await();
		            cordova.getActivity().runOnUiThread(new Runnable() {
		                public void run() {
		                    callbackContext.success(state.toString());
		                }
		            });
				} catch(InterruptedException ex) {
		            cordova.getActivity().runOnUiThread(new Runnable() {
		                public void run() {
		                    callbackContext.error("InterruptedException");
		                }
		            });
				} catch(BandException ex) {
		            cordova.getActivity().runOnUiThread(new Runnable() {
		                public void run() {
		                    callbackContext.error("BandException");
		                }
		            });
				}
				return false;
            }
            case "disconnect": {
                return false;
            }            
            case "showDialog": {
                return false;
            }
            case "vibrate": {
                return false;
            }
            case "getMeTileImage": {
                return false;
            }
            case "setMeTileImage": {
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
        //TODO: Any init work
    }
}