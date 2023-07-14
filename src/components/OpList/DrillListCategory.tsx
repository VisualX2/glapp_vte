import { useStore } from "../../model/StoreContext";
import { observer } from "mobx-react";
import { OpListItem } from "./OpListItem";
import { Drill } from "../../stores/OperationStores/DrillStore";
import {ArrowDropDown, ArrowDropUp} from '@mui/icons-material';
import React from "react";

export const DrillListCategory = observer(() => {
    const store = useStore()
    const [openedDrills, setOpenedDrills] = React.useState(false)

    const checkActivity = (dr: Drill) => {
        if(store.selectedContent?.opStore.selectedOp === dr){
            return true
        } 
        return false
    }

    const takeArrow = () => {
        if(openedDrills) {
            return <ArrowDropUp></ArrowDropUp>
        }
        return <ArrowDropDown></ArrowDropDown>
    }

    const handleDropClick = () => {
        setOpenedDrills(!openedDrills)
    } 
    const getDrills = () => {
        var dr = []
        if(store.selectedContent !== null)
        {
        for(const child of store.selectedContent?.opStore.getDrills()){
            dr.push(<OpListItem
                clickOp={() => {
                    if(store.selectedContent !== null)
                    {
                        store.selectedContent.opStore.selectedOp = child
                        store.utilitydialog.updatedrill = false
                    }
                }
                
            } active = {checkActivity(child)} text={"Свердління X = "+ child.x + " Y = " + child.y + " Z = " + child.depth + " D = " + child.diameter}></OpListItem>)
        }
        }
        return dr
    }

    return(
        <div>
            <div style={{display: "flex", cursor: "pointer"}} onClick={() => {handleDropClick()}}>{takeArrow()} Свердління({store.selectedContent?.opStore.getDrills().length})</div>
            {openedDrills ? getDrills() : ""}
        </div>
    )
})