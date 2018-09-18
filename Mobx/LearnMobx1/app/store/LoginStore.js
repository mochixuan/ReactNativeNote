import {observable,action,runInAction} from 'mobx'
import {login} from '../data/network/HttpTest'

class LoginStore {

    @observable isLogin = false;
    @observable isLoginState = "done"; //done,doing,error
    @observable token = null;

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

