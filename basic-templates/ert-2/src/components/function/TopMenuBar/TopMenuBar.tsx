import React, { useEffect } from 'react'
import {
  DashCircleFill,
  XCircleFill,
  StopCircleFill,
  ArrowLeftCircleFill,
} from 'react-bootstrap-icons'
const { ipcRenderer } = window.require('electron')

const ThreeBtn: any = {
  float: 'right',
  justifyContent: 'center',
  alignItems: 'center',
}

const Logo: any = {
  width: '23px',
  height: '23px',
}

const TopMenuBar: React.FC = (): JSX.Element => {
  const init: Function = (): void => {
    setTimeout(() => {
      ipcRenderer.send('minMaxApp')
    }, 2000)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <div className="TopMenuBarContainer">
        <div style={{ float: 'left' }} className="Dragger">
          <span>
            {/* <span>
              <img src="icon.ico" style={Logo} />
            </span> */}
            {/* <span> &nbsp; </span>
            <span>
              <b> Reamics App </b>
            </span> */}
          </span>
        </div>
        <div style={ThreeBtn}>
          <span title="Back to Last Page">
            <ArrowLeftCircleFill
              className="expander"
              color={'#3B88D1'}
              size={15}
              style={{ margin: '2px' }}
              onClick={(e) => {}}
            />
          </span>
          <span title="Minimize">
            <DashCircleFill
              className="expander"
              color={'#7bd44e'}
              size={15}
              style={{ margin: '2px' }}
              onClick={(e) => {
                ipcRenderer.send('minimizeApp')
              }}
            />
          </span>
          <span title="Maximize">
            <StopCircleFill
              id="minMaxBtn"
              className="expander"
              color={'#f2da52'}
              size={15}
              style={{ margin: '2px' }}
              onClick={(e) => {
                ipcRenderer.send('minMaxApp')
              }}
            />
          </span>
          <span title="Close Window">
            <XCircleFill
              className="expander"
              color={'#f2514b'}
              size={15}
              style={{ margin: '2px' }}
              onClick={(e) => {
                ipcRenderer.send('quitApp')
              }}
            />
          </span>
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  )
}

export default TopMenuBar
