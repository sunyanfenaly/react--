import axios from 'axios';

export interface bannerItem {
    typeTitle: string;
    imageUrl: string;
}
export interface bannerRes {
    code : number;
    banners: bannerItem[];
}

export const getBanners = () => { 
    return axios.get<bannerRes>('http://121.89.213.194:5001/banner')
}