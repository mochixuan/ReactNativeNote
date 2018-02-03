'use strict'

let data = {
    a: 12,
    b:[
        {c:12,d:{e:1,f:1}},
        {c:12,d:{e:2,f:2}},
        {c:12,d:{e:3,f:3}},
        {c:12,d:{e:4,f:4}},
        {c:12,d:{e:5,f:5}},
        {c:12,d:{e:6,f:6}},
    ]
}

data.b.map((item,i)=>"wang")

console.log(data.b)

let datas = {
    a:12,
    b:[
        {c:1},
        {c:2},
        {c:3},
        {c:4},
        {c:5},
        {c:6},
    ]
}

datas.b.map((item,i)=>{d:1})

console.log(datas.b)

let datas1 = [1,2,3,4]

let datas2 = [];
datas2.push(datas1.map((item,i)=>item*item))

console.log(datas1)

console.log(datas2)

let multi = store => next => action => {
    console.log(store,next,action)
}

multi("mo")("chi")("xuan")

console.log({
    "wang": "wang"
})

console.log({
    wang: "wang"
})

console.log('=====================================')

function testPromise() {
    return new Promise((resolve, reject)=>{
        resolve("mo chi xuan")
    })
}

function* testGenerate() {
    yield testPromise().then()
}

var testG = testGenerate()

console.log("====generate1>>",testG.next())
console.log("====generate2>>",testG.next())
console.log("====generate3>>",testG.next())

console.log('=====================================')

const a1 = [1,2,3,4,5,6]

console.error(a1.join('&'))

console.log('=====================================')

let datasw = ["a","b","c"]
datasw.push("e","f")
console.log(datasw.splice(0,10),datasw)