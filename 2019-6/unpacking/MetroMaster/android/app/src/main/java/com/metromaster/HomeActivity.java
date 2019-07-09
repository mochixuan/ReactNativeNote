package com.metromaster;

import com.facebook.react.WReactActivity;

public class HomeActivity extends WReactActivity {

    @Override
    protected String getMainComponentName() {
        return "HomePage";
    }

    @Override
    protected String getJsBundlePath() {
        return "home.android.bundle";
    }
}
