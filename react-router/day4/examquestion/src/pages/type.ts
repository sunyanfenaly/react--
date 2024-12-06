

// 定义题目类型
// 定义枚举类型
export enum QptionsType{
    Single = 1,
    Multiple = 2,
    FillText = 3
}
export interface QptionItemType {
    id:number
    title: string           // 题目
    type: QptionsType       // 题目类型
    options?: string[]       // 选项
    answer: string[]          // 答案
    tip: string             // 提示
}
