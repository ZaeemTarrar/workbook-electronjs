import React from 'react'

const MainContainer: any = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#333',
  color: '#fff',
  padding: '5%',
}

const Image: any = {
  float: 'left',
  width: '30px',
  height: '30px',
  margin: '7px',
  borderRadius: '10px',
}

const Tray: React.FC = (): JSX.Element => {
  return (
    <>
      <div style={MainContainer}>
        <img src="assets/html6.png" alt="" style={Image} className="expander" />
        <img src="assets/css1.jpg" alt="" style={Image} className="expander" />
        <img
          src="assets/javascript3.png"
          alt=""
          style={Image}
          className="expander"
        />
        <img
          src="assets/typescript2.png"
          alt=""
          style={Image}
          className="expander"
        />
        <img src="assets/html.png" alt="" style={Image} className="expander" />
        <img src="assets/html.png" alt="" style={Image} className="expander" />
        <div className="clearfix"></div>
      </div>
    </>
  )
}

export default Tray
