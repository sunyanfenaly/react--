import React, { useState, useRef, useEffect } from 'react'
import listStyle from './QuestionsList.module.scss'
import { Input, InputRef } from 'antd'
import QuestionListOptions from '../questionListOptions/QuestionListOptions'
import type { QptionItemType } from '../../../type'
import TitleType from '../../../components/inputText/InputText'
interface propsType {
    list: QptionItemType[]
}



const QuestionsList: React.FC<propsType> = (props) => {

    console.log(props.list)
   
    return (
        <div className={listStyle.questionList}>
            {/* 内容区 考题类型的头部信息 */}
            <div className={listStyle.titleBox}>
                <div className={listStyle.title}>
                    <TitleType  /> 
                </div>
                <div className={listStyle.subtitle}>
                    <TitleType  />
                </div>
                
            </div>
            {/* 选项区list列表 */}
            <ul className={listStyle.QuestionListOptions}>
                {
                    props.list.map((item, index) => {
                        return <QuestionListOptions key={item.id} {...item} index={index} />
                    })
                }
                
            </ul>
            
        </div>
    )
}

export default QuestionsList