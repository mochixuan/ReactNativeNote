package com.ooziz.wlibrary;

import android.graphics.Color;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

import javax.annotation.Nullable;

import static java.security.AccessController.getContext;

public class WTextViewManager extends SimpleViewManager<TextView>{

    public static final String REACT_CLASS = "WTextView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    public void onReceiveNativeEvent(ReactContext reactContext,int id) {
        WritableMap event = Arguments.createMap();
        event.putString("message", "MyMessage");
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                id,
                "topChange",
                event);
    }

    @Override
    protected TextView createViewInstance(final ThemedReactContext reactContext) {
        final TextView textView = new TextView(reactContext);
        textView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                if (event.getAction() == MotionEvent.ACTION_DOWN) {
                    Log.d("TAG","=====>>createViewInstance");
                    onReceiveNativeEvent(reactContext,textView.getId());
                    return true;
                }
                return false;
            }
        });
        return textView;
    }

    @Nullable
    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        "topChange",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onChange")))
                .build();
    }

    @ReactProp(name="text")
    public void setText(TextView view,String text){
        view.setText(text);
    }

    @ReactProp(name="fontSize")
    public void setTextSize(TextView view,float fontSize) {
        view.setTextSize(fontSize);
    }

    @ReactProp(name="color",defaultInt = Color.BLACK)
    public void setTextColor(TextView view,int color){
        view.setTextColor(color);
    }

    @ReactProp(name="isAlpha",defaultBoolean = false)
    public void setTextAlpha(TextView view,boolean isAlpha) {
        if (isAlpha) {
            view.setAlpha(0.5f);
        }
    }


}
