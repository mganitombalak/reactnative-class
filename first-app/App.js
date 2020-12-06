import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
const [welcomeText,setWelcomeText]= useState('Welcome Baro!');
  return (
    <View style={styles.container}>
      <Text>{welcomeText}</Text>
      <Button title="Click me!" onPress={()=>setWelcomeText('Barolar!')}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
