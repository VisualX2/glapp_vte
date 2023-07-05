import { observer } from "mobx-react";
import { Group} from "react-konva";
import { useStore } from "../../model/StoreContext";

import { DrillOperation } from "../OperationComponents/DrillOperation";

export const DrillRender = observer(() => {
    const store = useStore()
    const selectedPart = store.selectedContent

    const drills = () => {
        var dr = []
        if(selectedPart?.opStore.getDrills() !== undefined){
            for(const child of selectedPart?.opStore.getDrills()) {
                dr.push(<DrillOperation drillstore={child} partZ={selectedPart.height} index={selectedPart.opStore.getDrills().indexOf(child) + 1}></DrillOperation>);
            }
        }
        return dr
    }
    return(
        <Group>
            {drills()}
        </Group>
    )
})