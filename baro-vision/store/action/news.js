export const SELECT_NEWS = 'SELECT_NEWS' //ACTION
export const LOAD_NEWS = 'LOAD_NEWS';
export const SET_NEWS = 'SET_NEWS';
import Video from '../../models/Video';
export const selectNews = newsItem => { // ACTION CREATOR
    return { type: SELECT_NEWS, payload: newsItem };
}

export const loadNews = () => { // ACTION CREATOR
    return async dispatch => {
        // async
        const response = await fetch('https://istanbulbarosu.org.tr/barovizyonapi/videolar', {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        let videoNews = [];
        for (let i = 0; i < data.Videos.length; i++) {
            videoNews.push(
                new Video(data.Videos[i].VideoID, data.Videos[i].VideoBaslik, data.Videos[i].VideoUrl, data.Videos[i].KategoriAdi, data.Videos[i].Tarih, data.Videos[i].VideoKomisyonAdi, data.Videos[i].VideoResim)
            )
        }
        dispatch(setNews(videoNews))
    }
}

export const setNews = (data) => { // ACTION CREATOR
    return { type: SET_NEWS, payload: data };
}