import { observer } from "mobx-react";
import React from "react";
import { Group, Line, Text } from "react-konva";

type CutParameters = {
    x:number;
    y:number;
    corner:string;
    partwidth:number;
    partheight:number;
}

export const CutOperation: React.FC<CutParameters> = observer(({x,y,corner,partwidth,partheight}) => {
    const [x2, setX2] = React.useState(0);
    const [y2, setY2] = React.useState(0);
    const [vis, setVis] = React.useState(false);

    const bC = () => {
        if (corner === "topleft") {
            return (
                <Group>
                    <Line points={[x,0,0,y]} stroke="red" dash={[5,2]}></Line>
                    <Line points={[0,0,0,y,x,0]} closed = {true} strokeWidth={0} fill="red" opacity={0.4}></Line>
                </Group>
            )
        }
        else if(corner === "topright"){
            return <Group><Line points={[partwidth - x,0,partwidth,y]} stroke="red" dash={[5,2]}></Line><Line points={[partwidth - x,0,partwidth,y,partwidth,0]} closed = {true} strokeWidth={0} fill="red" opacity={0.4}></Line></Group>
        }
        else if(corner === "bottomleft"){
            return <Group><Line points={[0,partheight - y,x,partheight]} stroke="red" dash={[5,2]}></Line><Line points={[0,partheight - y,x,partheight, 0,partheight]} closed = {true} strokeWidth={0} fill="red" opacity={0.4}></Line></Group>
        }
        else{
            return <Group><Line points={[partwidth - x,partheight,partwidth,partheight-y]} stroke="red" dash={[5,2]}></Line><Line points={[partwidth - x,partheight,partwidth,partheight-y,partwidth,partheight]} closed = {true} strokeWidth={0} fill="red" opacity={0.4}></Line></Group>
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
            <Text text={"\nВідступ по довжині:" + x + "\nВідступ по ширині:" + y} x={x2} y={y2} visible={vis} fill='white'></Text>
        </Group>)
})