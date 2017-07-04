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


## 3.Error
```html
npm install -g n：错误暂时不支持n操作
```

## 4.Ionic
```html
获取模板 ionic start name(项目名自取)
```