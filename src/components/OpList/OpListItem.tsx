import { observer } from "mobx-react";

type OpListItemParameters = {
    clickOp: () => void,
    text:string,
    active: boolean
}

export const OpListItem: React.FC<OpListItemParameters> = observer(({clickOp, text, active}) => {

    const handleActivity = () => {
        if(active){
            return "#434342"
        }
        return ""
    }
    return(
        <div style={{backgroundColor: handleActivity(), cursor: "pointer"}} onClick={clickOp}>
            {text}
        </div>
    )
})