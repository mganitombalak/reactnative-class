import React from 'react';
import { StyleSheet, FlatList, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import Tile from '../components/Tile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from '../components/HeaderButton';
import Colors from '../constant/Colors';
const Category = props => {
    const listItemRenderer = itemData => {
        // props.navigation.navigate({routeName:'News',params:{categoryId:''}})
        return <Tile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelected={() => {
                switch (itemData.item.title) {
                    case "Kamera":
                        props.navigation.navigate('Camera');
                        break;
                    case "SQL":
                        props.navigation.navigate('SQL');
                        break;
                    default:
                        props.navigation.navigate('News', { categoryTitle: itemData.item.title });
                        break;
                }
            }
                // props.navigation.setParam({ categoryTitle: itemData.item.title })
            } />
    }
    const categories = useSelector(state => state.category.categories);
    // console.log(props);
    return (
        <FlatList data={categories} numColumns={2} renderItem={listItemRenderer} />
        // <View style={styles.screen}>
        //     <Text>Category Screen is working!</Text>
        //     <Button title="Go News!" onPress={() => {
        //         props.navigation.navigate('News');//navigate({ routeName: 'News' })
        //     }}></Button>
        // </View>
    );
};
Category.navigationOptions = navInfo => {
    return {
        headerTitle: 'Ana Sayfa',
        headerLeft: <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
            <Item title="Menu" iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} color={Colors.black}
                onPress={() => navInfo.navigation.toggleDrawer()}></Item>
        </HeaderButtons>
    }
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Category;