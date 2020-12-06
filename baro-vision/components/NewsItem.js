import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constant/Colors';

const NewsItem = props => {
    return <TouchableOpacity onPress={()=>props.onSelect(props.id)}>
        <View key={props.id} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image fadeDuration={1000} style={styles.image} source={{ uri: props.thumbUrl }} />
                {/* <Image style={styles.image} source={require(PATH)}/> FOR LOCAL IMAGES */}
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentHeader}><Text>{props.header}</Text></View>
                <View style={styles.contentBody}><Text>{props.body}</Text></View>
            </View>
        </View>
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        borderWidth: 0,
        shadowColor: Colors.black,
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        elevation: 5,
        overflow: 'hidden'
    },
    imageContainer: {
        flex: 1,
        alignItems: "flex-start",
        marginLeft: 20,
        borderWidth: 0,
        overflow: 'hidden'
    },
    image: {
        width: 100,
        height: 100,
    },
    contentContainer: {
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        borderWidth: 0,
    },
    contentHeader: {

    },
    contentBody: {

    }


});

export default NewsItem;