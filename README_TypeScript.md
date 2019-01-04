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
```
yarn add --dev tslint tslint-config-prettier tslint-config-standard tslint-react

tslint --init

{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended",
        "tslint-config-prettier",
        "tslint-config-standard",
        "tslint-react"
    ],
    "jsRules": {},
    "rules": {
        
    },
    "rulesDirectory": []
}

package.json里面添加
"scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    //这个 app为你的项目目录
    "lint": "tslint 'app/**/*.{ts,tsx}'"
  },

yarn lint

```

vscode加自动检测

setting -> workplace添加
setting.json
```
{
    //"editor.formatOnSave": true,
    //"javascript.format.enable": false,
    //https://code.visualstudio.com/updates/v1_24
    "typescript.updateImportsOnFileMove.enabled": "always",
    "tslint.autoFixOnSave": true,
    "tslint.jsEnable": true,
    "tslint.run": "onType",
    "editor.tabSize": 2,
    //按 "Tab" 时插入空格。该设置在 `editor.detectIndentation` 启用时根据文件内容进行重写。
    "editor.detectIndentation": false

}
```
### 添加自动矫正
yarn add --dev prettier
touch .prettierrc
添加
{
    "semi": false,
    "singleQuote": true,
    "trailingComma": "es5"
}

