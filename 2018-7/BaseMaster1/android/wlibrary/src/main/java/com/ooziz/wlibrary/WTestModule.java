package com.ooziz.wlibrary;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

public class WTestModule extends ReactContextBaseJavaModule{

    public WTestModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "WTestModule";
    }

    @ReactMethod
    public void setTestMap(ReadableMap readableMap,Callback callback) {

        ReadableNativeMap newReadableMap = (ReadableNativeMap)readableMap;
        for (String key : newReadableMap.toHashMap().keySet()) {
            Log.d("TAG","====key>> "+key);
        }

        WritableMap writableMap = Arguments.createMap();
        writableMap.putString("name","wang xuan");
        writableMap.putInt("age",22);
        writableMap.putBoolean("isMarriage",false);

        WritableArray array = Arguments.createArray();
        array.pushInt(88);
        writableMap.putArray("yuwen",array);

        callback.invoke(writableMap);
    }

}
