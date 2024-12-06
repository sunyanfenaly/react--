import React, { useState } from 'react'
import { Space } from "antd"
import { leftListType } from '../../contants'
import style from './QuestionType.module.scss'
import { QptionsType  } from '../../../type'
import {
    PlusSquareOutlined,
    MinusSquareOutlined
} from '@ant-design/icons'


interface PropsType {
    onSelect: (type: QptionsType) => void
}

const QuestionType: React.FC<PropsType> = (props) => {
    const [fadeIn, setFadeIn] = useState(true)

    const changeFadeIn = () => {
        setFadeIn(!fadeIn)
    }



    return (
        <div className={style.questionType}>
            <h3 onClick={changeFadeIn}>
                <Space>
                    <span>常用题型 </span>
                    {
                        fadeIn
                            ?
                            <PlusSquareOutlined style={{ color: '#FFA91B' }} />
                            :
                            <MinusSquareOutlined style={{ color: '#FFA91B' }} />
                    }
                </Space>
            </h3>
            <ul className={style.questionTypeList} style={{ height: fadeIn ? 160 : 0 }}>
                
                {
                    leftListType.map(item => {
                        return (
                            <li key={item.title} onClick={() => props.onSelect(item.type)}>
                                <Space>
                                    <item.element/>
                                    <span>{item.title}</span>
                                </Space>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default QuestionType