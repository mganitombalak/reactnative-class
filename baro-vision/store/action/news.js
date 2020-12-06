export const SELECT_NEWS = 'SELECT_NEWS' //ACTION
export const LOAD_NEWS= 'LOAD_NEWS';
export const SET_NEWS= 'SET_NEWS';

export const selectNews = newsItem => { // ACTION CREATOR
    return { type: SELECT_NEWS, payload: newsItem };
}

export const loadNews = () => { // ACTION CREATOR
    return async dispatch=>{
            // async
            const response= await fetch('https://istanbulbarosu.org.tr/barovizyonapi/videolar',{
                headers:{
                    'Content-Type':'application/json'
                }
            });
            const data= await response.json();
            dispatch(setNews(data.Videos))
    }
}

export const setNews = (data) => { // ACTION CREATOR
    return { type: SET_NEWS,payload:data};
}