'use strict'

//ES6 对象 Learning

let birth = "2018/7/7"
const Person = {

    name: '张三',

    //等同于birth: birth
    birth,

    // 等同于hello: function ()...
    hello() {
        console.log('我的名字是', this.name);
    }

};

Person.hello()

//如果对象的方法使用了取值函数（getter）和存值函数（setter），则name属性不是在该方法上面，而是该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set。
const cart = {
    _wheels: 4,

    get wheels () {
        return this._wheels;
    },

    set wheels (value) {
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    },

    sayName() {
    }
}
console.log(cart._wheels)
console.log(cart.sayName.name)

const descriptor = Object.getOwnPropertyDescriptor(cart,'wheels')
const descriptor1 = Object.getOwnPropertyDescriptor(cart,'sayName')
console.warn(descriptor,descriptor.get.name,descriptor.set.name)
console.warn(descriptor1)

console.warn('0' == -0)

const person = {

}

Object.defineProperty(person,"name",{
    value: '王旋',
    configurable: true,
    enumerable: true,
    writable: true,
})

console.warn("person 1",person.name)

person.name = "莫辞旋"
console.warn("person 2",person.name)

Object.defineProperty(person,"name",{
    value: '王旋',
    configurable: true, //为false不能再重定义
    enumerable: true, //不能for in 等
    writable: true, //不可修改了如果false
})

person.name = "莫辞旋"
console.warn("person 3",person.name)

function Person1 () {

}

const p1 = new Person1()
p1.name = "王旋"
Person1.prototype.age = 23
console.log("Person1",p1.name)
console.warn(p1)

const p11 = new Person1()
console.warn(p11)



