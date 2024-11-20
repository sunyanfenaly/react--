import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
    name: "banner",
    initialState:{
        banners: []
    },
    reducers:{
        setBanners(state, actions){
            state.banners = actions.payload
        }
    }
})


export const { setBanners} = bannerSlice.actions

export default bannerSlice.reducer