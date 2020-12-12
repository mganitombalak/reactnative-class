import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';

import ListItem from './components/ListItem';
import InputGroup from './components/InputGroup';
export default function App() {
  const [todos, setTodos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log(todos);
  const updateTodos = item => {
    setTodos(previousState => [...previousState, { itemId: Math.random().toString(), value: item }]);
    setIsModalVisible(false);
  };

  const deleteItem = id => {
    setTodos(previousState => [...previousState.filter(e => e.itemId !== id)])
  };

  return (
    <View style={styles.mainContainer}>
      <Button title="Add Item" onPress={() => setIsModalVisible(true)}></Button>
      <InputGroup showModal={isModalVisible} onItemAdded={updateTodos} onCancelled={() => setIsModalVisible(false)} />
      <View>
        <FlatList
          keyExtractor={deger => deger.itemId}
          data={todos}
          renderItem={veri => <ListItem itemId={veri.item.itemId} title={veri.item.value} onItemDeleted={deleteItem} />} />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { padding: 50 },
});
