import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import Colors from '../constant/Colors';

const Tile = props => {
    let DynamicTouchElement = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version > 20) {
        DynamicTouchElement = TouchableNativeFeedback;
    }
    return (
        <View style={styles.tile}>
        <DynamicTouchElement style={{flex:1}} onPress={props.onSelected}>
            <View style={{ ...styles.tileContainer, ...{ backgroundColor: props.color } }}>
                <Text style={styles.tileText}>{props.title}</Text>
            </View>
        </DynamicTouchElement>
        </View>);
}

const styles = StyleSheet.create({
    tileContainer: {
        flex: 1,
        borderRadius: 20,
        shadowColor: Colors.black,
        shadowOpacity: 0.30,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 10,
        elevation: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingBottom: 10,
        paddingRight: 10
    },
    tile: {
        flex: 1,
        margin: 20,
        height: Platform.OS === 'android' ? 120 : 150,
        borderRadius:20,
        overflow:"hidden"

    },
    tileText: {
        fontFamily: 'nerko-one',
        fontSize: 18
    }
});

export default Tile;