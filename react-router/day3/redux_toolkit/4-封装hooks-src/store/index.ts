import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './countSlice';      // 导入counterReducer
import listReducer from './listSlice'           // 导入listReducer

const Store = configureStore({
    reducer : {
        counter: counterReducer,
        list: listReducer
    }
})






// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof Store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch

export default Store;