import { observer } from "mobx-react"
import "../../styles/OperationInfo.css"
import { useStore } from "../../model/StoreContext"
import { Typography } from "@mui/material"
import { InfoDialogUp } from "../InfoDialogs/InfoDialogImage"
import { Radius } from "../../stores/OperationStores/RadiusStore"
import { CornerCut } from "../../stores/OperationStores/CornerCut"
import { Drill } from "../../stores/OperationStores/DrillStore"
import { Cut } from "../../stores/OperationStores/CutStore"
import { DrillInfoDialog } from "../InfoDialogs/DrillInfoDialog"

export const OperationInfo = observer(() => {
    const store = useStore()
    const isDrillOp = (op: Cut|Drill|CornerCut|Radius): op is Drill => (op !== undefined && op.type === "drill");
    const checkOperation = () => {
        if(store.selectedContent?.opStore.selectedOp === undefined){
            return <div id="noItemMessage"><Typography variant="subtitle2">Оберіть операцію для подальшого показу</Typography></div>
        }
        else {
            return <InfoDialogUp selectedOperation={store.selectedContent.opStore.selectedOp}></InfoDialogUp>
        }
    }
    const checkOperationTw = () => {
        if(isDrillOp(store.selectedContent?.opStore.selectedOp) && store.selectedContent?.opStore.selectedOp !== undefined){
            return <DrillInfoDialog drillstore={store.selectedContent?.opStore.selectedOp}></DrillInfoDialog>
        }
    }
    return(
        <div id="OperationInfo">
            {checkOperation()}
            {checkOperationTw()}
        </div>
    )
})