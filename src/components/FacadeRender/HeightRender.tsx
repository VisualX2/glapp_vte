import { observer } from "mobx-react";
import { Arrow, Group, Label, Line, Text } from "react-konva";
import React from "react";
import { FacadeStore } from "../../stores/FacadeStore";

type HeightRenderParameters = {
    selectedPart: FacadeStore;
}

export const HeightRender: React.FC<HeightRenderParameters> = observer(({selectedPart}) => {
    const textHeightRef = React.useRef<any>();
    const [heightWidth, setHeightWidth] = React.useState(0);
    const [lengthWidth, setLengthWidth] = React.useState(0);
    React.useEffect(() => {
        if(textHeightRef.current !== undefined){
            setHeightWidth(textHeightRef.current.height());
            setLengthWidth(textHeightRef.current.width());
        }
        
    }, []);
    return(
        <Group>
            <Line points={[-40,0,0,0]} stroke={"#038B00"}></Line>
            <Arrow points={[-20,0,-20,selectedPart.width]}  stroke={"#038B00"} pointerAtBeginning={true}></Arrow>
            <Line points={[-40,selectedPart.width,0,selectedPart.width]} stroke={"#038B00"}></Line>
            <Label x={-25-lengthWidth} y={selectedPart.width/2 - heightWidth/2}  align="center"><Text ref={textHeightRef} text={selectedPart.width + " мм"} fill="#038B00" fontSize={18} align="center"></Text></Label>
        </Group>
    )
})