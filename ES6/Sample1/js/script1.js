'use strict'

{
	let wang = '小王'; //块
	console.log(wang);
}

const WANG = '小旋';		//常量 不能改变地址定义后
console.log(WANG);

const WANG1=[];
WANG1.push('小小');
WANG1.push('王锡锌');
WANG1.push('小小');
console.log(WANG1);

function breakfast() {
	return ['牛肉','鱼肉','鸡肉'];
}
let [a,b,c] = breakfast();
console.log(a,b,c);

function break1(dessert='w1',drink='w2') {
	return `${dessert} ${drink}`;
}
console.log(break1('w3'));


let w1 = ['x1','x2'];		//...展开的意思
let w2 = [...w1,'w3','w4'];
console.log(w1);
console.log(...w1);
console.log(w2);

let breakfast1 = a => a+1;
let breakfeat3 = (a,b,c) => a+b+c;
var breakfast2 = function breakfast2(a) {
	return a+1;
}
console.log(breakfast1(2),breakfast2(2),breakfeat3(1,2,3));

let dessert1 = new Set('wangxuan');		//把字母拆分 不能有重复的
dessert1.add('my');
dessert1.delete('x');
console.log(dessert1,dessert1.size,dessert1.has('w'));

