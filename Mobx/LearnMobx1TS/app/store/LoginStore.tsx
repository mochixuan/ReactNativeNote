import { action,observable,runInAction } from 'mobx';
import { login } from '../data/network/HttpTest';

class LoginStore {

  @observable public isLogin: boolean = false;
  @observable public isLoginState: string = 'done'; // done,doing,error
  @observable public token? : string = undefined;

  @action
    public login () {
    this.isLogin = false;
    this.isLoginState = 'doing';
    this.token = null;
    login().then((result) => {
      runInAction(() => {
        if (result) {
          this.isLogin = true;
          this.isLoginState = 'done';
          this.token = 'abcd';
        } else {
          this.isLogin = false;
          this.isLoginState = 'error';
          this.token = null;
        }
      });
    });
  }

}

const loginStore = new LoginStore();

export { loginStore };
