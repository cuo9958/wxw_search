import { observable, action } from 'mobx';

class User {
    @observable uid = localStorage.getItem('uid') || '';

    @action setUid(uid: string) {
        this.uid = uid;
        localStorage.setItem('uid', uid);
    }
}

export default new User();
