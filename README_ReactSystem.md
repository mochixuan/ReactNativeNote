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