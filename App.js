import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, Modal, ToucheableOpacity, ActivityIndicator } from 'react-native';
import { styles }  from './styles'

export default function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleTask = () =>{
    // setTaskList([...taskList, ...task]);
    setTaskList((prevTaskList)=> [...prevTaskList, { id: Math.random().toString(),value:task, backgroundColor : getRandomBackgroundColor() }]);
    
    setTask('');    
  }

  const renderItem = ({item}) => (
    <ToucheableOpacity style={styles.listItemContainer} onPress={()=> onHandleSelected}>
      <Text style={styles.listItem}>
        {item.value}
      </Text>         
    </ToucheableOpacity>    
  ) 

const onHandleSelected = (item) => {
  setSelectedTask(item);
  setSelectedVisible(!modalVisible);
}

  const onHandleCancel=()=>{
    setModalVisible(!modalVisible)   
  }

  const onHandleDeleted=()=>{
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id === selectedTask.id ))    
    setModalVisible(!modalVisible) 
  }

  const getRandomBackgroundColor = () =>{
    const colors = ['blue', 'red','#212121'];
  return colors = [Math.floor(Math.random() * colors.length)]}
  
  return (

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            value={task}
            placeholder={'Ingrese Tarea'}
            onChangeText = {text => setTask(text)}            
            />
          <Button disabled ={!task} title='Agregar' color='#9A848F' onPress={onHandleTask}  />
        </View>

        
        <View style={styles.listContainer}>          
           <Text style={styles.listTitle}>Todo List</Text> 

           {/* --- Ejemplo del animacion de espera */}

           <ActivityIndicator size="large" color="#94849F" />   

            <FlatList
              style={styles.listContainer}
              data={taskList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />

            <Modal visible={modalVisible} animationType='slide'>
              <View style={styles.modalContainer}>
                 <Text style={styles.modalTitle}>Task Detail</Text>
              </View>
              <View style={styles.modalDetailContainer}>
                 <Text style={styles.modalDetailText}>Are you sure </Text>
                 <Text style={styles.selectedTask}>Are you sure </Text>
              </View>
              <View style={styles.modalButtonContainer}>
                <Button
                  title='Cancel'
                  color={'#A9A848F'}
                  onPress = {onHandleCancel}
                />
                <Button
                  title='Delete'
                  onPress = {onHandleDeleted}
                />
              </View>

            </Modal>
        </View>
    </View>
  );
}