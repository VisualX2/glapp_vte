import { observer } from "mobx-react";
import { Group, Rect } from "react-konva";
import { useStore } from "../../model/StoreContext";
import { LengthRender } from "./LengthRender";
import { HeightRender } from "./HeightRender";
import { OperationRender } from "./OperationRender";

export const FacadeRender = observer(() => {
    const store = useStore()
    const selectedPart = store.selectedContent

    const renderRect = () => {
        if(selectedPart !== null){
            return <Rect x={0} y={0} width={selectedPart.length} height={selectedPart.width} stroke={"#E06C00"}></Rect>
        }
    }

    const renderLength = () => {
        if(selectedPart !== null){
            return (
                <LengthRender selectedPart = {selectedPart}></LengthRender>
            )
        }
    }
    const renderHeight = () => {
        if(selectedPart !== null){
            return (
                <HeightRender selectedPart = {selectedPart}></HeightRender>
            )
        }
    }

    return(
        <Group>
            {renderLength()}
            {renderRect()}
            {renderHeight()}
            <OperationRender></OperationRender>
        </Group>
    )
})