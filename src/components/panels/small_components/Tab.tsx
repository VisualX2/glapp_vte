import React from "react"
import { observer } from "mobx-react";
import { FacadeStore } from "../../../stores/FacadeStore";
import { useStore } from "../../../model/StoreContext"
import "../../../styles/FacadeTab.css"

type Tab = {
    part:FacadeStore;
}

export const Tab: React.FC<Tab> = observer(({part}): React.ReactElement => {
    const store = useStore()
    const handleTabClick = () => store.selectContent(part.id)
    const activenessClass = () => {
        if (store.selectedContent === part){
            return "FacadeTabActive"
        }
        return "FacadeTab"
    }
    return(
        <div className={activenessClass()} onClick={handleTabClick}>Фасад {part.length}x{part.width}x{part.height}</div>
    )
})
