import { observer } from "mobx-react"
import { useStore } from "../../model/StoreContext"
import { Box, Drawer, Grid } from "@mui/material"
import "../../styles/OperationMenu.css"
import { DrillDialog } from "../OperationDialogs/DrillDialog"
import { CutDialog } from "../OperationDialogs/CutDialog"
import { RadiusDialog } from "../OperationDialogs/RadiusDialog"
import { CornerCutDialog } from "../OperationDialogs/CornerCutDialog"

export const OperationMenu = observer(() => {
    const store = useStore()
    const hasSelectedContent = () => {
        if (store.selectedContent !== null) {
            return true
        }
        return false
    }
    return(
        <Drawer 
            className="opMenuStyle" 
            sx={{maxHeight: "calc(100% - 36px)",
            [`& .MuiDrawer-paper`]: {
               marginTop: "32px",
               backgroundColor:"inherit"
              }}} 
            variant="persistent" 
            anchor="left" open={hasSelectedContent()}>
            <Box>
                <Grid>
                    <DrillDialog></DrillDialog>
                </Grid>
                <Grid>
                    <CutDialog></CutDialog>
                </Grid>
                <Grid>
                    <RadiusDialog></RadiusDialog>
                </Grid>
                <Grid>
                    <CornerCutDialog></CornerCutDialog>
                </Grid>
            </Box>
        </Drawer>
    )
})