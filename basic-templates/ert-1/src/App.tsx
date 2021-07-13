import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, { useEffect, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
const { ipcRenderer } = window.require('electron')

const App: React.FC = (): JSX.Element => {
  const [isTray, setIsTray] = useState<boolean | null>(null)

  const init: Function = (): void => {
    // ipcRenderer.on('cpu', (event: any, data: any) => {
    //   console.log('CPU: ', data)
    // })
    // ipcRenderer.on('dir', (event: any, data: any) => {
    //   console.log('Dir: ', data)
    // })
    // setTimeout(() => {
    //   ipcRenderer.send('pop', 'hello zaeem')
    // }, 3000)
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
          <h1> My Tray </h1>
        </>
      )
    } else {
      return (
        <>
          <Switch>
            <Route path="/contact">
              <Link to="/">
                <h1> Home </h1>
              </Link>
            </Route>
            <Route path="/about">
              <Link to="/contact">
                <h1> Contact </h1>
              </Link>
            </Route>
            <Route path="/" exact>
              <Link to="/about">
                <h1> About </h1>
              </Link>
            </Route>
          </Switch>
        </>
      )
    }
  }

  return <>{LayoutDecision()}</>
}

export default App
