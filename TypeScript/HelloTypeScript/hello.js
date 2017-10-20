function sayHello(person) {
    return 'Hello , ' + person;
}
var user = "MoChiXuan";
console.log(sayHello(user));
var isDone = false;
var deLiteral = 6;
//JavaScript 没有空值（Void）的概念，在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数
function alertName() {
    alert('hello typescript');
}
//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
var unusable = undefined;
//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
var u = undefined;
var n = null;
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
//定义的变量比接口少了一些属性是不允许的：
//多一些属性也是不允许的
var xcat = {
    name: 'xuan',
    age: 12,
};
var xcat1 = {
    name: 'as',
};
var xcat2 = {
    name: 'sa',
    aa: 'asas',
    bb: 12,
};
var fibonacci = [1, 1, 2, 3, 5];
var fibonacci1 = [1, 1, 2, 3, 5];
//一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
var list = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
