import { observer } from "mobx-react"
import "../../styles/OperationList.css"
import { DrillListCategory } from "../OpList/DrillListCategory"

export const OperationList = observer(() => {
    return(
        <div id="OperationList">
            <DrillListCategory></DrillListCategory>
        </div>
    )
})