# ReactSystem

## 摘要
> 看了很久的前端，最近看了一个多月的React-Native视频，现在系统的过一遍官方的React_Native文档,再做点笔记。

## 目录
* [环境搭建](#environment)




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