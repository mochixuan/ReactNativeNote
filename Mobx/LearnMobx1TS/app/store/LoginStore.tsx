import {observable,action,runInAction} from 'mobx'
import {login} from '../data/network/HttpTest'

class LoginStore {

    @observable isLogin: boolean = false;
    @observable isLoginState: string = "done"; //done,doing,error
    @observable token? : string = undefined;

    @action
    login() {
        this.isLogin = false;
        this.isLoginState = "doing"
        this.token = null
        login().then((result)=>{
            runInAction(()=>{
                if (result) {
                    this.isLogin = true;
                    this.isLoginState = "done";
                    this.token = "abcd";
                } else {
                    this.isLogin = false;
                    this.isLoginState = "error";
                    this.token = null;
                }
            })
        })
    }

}

const loginStore = new LoginStore()

export {loginStore}

