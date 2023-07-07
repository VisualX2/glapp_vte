import { observer } from "mobx-react"
import { Drill } from "../../stores/OperationStores/DrillStore"
import React from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Button, TextField, Typography } from "@mui/material"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

type InfoDialogUpProps = {
    drillstore:Drill
}

export const DrillInfoDialog: React.FC<InfoDialogUpProps> = observer(({drillstore}) => {
    const [X, setX] = React.useState(drillstore.x.toString());
    const [Y, setY] = React.useState(drillstore.getY().toString());
    const [depth, setDepth] = React.useState(drillstore.depth.toString());
    const [diameter, setDiameter] = React.useState(drillstore.diameter.toString());
    return(
        <div id="DrillInfoDialog">
            <Grid2 container columnSpacing={{ xs: 12, sm: 1, md: 2 }}alignItems="center">
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
                            defaultValue={X}
                            onChange={(event) => { setX(event.target.value) }}
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
                            defaultValue={Y}
                            onChange={(event) => { setY(event.target.value) }}
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
                            defaultValue={depth}
                            onChange={(event) => { setDepth(event.target.value) }}
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
                            defaultValue={diameter}
                            onChange={(event) => { setDiameter(event.target.value) }}
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