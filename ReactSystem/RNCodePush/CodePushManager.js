import CodePush from 'react-native-code-push'
import {AppState} from 'react-native'

export const initCodePush = () => {

    //如果你期望更及时的获得更新，可以在每次APP从后台进入前台的时候去主动的检查更新
    // AppState.addEventListener('change',(newState)=>{
    //     newState === 'active' && CodePush.sync()
    // })



}

const downloadProgressCallback = () => {

}