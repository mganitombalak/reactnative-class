//import { Videos } from '../../data/videos-data';

import { SELECT_NEWS, SET_NEWS } from '../action/news';
const initialState = {
    videos: [],
    selected: null
}

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_NEWS:
            let s1 = { ...state };
            s1.selected = state.videos.length > 0 ? state.videos.find(v => v.id === action.payload) : null;
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