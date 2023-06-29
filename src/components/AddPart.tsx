import { observer } from "mobx-react"
import { useStore } from "../model/StoreContext"
import {Box, Button, Modal, TextField, Typography} from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

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

export const AddPart = observer(() => {
    const store = useStore()
    const [openAddPart, setOpenAddPart] = React.useState(false);
    const [text_one, setText_one] = React.useState("");
    const [text_two, setText_two] = React.useState("");
    const [text_three, setText_three] = React.useState("");
    const handleClickAddPart = () => {
        setOpenAddPart((openAddPart) => !openAddPart)
    }
    return(
        <div>
            <Button sx={{minWidth: 32, height: 32, padding: 0, backgroundColor: "#343434", borderRadius: 0, }}><AddIcon sx={{ color: "#C7C7C7" }} onClick={handleClickAddPart}></AddIcon></Button>
        
            <Modal  open={openAddPart} onClose={handleClickAddPart}>
            <Box sx={style}>
                    <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowGap={2}>
                        
                        <Grid2 xs={3} container alignItems="center">
                            <Typography variant="body1" sx={{color: "#878787"}}>
                                Довжина:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9} >
                            <TextField
                                id="length"
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
                                Висота:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9} >
                            <TextField
                                id="height"
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
                                Товщина:
                            </Typography>
                        </Grid2>
                        <Grid2 xs={9}  >
                            <TextField
                                id="width"
                                sx={{['& .MuiInputBase-input']: {
                                    color: "#878787"
                                   }}}
                                type="number"
                                size="small"
                                onChange={(event) => { setText_three(event.target.value) }}
                            />
                        </Grid2>
                        <Grid2>
                                <Button sx={{backgroundColor:"#404040", color:"#878787"}} onClick={() => {
                                store.addFacade(parseFloat(text_one), parseFloat(text_two), parseFloat(text_three))
                                setOpenAddPart((openAddPart) => !openAddPart)
                            }}>OK</Button>
                        </Grid2>
                    </Grid2>
                    
                </Box>
            </Modal>
        </div>
        )
})