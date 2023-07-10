import { action, observable, makeObservable } from "mobx";
import { FacadeStore } from "./FacadeStore";
import { DialogUpdate } from "./UtilStores/DialogUpdate";

export interface IStore {
    facades: Array<FacadeStore>,
    utilitydialog: DialogUpdate,
    selectedContent: FacadeStore|null
}

export class Store implements IStore {
    @observable facades: Array<FacadeStore>;
    @observable selectedContent: FacadeStore|null = null;
    @observable utilitydialog: DialogUpdate;

    constructor() {
        this.facades = observable([])
        this.utilitydialog = new DialogUpdate();
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

