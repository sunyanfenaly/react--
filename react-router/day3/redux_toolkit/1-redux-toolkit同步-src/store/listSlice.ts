import   { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [1,3,5,7,9]    // 初始列表数据
}
// 创建一个 slice
const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addArr(state, action) {
            state.list = [...state.list, action.payload]
        },
        delArr(state, action){
            state.list.splice(action.payload, 1)
        }
    }
})


export const { addArr, delArr } = listSlice.actions  // 导出 action creator
export default listSlice.reducer             // 导出 reducer