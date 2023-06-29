import { observer } from "mobx-react";
import { Group} from "react-konva";
import { useStore } from "../../model/StoreContext";

import { Cut } from "../../stores/OperationStores/CutStore";
import { Radius } from "../../stores/OperationStores/RadiusStore";
import { CornerCut } from "../../stores/OperationStores/CornerCut";
import { CutOperation } from "../OperationComponents/CutOperation";
import { RadiusOperation } from "../OperationComponents/RadiusOperation";
import { CornerCutOperation } from "../OperationComponents/CornerCutOperation";

export const CornerRender = observer(() => {
    const store = useStore()
    const selectedPart = store.selectedContent
    const isCutOp = (op: Cut|Radius|CornerCut|undefined): op is Cut => (op !== undefined && op.type === "cut");
    const isRadiusOp = (op: Cut|Radius|CornerCut|undefined): op is Radius => (op !== undefined && op.type === "radius");
    const isCornerCutOp = (op: Cut|Radius|CornerCut|undefined): op is CornerCut => (op !== undefined && op.type === "cornercut");
    const corners = () => {
        var ct = []
        if(selectedPart?.opStore.corners.getListCorners() !== undefined){
            for(const child of selectedPart.opStore.corners.getListCorners()){
                if(isCutOp(child)){
                    ct.push(<CutOperation x={child.x} y={child.y} corner={child.corner} partwidth={selectedPart.length} partheight={selectedPart.width}></CutOperation>);
                }  else if(isRadiusOp(child)) {
                    ct.push(<RadiusOperation radius={child.r} corner={child.side} partwidth={selectedPart.length} partheight={selectedPart.width}></RadiusOperation>);      
                }   else if(isCornerCutOp(child)) {
                    ct.push(<CornerCutOperation width={child.width} height={child.height} corner={child.corner} partwidth = {selectedPart.length} partheight = {selectedPart.width}></CornerCutOperation>);      
                }
            }
        }
        return ct
    }
    return(
        <Group>
            {corners()}
        </Group>
    )
})