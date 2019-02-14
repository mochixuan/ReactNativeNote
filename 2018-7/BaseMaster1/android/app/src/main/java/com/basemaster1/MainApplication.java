package com.basemaster1;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.microsoft.codepush.react.CodePush;
import com.horcrux.svg.SvgPackage;
import com.hieuvp.fingerprint.ReactNativeFingerprintScannerPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.rnfingerprint.FingerprintAuthPackage;
import com.crypho.scrypt.RNScryptPackage;
import com.rnfs.RNFSPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.ooziz.wlibrary.WReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
        }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNDeviceInfo(),
            new CodePush(null, getApplicationContext(), BuildConfig.DEBUG),
            new SvgPackage(),
            new ReactNativeFingerprintScannerPackage(),
            new RNCWebViewPackage(),
            new FingerprintAuthPackage(),
            new RNScryptPackage(),
            new RNFSPackage(),
            new FastImageViewPackage(),
              new WReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
