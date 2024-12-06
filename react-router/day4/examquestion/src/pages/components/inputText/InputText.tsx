import React, { useState, useRef, useEffect } from 'react'
import { Input, InputRef } from 'antd'
import inputStyle from './InputText.module.scss'

interface PropsType {
  style: { [k: string]: any}
}
const InputText: React.FC<PropsType>  = ({
  style
}) => {

  const [editTitle, setEditTitle] = useState(false)
  const [title, setTitle] = useState('标题')
  const titleRef = useRef<InputRef | null>(null)
  useEffect(() => {
    titleRef.current?.focus()
    titleRef.current?.setSelectionRange(0, 0)
  }, [editTitle])

  return (
    <div className={inputStyle.title} style={{...style}}>
      {
        editTitle ?
          <Input
            ref={titleRef}
            placeholder="请输入标题"
            style={{  backgroundColor: '#FDF9CD', borderRadius: '2px' }}
            onBlur={() => setEditTitle(false)}
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          :
          <p onClick={() => setEditTitle(true)}>{title}</p>
      }
    </div>
  )
}

export default InputText