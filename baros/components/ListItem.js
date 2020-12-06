import React from 'react';
import Colors from '../constants/Color';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={()=>props.onItemDeleted(props.itemId)} >
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>{props.title}</Text>
            </View>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    listItem: { padding: 10, margin: 5, backgroundColor: Colors.secondary },
    listItemText: { color: 'white', fontSize: 15 },
});
export default ListItem;