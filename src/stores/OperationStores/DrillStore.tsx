import { makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export class Drill{
    id:string
    @observable x:number
    @observable y:number
    @observable depth:number
    @observable diameter:number
    
    constructor(x:number, y:number, depth:number, diameter:number){
        this.id = uuidv4()
        this.x = x
        this.y = y
        this.depth = depth
        this.diameter = diameter
        makeObservable(this)
    }
}