# StudyFollow

## 1.镜像问题
``` html
1. npm install xxx
(1)通过config命令
npm config set registry http://registry.cnpmjs.org
npm info underscore （如果上面配置正确这个命令会有字符串response）
(2)命令行指定
npm --registry http://registry.cnpmjs.org info underscore
(3)编辑 ~/.npmrc 加入下面内容(将配置写死，下次用的时候配置还在)
registry = http://registry.cnpmjs.org
阿里镜像地址：http://npm.taobao.org/

2. node镜像问题
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/

3.镜像地址
https://npm.taobao.org/
```

## 2.node
``` html
切换node版本号:		nvm use x.x.x
安装指定版本的node:		nvm install vx.x.0
```

## 2.1新版本
```
	直接安装node
	新建 node_global，node_cache
	无需配置环境变量，直接
	1.npm config set prefix "D:\node\node_global"
	2.npm config set cache "D:\node\node_cache"
	3.进入环境变量对话框，在系统变量下新建"NODE_PATH"，输入”C:\Program Files\nodejs\node_global\node_modules“。（ps：这一步相当关键。）
	4.2014.4.19新增：由于改变了module的默认地址，所以上面的用户变量都要跟着改变一下（用户变量"PATH"修改为“C:\Program Files\nodejs\node_global\”），
	要不使用module的时候会导致输入命令出现“xxx不是内部或外部命令，也不是可运行的程序或批处理文件”这个错误。
	5.安装vs
```


## 3.Error
```html
npm install -g n：错误暂时不支持n操作
```

## 4.Ionic
```html
获取模板 ionic start name(项目名自取)
```