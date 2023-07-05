import { observer } from "mobx-react"
import { Layer, Stage } from "react-konva"
import { FacadeRender } from "../FacadeRender/FacadeRender"
import { useEffect, useRef, useState } from "react"
import "../../styles/OperationList.css"
export const FacadeViewPanel = observer(() => {
    const divRef:any = useRef(null)
    const stage:any = useRef(null)
    const [dimensions, setDimensions] = useState({
        width: 20,
        height: window.innerHeight -32
        
    })



    useEffect(() => {
        const checkSize = () => {
            if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
                setDimensions({
                  width: divRef.current.offsetWidth,
                  height: window.innerHeight -32
                })
            }

        };
        checkSize()
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
      }, [])

    return(
        <div id="stage" ref={divRef}>
            <Stage width = {dimensions.width} height={dimensions.height} ref={stage}
                style={{
                    backgroundColor:"#1E1E1E",
                    backgroundImage:"linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
                    backgroundSize:"100px 100px, 100px 100px, 20px 20px, 20px 20px",
                    backgroundPosition:"-2px -2px, -2px -2px, -1px -1px, -1px -1px"
                    }}
                draggable
                onDragMove={() => {
                    stage.current.x(Math.max(-500, Math.min(2000, stage.current.x())))
                    stage.current.y(Math.max(-500, Math.min(2000, stage.current.y())))
                }}>
                <Layer x={160} y={100}>
                    <FacadeRender></FacadeRender>
                </Layer>
            </Stage>
        </div>
    )
}) 