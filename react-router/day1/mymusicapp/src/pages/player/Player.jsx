import React, { useRef, useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import style from './Player.module.scss'
import common2 from '../../assets/icon/2.png'
import like3 from '../../assets/icon/3.png'
import classNames from 'classnames'
import { useAudioStore} from '../../store/audio'


const Player = () => {
  const [searchParams] = useSearchParams()                      // 获取url中的参数
  const lyricRef = useRef(null)                                 // 歌词播放器 
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0)   // 当前播放时间的索引

  const { currentTime, isPlay, play, setUrl} = useAudioStore()  // 获取音频播放状态、当前播放的时间和播放的方法以及设置音频的url地址

  
  const { data } = useFetch({
    url: '/song/url',
    initParams: {
      id: searchParams.get('id')
    },
    immediate: true
  })
  const { data: detailData } = useFetch({
    url: '/song/detail',
    initParams: {
      ids: searchParams.get('id')
    },
    immediate: true
  })
  const { data: commentData } = useFetch({
    url: '/comment/music',
    initParams: {
      id: searchParams.get('id')
    },
    immediate: true
  })
  const { data: lyricData } = useFetch({
    url: '/lyric',
    initParams: {
      id: searchParams.get('id')
    },
    immediate: true
  })

  // 将歌词转换成需要的格式
  const lyric = useMemo(() => {
      const lyricArr = lyricData?.lrc.lyric.split('\n') || []
      const reg = /\[(\d{2}):(\d{2}\.\d+)\]/
      return lyricArr.map(item => {
          const [, m, s, text] = item.split(reg)
          return {
              time: m * 60 + Number(s),
              text: text
          }
      }).filter(v => Boolean(v.text))
  }, [lyricData?.lrc.lyric])

  //  // 获取当前播放的时间
  // const onTimeUpdate  = () =>{
    
  // }

  useEffect(() =>{
    // 监听当前播放的时间，更新歌词的滚动条
    if(lyric.length > 0){
      let index = 0;
      if(currentTime > lyric[0].time){
        index = lyric.findIndex((item, ind) => {
          return currentTime >item.time && currentTime < lyric[ind+1].time 
        })
      }
      lyricRef.current.scrollTop = index * 30 - 60
      setCurrentTimeIndex(index)
    }
    // 监听播放位置改变 或者 歌词改变时 计算歌词的滚动条位置的 下标
  }, [currentTime, lyric])



  // 接口返回数据，设置音频的url
  useEffect(() =>{
    setUrl(data?.data[0].url)
  }, [data?.data[0].url])



  
  // console.log(data?.data[0].url)        // 音频url数据
  // console.log(detailData?.songs[0])    // 歌曲详情数据
  // console.log(commentData?.hotComments)// 评论数据
  // console.log(lyricData?.lrc.lyric)    // 歌词数据

  console.log(commentData?.hotComments) // commentData?.hotComments[0]user.avatarUrl




  return (
    <>
      <div className={style.bg}>
        <img src={detailData?.songs[0].al.picUrl} alt="" />
      </div>
      <div className={style.page}>
        {/* 点击播放按钮，播放音乐 */}
        <div className={style.picWrap} onClick={play}>
          <div className={classNames(style.pic, { [style.pasued]: !isPlay })}>
            <img src={detailData?.songs[0].al.picUrl} alt="" />
          </div>
              {
                !isPlay && <svg t="1731985343637" className={style.playIcon} viewBox="0 0 1032 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4272" width="48" height="48">
                  <path d="M713.825367 560.856612l-300.273602 150.115183a54.606992 54.606992 0 0 1-79.035298-48.856612V361.884817a54.606992 54.606992 0 0 1 79.035298-48.856612l300.273602 150.136801a54.606992 54.606992 0 0 1 0 97.713224z" fill="#FFFFFF" p-id="4273"></path><path d="M512 1024C229.236953 1024 0 794.784665 0 512 0 229.236953 229.236953 0 512 0c282.763047 0 512 229.236953 512 512 0 282.763047-229.215335 512-512 512z m0-27.303496c267.695322 0 484.696504-217.001182 484.696504-484.674886 0-267.71694-217.001182-484.718122-484.674886-484.718122-267.71694 0-484.718122 217.001182-484.718122 484.696504s217.001182 484.696504 484.696504 484.696504z" fill="#FFFFFF" p-id="4274"></path>
              </svg>
              }
        </div>
        <div className={style.songInfo}>
            <div className={style.info}>
                <h2>{detailData?.songs[0].name}</h2>
                <p>{detailData?.songs[0].ar[0].name}</p>
            </div>
            <div className={style.songplayControl}>
                <p className={style.like}>
                    <img src={like3} alt="" className={style.icon} />  <span>1.3W+</span>
                </p>
                <p className={style.comment}>
                    <img className={style.icon} src={common2} alt="" />
                    <span>1.2W+</span>      
                </p>
            </div>
        </div>
        <div className={style.lyric} ref={lyricRef}>
            {lyric.map((it, i) => <div className={classNames(style.lrcItem, { [style.active]: i === currentTimeIndex })} key={i}>{it.text}</div>)}
        </div>
        
        

        <div className={style.songRelateInfo}>
            <ul className={style.songRelateTabs}>
                <li className={style.liactive}><span className={style.txt}>评论</span></li>
                <li><span className={style.txt}>相似歌曲</span></li>
                <li><span className={style.txt}>相似歌单</span></li>
            </ul>
            <div className='relateInfo'>
                <div className='m-comments'>
                    <h4 className='cmt_title'>精彩评论</h4>
                    <div className={style.cmt_list}>
                      {
                        commentData?.hotComments.map((item, index) => {
                          return (
                              index < 5 && <div className={style.cmt_listitem} key={index}>
                                <div className={style.cmt_line_h5New}>
                                  <img className={style.avatar} src={item.user.avatarUrl} alt="" />
                                  <div className={style.cmt_info}>
                                      <span className='cmt_name'>{item.user.nickname}</span>
                                      <span className='cmt_time'>{item.timeStr}</span>
                                  </div>
                                </div>
                                <div className={style.content}>
                                    {item.content}
                                </div>
                            </div>

                          )
                        })
                      }
                      <div> 更多精彩  </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
     
    </>
  )
}

export default Player