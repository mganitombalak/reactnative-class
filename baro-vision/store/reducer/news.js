//import { Videos } from '../../data/videos-data';
import { SELECT_NEWS, SET_NEWS } from '../action/news';
const initialState = {
    videos: [],
    selectedVideo: null
}

const NewsReducer = (state = initialState, action) => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        case SELECT_NEWS:
            let newState = { ...state };
            newState.selectedVideo = state.videos.find(v => v.id === action.payload);
            return newState;
        case SET_NEWS:
            let setState = { ...state };
            action.payload.forEach(element => {
                setState.videos.push(
                    new Video(element.VideoID, element.VideoBaslik, element.VideoUrl, element.KategoriAdi, element.Tarih, element.VideoKomisyonAdi, element.VideoResim)
                )
            });
            return setState;
        default:
            return state;
    }
}

export default NewsReducer