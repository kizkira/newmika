import React,{useState} from 'react';
import { View, Text, TextInput, Button} from 'react-native';

function GradeBook(){
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

const handleGradeChange = (text) => {
    setGrade(text);
  };

const handleSubmit = () => {
    alert(`Name:${name}\nGrade:${grade}` );
  };  

  return(
    <View>
    <Text>GradeBook</Text>
    <TextInput
    placeholder = "Name"
    value = {name}
    onChangeText = {handleNameChange}
    />
    
    <TextInput
    placeholder="Grade"
    value={grade}
    onChangeText = {handleNameChange}
    />
    <Button title = "Submit" onPress ={handleSubmit}/>
    </View>
  );
    }
    function App (){
  return(
    <div>
    <GradeBook/>
    </div>
  );
}

export default App;
