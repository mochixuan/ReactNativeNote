
function sayHello(person:string) {
    return 'Hello , '+person;
}

let user = "MoChiXuan"

console.log(sayHello(user))

let isDone: boolean = false;

let deLiteral: number = 6

//JavaScript 没有空值（Void）的概念，在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数
function alertName():void{
    alert('hello typescript')
}

//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let unusable: void = undefined;

//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量

let u: undefined = undefined;

let n: null = null

let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

interface Person{
    name: string,
    age: number,
}

//定义的变量比接口少了一些属性是不允许的：
//多一些属性也是不允许的
let xcat:Person = {
    name: 'xuan',
    age:12,
}

//有时我们希望不要完全匹配一个形状，那么可以用可选属性
//这时仍然不允许添加未定义的属性
interface  Person1 {
    name: string,
    age?:number
}

let xcat1:Person1 = {
    name:'as',
}

//我们希望一个接口允许有任意的属性，可以使用如下方式：
interface  Person2 {
    name: string,
    age?:number
    [propName: string]: any,
}

let xcat2: Person2 = {
    name:'sa',
    aa: 'asas',
    bb:12,
}

let fibonacci: number[] = [1, 1, 2, 3, 5];
let fibonacci1: Array<number> = [1, 1, 2, 3, 5];

//一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];