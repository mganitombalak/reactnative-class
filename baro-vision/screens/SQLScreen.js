import React, { useState } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as EntityManager from '../sql/Database';
const SQLScreen = () => {
    const [screenData, setScreenData] = useState([]);
    const saveHandler = async () => {
        const result = await EntityManager.insertData('Mehmet', 'Tombalak', 43.46, 23.45);
    }
    const loadHandler = async () => {
        const result = await EntityManager.fetchBaroData();
        setScreenData(result.rows._array);
    }
    return (<View style={{flex:1}}>
        <FlatList data={screenData} renderItem={(data)=> <Text>{data.item.firstName} {data.item.lastName}</Text>}></FlatList>
        <Button title="Save" onPress={saveHandler}></Button>
        <Button title="Load" onPress={loadHandler}></Button>
    </View>)
}

export default SQLScreen;