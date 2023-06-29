import { observer } from "mobx-react";
import React from "react";
import { Group, Line, Rect, Text} from "react-konva";

type CornerCutParameters = {
    width: number;
    height: number;
    corner: string;
    partwidth: number;
    partheight: number;
}

export const CornerCutOperation: React.FC<CornerCutParameters> = observer(({width, height, corner, partwidth, partheight}) => {
    const [x2, setX2] = React.useState(0);
    const [y2, setY2] = React.useState(0);
    const [vis, setVis] = React.useState(false);
    const bC = () => {
            if(corner === "topleft") {
                return <Group><Line points={[width, 0, width, height]} stroke="red" dash={[5,2]}></Line><Line points={[0, height, width, height]} stroke="red" dash={[5,2]}></Line><Rect x={0} y = {0} width={width} height={height} fill="red" opacity={0.4}></Rect></Group>
            }
            else if(corner === "topright") {
                return <Group><Line points={[partwidth - width,0, partwidth - width, height]} stroke="red" dash={[5,2]}></Line><Line points={[partwidth - width, height, partwidth, height]} stroke="red" dash={[5,2]}></Line><Rect x={partwidth - width} y = {0} width={width} height={height} fill="red" opacity={0.4}></Rect></Group>
            }
            else if(corner === "bottomleft") {
                return <Group><Line points={[width,partheight,width, partheight - height]} stroke="red" dash={[5,2]}></Line><Line points={[0, partheight - height, width, partheight - height]} stroke="red" dash={[5,2]}></Line><Rect x={0} y = {partheight - height} width={width} height={height} fill="red" opacity={0.4}></Rect></Group>
            }
            else {
                return <Group><Line points={[partwidth - width,partheight,partwidth - width, partheight - height]} stroke="red" dash={[5,2]}></Line><Line points={[partwidth - width, partheight - height, partwidth, partheight - height]} stroke="red" dash={[5,2]}></Line><Rect x={partwidth - width} y = {partheight - height} width={width} height={height} fill="red" opacity={0.4}></Rect></Group>
            }
    }

    return(
        <Group onMouseMove={(e) => {
            var stage = e.target.getStage()
            var mousePos = stage?.getPointerPosition();
            if(mousePos !== null && mousePos !== undefined){
                setX2(mousePos.x -70)
                setY2(mousePos.y -70)
            }
            
            setVis(true)
    
        }} onMouseOut={() => {setVis(false)}}>
                {bC()}
                <Text text={"Довжина:" + width + "\nШирина:" + height} x={x2} y={y2} visible={vis} fill='white'></Text>
            </Group>
    )
})