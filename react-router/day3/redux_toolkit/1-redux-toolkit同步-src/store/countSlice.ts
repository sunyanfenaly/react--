import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        add(state) {
            state.count += 1;
        },
        reduce(state) {
            state.count -= 1;
        },
        reset(state,action) {
            state.count = state.count + action.payload ;
        }
    }
})

// 将 actionCreator 导出
export const { add, reduce, reset } = counterSlice.actions;  

// 将 reducer 导出
export default counterSlice.reducer;