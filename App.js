import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>      
       <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <Button title='Agregar' color='#9A848F' onPress={() => null} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inputContainer:{
    flexDirection :'row' ,
    justifyContent:  'space-between',
    marginHorizontal: 20,
    marginVertical: 40,    
  },
  input:{
    width: '80%',
    borderBotomWidth:1,
    borderBotomColor: '#9A848F'
  }

});
