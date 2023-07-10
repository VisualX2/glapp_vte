import { observer } from "mobx-react"
import "../../styles/OperationInfo.css"
import React, { useEffect } from "react"
import { Cut } from "../../stores/OperationStores/CutStore"
import { Drill } from "../../stores/OperationStores/DrillStore"
import { CornerCut } from "../../stores/OperationStores/CornerCut"
import { Radius } from "../../stores/OperationStores/RadiusStore"
import { Box, Button, Typography } from "@mui/material"
import { useStore } from "../../model/StoreContext"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

import SvgCutIcon from "../../assets/icons/CutIcon"
import SvgRadiusIcon from "../../assets/icons/RadiusIcon"
import SvgCornerCutIcon from "../../assets/icons/CornerCutIcon"
import SvgDrillIcon from "../../assets/icons/DrillIcon"


type InfoDialogUpProps = {
    selectedOperation:Cut|Drill|CornerCut|Radius
}

export const InfoDialogUp: React.FC<InfoDialogUpProps> = observer(({selectedOperation}) => {
    const store = useStore()
    const [text, setText] = React.useState("text");
    const [image, setImage] = React.useState(<SvgCutIcon></SvgCutIcon>)
    const isCutOp = (op: Cut|Drill|CornerCut|Radius): op is Cut => (op !== undefined && op.type === "cut");
    const isRadiusOp = (op: Cut|Drill|CornerCut|Radius): op is Radius => (op !== undefined && op.type === "radius");
    const isCornerCutOp = (op: Cut|Drill|CornerCut|Radius): op is CornerCut => (op !== undefined && op.type === "cornercut");
    const isDrillOp = (op: Cut|Drill|CornerCut|Radius): op is Drill => (op !== undefined && op.type === "drill");

    useEffect(() => {
        if(isCutOp(selectedOperation)){
            setText("Зріз по площині")
            setImage(<SvgCutIcon></SvgCutIcon>)
        } 
        else if(isRadiusOp(selectedOperation)){
            setText("Радіус")
            setImage(<SvgRadiusIcon></SvgRadiusIcon>)
        } 
        else if(isCornerCutOp(selectedOperation)){
            setText("Кутовий зріз")
            setImage(<SvgCornerCutIcon></SvgCornerCutIcon>)
        } 
        else if(isDrillOp(selectedOperation)){
            setText("Свердління")
            setImage(<SvgDrillIcon></SvgDrillIcon>)
        }
    },[])

    const handleRemove = () => {
        if(isDrillOp(selectedOperation)){
            store.selectedContent?.opStore.removeDrill(selectedOperation.id)
        }
    }

    return(
        <div id="InfoDialogUp">
            <Grid2 container columnSpacing={{ xs: 12, sm: 1, md: 2 }} alignItems="center">
                <Grid2 xs={3} >
                    <Box>
                        {image}
                    </Box>
                </Grid2>
                <Grid2 xs={9}>
                <div>
                <Grid2 container xs={12}  rowSpacing={1} alignItems="center">
                    <Grid2 xs={12}>
                        <Box sx={{textAlign: "center"}}>
                            <Typography>
                                Тип операції: {text}
                            </Typography>
                        </Box>
                    </Grid2>
                    <Grid2 xs={12}>
                        <Box sx={{textAlign: "center"}}>
                            <Button sx={{width:"100%", color:"white", backgroundColor:"gray"}} onClick={handleRemove}>
                                Видалити операцію
                            </Button>
                        </Box>
                    </Grid2>
                </Grid2>
                </div>
                </Grid2>
            </Grid2>
        </div>
    )
})