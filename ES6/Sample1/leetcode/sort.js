let testData1 = [8,3,6,1,5,2,7,2,6,9,0,4];
const insertSort = (dataArr) => {
    for (let i = 1;i < dataArr.length;i++) {
        let temp = dataArr[i]
        let j = i;
        for ( ; j > 0 && dataArr[j-1] > temp; j--) {
            dataArr[j] = dataArr[j-1]
        }
        dataArr[j] = temp
    }
}
insertSort(testData1)
console.warn('insertSort',testData1)

let testData2 = [8,3,6,1,5,2,7,2,6,9,0,4];
const quickSort = (dataArr,low,high) => {
    if (low < high) {
        let middle = partition(dataArr,low,high)
        quickSort(dataArr,low,middle-1)
        quickSort(dataArr,middle+1,high)
    }
}
const partition = (dataArr,low,high) => {
    let pivot = dataArr[low]
    while (low < high) {
        while (low < high && dataArr[high] >= pivot) --high;
        dataArr[low] = dataArr[high]
        while (low < high && dataArr[low] <= pivot) ++low;
        dataArr[high] = dataArr[low]
    }
    dataArr[low] = pivot
    return low
}
quickSort(testData2,0,testData2.length-1)
console.warn('quickSort',testData2)

//两个只和等于固定
let testData3 = [1,3,4,2,4,8,6,2,4,0]
const sumTarget = (dataArr,sum) => {
    // 排序
    quickSort(dataArr,0,dataArr.length-1)
    let result = []
    // 左右交叉
    let i = 0;
    let j = dataArr.length - 1
    while (i < j) {
        if (dataArr[i]+dataArr[j] > sum) {
             j--;
        } else if (dataArr[i]+dataArr[j] < sum){
            i++;
        } else {
            result.push({x: dataArr[i],y: dataArr[j]})
             i++; j--;
        }
    }
    return result
}
console.warn("two num add to target: ",sumTarget(testData3,8))
