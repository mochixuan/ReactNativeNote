/**
 * 数据库结构修改时
 */

import {StudentSchema} from './Schemas'

export default [{
    schema: [StudentSchema],
    schemaVersion:1,
    migration:(oldRealm,newRealm)=>{

    }
},{
    schema:[StudentSchema],
    schemaVersion:2,
    migration:(oldRealm,newRealm) =>{
        if (oldRealm.schemaVersion==1) {
            const oldObjects = oldRealm.objects('Student');
            const newObjects = newRealm.objects('Student');
            for (let i=0;i<oldObjects.length;i++) {
                newObjects[i].name = oldObjects[i].firstName+" "+oldObjects[i].lastName;
            }
        }
    }
}]
