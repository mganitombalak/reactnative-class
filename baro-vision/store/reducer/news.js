//import { Videos } from '../../data/videos-data';

import { SELECT_NEWS, SET_NEWS } from '../action/news';
const initialState = {
    videos: []
}

const NewsReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case SELECT_NEWS:
            let s1 = { ...state };
            s1.selectedVideo = state.videos.find(v => v.id === action.payload);
            return s1;
        case SET_NEWS:
            let s2 = { ...state };
            s2.videos = action.payload
            return s2;
        default:
            return state;
    }
}

export default NewsReducer