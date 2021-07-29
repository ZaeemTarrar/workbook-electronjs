import React from 'react'
import Beep from './../../../../utils/beep/index'
import { Link } from 'react-router-dom'

const Block: any = {
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
}

const Thumb: any = {
  width: '90%',
  maxWidth: '100%',
  maxHeight: '250px',
  padding: '5%',

  marginBottom: '10%',
}

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: `url("./assets/images/wallpapers/wall6.jpg")`,
          backgroundAttachment: 'cover',
          backgroundSize: 'stretch',
        }}
      >
        <div style={{ paddingTop: '3vh' }} className="container-fluid">
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: '60px',
              color: '#000',
              margin: '10px',
              padding: '10px',
              textAlign: 'center',
              borderBottom: '2px solid #000',
              marginBottom: '30px',
            }}
          >
            Server Programming
          </h1>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/c++">
                <div style={Block}>
                  <img
                    src="./assets/images/server/c++.png"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e: any) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/c-sharp">
                <div style={Block}>
                  <img
                    src="./assets/images/server/c-sharp.png"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/java">
                <div style={Block}>
                  <img
                    src="./assets/images/server/java.png"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/python">
                <div style={Block}>
                  <img
                    src="./assets/images/server/python.png"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/flask">
                <div style={Block}>
                  <img
                    src="./assets/images/server/flask.png"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/django">
                <div style={Block}>
                  <img
                    src="./assets/images/server/django.jpg"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/php">
                <div style={Block}>
                  <img
                    src="./assets/images/server/php.png"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/codeigniter">
                <div style={Block}>
                  <img
                    src="./assets/images/server/codeigniter.png"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/laravel">
                <div style={Block}>
                  <img
                    src="./assets/images/server/laravel.png"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/node">
                <div style={Block}>
                  <img
                    src="./assets/images/server/node.png"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-6">
              <Link to="/express">
                <div style={Block}>
                  <img
                    src="./assets/images/server/express.png"
                    alt=""
                    style={Thumb}
                    className="expander-2"
                    onMouseEnter={(e) => Beep(9)}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
