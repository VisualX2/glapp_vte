import { makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export class Cut {
    id:string
    type: string
    @observable x:number
    @observable y:number
    @observable corner:string
    constructor(x:number, y:number, corner:string){
        this.id = uuidv4()
        this.x = x
        this.y = y
        this.corner = corner
        this.type = "cut"
        makeObservable(this)
    }
}
