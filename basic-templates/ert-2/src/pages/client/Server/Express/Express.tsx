import React from 'react'
import ExpressNav from './ExpressNav'

const Express: React.FC = (): JSX.Element => {
  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            width: '14vw',
            height: '100vh',
            backgroundColor: '#444',
            float: 'left',
            borderRight: '1px solid #999',
          }}
        >
          <ul className="list-group sharp node-menu">
            <li
              className="list-group-item"
              style={{
                color: '#fff',
                backgroundColor: '#333',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '18px',
                borderBottom: '1px solid #999',
                height: '6vh',
              }}
            >
              <img
                src="assets/images/server/node.png"
                style={{ width: '30px' }}
                alt=""
              />
              &nbsp; Node + Express
            </li>
            <li
              className="list-group-item"
              style={{
                color: '#fff',
                fontSize: '16px',
                backgroundColor: '#444',
                textAlign: 'center',
                borderBottom: '1px solid #999',
              }}
            >
              Dashboard
            </li>
            <li
              className="list-group-item"
              style={{
                color: '#fff',
                fontSize: '16px',
                backgroundColor: '#444',
                textAlign: 'center',
                borderBottom: '1px solid #999',
              }}
            >
              Create Simple APIs
            </li>
            <li
              className="list-group-item"
              style={{
                color: '#fff',
                fontSize: '16px',
                backgroundColor: '#444',
                textAlign: 'center',
                borderBottom: '1px solid #999',
              }}
            >
              Create Complex APIs
            </li>
          </ul>
        </div>
        <div
          style={{
            width: '85vw',
            height: '100vh',
            backgroundColor: '#eee',
            float: 'left',
          }}
        >
          <div
            style={{
              color: '#fff',
              backgroundColor: '#333',
              fontWeight: 'bold',
              fontSize: '18px',
              height: '6vh',
            }}
          >
            <br />
          </div>
          <div>
            <ExpressNav />
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  )
}

export default Express
