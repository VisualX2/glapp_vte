import './App.css'
import { observer } from 'mobx-react'
import { TabPanel } from './components/panels/TabPanel'
import { OperationMenu } from './components/panels/OperationMenu'
import { FacadeViewPanel } from './components/panels/FacadeViewPanel'
import { OperationListPanel } from './components/panels/OperationListPanel'

const App = observer(() => {
  return(
    <div id = "app">
      <TabPanel></TabPanel>
      <OperationMenu></OperationMenu>
      <div id = "mainview">
        <FacadeViewPanel></FacadeViewPanel>
        <OperationListPanel></OperationListPanel>
      </div>
    </div>
  )
})

export default App
