import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getBanners, bannerItem } from '../services'


// 定义异步 action 的方法
export const getBannerThunk = createAsyncThunk('list/getBannerThunk', async () =>{
    const res = await getBanners()
    return res.data
})

interface ListState {
    list: number[]
    banners: bannerItem[]
    bannerLoading: boolean
}

const initialState: ListState = {    // 初始状态
    list: [1, 3, 5, 7, 9],
    banners: [],
    bannerLoading: false
}

// 创建一个 slice
const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addArr(state, action: PayloadAction<number>) {
            state.list = [...state.list, action.payload]
        },
        delArr(state, action: PayloadAction<number>){
            state.list.splice(action.payload, 1)
        }
    },
    // 异步
    extraReducers: builder =>{
        // 等待异步action的结果
        builder.addCase(getBannerThunk.pending, (state) => {
            // 显示loadings
            state.bannerLoading = true
            console.log('开始异步请求')
        })
        builder.addCase(getBannerThunk.fulfilled, (state, action) => {
            state.banners = action.payload.banners
            state.bannerLoading = false
        })
        builder.addCase(getBannerThunk.rejected, (state) => {
            console.log('异步请求失败')
            state.bannerLoading = false
        })
    }
})


export const { addArr, delArr } = listSlice.actions  // 导出 action creator
export default listSlice.reducer             // 导出 reducer