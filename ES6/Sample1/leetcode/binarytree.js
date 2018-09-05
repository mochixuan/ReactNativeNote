
const init = (left,right,value) => {
    const binaryTree = {
        left: left,
        right: right,
        value: value,
    }
    return binaryTree
}

const tree6 = init(null,null,4)
const tree5 = init(null,null,2)
const tree4 = init(null,null,6)
const tree3 = init(tree6,null,1)
const tree2 = init(tree4,tree5,3)
const tree1 = init(tree2,tree3,5)

//在一个二叉树里选择最小的值
const queryMinValue = (rootTree) => {

    let minTree = rootTree.value

    if (rootTree.left != null) {
        let leftValue = queryMinValue(rootTree.left)
        if (leftValue<minTree) minTree = leftValue
    }

    if (rootTree.right != null) {
        let rightValue = queryMinValue(rootTree.right)
        if (rightValue < minTree) minTree = rightValue
    }

    return minTree
}

console.log('二叉树最小值: ',queryMinValue(tree1))

//插入排序 小到大
const insertSort = (datas) => {
    for (let i = 1;i<datas.length;i++) {
        let temp = datas[i]
        let j = i
        for ( ; j > 0 && temp < datas[j-1]; j--) {
            datas[j] = datas[j-1]
        }
        datas[j] = temp
    }
    return datas
}

let items = [8,3,1,5,2,7,6,9,0,4,5,2,10,9,11,0]
console.log('插入排序: ',insertSort(items).toString())

//快速排序
const items1 = [8,3,1,5,2,7,6,9,0,4,5,2,10,9,11,0]
const quickSort = (numbers,low,high) => {
    if (low < high) {
        let middle = getMiddle(numbers,low,high)
        quickSort(numbers,low,middle-1)
        quickSort(numbers,middle+1,high)
    }
}

const getMiddle = (numbers,low,high) => {
    let temp = numbers[low]

    while (low < high) {
        while (low < high && numbers[high] >= temp) --high ;
        numbers[low] = numbers[high]

        while (low < high && numbers[low] <= temp) ++low;
        numbers[high] = numbers[low]
    }

    numbers[low] = temp

    return low
}

quickSort(items1,0,items1.length-1)
console.log("快速排序: ",items1.toString())

//两个数的和等于一个数
let mSums = new Map()
const sumTarget = (nums,target) => {

    for (let i = 0 ; i < nums.length ; i++) {
        mSums.set(nums[i],i)
    }

    let result = []

    for (let i = 0 ; i < nums.length ; i++) {
        let temp = target - nums[i]
        if (mSums.has(temp) && i != mSums.get(temp)) {
            result.push(i)
            result.push(mSums.get(temp))
            break;
        }
    }

    return result

}

const sums = [2, 7, 11, 15]
console.warn("两个数的和等于一个数",sumTarget(sums,9))

//两个数的和等于一个数且排好序的
const sumTarget1 = (nums,target) => {
    let i = 0;
    let j = nums.length-1
    while (i < j) {
        if (nums[i] + nums[j] == target) {
            break;
        } else if (nums[i] + nums[j] > target) {
            j--;
        } else if (nums[i] + nums[j] < target) {
            i++;
        }
    }
    return [i,j]
}

console.warn("两个数的和等于一个数且排好序的",sumTarget1(sums,9))

const strData = "abcdefgh";
console.log("substring() ",strData.substring(2,strData.length))

strData.includes()

