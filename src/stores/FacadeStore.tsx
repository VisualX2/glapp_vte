import { observable, makeObservable } from "mobx";
import { v4 as uuidv4} from "uuid";
import { OperationListsStore } from "./OperationStore";

export interface IFacadeStore {
    id: string,
    length: number,
    width: number,
    height: number
    opStore: OperationListsStore
}

export class FacadeStore implements IFacadeStore {
    id: string;
    @observable length: number;
    @observable width: number;
    @observable height: number;
    @observable opStore: OperationListsStore

    constructor(length:number,width:number,height:number)   {
        this.id = uuidv4()
        this.length = length;
        this.width = width;
        this.height = height;
        this.opStore = new OperationListsStore()
        makeObservable(this);
    }
}