import { action, makeObservable, observable } from "mobx";
import { Drill } from "./OperationStores/DrillStore";
import { CornersStore } from "./CornersStore";

export class OperationListsStore {
    @observable selectedOp: any
    @observable private drills: (Drill)[]
    @observable corners: CornersStore

    constructor(){
        this.drills = []
        this.corners = new CornersStore()
        makeObservable(this)
    }

    @action getDrills() {
        return this.drills
    }

    @action addDrill(d:Drill){
        this.drills.push(d)
    }

    @action removeDrill(id:string){
        const indexOfObject = this.drills.findIndex(object => {
            return object.id === id;
        });
        this.drills.splice(indexOfObject, 1);
        if(this.selectedOp.id === id){
            this.selectedOp = undefined
        }
    } 
}