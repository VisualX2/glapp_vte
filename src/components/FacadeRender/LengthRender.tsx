import { observer } from "mobx-react";
import { Arrow, Group, Label, Line, Text } from "react-konva";
import React from "react";
import { FacadeStore } from "../../stores/FacadeStore";


type LengthRenderParameters = {
    selectedPart: FacadeStore;
}

export const LengthRender: React.FC<LengthRenderParameters> = observer(({selectedPart}) => {
    const textLengthRef = React.useRef<any>();
    const [lengthWidth, setLengthWidth] = React.useState(0);
    //const [openL, setChangeLength] = React.useState(false);
    //const [text_one, setText_one] = React.useState("");
    //const handleClickChangeLength = (e:any) => {
    //    setChangeLength((openL) => !openL)
    //}
    React.useEffect(() => {
        if(textLengthRef.current !== undefined){
            setLengthWidth(textLengthRef.current.width());
        }
        
    }, []);

    return(
        <Group>
            <Line points={[0,0,0,-40]} stroke={"#038B00"}></Line>
            <Arrow points={[0,-20,selectedPart.length,-20]}  stroke={"#038B00"} pointerAtBeginning={true}></Arrow>
            <Line points={[selectedPart.length,0,selectedPart.length,-40]} stroke={"#038B00"}></Line>
            <Label x={selectedPart.length/2 - lengthWidth/2} y={-40}  align="center"><Text ref={textLengthRef} text={selectedPart.length + " мм"} fill="#038B00" fontSize={18} align="center"></Text></Label>
            
        </Group>
    )
})