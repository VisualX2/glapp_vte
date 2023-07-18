import { useStore } from "../../model/StoreContext";
import { observer } from "mobx-react";
import { OpListItem } from "./OpListItem";
import {ArrowDropDown, ArrowDropUp} from '@mui/icons-material';
import React from "react";
import { Cut } from "../../stores/OperationStores/CutStore";
import { CornerCut } from "../../stores/OperationStores/CornerCut";
import { Radius } from "../../stores/OperationStores/RadiusStore";
import { isCornerCutOp, isCutOp, isRadiusOp } from "../../model/CheckOp";

export const CornerListCategory = observer(() => {
    const store = useStore()
    const [openedCorners, setOpenedCorners] = React.useState(false)

    const checkActivity = (dr: Cut|CornerCut|Radius) => {
        if(store.selectedContent?.opStore.selectedOp === dr){
            return true
        } 
        return false
    }

    const takeArrow = () => {
        if(openedCorners) {
            return <ArrowDropUp></ArrowDropUp>
        }
        return <ArrowDropDown></ArrowDropDown>
    }

    const handleDropClick = () => {
        setOpenedCorners(!openedCorners)
    } 
    const getCorners = () => {
        var dr = []
        if(store.selectedContent !== null)
        {
        for(const child of store.selectedContent?.opStore.corners.getListCorners()){
            var text
            if(child !== undefined){
                var text
                if(isCutOp(child)){
                    text = "Зріз по площині X = " + child.x + " Y = " + child.y + " Кут: " + child.corner
                } else if(isCornerCutOp(child)){
                    text = "Кутовий зріз Довжина = " + child.width + " Ширина = " + child.height + " Кут: " + child.corner
                } else if(isRadiusOp(child)){
                    text = "Кутовий зріз Радіус = " + child.r + " Кут: " + child.side
                }  else{
                    text = "ERROR"
                }
                dr.push(<OpListItem
                    clickOp={() => {
                        if(store.selectedContent !== null)
                        {
                            store.selectedContent.opStore.selectedOp = child
                            store.utilitydialog.updatedrill = false
                        }
                    }
                    
                } active = {checkActivity(child)} text={text}></OpListItem>)
            }
            
        }
        }
        return dr
    }

    return(
        <div>
            <div style={{display: "flex", cursor: "pointer"}} onClick={() => {handleDropClick()}}>{takeArrow()} Кутові операції</div>
            {openedCorners ? getCorners() : ""}
        </div>
    )
})