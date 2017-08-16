import Realm from 'realm'
import Migrations from './Migrations'

let realm = new Realm(Migrations[Migrations.length-1])

/*版本 1
let insertStudent = (firstName,lastName,age)=>{
    realm.write(()=>{
        realm.create("Student",{
            firstName,
            lastName,
            age:parseInt(age),
        })
    })
}

let queryStudent = (firstName)=>{
    return realm.objects('Student').filtered(`firstName="${firstName}"`)
}
*/

/*
* 版本 2
* */

let insertStudent = (name,age)=>{
    realm.write(()=>{
        realm.create("Student",{
            name,
            age:parseInt(age),
        })
    })
}

let queryStudent = ()=>{
    return realm.objects('Student');
}

export {insertStudent,queryStudent}