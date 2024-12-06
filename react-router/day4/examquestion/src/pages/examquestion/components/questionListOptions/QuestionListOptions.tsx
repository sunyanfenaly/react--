import React, { useState } from 'react'
import style from './questionListOptions.module.scss'
import { menuTools, cqItemsCtrlTools } from '../../contants'
import { Input, Radio, Checkbox, Space, Tooltip } from "antd"
import { type QptionItemType, QptionsType  } from '../../../type'
import InputText from '../../../components/inputText/InputText'
// 继承props类型
// interface PropsType  extends QptionItemType{
// }

// 使用交叉类型 定义props类型
type propsType = QptionItemType & { index: number}

const QuestionListOptions: React.FC<propsType> = (props) => {


    const [isValue, setIsValue] = useState(false)

    const renderOptions = (type: QptionsType) => {
        if (type == QptionsType.FillText){
            return <Input.TextArea placeholder="请输入选项内容" />
        }else if (type == QptionsType.Single){
            return (
                <Radio.Group options={[
                    { label: '选项1', value: '1' },
                    { label: '选项2', value: '2' }
                ]} />
            )
        }else if(type === QptionsType.Multiple){
            return (
                <Checkbox.Group options={[
                    { label: '选项1', value: '1' },
                    { label: '选项2', value: '2' }
                ]} />
            )
        }
    }

    // const changeQptionList = (    )
    return (
        <div className={style.questionListOptions}>
            <div className={style.menuList}>
                <h4>Q{props.index + 1}</h4>
                <div className={style.menuIcon}>
                    {
                        menuTools.map((item, index) => {
                            return <Tooltip key={index} placement="topRight" title={item.title} onClick={() => console.log(item.title, index)}>
                                <item.element className={style.menuIconItem} />
                            </Tooltip>
                        })

                    }
                </div>
                
            </div> 
            <div className={style.content}>
                <div className={style.title}>{props.title}</div>
                <div className={style.cqUnsetList}>
                    {renderOptions(props.type)} 
                </div>    
                <div className={style.cqItemsCtrl}>
                    <Space>
                        {
                            cqItemsCtrlTools.map(item =>{
                                return <Tooltip key={item.title} placement="bottom" title={item.title}>
                                    <item.element />
                                </Tooltip>
                            })
                        }
                    </Space>
                </div>
            </div>  
        </div>
    )
}

export default QuestionListOptions