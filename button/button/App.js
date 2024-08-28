import React, { useState } from "react";
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
// React native sample code by Dr.Fuentes || ay 19,2023
export default function App() {
  const [count, setCount] = useState(0);

  const handlePress = ()=>{
    setCount(count + 1);

};

return (
<View style={styles.container}>
<TouchableOpacity onPress={handlePress}>
<Text style={styles.button}>Print Hello World!</Text>
<Text>..</Text>
<Text style={styles.button}>Count to {count + 1}</Text>
<Text>..</Text>
<Text style={styles.button}>Phinma Iloilo</Text>
<Text>..</Text>
</TouchableOpacity>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
button: {
fontSize: 20,
fontWeight: 'bold',
padding: 10,
backgroundColor: 'green',
color: 'white',
borderRadius: 5,
},
});