import { observer } from "mobx-react"
import { useStore } from "../../model/StoreContext"
import { Tab } from "./small_components/Tab"
import { AddPart } from "../AddPart"


const topPanelStyle = {
    display: "flex",
    height: 32,
    backgroundColor: "#1F1F1F",
    gap: 1
    
}
export const TabPanel = observer(() => {
    const store = useStore()
    
    const parts = () => {
        var pt = []
        for (const facade of store.facades){
            pt.push(<Tab part={facade}></Tab>)
        }
        return pt
    }
    return(
        <div style={topPanelStyle}>
            {parts()}
            <AddPart></AddPart>

        </div>
    )
})