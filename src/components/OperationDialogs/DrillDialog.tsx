import { observer } from "mobx-react"
import { useStore } from "../../model/StoreContext"
import DrillIcon from "../../assets/icons/DrillIcon.tsx"
import {Box, Button, Modal, TextField, Typography} from "@mui/material"
import React from "react"
import Grid2 from "@mui/material/Unstable_Grid2"
import { Drill } from "../../stores/OperationStores/DrillStore.tsx"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#2D2D2D',
    border: '2px solid #878787',
    boxShadow: 24,
    p: 4,
};

export const DrillDialog = observer(() => {
    const store = useStore()
    const selectedPart = store.selectedContent

    const [open, setOpen] = React.useState(false);

    const [text_one, setText_one] = React.useState("");
    const [text_two, setText_two] = React.useState("");
    const [text_three, setText_three] = React.useState("");
    const [text_four, setText_four] = React.useState("");

    const clearTb = () => {
        setText_one("")
        setText_two("")
        setText_three("")
        setText_four("")
    }

    const handleClickDrill = () => {
        setOpen((previousOpen) => !previousOpen);
        clearTb()
    };

    return(
        <React.Fragment>
        <Button sx={{height: 60,width: 60, backgroundColor:"#2D2D2D"} } onClick={handleClickDrill}><DrillIcon></DrillIcon></Button>
        <Modal open={open} onClose={handleClickDrill}>
                    <Box sx={style}>
                        <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }}  rowGap={1}>
                            <Grid2 xs={3} container alignItems="center">
                                <Typography variant="body1" sx={{color: "#878787"}}>
                                    X:
                                </Typography>
                            </Grid2>
                            <Grid2 xs={9}>
                                <TextField
                                    id="drillx"
                                    sx={{['& .MuiInputBase-input']: {
                                        color: "#878787"
                                       }}}
                                    type="number"
                                    size="small"
                                    onChange={(event) => { setText_one(event.target.value) }}
                                />
                            </Grid2>
                            <Grid2 xs={3} container alignItems="center">
                                <Typography variant="body1" sx={{color: "#878787"}}>
                                    Y:
                                </Typography>
                            </Grid2>
                            <Grid2 xs={9}>
                                <TextField
                                    id="drilly"
                                    sx={{['& .MuiInputBase-input']: {
                                        color: "#878787"
                                       }}}
                                    type="number"
                                    size="small"
                                    onChange={(event) => { setText_two(event.target.value) }}
                                />
                            </Grid2>
                            <Grid2 xs={3} container alignItems="center">
                                <Typography variant="body1" sx={{color: "#878787"}}>
                                    Глибина:
                                </Typography>
                            </Grid2>
                            <Grid2 xs={9}>
                                <TextField
                                    id="drillz"
                                    sx={{['& .MuiInputBase-input']: {
                                        color: "#878787"
                                       }}}
                                    type="number"
                                    size="small"
                                    onChange={(event) => { setText_three(event.target.value) }}
                                />
                            </Grid2>
                            <Grid2 xs={3} container alignItems="center">
                                <Typography variant="body1" sx={{color: "#878787"}}>
                                    Діаметр:
                                </Typography>
                            </Grid2>
                            <Grid2 xs={9}>
                                <TextField
                                    id="drilld"
                                    sx={{['& .MuiInputBase-input']: {
                                        color: "#878787"
                                       }}}
                                    type="number"
                                    size="small"
                                    onChange={(event) => { setText_four(event.target.value) }}
                                />
                            </Grid2>
                            <Grid2>
                            <Button sx={{backgroundColor:"#404040", color:"#878787"}} onClick={() => {
                            var drill = new Drill(parseFloat(text_one), parseFloat(text_two), parseFloat(text_three), parseFloat(text_four));
                            selectedPart?.opStore.addDrill(drill)
                            handleClickDrill()



                            }}>OK</Button>
                            </Grid2>
                        </Grid2>
                        
                    </Box>
                    
                </Modal>
            </React.Fragment>
    )
})