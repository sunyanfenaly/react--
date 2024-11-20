import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './countSlice';      // 导入counterReducer
import listReducer from './listSlice'           // 导入listReducer
import bannerReducer from './bannerSlice'       // 导入bannerReducer

const Store = configureStore({
    reducer : {
        counter: counterReducer,
        list: listReducer,
        banner: bannerReducer
    }
})
export default Store;