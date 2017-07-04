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