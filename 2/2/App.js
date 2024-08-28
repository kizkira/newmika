import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// Dr.Fuentes sample react native code , May 19, 2023
export default function App() {
const showHello = () => {
alert('Hello World');
}
const showDate = () => {
const date = new Date().toString();
alert('Current Date is: ' + date);
}
return (
<View style={styles.container}>
<TouchableOpacity style={styles.buttonBlack} onPress={showHello}>
<Text style={styles.text}>Black Button</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.buttonGreen} onPress={showDate}>
<Text style={styles.text}>Green Button</Text>
</TouchableOpacity>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
buttonBlack: {
backgroundColor: 'black',
padding: 10,
borderRadius: 10,
margin: 10,
},
buttonGreen: {
backgroundColor: 'green',
padding: 10,
borderRadius: 10,
margin: 10,
},
text: {
color: 'white',
fontSize: 20,
textAlign: 'center',
}
});