import React, { useState, useEffect } from 'react'
import Server from '../../../pages/client/Server/Server'
import Welcome from '../../../pages/client/Welcome/Welcome'
const { ipcRenderer } = window.require('electron')

const MainNavigation: React.FC = (props: any): JSX.Element => {
  const [tray, setTray] = useState<string>('')

  const decideTraySection: Function = (): JSX.Element => {
    switch (tray) {
      case 'entertainment': {
        return <>Entertainment</>
      }
      case 'maths': {
        return <>Maths</>
      }
      case 'science': {
        return <>Science</>
      }
      case 'designer': {
        return <>Designer</>
      }
      case 'web': {
        return <>Web</>
      }
      case 'mobile': {
        return <>Mobile</>
      }
      case 'desktop': {
        return <>Desktop</>
      }
      case 'tv': {
        return <>Tv</>
      }
      case 'game': {
        return <>Game</>
      }
      case 'server': {
        return <Server />
      }
      case 'database': {
        return <>Database</>
      }
      case 'arduino': {
        return <>Arduino</>
      }
      case 'raspberryPi': {
        return <>Raspberry Pi</>
      }
      case 'iot': {
        return <>IoT</>
      }
      case 'electronics': {
        return <>Electronics</>
      }
      case 'mechanics': {
        return <>Mechanics</>
      }
      case 'machineLearning': {
        return <>Machine Learning</>
      }
      case 'deepLearning': {
        return <>Deep Learning</>
      }
      case 'dataScience': {
        return <>Data Science</>
      }
      case 'dataMiningAndAnalysis': {
        return <>Data Mining and Analysis</>
      }
      case 'digitalMarketing': {
        return <>Digital Marketing</>
      }
      case 'cyberSecurity': {
        return <>Cyber Security</>
      }
      case 'ethicalHacking': {
        return <>Ethical Hacking</>
      }
      case 'augumentedVirtualReality': {
        return <>AR / VR</>
      }
      default: {
        return <Welcome />
      }
    }
  }

  const init: Function = (): void => {
    ipcRenderer.on('trayRoute', (event: any, data: any) => {
      setTray(data)
    })
  }

  useEffect(() => {
    init()
  }, [])

  return <>{decideTraySection()}</>
}

export default MainNavigation
