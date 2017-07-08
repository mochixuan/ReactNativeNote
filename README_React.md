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

## npm install 功能
	npm install命令可以根据dependencies配置安装所有的依赖包

## ndk版本需要react native编译时的版本
	r10e

## 连接模拟器(出问题时可)
	adb connect 127.0.0.1:port 
	天天:6555

## 模拟器问题adb 被占用
	先查询：netstat -aon|findstr 5037
	查看所以:tasklist /fi "PID eq port"
	杀死:taskkill /pid port /f

## 开启模拟器
	E:\AndroidStudio\sdk\tools\emulator.exe -netdelay none -netspeed full -avd Nexus5

## 组件问题
	Image组件有些图片无法识别，但在原生安卓是OK的


## 使用ES6模块, BrowserSync 使用
```
 1. npm install -g browser-sync // 安装Node后，通过npm安装BrowserSync(自动刷新)
 2. 使用BrowserSync： browser-sync start --server 开启服务
 3. browser-sync start --server --no-notify --files 'index.html,app/**/*.js'
```

## 安装jspm
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

```