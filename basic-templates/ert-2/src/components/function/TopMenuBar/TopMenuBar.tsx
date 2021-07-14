import React from 'react'
import {
  DashCircleFill,
  XCircleFill,
  StopCircleFill,
} from 'react-bootstrap-icons'
const { ipcRenderer } = window.require('electron')

// const MainContainer: any = {
//   width: '100vw',
//   height: '5vh',
//   backgroundColor: '#222',
//   color: '#fff',
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: '1vh 1vw',
//   fontSize: '13px',
// }

const ThreeBtn: any = {
  float: 'right',
  justifyContent: 'center',
  alignItems: 'center',
}

const Logo: any = { width: '20px', height: '20px' }

const TopMenuBar: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="TopMenuBarContainer">
        <div style={{ float: 'left' }} className="Dragger">
          <span>
            <span>
              <img src="icon.ico" style={Logo} />
            </span>
            <span> &nbsp; </span>
            <span>
              <b>Electron App</b>
            </span>
          </span>
        </div>
        <div style={ThreeBtn}>
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
