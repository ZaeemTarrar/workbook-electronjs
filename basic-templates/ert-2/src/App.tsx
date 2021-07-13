import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, { useEffect, useState } from 'react'
import Tray from './panels/tray/Tray'
import MainNavigation from './routes/client/MainNavigation/MainNavigation'
import Window from './containers/client/Window/Window'
const { ipcRenderer } = window.require('electron')

const App: React.FC = (): JSX.Element => {
  const [isTray, setIsTray] = useState<boolean | null>(null)

  const init: Function = (): void => {
    ipcRenderer.on('isTray', (event: any, data: any) => {
      setIsTray(data)
    })
  }

  useEffect(() => {
    init()
  })

  const LayoutDecision = () => {
    if (isTray == null) {
      return null
    } else if (isTray == true) {
      return (
        <>
          <Tray />
        </>
      )
    } else {
      return (
        <>
          <Window>
            <MainNavigation />
          </Window>
        </>
      )
    }
  }

  return <>{LayoutDecision()}</>
}

export default App
