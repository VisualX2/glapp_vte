import { observer } from "mobx-react"
import { Layer, Stage } from "react-konva"
import { FacadeRender } from "../FacadeRender/FacadeRender"
export const FacadeViewPanel = observer(() => {
    
    return(
        <Stage width = {window.innerWidth - 100} height={window.innerHeight -36} 
            style={{
                backgroundColor:"#1E1E1E",
                backgroundImage:"linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
                backgroundSize:"100px 100px, 100px 100px, 20px 20px, 20px 20px",
                backgroundPosition:"-2px -2px, -2px -2px, -1px -1px, -1px -1px"
                }}>
            <Layer x={160} y={100}>
                <FacadeRender></FacadeRender>
            </Layer>
        </Stage>
    )
}) 