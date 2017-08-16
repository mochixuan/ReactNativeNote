/**
 * Created by wangxuan on 2017/8/15.
 */
import Realm from 'realm'

const CarSchema = {
    name: 'Car',
    properties: {
        make: 'string',
        model: 'string',
        miles: {type: 'int',default: 0},
    }
}

const PersonSchema = {
    name: 'Person',
    properties: {
        name: 'string',
        birthday: 'date',
        cars: {type: 'list',objectType:'Car'},
        picture: {type: 'data',optional: true},
    }
}

let realm = new Realm({
    schema:[CarSchema,PersonSchema]
})

const insertPersion = (name) => {
    let cars = [];
    cars.push({make:"lexus",model:"high",miles:480})
    cars.push({make:"toyota",model:"low",miles:360})
    realm.write(()=>{
        let person = realm.create('Person',{
            name,
            birthday: new Date(1994,9,10),
            cars:cars,
        })
    })
}

const insertData = (make,model,miles)=>{

    realm.write(()=>{
        let car = realm.create('Car',{  //简写ES6
            make,
            model,
            miles: parseInt(miles),
        });
        //car.miles = 1500;
    })

}

const queryData = (make)=>{
    //realm.objects('Car').filtered('make="'+make+'"')
    return realm.objects('Car').filtered(`make="${make}"`);
}

const deleteData = (make)=> {
    realm.write(()=>{
        let cars = realm.objects('Car').filtered(`make="${make}"`);
        realm.delete(cars);
    })
}

export {insertPersion,insertData,queryData,deleteData}