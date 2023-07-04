import { observer } from "mobx-react";
import React, { useRef } from "react";
import { Circle, Group, Line, Text } from "react-konva";

type DrillParameters = {
    x:number;
    y:number;
    radius:number;
    partZ:number;
    deep:number;
    index: number;
}

export const DrillOperation: React.FC<DrillParameters> = observer(({x,y,radius, partZ, deep,index}) => {
    const drill:any = useRef(null)
    const [x2, setX2] = React.useState(0);
    const [y2, setY2] = React.useState(0);
    const [vis, setVis] = React.useState(false);
    const st = () => {
        if (partZ <= deep){
            return "white"
        }
        return ""
    }
    return(
        <Group  onMouseMove={() => {
            setX2(drill.current.x() + 30)
            setY2(drill.current.y() + 20)
            setVis(true)
        }} onMouseOut={() => {setVis(false)}}>
            <Circle x={x} y={y} radius={radius} stroke="red" fill={st()} onMouseOut={() => {
            var tt = document.getElementById("drilltooltip")
            tt?.remove();
        }}></Circle>
            <Circle ref={drill} x={x} y={y} radius={1} stroke="red" strokeWidth={1}></Circle>
            <Line points={[x,y-radius-2,x,y+radius+2]} stroke="red"></Line>
            <Line points={[x-radius-2,y,x+radius+2,y]} stroke="red"></Line>
            <Text text={index.toString()} x={x + radius} y = {y + radius} fill="red"></Text>
            <Text text={"Номер:" + index.toString() + "\nX:" + x + "\nY:" + y + "\nГлибина:" + deep + "\nДіаметр:" + radius*2} x={x2} y={y2} visible={vis} fill='white'></Text>
        </Group>
    )
})