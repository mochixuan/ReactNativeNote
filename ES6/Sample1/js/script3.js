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


