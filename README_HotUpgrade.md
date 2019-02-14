# HotUpgrade

## 1. CodePush (2019.1)

- 0.网上资料和官网最新的不一样

- 1.安装CodePush: npm install -g code-push-cli
- 2.创建CodePush账号: code-push register (会打开网页进行注册,有点卡)
- 3.复制 token到控制台 
- 4.在CodePush服务器上注册app: 
   - 1. code-push app add MyApp-iOS ios react-native
  - 2. code-push app add MyApp-Android android react-native
  - 3. 复制部署秘钥staging或（code-push deployment ls appName）
- 5.项目安装SDK: 
  - 1. npm install --save react-native-code-push
  - 2. react-native link react-native-code-push
  - 3. 复制staging 到 MainApplication.java 里deployment-key-here
  - 4. 调用sync函数
  - 5. code-push release-react MyApp-Android android


- 相关命令3 
  - 1. code-push login 登陆
  - 2. code-push logout 注销
  - 3. code-push access-key ls 列出登陆的token
  - 4. code-push access-key rm <accessKye> 删除某个 access-key

- 相关命令4
  - 1. code-push app add 在账号里面添加一个新的app
  - 2. code-push app remove 或者 rm 在账号里移除一个app
  - 3. code-push app rename 重命名一个存在app
  - 4. code-push app list 或则 ls 列出账号下面的所有app
  - 5. code-push app transfer 把app的所有权转移到另外一个账号
  - 6. 发布更新
    - 1. 第一种方式：通过code-push release-react发布更新
      - 1. code-push release-react MyApp-iOS ios
      - 2. code-push release-react MyApp-Android android
      - 3. code-push release-react MyApp-iOS ios  --t 1.0.0 --dev false --d Production --des "
      - 4. 优化操作流程" --m true
      - 5. 其中参数–t为二进制(.ipa与apk)安装包的的版本；–dev为是否启用开发者模式(默认为false)；–d是要发布更新的环境分Production与Staging(默认为Staging)；–des为更新说明；–m 是强制更新
      - 6. 通过code-push release发布更新（收藏）
      - 7. 应用创建时有两个环境，一个是Staging，一个是Production,开发阶段用Staging，开发完成可以用code-push promote 将应用迁移到Production中
      - 8. code-push patch 应用名 Production -r 100%
      - 9. code-push promote RNCodePush-iOS Staging Production -r 20 将Staging 推到 Production 推20%的用户。

- 相关命定5
	- 1. code-push deployment add 部署
	- 2. code-push deployment rename 重命名
	- 3. code-push deployment rm 删除部署
	- 4. code-push deployment ls 列出应用的部署情况
	- 5. code-push deployment ls -k 查看部署的key
	- 6. code-push deployment history 查看历史版本(Production 或者 Staging)

### 相关代码5.4
``` text
	
CodePush.sync(
	options: Object, 
	syncStatusChangeCallback: function(syncStatus: Number), 
	downloadProgressCallback: function(progress: DownloadProgress)
): Promise<Number>;
传入三个参数
1. options = { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true }
	installMode (codePush.InstallMode)： 安装模式，用在向CodePush推送更新时没有设置强制更新(mandatory为true)的情况下，默认codePush.InstallMode.ON_NEXT_RESTART即下一次启动的时候安装。
	mandatoryInstallMode (codePush.InstallMode):强制更新,默认codePush.InstallMode.IMMEDIATE
	updateDialog (UpdateDialogOptions) :可选的，更新的对话框，默认是null,包含以下属性
		appendReleaseDescription (Boolean) - 是否显示更新description，默认false
		descriptionPrefix (String) - 更新说明的前缀。 默认是” Description: “
		 mandatoryContinueButtonLabel (String) - 强制更新的按钮文字. 默认 to “Continue”.
		mandatoryUpdateMessage (String) - 强制更新时，更新通知. Defaults to “An update is available that must be installed.”.
		optionalIgnoreButtonLabel (String) - 非强制更新时，取消按钮文字. Defaults to “Ignore”.
		optionalInstallButtonLabel (String) - 非强制更新时，确认文字. Defaults to “Install”.
		optionalUpdateMessage (String) - 非强制更新时，更新通知. Defaults to “An update is available. Would you like to install it?”.
		title (String) - 要显示的更新通知的标题. Defaults to “Update available”.
		具体可以查看我上面的代码：
		还有一个是：codePush.InstallMode，有三种模式，
			一个是立即启动，nstallMode.IMMEDIATE 
			一个是下次启动安装：InstallMode.ON_NEXT_RESTART
			一个是程序在前台，并没有从后台切换到前台的情况下用的InstallMode.ON_NEXT_RESUME
2.状态
3.进度
```

#### 演示
```
如果有发布热更新时 mandatory 则 Code Push 会根据 mandatory 是 true 或false 来控制应用是否强制更新。默认情况下 mandatory 为 false 即不强制更新。mandatory 为 false时以下三种设置方法才有效

// 第一种:
codePush.sync();

// 第二种:
codePush.sync({
    updateDialog: false,
    installMode: codePush.InstallMode.IMMEDIATE
});

// 第三种:
CodePush.sync({
    deploymentKey: 'deployment-key-here',
    updateDialog: {
        optionalIgnoreButtonLabel: '稍后',
        optionalInstallButtonLabel: '后台更新',
        optionalUpdateMessage: '有新版本了，是否更新？',
        title: '更新提示'
    },
    installMode: CodePush.InstallMode.IMMEDIATE
});

三种更新的策略: 配置到installMode: 之后即可生效
* IMMEDIATE 立即更新APP
* ON_NEXT_RESTART 到下一次启动应用时
* ON_NEXT_RESUME 当应用从后台返回时
```

### 更新规则

```

来自网络

你APP内plist文件写的版本号可能是1.0.0，所以你的reactjs打包上传的版本也要是1.0.0（而不是1.0.1这样递增），你需要和APP保持一致，然后服务器会根据你最新上传的且和APP一样的版本作为最新版。

范围表达式

* 1.2.3 仅仅只有1.2.3的版本

* *所有版本

* 1.2.x 主要版本1，次要版本2的任何修补程序版本

* 1.2.3 - 1.2.7 1.2.3版本到1.2.7版本

* >=1.2.3 <1.2.7 大于等于1.2.3版本小于1.2.7的版本

* ~1.2.3 大于等于1.2.3版本小于1.3.0的版本

* ^1.2.3 大于等于1.2.3版本小于2.0.0的版本
 
```

### 相关代码5.4
``` text
	
CodePush.sync(
	options: Object, 
	syncStatusChangeCallback: function(syncStatus: Number), 
	downloadProgressCallback: function(progress: DownloadProgress)
): Promise<Number>;
传入三个参数
1. options = { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true }
	installMode (codePush.InstallMode)： 安装模式，用在向CodePush推送更新时没有设置强制更新(mandatory为true)的情况下，默认codePush.InstallMode.ON_NEXT_RESTART即下一次启动的时候安装。
	mandatoryInstallMode (codePush.InstallMode):强制更新,默认codePush.InstallMode.IMMEDIATE
	updateDialog (UpdateDialogOptions) :可选的，更新的对话框，默认是null,包含以下属性
		appendReleaseDescription (Boolean) - 是否显示更新description，默认false
		descriptionPrefix (String) - 更新说明的前缀。 默认是” Description: “
		 mandatoryContinueButtonLabel (String) - 强制更新的按钮文字. 默认 to “Continue”.
		mandatoryUpdateMessage (String) - 强制更新时，更新通知. Defaults to “An update is available that must be installed.”.
		optionalIgnoreButtonLabel (String) - 非强制更新时，取消按钮文字. Defaults to “Ignore”.
		optionalInstallButtonLabel (String) - 非强制更新时，确认文字. Defaults to “Install”.
		optionalUpdateMessage (String) - 非强制更新时，更新通知. Defaults to “An update is available. Would you like to install it?”.
		title (String) - 要显示的更新通知的标题. Defaults to “Update available”.
		具体可以查看我上面的代码：
		还有一个是：codePush.InstallMode，有三种模式，
			一个是立即启动，nstallMode.IMMEDIATE 
			一个是下次启动安装：InstallMode.ON_NEXT_RESTART
			一个是程序在前台，并没有从后台切换到前台的情况下用的InstallMode.ON_NEXT_RESUME
2.状态
3.进度
```

### iOS配置时问题
```
1.  TARGETS->Build Settings->Header Search Paths-> 添加
$(SRCROOT)/../node_modules/react
$(SRCROOT)/../node_modules/react-native-code-push （可不加）

2. 'React/RCTEventEmitter.h' file not found
  1. Disable the parallel builds:
        - xCode menu -> Product -> Scheme -> Manage Shemes...
        - Double click on your application
        - Build tab -> clear the tick on Pallelize Build
        - Add react as a project dependecy

  2. xCode Project Navigator -> drag React.xcodeproj from Libraries to root tree
      - Build Phases Tab -> Target Dependencies -> + -> add React

```

### 安装签名
```text
	keytool -genkey -v -keystore my-release-key.keystore  -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
	注意上面的my-release-key这个名字可以自己取名，同时my-key-alias也是自己取名，其中第二个名称alias参数后边的别名，在后面你在为应用签名的时候需要用到，所以暂时记录一下这个别名
	添加签名
	signingConfigs {
            release {
                storeFile file('../keystores/rn-test.keystore')
                storePassword 'name'
                keyAlias 'name'
                keyPassword 'name'
            }
        }
	buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
	
	./gradlew assembleDebug 编译并打Debug包
	./gradlew assemblexiaomiDebug 编译并打xiaomi的debug包，其他类似
	./gradlew assembleRelease 编译并打Release的包
	./gradlew assemblexiaomiRelease 编译并打xiaomi的Release包，其他类似
	./gradlew installRelease Release模式打包并安装
	./gradlew uninstallRelease 卸载Release模式包

```