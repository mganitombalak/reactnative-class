import React, { useState } from 'react';
import * as FontUtil from 'expo-font';
import { AppLoading } from 'expo';
import AppDrawerNavigator from './navigation/nav';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import NewsReducer from './store/reducer/news';
import CategoryReducer from './store/reducer/category';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { enableScreens } from 'react-native-screens';
import { initDb } from './sql/Database';

initDb()
  .then(() => console.log('Database initialized'))
  .catch(err=> console.log(`Database initialization failed:${err}`));

const rootReducers = combineReducers({
  news: NewsReducer,
  category: CategoryReducer
})
const globalStore = createStore(rootReducers, applyMiddleware(ReduxThunk));
const loadFonts = () => {
  return FontUtil.loadAsync({
    'nerko-one': require('./assets/fonts/NerkoOne-Regular.ttf'),
    'oswald-bold': require('./assets/fonts/Oswald-Bold.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  enableScreens();
  if (!fontsLoaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)}></AppLoading>
  }
  return (
    <Provider store={globalStore}><AppDrawerNavigator /></Provider>
  );
}
