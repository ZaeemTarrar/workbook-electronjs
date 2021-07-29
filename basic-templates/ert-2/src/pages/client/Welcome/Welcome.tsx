import React, { useState, useEffect } from 'react'
import Beep from './../../../utils/beep/index'

const Welcome = () => {
  const [pop, setPop] = useState<boolean>(false)
  const [text, setText] = useState<boolean>(false)

  const init: Function = (): void => {
    setTimeout(() => {
      const Chain: Promise<void> = new Promise<void>((resolve, reject) =>
        resolve(),
      )
      Chain.then(() => {
        return setText(true)
      })
        .then(() => {
          return setPop(true)
        })
        .then(() => {
          return setTimeout(() => {
            Beep(14)
          }, 600)
        })
        .catch((e: Error) => {
          console.log('Error: ', e.message)
        })
    }, 2000)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url("./assets/images/wallpapers/wall1.jpg")`,
        }}
      >
        <h1
          style={{
            fontWeight: 'bold',
            fontSize: '130px',
            color: '#000',
            textShadow: '0px 0px 10px #fff',
            marginTop: '300px',
            display: text === true ? '' : 'none',
          }}
          className={`${
            pop === true ? `animate__animated animate__zoomInDown` : null
          }`}
        >
          R.E.A.M.I.C.S <br /> Engineering !
        </h1>
      </div>
    </>
  )
}

export default Welcome
