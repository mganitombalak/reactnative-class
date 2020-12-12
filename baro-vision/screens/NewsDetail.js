import React from 'react';
import { Text, View } from 'react-native';
import {useSelector} from 'react-redux';
const NewsDetail =props =>{

    const selectedVideo= useSelector(state=>state.news.selected);
return <View><Text>{selectedVideo.id}-{selectedVideo.title}</Text></View>
}

export default NewsDetail;