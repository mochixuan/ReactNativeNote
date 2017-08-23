import {
    ToastAndroid
} from 'react-native'

const show = (data)=>{
    ToastAndroid.show(data,ToastAndroid.SHORT);
}

export {show}