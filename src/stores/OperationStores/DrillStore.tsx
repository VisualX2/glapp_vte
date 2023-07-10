import { action, makeObservable, observable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export class Drill{
    id:string
    type: string
    @observable x:number
    @observable y:number
    @observable depth:number
    @observable diameter:number
    
    constructor(x:number, y:number, depth:number, diameter:number){
        this.id = uuidv4()
        this.x = x
        this.y = y
        this.depth = depth
        this.type = "drill"
        this.diameter = diameter
        makeObservable(this)
    }

    @action getY(){
        return this.y
    }
    @action getX(){
        return this.x
    }
    @action getDepth(){
        return this.depth
    }
    @action getDiameter(){
        return this.diameter
    }
}