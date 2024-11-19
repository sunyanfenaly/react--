import { useContext, createContext, useState, useRef} from 'react'
export const audioCtx = createContext()



// 自定义hook useAudio返回数据
export const useAudioStore = () => {
  return useContext(audioCtx)
}


export  const AudioProvider = (props) => {

  const audioRef = useRef(null)                                 // 音频播放器
  const [isPlay, setIsPlay] = useState(false)                   // 是否播放
  const [url, setUrl] = useState('')                            // 音频地址
  const [currentTime, setCurrentTime] = useState(0)            // 当前播放时间
  // 是否播放
  const play = () => {
    if (audioRef.current.paused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  // 获取当前播放的时间
  const onTimeUpdate  = () =>{
    const curTime = audioRef.current.currentTime
    setCurrentTime(curTime)
  }


  const storeValue = {
    currentTime,    // 当前播放时间
    setUrl,         // 设置音频地址
    isPlay,         // 是否正在播放
    play,           // 播放/暂停
  }
  return (
     <audioCtx.Provider value={storeValue} >
      {props.children}
        <audio 
          ref={audioRef}
          src={url}
          onPlay={() => setIsPlay(true)}
          onPause={() => setIsPlay(false)}
          onTimeUpdate = {onTimeUpdate }
        ></audio>

      
     </audioCtx.Provider>
  )
}