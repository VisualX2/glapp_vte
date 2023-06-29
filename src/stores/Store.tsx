import { action, observable, makeObservable } from "mobx";
import { FacadeStore } from "./FacadeStore";

export interface IStore {
    facades: Array<FacadeStore>,
    selectedContent: FacadeStore|null
}

export class Store implements IStore {
    @observable facades: Array<FacadeStore>;
    @observable selectedContent: FacadeStore|null = null;

    constructor() {
        this.facades = observable([])
        this.selectedContent = null
        makeObservable(this)
    }

    @action selectContent = (id:string) => {
        var select:any = this.facades.find((i => i.id === id))
        this.selectedContent = select
    }

    @action addFacade = (length:number, width:number, height:number) => {
        var newFacade = new FacadeStore(length,width,height)
        this.facades.push(newFacade)
    }
}

