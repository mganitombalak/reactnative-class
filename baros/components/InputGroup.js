import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import Colors from '../constants/Color';
import settings from '../constants/UIText';
const InputGroup = props => {
    const [textValue, setTextValue] = useState('');

    return (
    <Modal visible={props.showModal} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput placeholder={settings.todoInputPlaceHolderText}
                style={styles.text}
                onChangeText={text => setTextValue(previous => {
                    //console.log(previous); 
                    return text;
                })}
                value={textValue}
            ></TextInput>
            <View style={styles.modalControlContainer}>
            <Button title={settings.addButtonText} onPress={() => props.onItemAdded(textValue)}></Button>
            <Button title={settings.cancelButtonText} onPress={props.onCancelled}></Button>
            </View>
        </View>
    </Modal>)
}

const styles = StyleSheet.create({
    text: { borderColor: Colors.black, borderWidth: 1, padding: 10, width: '70%' ,marginBottom:20},
    inputContainer: { flex:1, justifyContent: "center", alignItems: 'center'},
    modalControlContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:'50%'
    }
});

export default InputGroup;