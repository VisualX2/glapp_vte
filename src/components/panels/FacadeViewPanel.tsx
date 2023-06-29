import { observer } from "mobx-react"
import { Layer, Stage } from "react-konva"
import { FacadeRender } from "../FacadeRender/FacadeRender"
export const FacadeViewPanel = observer(() => {
    
    return(
        <Stage width = {1000} height={1000}>
            <Layer x={100} y={100}>
                <FacadeRender></FacadeRender>
            </Layer>
        </Stage>
    )
}) 