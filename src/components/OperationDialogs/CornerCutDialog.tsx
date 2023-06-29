import { observer } from "mobx-react"
import { useStore } from "../../model/StoreContext"
import CornerCutIcon from "../../assets/icons/CornerCutIcon.tsx"
import {Box, Button, Modal, TextField, Typography, ToggleButton, ToggleButtonGroup} from "@mui/material"
import React from "react"
import Grid2 from "@mui/material/Unstable_Grid2"

import Topleft from "../../assets/Topleft.tsx"
import Topright from "../../assets/Topright.tsx"
import Bottomleft from "../../assets/Bottomleft.tsx"
import Bottomright from "../../assets/Bottomright.tsx"
import { CornerCut } from "../../stores/OperationStores/CornerCut.tsx"

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

export const CornerCutDialog = observer(() => {
    const store = useStore()
    const selectedPart = store.selectedContent

    const [open, setOpen] = React.useState(false);

    const [alignment, setAlignment] = React.useState('topleft');

    const [text_one, setText_one] = React.useState("");
    const [text_two, setText_two] = React.useState("");

    const clearTb = () => {
        setText_one("")
        setText_two("")
    }

    const handleClickCornerCut = () => {
        setOpen((previousOpen) => !previousOpen);
        clearTb()
    };

    const handleChangeCornerCut = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    const controlCornerCut = {
        value: alignment,
        onChange: handleChangeCornerCut,
        exclusive: true,
    };

    return(
        <React.Fragment>
        <Button sx={{height: 60,width: 60, backgroundColor:"#2D2D2D"} } onClick={handleClickCornerCut}><CornerCutIcon></CornerCutIcon></Button>
        <Modal open={open} onClose={handleClickCornerCut}>
                    <Box sx={style}>
                        <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }}  rowGap={1}>
                            <Grid2 xs={12}>
                            <ToggleButtonGroup size="small" {...controlCornerCut} aria-label="Small sizes">
                                <ToggleButton value = "topleft"><Topleft></Topleft></ToggleButton>
                                <ToggleButton value = "topright"><Topright></Topright></ToggleButton>
                                <ToggleButton value = "bottomleft"><Bottomleft></Bottomleft></ToggleButton>
                                <ToggleButton value = "bottomright"><Bottomright></Bottomright></ToggleButton>
                            </ToggleButtonGroup>
                            </Grid2>
                            <Grid2 xs={3} container alignItems="center">
                                <Typography variant="body1" sx={{color: "#878787"}}>
                                Довжина:
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
                                Ширина:
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
                            <Grid2>
                            <Button sx={{backgroundColor:"#404040", color:"#878787"}} onClick={() => {
                            var cornercut = new CornerCut(parseFloat(text_one),parseFloat(text_two), alignment);
                            selectedPart?.opStore.corners.addOperation(cornercut, alignment)
                            handleClickCornerCut()



                            }}>OK</Button>
                            </Grid2>
                        </Grid2>
                        
                    </Box>
                    
                </Modal>
            </React.Fragment>
    )
})