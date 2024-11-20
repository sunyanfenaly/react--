import { createSlice } from '@reduxjs/toolkit';





interface CounterState {
    count: number;
}

const initialState:CounterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
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