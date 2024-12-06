import axios from 'axios';

export interface bannerItem {
    typeTitle: string;
    imageUrl: string;
    targetId: number
}
export interface bannerRes {
    code : number;
    banners: bannerItem[];
}

export const getBanners = () => { 
    return axios.get<bannerRes>('http://121.89.213.194:5001/banner')
}

export interface playlistItem {
    id: number;
    name: string;
    description: string;
    tags: string[];
    coverImgUrl: string;
    playCount: number;
}

interface playlistRes {
    code: number;
    cat: string;
    more: boolean;
    playlists: playlistItem[]
    total: number
}
interface getPlayListParams {
    limit: number;
    offset: number;
}
export const getPlayList = ({ limit, offset } : getPlayListParams) => {
    return axios.get<playlistRes>('http://121.89.213.194:5001/top/playlist',{
        params: {
            limit,
            offset
        }
    })
}