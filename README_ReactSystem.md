# ReactSystem

## 摘要
> 看了很久的前端，最近看了一个多月的React-Native视频，现在系统的过一遍官方的React_Native文档,再做点笔记。

## 目录
* [环境搭建](#environment)
* [入门](#first)
* [错误总结](#error)




<h2 id="environment" >环境搭建<h2>

``` html

1.安装Chocolatey 取代npm的
powershell -NoProfile -ExecutionPolicy Bypass -Command "iex((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

2.Python2
choco install python2

3.修改镜像必须的
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global

4.安装yarn (Yarn是Facebook提供的替代npm的工具，可以加速node模块的下载。)
npm install -g yarn react-native-cli

5.重设yarn镜像
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global

6.Hello
react-native init Hello
npm start
cd Hello
react-native run-android

```

<h2 id="first" >入门<h2>

``` html

1.注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致 HelloWorldApp为主件名
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);

2.修改版本号
	先改package.json再
	npm install --save react@16.0.0-alpha.12

3. 有些时候你必须要重新编译应用才能使修改生效
	增加了新的资源(比如给iOS的Images.xcassets或是Andorid的res/drawable文件夹添加了图片)
	更改了任何的原生代码（objective-c/swift/java）

4. 移除log
	有个babel插件可以帮你移除所有的console.*调用。首先需要使用yarn add --dev babel-plugin-transform-remove-console来安装，然后在项目根目录下编辑（或者是新建）一个名为·.babelrc`的文件，在其中加入：
	{
	  "env": {
	    "production": {
	      "plugins": ["transform-remove-console"]
	    }
	  }
	}

5. react升级
		npm install -g react-native-git-upgrade
			react-native-git-upgrade提供了豪华的一条龙自动合并更新流程，主要包含两个服务：
				*首先它会利用Git工具计算新旧版本文件间的差异并生成补丁
				*然后在用户的项目文件上应用补丁
		react-native-git-upgrade
			这样会直接把react native升级到最新版本
		react-native-git-upgrade X.Y.Z
			这样把react native升级到指定的X.Y.Z版本

6 原生运行
	  第一步：在android/app/src/main 目录下创建一个  assets空文件夹
      第二步：  react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
      正确范围：react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
              react-native bundle
              --platform android  //平台类型
              --dev false //是否是开发
              --entry-file index.android.js //输入
              --bundle-output android/bundle/index.android.bundle //输出
              --assets-dest android/assets  //资源文件
     总结：这个index.android.bundle毫无疑问就是用来调用原生控件的js脚本，
          每次当你改变了 index.android.js，你都需要使用上面的代码片段，
          来及时的更新index.android.bundle，然后打包才可以把新的index.android.js应用上，
          所以当没有index.android.bundle文件时，RN是无法运行的
```





<h2 id="error" >错误总结<h2>

``` html
1.index名字好像不能用 indexall做总路口

2.Can't find variable:View
	没有引路控件{View}

3.undefined is not an object(evaluating 'tr.ReactCurrentOwner')
	解决方法：npm start

4. ReactInternals.ReactCurrentOwner
	版本号的问题修改react版本号

```