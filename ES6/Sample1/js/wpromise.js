/**
 * Created by wangxuan on 2017/7/24.
 */
'use strict'

console.log('promise','---------------------------------------------------')

var promise = new Promise(function (resolve,reject) {
    resolve(100);
})

promise.then(function (value) {
    //success
    console.log('success',value)
},function (error) {
    //failure
    console.log('failure',value)
})

function loadImageSrc(url) {
    return new Promise(function (resolve,reject) {
        var image = new Image();

        image.onload = function () {
            resolve(image)
        }

        image.onerror = function () {
            reject(new Error('Counld not load image at'+url));
        }

        image.src = url;
    })
}

loadImageSrc('https://wx4.sinaimg.cn/thumbnail/006qRazely1fhtikeobn8j30sg0g0qjb.jpg')
    .then(value => console.log('success','loading image success'))
    .catch(error => console.log('success','loading image success'))

console.log('generator','---------------------------------------------------')

function* helloGenerator() {
    yield f11(10)
    yield f22('wang')
    return 'end generator';
}
function f11(value) {
    return value
}
function f22(value) {
    return 'my '+value
}
var gen = helloGenerator();
console.log('next1',gen.next())
console.log('next2',gen.next())
console.log('next3',gen.next())
console.log('next4',gen.next())

console.log('async','---------------------------------------------------')

async function helloAsync1() {
    await f11(20)
    await f22('xuan')
    return 'end async'
}
helloAsync1().then(function (result) {
    console.log('async',result)
})