import { observer } from "mobx-react";
import React, { useRef } from "react";
import { Arc, Group, Text } from "react-konva";

type RadiusParameters = {
    radius:number;
    corner:string;
    partwidth:number;
    partheight:number;
}

export const RadiusOperation: React.FC<RadiusParameters> = observer(({radius,corner,partwidth,partheight}) => {
    const rd:any = useRef(null)
    const [x2, setX2] = React.useState(0);
    const [y2, setY2] = React.useState(0);
    const [vis, setVis] = React.useState(false);
    const bC = () => {
        if (corner === "topleft") {
            return <Group clipX={0} clipY={0} clipHeight={radius} clipWidth={radius}><Arc x={radius} y={radius} stroke="red" angle={90} innerRadius={radius} outerRadius={radius * Math.sqrt(2)} dash={[5,2]} rotationDeg={180}></Arc><Arc ref={rd} x={radius} y={radius} stroke="red" strokeWidth={0} angle={90} innerRadius={radius} outerRadius={radius * Math.sqrt(2)} dash={[5,2]} rotationDeg={180} fill="red" opacity={0.4}></Arc></Group>
        }
        if (corner === "topright") {
            return <Group clipX={partwidth} clipY={0} clipHeight={radius} clipWidth={-radius}><Arc x={partwidth - radius} y={radius} stroke="red" angle={90} innerRadius={radius} outerRadius={radius * Math.sqrt(2)} dash={[5,2]} rotationDeg={-90}></Arc><Arc ref={rd} x={partwidth - radius} y={radius} stroke="red" strokeWidth={0} angle={-90} innerRadius={radius} outerRadius={radius * Math.sqrt(2)} dash={[5,2]} rotationDeg={180} fill="red" opacity={0.4}></Arc></Group>
        }
        else if(corner === "bottomleft"){
            return <Group clipX={0} clipY={partheight} clipHeight={-radius} clipWidth={radius}><Arc x={radius} y={partheight - radius} stroke="red" angle={90} innerRadius={radius} outerRadius={radius * Math.sqrt(2)} dash={[5,2]} rotationDeg={90}></Arc><Arc ref={rd} x={radius} y={partheight - radius} stroke="red" strokeWidth={0} angle={90} innerRadius={radius} outerRadius={radius * Math.sqrt(2)} dash={[5,2]} rotationDeg={90} fill="red" opacity={0.4}></Arc></Group>
        }
        else{
            return <Group clipX={partwidth} clipY={partheight} clipHeight={-radius} clipWidth={-radius}><Arc x={partwidth - radius} y={partheight - radius} stroke="red" angle={90} innerRadius={radius} outerRadius={radius * Math.sqrt(2)} dash={[5,2]} rotationDeg={0}></Arc><Arc ref={rd} x={partwidth - radius} y={partheight - radius} stroke="red" strokeWidth={0} angle={90} innerRadius={radius} outerRadius={radius * Math.sqrt(2)} dash={[5,2]} rotationDeg={0} fill="red" opacity={0.4}></Arc></Group>
        }
        
    }

    return(<Group  onMouseMove={() => {
        setX2(rd.current.x() + 30)
        setY2(rd.current.y() + 20)
        setVis(true)
    }} onMouseOut={() => {setVis(false)}}>
        {bC()}
        <Text text={"Радіус:" + radius } x={x2} y={y2} visible={vis} fill='white'></Text>
    </Group>)
})