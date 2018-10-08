# TypeScript

#### 安装typescripte 
> npm install -g typescript 

#### 安装typings
> typings是typescript的依赖管理器，如果你使用sublime text或者vscode，会非常方便的补全代码。
npm install -g typings

#### 官方配置
> https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native.html

#### 添加依赖包
```
yarn add --dev typescript
yarn add --dev react-native-typescript-transformer
yarn tsc --init --pretty --jsx react
touch rn-cli.config.js
yarn add --dev @types/react @types/react-native
```
#### 打开rn-cli.config.js添加
```
module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
};
```

##### 配置TsLint
https://medium.com/@sgroff04/configure-typescript-tslint-and-prettier-in-vs-code-for-react-native-development-7f31f0068d2


