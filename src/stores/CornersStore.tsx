import { action, makeObservable, observable } from "mobx";
import { Cut } from "./OperationStores/CutStore";
import { CornerCut } from "./OperationStores/CornerCut";
import { Radius } from "./OperationStores/RadiusStore";

export class CornersStore {
    @observable private listCorners: (Cut|CornerCut|Radius|undefined)[]

    constructor() {
        this.listCorners = [undefined,undefined,undefined,undefined]
        makeObservable(this)
    }

    addOperation(cornerObject: Cut|CornerCut|Radius, corner: string){
        switch (corner) {
            case "topleft":
                this.listCorners[0] = cornerObject
                break;
            case "topright":
                this.listCorners[1] = cornerObject
                break;
            case "bottomleft":
                this.listCorners[2] = cornerObject
                break;
            case "bottomright":
                this.listCorners[3] = cornerObject
                break;
        }
    }

    @action getListCorners() {
        return this.listCorners
    }
}