/**
 * 数据结构
 */

import Realm from 'realm'

/*
 *作为数据库，使用它无法就是 增删改查 这老四样，使用之前，还是老规矩，初始化表格
 * name：表格名称。
 * primaryKey：主键，这个属性的类型可以是 'int' 和 'string'，并且如果设置主键之后，
 *                  在更新和设置值的时候这个值必须保持唯一性，并且无法修改。
 *                  官方没给出自增长的办法,而且一般不会用到主键,这也解决了重复访问的问题,
 *                  而且实际开发中我们不需要主键的,让服务端管就是了
 * properties：这个属性内放置我们需要的字段。
 * 支持的类型 bool, int, float, double, string, data, and date
 */

/* 版本1
const StudentSchema = {
    name: 'Student',
    properties: {
        firstName: 'string',
        lastName: 'string',
        age: 'int',
    }
}
*/

/*
* 版本2
* */
const StudentSchema = {
    name: 'Student',
    properties: {
        name:'string',
        age: 'int',
    }
}

export {StudentSchema}

