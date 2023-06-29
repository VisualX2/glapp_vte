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
                dr.push(<DrillOperation x={child.x} y={child.y} radius={child.diameter/2} partZ={selectedPart.height} deep={child.depth} index={selectedPart.opStore.getDrills().indexOf(child) + 1}></DrillOperation>);
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