# ReactNative

## 0.前言
	开发前将镜像换成国内的如果内翻墙

## 1.安装React
	npm install -g react-native-cli

## 2.下载React项目
	react-native init appName

## 3.代码运行程序
	react-native run-android

## 4.Android_home配置问题
	http://jingyan.baidu.com/article/09ea3ede1b4df6c0aede39ab.html

## 5.运行时问题
	在appname里启动npm start自动启动相关配置
	在通过ctrl+M+doubleclick启动配置

## 6.拉取demo
	git clone https://github.com/facebook/react-native.git

## 7.npm install 功能
	npm install命令可以根据dependencies配置安装所有的依赖包

## 8.ndk版本需要react native编译时的版本
	r10e

## 9.连接模拟器(出问题时可)
	adb connect 127.0.0.1:port 
	天天:6555

## 10.模拟器问题adb 被占用
	先查询：netstat -aon|findstr 5037
	查看所以:tasklist /fi "PID eq port"
	杀死:taskkill /pid port /f

## 11.开启模拟器
	E:\AndroidStudio\sdk\tools\emulator.exe -netdelay none -netspeed full -avd Nexus5
	E:\\AndroidStudio\\sdk\\tools\\emulator.exe -netdelay none -netspeed full -avd Nexus5

## 12.组件问题
	Image组件有些图片无法识别，但在原生安卓是OK的


## 13.使用ES6模块, BrowserSync 使用
```
 1. npm install -g browser-sync // 安装Node后，通过npm安装BrowserSync(自动刷新)
 2. 使用BrowserSync： browser-sync start --server 开启服务
 3. browser-sync start --server --no-notify --files 'index.html,app/**/*.js'
```

## 14.安装jspm
```
	npm install jspm -g 在全局范围安装jspm，就可以在任何地方使用jspm命令了
	jspm // 完成后输入jspm，会返回一些帮组信息
	cd ~/desktop
	mkdir reactProject // 创建项目文件夹
	cd  reactProject
	npm init // 创建package.json，一路回车即可
	ls // 查看文件夹，就会一个package.json文件
	npm install jspm --save-dev // 把 jspm添加到项目开发依赖
	ls // node_modules package.json两个文件
	jspm init // 为jspm创建配置文件config.js， 一系列问题，可一路回车
	ls // 会发现有config.js , jspm_packages（jspm安装的一些包） node_modules package.json

	jspm install react@0.14.0.0-rc1 //@0.14.0.0-rc1版本号可不加
	
	jspm install react-dom@0.14.0-rc1

	jspm install css

	jspm install semantic-ui

	后期
	jspm install jquery

	安装路由
	jspm install react-router@1.0.0-rc1

```

## 15.无法识别react
	将webstorm 里的 setting->Languages & Frameworks->JavaScript 里改为 React JSX

## 16在手机上运行React
```
	1.首先确保你的电脑和手机设备在同一个Wi-Fi环境下。
	2.在设备上运行你的React Native应用。和打开其它App一样操作。
	3.你应该会看到一个“红屏”错误提示。这是正常的，下面的步骤会解决这个报错。
	4.摇晃设备，或者运行adb shell input keyevent 82，可以打开开发者菜单。
	5.点击进入Dev Settings。
	6.点击Debug server host for device。
	7.输入你电脑的IP地址和端口号（譬如10.0.1.1:8081）。在Mac上，你可以在系统设置/网络里找查询你的IP地址。在Windows上，打开命令提示符并输入ipconfig来查询你的IP地址。在Linux上你可以在终端中输入ifconfig来查询你的IP地址。
	8.回到开发者菜单然后选择Reload JS
```