import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './countSlice';      // 导入counterReducer
import listReducer from './listSlice'           // 导入listReducer

const Store = configureStore({
    reducer : {
        counter: counterReducer,
        list: listReducer
    }
})
export default Store;