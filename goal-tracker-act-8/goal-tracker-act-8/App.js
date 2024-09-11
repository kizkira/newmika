import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

// Sample program by Dr. Fuentes; May 22, 2023
export default function App() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");

  const calculateGoal = () => {
    let calculatedGoal = "";
    if (weight > 200 &&age > 53) {
      calculatedGoal = "Your daily calorie goal is X. It's recommended to do low-impact exercises like swimming and walking.";
    } else {
      calculatedGoal = "Your daily calorie goal is X";
    }
    setGoal(calculatedGoal);
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://catvills.com/wp-content/uploads/2020/02/dumbest-cat-breeds-f-1.jpg?auto=compress&cs=tinysrgb&w=600' }} 
        style={{ width: 200, height: 200 }} 
      />
      <Text style={{ fontSize: 40, color: 'aquamarine' }}>Goal Tracker</Text>

      <Text>Weight</Text>
      <TextInput 
        style={styles.input}
        onChangeText={text => setWeight(text)}
        value={weight}
        keyboardType="numeric"
      />
      <Text>Age</Text>
      <TextInput 
        style={styles.input}
        onChangeText={text => setAge(text)}
        value={age}
        keyboardType="numeric"
      />
      <Button
        title="Calculate Goal"
        onPress={calculateGoal}
      />
      <Text>{goal}</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#7FFFD4',
    padding: 8,
    margin: 10,
    width: 200,
  },
});