import { useState } from 'react'
import { Button } from 'antd'

import style from './examQuestion.module.scss'
import Header from './components/questionHeader/Header'
import QuestionType from './components/questionType/QuestionType'
import QuestionsList from './components/questionsList/QuestionsList'
import { QptionItemType, QptionsType } from '../type'

const ExamQuestion: React.FC = () => {
   
    const [list, setList] = useState<QptionItemType[]>([])

    const onSelect = (type: QptionsType) =>{
        const typeOptionItem = {
            id: Date.now(),
            title: '题目',
            type,
            answer: ['选项'],
            tip: '提示'
        }
        if (type !== QptionsType.FillText){
            typeOptionItem.answer = ['选项1', '选项2']
        }
        setList([...list, typeOptionItem])
    }
    return (
        <div className={style.examQuestion}>
            <Header />
            <div className={style.main}>
                <QuestionType onSelect={onSelect} />
                <QuestionsList list={list}  />
            </div>
            <div className={style.submitbox}>
                <Button type="primary" className={style.submitBtn} onClick={() => {console.log(list)}}>开始考试</Button>
            </div>
        </div>
  )
}

export default ExamQuestion