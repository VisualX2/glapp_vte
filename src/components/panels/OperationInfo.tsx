import { observer } from "mobx-react"
import "../../styles/OperationInfo.css"
import { useStore } from "../../model/StoreContext"
import { Typography } from "@mui/material"
import { InfoDialogUp } from "../InfoDialogs/InfoDialogImage"

export const OperationInfo = observer(() => {
    const store = useStore()
    const checkOperation = () => {
        if(store.selectedContent?.opStore.selectedOp === undefined){
            return <div id="noItemMessage"><Typography variant="subtitle2">Оберіть операцію для подальшого показу</Typography></div>
        }
        else {
            return <InfoDialogUp selectedOperation={store.selectedContent.opStore.selectedOp}></InfoDialogUp>
        }
    }
    return(
        <div id="OperationInfo">
            {checkOperation()}
        </div>
    )
})