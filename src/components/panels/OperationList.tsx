import { observer } from "mobx-react"
import "../../styles/OperationList.css"
import { DrillListCategory } from "../OpList/DrillListCategory"
import { CornerListCategory } from "../OpList/CornerListCategory"

export const OperationList = observer(() => {
    return(
        <div id="OperationList">
            <DrillListCategory></DrillListCategory>
            <CornerListCategory></CornerListCategory>
        </div>
    )
})