package com.wx.androidreact1.react;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

public class ToastModule extends ReactContextBaseJavaModule{

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /*一个可选的方法getContants返回了需要导出给JavaScript使用的常量。
     *它并不一定需要实现，但在定义一些可以被JavaScript同步访
     *问到的预定义的值时非常有用
     */

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @Override
    public String getName() {
        return "WToastAndroid";
    }

    @ReactMethod
    public void show(String message,int duration) {
        Toast.makeText(getReactApplicationContext(),message,duration).show();
    }

}
