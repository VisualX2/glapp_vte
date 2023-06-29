import { makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export class CornerCut {
    id:string
    type: string
    @observable width:number
    @observable height:number
    @observable corner:string


    constructor(width:number, height:number, corner:string){
        this.id = uuidv4()
        this.type = "cornercut"
        this.width = width
        this.height = height
        this.corner = corner
        makeObservable(this)
    }
}