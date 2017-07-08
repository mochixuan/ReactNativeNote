export default class Student {
    constructor(name,sex,age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    getDecription() {
        return '姓名:'+this.name+'    姓名:'+this.sex+'     性别:'+this.age;
    }

}