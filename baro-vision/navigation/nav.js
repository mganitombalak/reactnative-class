import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator, } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import CategoryScreen from '../screens/Category';
import NewsScreen from '../screens/News';
import { Platform } from 'react-native';
import Colors from '../constant/Colors';
import CommanDetail from '../screens/CommonDetail';
import NewsDetailScreen from '../screens/NewsDetail';
import Favorites from '../screens/Favorites';
import { MaterialIcons } from '@expo/vector-icons';
import CameraScreen from '../screens/CameraScreen';
import SQLScreen from '../screens/SQLScreen';
const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.red : Colors.white
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.red
};


const CategoryStackNavigator = createStackNavigator({
    Category: CategoryScreen,
    News: NewsScreen,
    NewsDetail: NewsDetailScreen,
    Camera: CameraScreen,
    SQL: SQLScreen,

},
    {
        // initialRouteName:'News',
        // mode:'modal',
        navigationOptions: {
            drawerLabel: 'Kategoriler'
        },
        defaultNavigationOptions: defaultNavOptions
    });
const CommonNavigator = createStackNavigator({
    Common: CommanDetail
},
    {
        defaultNavigationOptions: defaultNavOptions
    });

const FavoritesNavigator = createStackNavigator({
    Favs: Favorites
},
    {
        defaultNavigationOptions: defaultNavOptions
    });

const MainTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator({
        Categories: {
            screen: CategoryStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Kategoriler',
                tabBarIcon: (tab) => {
                    return <MaterialIcons name="cloud" size={25} />
                }
            }
        },
        Favs: {
            screen: FavoritesNavigator,
            navigationOptions: {
                tabBarIcon: (tab) => {
                    return <MaterialIcons name="favorite" size={25} />
                }
            }
        }
    }, {
        tabBarOptions: {
            activeColor: Colors.red
        }
    }) :
    createBottomTabNavigator({
        Categories: {
            screen: CategoryStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Kategoriler',
                tabBarIcon: (tab) => {
                    return <MaterialIcons name="cloud" size={25} />
                }
            }
        },
        Favs: {
            screen: FavoritesNavigator,
            navigationOptions: {
                tabBarIcon: (tab) => {
                    return <MaterialIcons name="favorite" size={25} />
                }
            }
        }
    }, {
        tabBarOptions: {
            activeTintColor: Colors.red
        }
    });


const AppDrawerNavigator = createDrawerNavigator({
    Tabs: MainTabNavigator,
    Categories: CategoryStackNavigator,
    Common: CommonNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.red,
        labelStyle: {
            fontFamily: 'oswald-bold'
        }
    }
});
export default createAppContainer(AppDrawerNavigator);