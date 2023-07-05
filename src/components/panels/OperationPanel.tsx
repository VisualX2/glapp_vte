import { observer } from "mobx-react"
import "../../styles/OperationPanel.css"
import { OperationList } from "./OperationList"
import { OperationInfo } from "./OperationInfo"

export const OperationPanel = observer(() => {
    return(
        <div id="OperationPanel">
            <OperationList></OperationList>
            <OperationInfo></OperationInfo>
        </div>
    )
})