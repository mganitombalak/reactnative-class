import React from 'react';
import { Text, View, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CameraScreen = props => {

    const checkPermissions = async () => {
        const permissionResult = await Permissions.askAsync(Permissions.CAMERA);
        if (!permissionResult.granted) { // permissionResult.status!=='granted'
            Alert.alert('Insufficient Permission!', 'Please grant access to your Camera!',
                [{ text: 'OK' }]);
            return false;
        }
        return true;
    }

    const takePic = async () => {
        const hasPermission= await checkPermissions();
        if (hasPermission) {
            ImagePicker.launchCameraAsync();
        }
    };
    return (<View>
        <View style={styles.imageContainer}>
            <Text>Camera Access</Text>
            <Image style={styles.image}></Image>
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