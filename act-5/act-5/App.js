import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// Code example by Dr.Fuentes; May 21, 2023
export default class App extends Component {
render() {
return (
<ScrollView>
<View style={styles.container}>
<Image
source={{ uri: 'https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?rs=1&pid=ImgDetMain' }} 
style={{ width: 200, height: 200 }}
/>
<Text></Text>
</View>
<View style={styles.container}>
<Image
source={{ uri: 'https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?rs=1&pid=ImgDetMain' }} 

style={{ width: 200, height: 200 }}
/>
<Text style={styles.text}>mika!</Text>
</View>
</ScrollView>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignltems: 'center',
justifyContent: 'center', marginVertical: 20, },
text: {
fontSize: 24,
fontWeight: 'bold',
textAlign: 'center',
marginVertical: 10,
},
});
