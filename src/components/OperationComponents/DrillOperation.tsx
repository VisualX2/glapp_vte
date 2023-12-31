import { observer } from "mobx-react";
import React, { useEffect, useRef } from "react";
import { Circle, Group, Line, Text } from "react-konva";
import { useStore } from "../../model/StoreContext";
import { Drill } from "../../stores/OperationStores/DrillStore";

type DrillParameters = {
    drillstore: Drill
    partZ:number;
    index: number;
}

export const DrillOperation: React.FC<DrillParameters> = observer(({drillstore, partZ, index}) => {
    const store = useStore()
    const drill:any = useRef(null)
    const [x2, setX2] = React.useState(0);
    const [y2, setY2] = React.useState(0);
    const [vis, setVis] = React.useState(false);

    const [colorActivity, setColorActivity] = React.useState("red")

    useEffect(() => {
        if(drillstore === store.selectedContent?.opStore.selectedOp){
            setColorActivity("blue")
        } else {
            setColorActivity("red")
        }
    },[store.selectedContent?.opStore.selectedOp])

    const st = () => {
        if (partZ <= drillstore.depth){
            return "white"
        }
        return ""
    }
    return(
        <Group x={drillstore.x} y={drillstore.y} onMouseMove={() => {
            setX2(drill.current.x() + 30)
            setY2(drill.current.y() + 20)
            setVis(true)
        }} onMouseOut={() => {setVis(false)}} >
            <Circle x={0} y={0} radius={drillstore.diameter/2} stroke={colorActivity} fill={st()} onMouseOut={() => {
            var tt = document.getElementById("drilltooltip")
            tt?.remove();
        }} onClick={() => {
            if(store.selectedContent !== null){
                store.selectedContent.opStore.selectedOp = drillstore
                store.utilitydialog.updatedrill = false
            }
        }}></Circle>
            <Circle ref={drill} x={0} y={0} radius={1} stroke={colorActivity} strokeWidth={1} listening = {false}></Circle>
            <Line points={[0,-(drillstore.diameter/2)-2,0,(drillstore.diameter/2)+2]} stroke={colorActivity} listening = {false}></Line>
            <Line points={[-(drillstore.diameter/2)-2,0,(drillstore.diameter/2)+2,0]} stroke={colorActivity} listening = {false}></Line>
            <Text text={index.toString()} x={(drillstore.diameter/2)} y = {(drillstore.diameter/2)} fill={colorActivity}></Text>
            <Text text={"Номер:" + index.toString() + "\nX:" + drillstore.x + "\nY:" + drillstore.y + "\nГлибина:" + drillstore.depth + "\nДіаметр:" + drillstore.diameter} x={x2} y={y2} visible={vis} fill='white'></Text>
        </Group>
    )
})