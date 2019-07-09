package com.metromaster;

import com.facebook.react.ReactActivity;
import com.facebook.react.WReactActivity;

public class SettingActivity extends WReactActivity {

    @Override
    protected String getMainComponentName() {
        return "SettingPage";
    }

    @Override
    protected String getJsBundlePath() {
        return "setting.android.bundle";
    }

}
