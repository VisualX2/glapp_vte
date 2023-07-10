import { makeObservable, observable } from 'mobx';

export class DialogUpdate {
    @observable updatedrill:boolean


    constructor(){
        this.updatedrill = false
        makeObservable(this)
    }
}