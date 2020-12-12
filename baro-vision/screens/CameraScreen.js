import React, { useState } from 'react';
import { Text, View, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';

const CameraScreen = props => {
    const [selectedImage, setSelectedImage] = useState();
    const checkPermissions = async () => {
        const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync(); //Permissions.askAsync(Permissions.CAMERA);
        if (!permissionResult.granted) { // permissionResult.status!=='granted'
            Alert.alert('Insufficient Permission!', 'Please grant access to your Camera!',
                [{ text: 'OK' }]);
            return false;
        }
        return true;
    }

    const takePic = async () => {
        const hasPermission = await checkPermissions();
        if (hasPermission) {
            const imageResult = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [16, 9],
                quality: 0.5
            });
            console.log(`Original file:${imageResult.uri}`);
            const fileName = imageResult.uri.split('/').pop();
            const picPath = FileSystem.documentDirectory + fileName;
            console.log(`Moved file:${picPath}`);
            await FileSystem.moveAsync({ from: imageResult.uri, to: picPath });
            setSelectedImage(picPath);
        }
    };
    return (<View>
        <View style={styles.imageContainer}>
            {selectedImage ?
                (<Image style={styles.image} source={{ uri: selectedImage }} />) : (<Text>No Image Selected</Text>)
            }
        </View>
        <Button title="Take Pic" onPress={takePic}></Button>
    </View>)
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 400,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default CameraScreen;