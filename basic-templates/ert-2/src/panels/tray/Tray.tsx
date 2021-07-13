import React from 'react'

const MainContainer: any = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#333',
  color: '#fff',
}

const TopBar: any = {
  width: '100vw',
  height: '10vh',
  borderBottom: '1px solid #666',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
}

const Tray: React.FC = (): JSX.Element => {
  return (
    <>
      <div style={MainContainer}>
        <div style={TopBar}>
          <span> TypeScript App </span>
        </div>
      </div>
    </>
  )
}

export default Tray
