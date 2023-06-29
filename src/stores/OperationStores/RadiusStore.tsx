import { makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export class Radius {
    id:string
    type: string
    @observable r:number
    @observable side:string


    constructor(r:number, side:string){
        this.id = uuidv4()
        this.type = "radius"
        this.r = r
        this.side = side
        makeObservable(this)
    }
}