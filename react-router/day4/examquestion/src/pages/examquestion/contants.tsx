import {
    CaretUpOutlined,     // 加号 icon
    CaretDownOutlined,   // 箭头 icon
    SnippetsOutlined,    // 复制 icon
    DeleteOutlined,      // del icon
    EditOutlined,        // edit icon
    AppstoreAddOutlined,  // add icon
    CheckSquareFilled,        // 勾 icon 多选
    CheckCircleFilled,        // 勾 icon 单选
    HighlightFilled          // 填空 icon
} from '@ant-design/icons'
import { QptionsType  } from '../type'

// 左侧工具栏
export const menuTools = [
    {
        title: '上移',
        element: CaretUpOutlined
    },
    {
        title: '下移',
        element: CaretDownOutlined
    },
    {
        title: '复制',
        element: SnippetsOutlined
    },
    {
        title: '删除',
        element: DeleteOutlined
    }
]

// 每个列表项的操作工具栏
export const cqItemsCtrlTools = [
    {
        title: '添加题目',
        element: AppstoreAddOutlined
    },
    {
        title: '删除题目',
        element: EditOutlined
    }
]


export const leftListType = [
    {
        title: '单选题',
        type: QptionsType.Single,
        element: CheckCircleFilled
    },{
        title: '多选题',
        type: QptionsType.Multiple,
        element: CheckSquareFilled
    },{
        title: '填空题',
        type: QptionsType.FillText,
        element: HighlightFilled
    }
]