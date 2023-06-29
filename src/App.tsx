import './App.css'
import { observer } from 'mobx-react'
import { TabPanel } from './components/panels/TabPanel'
import { OperationMenu } from './components/panels/OperationMenu'
import { FacadeViewPanel } from './components/panels/FacadeViewPanel'

const App = observer(() => {
  return(
    <div id = "app">
      <TabPanel></TabPanel>
      <OperationMenu></OperationMenu>
      <div id = "facadeview">
        <FacadeViewPanel></FacadeViewPanel>
      </div>
    </div>
  )
})

export default App
