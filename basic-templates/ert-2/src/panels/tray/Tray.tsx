import React, { useState, useEffect } from 'react'
import Beep from './../../utils/beep/index'
const { ipcRenderer } = window.require('electron')

const MainContainer: any = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#333',
  color: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '5vh 5vw',
  overflow: 'hidden',
  boxShadow: '0px 0px 10px #000 inset',
}

const Image: any = {
  float: 'left',
  height: '13vh',
  width: '13vw',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  margin: '3vh 1vw',
}

const Tray: React.FC = (props: any): JSX.Element => {
  const [active, setActive] = useState<object | any>({})
  const [entertainmentAnimation, setEntertainmentAnimation] = useState<any>(
    false,
  )
  const [mathsAnimation, setMathsAnimation] = useState<any>(false)
  const [scienceAnimation, setScienceAnimation] = useState<any>(false)
  const [designerAnimation, setDesignerAnimation] = useState<any>(false)
  const [webAnimation, setWebAnimation] = useState<any>(false)
  const [mobileAnimation, setMobileAnimation] = useState<any>(false)
  const [desktopAnimation, setDesktopAnimation] = useState<any>(false)
  const [tvAnimation, setTvAnimation] = useState<any>(false)
  const [gameAnimation, setGameAnimation] = useState<any>(false)
  const [serverAnimation, setServerAnimation] = useState<any>(false)
  const [databaseAnimation, setDatabaseAnimation] = useState<any>(false)
  const [arduinoAnimation, setArduinoAnimation] = useState<any>(false)
  const [raspberryPiAnimation, setRaspberryPiAnimation] = useState<any>(false)
  const [iotAnimation, setIotAnimation] = useState<any>(false)
  const [electronicsAnimation, setElectronicsAnimation] = useState<any>(false)
  const [mechanicsAnimation, setMechanicsAnimation] = useState<any>(false)
  const [machineLearningAnimation, setMachineLearningAnimation] = useState<any>(
    false,
  )
  const [deepLearningAnimation, setDeepLearningAnimation] = useState<any>(false)
  const [dataScienceAnimation, setDataScienceAnimation] = useState<any>(false)
  const [
    dataMiningAndAnalysisAnimation,
    setDataMiningAndAnalysisAnimation,
  ] = useState<any>(false)
  const [digitalMarketingAnimation, setDigitalMarketingAnimation] = useState<
    any
  >(false)
  const [cyberSecurityAnimation, setCyberSecurityAnimation] = useState<any>(
    false,
  )
  const [ethicalHackingAnimation, setEthicalHackingAnimation] = useState<any>(
    false,
  )
  const [
    augumentedVirtualRealityAnimation,
    setAugumentedVirtualRealityAnimation,
  ] = useState<any>(false)

  const [trayBlockAnimation, setTrayBlockAnimation] = useState<any>(false)

  const RefreshActiveThumbnails: Function = (type: string = ''): void => {
    switch (type) {
      case 'entertainment':
        {
          ipcRenderer.send('traySection', 'entertainment')
        }
        break
      case 'maths':
        {
          ipcRenderer.send('traySection', 'maths')
        }
        break
      case 'science':
        {
          ipcRenderer.send('traySection', 'science')
        }
        break
      case 'designer':
        {
          ipcRenderer.send('traySection', 'designer')
        }
        break
      case 'web':
        {
          ipcRenderer.send('traySection', 'web')
        }
        break
      case 'mobile':
        {
          ipcRenderer.send('traySection', 'mobile')
        }
        break
      case 'desktop':
        {
          ipcRenderer.send('traySection', 'desktop')
        }
        break
      case 'tv':
        {
          ipcRenderer.send('traySection', 'tv')
        }
        break
      case 'server':
        {
          ipcRenderer.send('traySection', 'server')
        }
        break
      case 'database':
        {
          ipcRenderer.send('traySection', 'database')
        }
        break
      case 'game':
        {
          ipcRenderer.send('traySection', 'game')
        }
        break
      case 'arduino':
        {
          ipcRenderer.send('traySection', 'arduino')
        }
        break
      case 'raspberryPi':
        {
          ipcRenderer.send('traySection', 'raspberryPi')
        }
        break
      case 'iot':
        {
          ipcRenderer.send('traySection', 'iot')
        }
        break
      case 'electronics':
        {
          ipcRenderer.send('traySection', 'electronics')
        }
        break
      case 'mechanics':
        {
          ipcRenderer.send('traySection', 'mechanics')
        }
        break
      case 'machineLearning':
        {
          ipcRenderer.send('traySection', 'machineLearning')
        }
        break
      case 'deepLearning':
        {
          ipcRenderer.send('traySection', 'deepLearning')
        }
        break
      case 'dataScience':
        {
          ipcRenderer.send('traySection', 'dataScience')
        }
        break
      case 'dataMiningAndAnalysis':
        {
          ipcRenderer.send('traySection', 'dataMiningAndAnalysis')
        }
        break
      case 'augumentedVirtualReality':
        {
          ipcRenderer.send('traySection', 'augumentedVirtualReality')
        }
        break
      case 'cyberSecurity':
        {
          ipcRenderer.send('traySection', 'cyberSecurity')
        }
        break
      case 'ethicalHacking':
        {
          ipcRenderer.send('traySection', 'ethicalHacking')
        }
        break
      case 'digitalMarketing':
        {
          ipcRenderer.send('traySection', 'digitalMarketing')
        }
        break
      default: {
        ipcRenderer.send('traySection', '')
      }
    }
    if (type != '') {
      setActive({
        entertainment: false,
        maths: false,
        science: false,
        designer: false,
        web: false,
        mobile: false,
        desktop: false,
        game: false,
        tv: false,
        server: false,
        database: false,
        arduino: false,
        raspberryPi: false,
        iot: false,
        electronics: false,
        mechanics: false,
        cyberSecurity: false,
        ethicalHacking: false,
        digitalMarketing: false,
        machineLearning: false,
        deepLearning: false,
        dataScience: false,
        dataMiningAndAnalysis: false,
        augumentedVirtualReality: false,
        [type]: true,
      })
    } else {
      setActive({
        entertainment: false,
        maths: false,
        science: false,
        designer: false,
        web: false,
        mobile: false,
        desktop: false,
        game: false,
        tv: false,
        server: false,
        database: false,
        arduino: false,
        raspberryPi: false,
        iot: false,
        electronics: false,
        mechanics: false,
        cyberSecurity: false,
        ethicalHacking: false,
        digitalMarketing: false,
        machineLearning: false,
        deepLearning: false,
        dataScience: false,
        dataMiningAndAnalysis: false,
        augumentedVirtualReality: false,
      })
    }
  }

  const selectionHandler: any = (e: any, type: string): void => {
    Beep(1)
    RefreshActiveThumbnails(type)
  }

  const TrayBlockAnimate: Function = (): void => {
    const Chain: Promise<void> = new Promise<void>((resolve, reject) =>
      resolve(),
    )
    Chain.then(() => {
      return setTrayBlockAnimation(true)
    })
      .then(() => {
        return setTimeout(() => {
          return Beep(14)
        }, 500)
      })
      .then(() => {
        return setTimeout(() => {
          setTrayBlockAnimation(false)
        }, 1000)
      })
      .catch((e: Error) => {
        console.log('Error: ', e.message)
      })
  }

  const init: Function = (): void => {
    ipcRenderer.on('trayWindowVisibilityStatus', (event: any, data: any) => {
      if (data === true) {
        TrayBlockAnimate()
      }
    })
  }

  useEffect(() => {
    init()
    RefreshActiveThumbnails()
  }, [])

  return (
    <>
      <div
        style={MainContainer}
        className={`no-scroll ${
          trayBlockAnimation == true
            ? `animate__animated animate__jackInTheBox`
            : null
        }`}
      >
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setEntertainmentAnimation(true)
          }}
          onMouseLeave={(e) => {
            setEntertainmentAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/entertainment.png"
            title="Entertainment"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              entertainmentAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.entertainment === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'entertainment')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setMathsAnimation(true)
          }}
          onMouseLeave={(e) => {
            setMathsAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/maths.gif"
            title="Mathematics"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              mathsAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.maths === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'maths')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setScienceAnimation(true)
          }}
          onMouseLeave={(e) => {
            setScienceAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/science.jpg"
            title="All Sciences"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              scienceAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.science === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'science')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setDesignerAnimation(true)
          }}
          onMouseLeave={(e) => {
            setDesignerAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/designer.png"
            title="Designing, Art & Animation etc"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              designerAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.designer === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'designer')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setWebAnimation(true)
          }}
          onMouseLeave={(e) => {
            setWebAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/web.png"
            title="Web Application Development"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              webAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.web === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'web')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setMobileAnimation(true)
          }}
          onMouseLeave={(e) => {
            setMobileAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/mobile.png"
            title="Mobile Application Development"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              mobileAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.mobile === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'mobile')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setDesktopAnimation(true)
          }}
          onMouseLeave={(e) => {
            setDesktopAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/desktop.png"
            title="Desktop Application Development"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              desktopAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.desktop === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'desktop')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setTvAnimation(true)
          }}
          onMouseLeave={(e) => {
            setTvAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/tv-apps.png"
            title="Smart Television Application Development"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              tvAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.tv === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'tv')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setServerAnimation(true)
          }}
          onMouseLeave={(e) => {
            setServerAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/server.png"
            title="Server Programming & Development"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              serverAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.server === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'server')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setDatabaseAnimation(true)
          }}
          onMouseLeave={(e) => {
            setDatabaseAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/database.png"
            title="Database Management"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              databaseAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.database === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'database')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setGameAnimation(true)
          }}
          onMouseLeave={(e) => {
            setGameAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/game2.png"
            title="Game Development"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              gameAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.game === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'game')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setArduinoAnimation(true)
          }}
          onMouseLeave={(e) => {
            setArduinoAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/arduino.png"
            title="Arduino Programming"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              arduinoAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.arduino === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'arduino')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setRaspberryPiAnimation(true)
          }}
          onMouseLeave={(e) => {
            setRaspberryPiAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/raspberry-pi.png"
            title="Raspberry Pi Programming"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              raspberryPiAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.raspberryPi === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'raspberryPi')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setIotAnimation(true)
          }}
          onMouseLeave={(e) => {
            setIotAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/iot.jpg"
            title="Internet Of Things"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              iotAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.iot === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'iot')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setAugumentedVirtualRealityAnimation(true)
          }}
          onMouseLeave={(e) => {
            setAugumentedVirtualRealityAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/ar-vr.png"
            title="Augumented & Virtual Reality"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              augumentedVirtualRealityAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.augumentedVirtualReality === true ? `` : `gray`}`}
            onClick={(e: any) =>
              selectionHandler(e, 'augumentedVirtualReality')
            }
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setElectronicsAnimation(true)
          }}
          onMouseLeave={(e) => {
            setElectronicsAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/electronics.png"
            title="Electronics & Electrical Engineering"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              electronicsAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.electronics === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'electronics')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setMechanicsAnimation(true)
          }}
          onMouseLeave={(e) => {
            setMechanicsAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/mechanics.png"
            title="Mechanics & Mechanical Engineering"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              mechanicsAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.mechanics === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'mechanics')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setDigitalMarketingAnimation(true)
          }}
          onMouseLeave={(e) => {
            setDigitalMarketingAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/seo.png"
            title="Digital Marketing"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              digitalMarketingAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.digitalMarketing === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'digitalMarketing')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setMachineLearningAnimation(true)
          }}
          onMouseLeave={(e) => {
            setMachineLearningAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/machine learning.png"
            title="Machine Learning"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              machineLearningAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.machineLearning === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'machineLearning')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setDeepLearningAnimation(true)
          }}
          onMouseLeave={(e) => {
            setDeepLearningAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/deep learning.png"
            title="Deep Learning"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              deepLearningAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.deepLearning === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'deepLearning')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setDataScienceAnimation(true)
          }}
          onMouseLeave={(e) => {
            setDataScienceAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/data science.png"
            title="Data Science"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              dataScienceAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.dataScience === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'dataScience')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setDataMiningAndAnalysisAnimation(true)
          }}
          onMouseLeave={(e) => {
            setDataMiningAndAnalysisAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/seo2.png"
            title="Data Analysis & Data Mining"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              dataMiningAndAnalysisAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.dataMiningAndAnalysis === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'dataMiningAndAnalysis')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setCyberSecurityAnimation(true)
          }}
          onMouseLeave={(e) => {
            setCyberSecurityAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/cyber security.png"
            title="Cyber Security"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              cyberSecurityAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.cyberSecurity === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'cyberSecurity')}
          />
        </div>
        <div
          style={{ ...Image }}
          onMouseEnter={(e) => {
            setEthicalHackingAnimation(true)
          }}
          onMouseLeave={(e) => {
            setEthicalHackingAnimation(false)
          }}
        >
          <img
            src="assets/images/tray icons/ethical hacking.png"
            title="Ethical Hacking"
            style={{ height: '100%', maxWidth: '100%' }}
            className={`${
              ethicalHackingAnimation == true
                ? `animate__animated animate__heartBeat`
                : null
            } ${active.ethicalHacking === true ? `` : `gray`}`}
            onClick={(e: any) => selectionHandler(e, 'ethicalHacking')}
          />
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  )
}

export default Tray
