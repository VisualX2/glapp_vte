import { observer } from "mobx-react"
import { Drill } from "../../stores/OperationStores/DrillStore"
import React from "react"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box, TextField, Typography } from "@mui/material"

type InfoDialogUpProps = {
    drillstore:Drill
}

export const DrillInfoDialog: React.FC<InfoDialogUpProps> = observer(({drillstore}) => {
    const [X, setX] = React.useState(drillstore.x.toString());
    const [Y, setY] = React.useState(drillstore.y.toString());
    const [depth, setDepth] = React.useState(drillstore.depth.toString());
    const [diameter, setDiameter] = React.useState(drillstore.diameter.toString());
    return(
        <div id="DrillInfoDialog">
            <Grid2 container columnSpacing={{ xs: 12, sm: 1, md: 2 }}alignItems="center">
                <Grid2 xs={3} >
                    <Box>
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
                            defaultValue={X}
                            onChange={(event) => { setX(event.target.value) }}
                        />
                    </Box>
                </Grid2>
                <Grid2 xs={5}></Grid2>
                <Grid2 xs={3}>
                    <Box>
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
                            defaultValue={Y}
                            onChange={(event) => { setY(event.target.value) }}
                        />
                    </Box>
                </Grid2>
                <Grid2 xs={5}></Grid2>
                <Grid2 xs={3}>
                    <Box>
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
                            defaultValue={depth}
                            onChange={(event) => { setDepth(event.target.value) }}
                        />
                    </Box>
                </Grid2>
                <Grid2 xs={5}></Grid2>
                <Grid2 xs={3}>
                    <Box>
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
                            defaultValue={diameter}
                            onChange={(event) => { setDiameter(event.target.value) }}
                        />
                    </Box>
                </Grid2>
                <Grid2 xs={5}></Grid2>
            </Grid2>
        </div>
    )
})