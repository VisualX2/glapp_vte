import { observer } from "mobx-react"
import { Drill } from "../../stores/OperationStores/DrillStore"
import React, { useEffect } from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Button, TextField, Typography } from "@mui/material"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { useStore } from "../../model/StoreContext"

type InfoDialogUpProps = {
    drillstore:Drill
}

export const DrillInfoDialog: React.FC<InfoDialogUpProps> = observer(({drillstore}) => {
    
    const [X, setX] = React.useState(drillstore.getX().toString());
    const [Y, setY] = React.useState(drillstore.getY().toString());
    const [depth, setDepth] = React.useState(drillstore.getDepth().toString());
    const [diameter, setDiameter] = React.useState(drillstore.getDiameter().toString());
    const store = useStore();
    var index;

    useEffect(() => {
        if(store.utilitydialog.updatedrill === false){
            setX(drillstore.getX().toString())
            setY(drillstore.getY().toString())
            setDepth(drillstore.getDepth().toString())
            setDiameter(drillstore.getDiameter().toString())
            store.utilitydialog.updatedrill = true
        }
    })
    if(store.selectedContent !== null){
        index = store.selectedContent.opStore.getDrills().indexOf(drillstore) + 1
    }
    
    return(
        <div id="DrillInfoDialog">
            <Grid2 container columnSpacing={{ xs: 12, sm: 1, md: 2 }}alignItems="center" rowSpacing={1}>
            <Grid2 xs={3} >
                    <Box paddingLeft={2}>
                        <Typography>
                            Номер:
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 xs ={4}>
                    <Box>
                        <Typography>
                            {index}
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 xs={4}></Grid2>
                <Grid2 xs={3} >
                    <Box paddingLeft={2}>
                        <Typography>
                            X:
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 xs ={4}>
                    <Box>
                        <TextField
                            id="drillx"
                            type="number"
                            size="small"
                            sx={{'& .MuiInputBase-input': {
                                color: 'white',
                              }}}
                            value={X}
                            onChange={(event) => { setX(event.target.value) }}
                            onKeyUp= {(e) => {
                                if (e.key === 'Enter') {
                                    drillstore.x = parseInt(X)
                                }
                            }}
                        />
                    </Box>
                </Grid2>
                <Grid2 xs={1}>
                    <Box>
                        <Button onClick={() => {drillstore.x = parseInt(X)}}><DoneOutlineIcon></DoneOutlineIcon></Button>
                    </Box>
                </Grid2>
                <Grid2 xs={4}></Grid2>
                <Grid2 xs={3}>
                    <Box paddingLeft={2}>
                        <Typography>
                            Y:
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 xs ={4}>
                    <Box>
                        <TextField
                            id="drilly"
                            type="number"
                            size="small"
                            sx={{'& .MuiInputBase-input': {
                                color: 'white',
                              }}}
                            value={Y}
                            onChange={(event) => { setY(event.target.value) }}
                            onKeyUp= {(e) => {
                                if (e.key === 'Enter') {
                                    drillstore.y = parseInt(Y)
                                }
                            }}
                        />
                    </Box>
                </Grid2>
                <Grid2 xs={1}>
                    <Box>
                        <Button onClick={() => {drillstore.y = parseInt(Y)}}><DoneOutlineIcon></DoneOutlineIcon></Button>
                    </Box>
                </Grid2>
                <Grid2 xs={4}></Grid2>
                <Grid2 xs={3}>
                    <Box paddingLeft={2}>
                        <Typography>
                            Глибина:
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 xs ={4}>
                    <Box>
                        <TextField
                            id="drillx"
                            type="number"
                            size="small"
                            sx={{'& .MuiInputBase-input': {
                                color: 'white',
                              }}}
                            value={depth}
                            onChange={(event) => { setDepth(event.target.value) }}
                            onKeyUp= {(e) => {
                                if (e.key === 'Enter') {
                                    drillstore.depth = parseInt(depth)
                                }
                            }}
                        />
                    </Box>
                </Grid2>
                <Grid2 xs={1}>
                    <Box>
                        <Button onClick={() => {drillstore.depth = parseInt(depth)}}><DoneOutlineIcon></DoneOutlineIcon></Button>
                    </Box>
                </Grid2>
                <Grid2 xs={4}></Grid2>
                <Grid2 xs={3}>
                    <Box paddingLeft={2}>
                        <Typography>
                            Діаметр:
                        </Typography>
                    </Box>
                </Grid2>
                <Grid2 xs ={4}>
                    <Box>
                        <TextField
                            id="drilldiameter"
                            type="number"
                            size="small"
                            sx={{'& .MuiInputBase-input': {
                                color: 'white',
                              }}}
                            value={diameter}
                            onChange={(event) => { setDiameter(event.target.value) }}
                            onKeyUp= {(e) => {
                                if (e.key === 'Enter') {
                                    drillstore.diameter = parseInt(diameter)
                                }
                            }}
                        />
                    </Box>
                </Grid2>
                <Grid2 xs={1}>
                    <Box>
                        <Button onClick={() => {drillstore.diameter = parseInt(diameter)}}><DoneOutlineIcon></DoneOutlineIcon></Button>
                    </Box>
                </Grid2>
                <Grid2 xs={4}></Grid2>
            </Grid2>
        </div>
    )
})