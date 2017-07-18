package com.wx.androidreact1;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

public class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler{

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    /*
    * 第一步：在android/app/src/main 目录下创建一个  assets空文件夹
    * 第二步：  react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
    * 正确范围：react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
    *         react-native bundle
              --platform android  //平台类型
              --dev false //是否是开发
              --entry-file index.android.js //输入
              --bundle-output android/bundle/index.android.bundle //输出
              --assets-dest android/assets  //资源文件
    * 总结：这个index.android.bundle毫无疑问就是用来调用原生控件的js脚本，
    *       每次当你改变了 index.android.js，你都需要使用上面的代码片段，
    *       来及时的更新index.android.bundle，然后打包才可以把新的index.android.js应用上，
    *       所以当没有index.android.bundle文件时，RN是无法运行的
    *
    * */

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        mReactRootView.startReactApplication(
                mReactInstanceManager,
                "AndroidReact1",
                null);

        setContentView(mReactRootView);
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this,this);
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy();
        }
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

}
