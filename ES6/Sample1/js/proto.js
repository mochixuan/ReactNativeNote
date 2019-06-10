function Person() {

}

Person.isMarry = false

Person.prototype = {
    year: 24
}

const person1 = new Person()

Object.defineProperty(person1,'name',{
    value: 'mochixuan',
    configurable: false,
    enumerable: false,
    writable: false,
})
person1.name = 'wangxuan'
console.warn(person1)

const person2 = new Person()
Object.defineProperty(person2,'name',{
    enumerable : true ,
    configurable : true,
    get() {
        return this._name+'1'
    },
    set(newName) {
        this._name = newName+'2'
    }
})
person2.name = 'wangxuan'
console.warn(person2)

const promise3 = new Promise((resolve,reject)=>{
    const time1 = setTimeout(()=>{
        clearTimeout(time1)
        clearTimeout(time2)
        resolve({code: 100})
    },500)
    const time2 = setTimeout(()=>{
        clearTimeout(time1)
        clearTimeout(time2)
        reject({code: 101})
    },400)
})

promise3.then((data)=>{
    console.warn('data',data)
}).catch((error)=>{
    console.warn('error',error)
})
