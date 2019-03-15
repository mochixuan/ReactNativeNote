let b = 12;
let c = [1,2,3]
let e = function () {

}

const testData = {
    b,c,e,f: 8765
}

//深度拷贝
function deepCopy(obj) {
    const result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key])
            } else {
                result[key] = obj[key]
            }
        }
    }
}

