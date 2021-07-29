const Beep1: Function = (): Promise<void> => {
  const beepPath = 'assets/sounds/1.mp3'
  return new Promise((resolve, reject) => {
    var audio: any = new Audio(beepPath)
    resolve(audio)
  }).then((audio: any) => {
    audio.autoplay = false
    audio.loop = false
    audio.muted = false
    audio.volume = 1
    audio.playbackRate = 7
    return audio
  })
}

const Beep9: Function = (): Promise<void> => {
  const beepPath = 'assets/sounds/9.mp3'
  return new Promise((resolve, reject) => {
    var audio: any = new Audio(beepPath)
    resolve(audio)
  }).then((audio: any) => {
    audio.autoplay = false
    audio.loop = false
    audio.muted = false
    audio.volume = 1
    audio.playbackRate = 8
    return audio
  })
}

const Beep14: Function = (): Promise<void> => {
  const beepPath = 'assets/sounds/14.mp3'
  return new Promise((resolve, reject) => {
    var audio: any = new Audio(beepPath)
    resolve(audio)
  }).then((audio: any) => {
    audio.autoplay = false
    audio.loop = false
    audio.muted = false
    audio.volume = 1
    audio.playbackRate = 7
    return audio
  })
}

const Beep: Function = (sound: number): Promise<void> | null => {
  var Beeper = null
  switch (sound) {
    case 1:
      {
        Beeper = Beep1
      }
      break
    case 9:
      {
        Beeper = Beep9
      }
      break
    case 14:
      {
        Beeper = Beep14
      }
      break
    default: {
      Beeper = Beep1
    }
  }
  if (Beeper != null) {
    return Beeper()
      .then((audio: any) => {
        audio.play()
      })
      .catch((err: Error) => {
        console.error('Error: ', err)
      })
  } else {
    return null
  }
}

export default Beep
