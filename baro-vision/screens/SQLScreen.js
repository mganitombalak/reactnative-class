import React, { useState } from 'react';
import { Text, View, FlatList, Button, Alert, ActivityIndicator } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as EntityManager from '../sql/Database';
import faker from 'faker';
import * as LocationService from 'expo-location';
import * as PermissionServices from 'expo-permissions';
import Colors from '../constant/Colors';


const SQLScreen = () => {
    const [isGettingLocData, setIsGettingLocData] = useState(false);
    const checkPermissions = async () => {
        const permissionResult = await PermissionServices.askAsync(PermissionServices.LOCATION);
        if (!permissionResult.granted) { // permissionResult.status!=='granted'
            Alert.alert('Insufficient Permission!', 'Please grant access for location!',
                [{ text: 'OK' }]);
            return false;
        }
        return true;
    }
    const getLocation = async () => {
        const hasPermissin = await checkPermissions();
        if (hasPermissin) {
            try {
                setIsGettingLocData(true);
                const locData = await LocationService.getCurrentPositionAsync({
                    timeInterval: 5000,
                    accuracy: 4,
                });
                console.log(locData);
            } catch (err) {
                Alert.alert('No Location Data Found', err, [{ text: 'OK' }]);
            }
            finally {
                setIsGettingLocData(false);
            }
        }
    }

    const [screenData, setScreenData] = useState([]);
    const saveHandler = async () => {
        const result = await EntityManager.insertData(faker.name.firstName(), faker.name.lastName(), 43.46, 23.45);
    }
    const loadHandler = async () => {
        const result = await EntityManager.fetchBaroData();
        setScreenData(result.rows._array);
    }
    return (isGettingLocData ? (<ActivityIndicator size="large" color={Colors.red} />) : (<View style={{ flex: 1 }}>
        <FlatList data={screenData} renderItem={(data) => <Text key={data.index}>{data.item.firstName} {data.item.lastName}</Text>}></FlatList>
        <Button title="Save" onPress={getLocation}></Button>
        <Button title="Load" onPress={loadHandler}></Button>
    </View>))
}

export default SQLScreen;