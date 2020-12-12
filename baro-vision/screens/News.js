import React,{useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';
import { useSelector,useDispatch} from 'react-redux';
import NewsItem from '../components/NewsItem';
import {selectNews,loadNews} from '../store/action/news';
const News = props => {
    const videos = useSelector(state => state.news.videos);
    const dispatch = useDispatch();
    const selectHandler = (id) => {
        dispatch(selectNews(id));
        props.navigation.navigate('NewsDetail');
    }

    useEffect(()=>{
       dispatch(loadNews());
    },[]);
    
    return <FlatList style={styles.screen} data={videos} renderItem={data =>
        <NewsItem key={data.item.id.toString()}
            id={data.item.id}
            header={data.item.categoryName}
            body={data.item.title}
            thumbUrl={data.item.thumbUrl}
            onSelect={selectHandler} />
    } />
};

News.navigationOptions = navigationInfo => {
    return {
        headerTitle: navigationInfo.navigation.getParam("categoryTitle"),
        headerRight: (<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
            <Item title="Add Fav" iconName="ios-star" onPress={() => console.log('Added fav.')} />
        </HeaderButtons>)
    };

};
const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default News;