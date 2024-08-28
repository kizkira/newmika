import React, { Component } from 'react';

import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'; // Code example by Dr.Fuentes; May 21, 2023

export default class App extends Component {

render() {

return (

<ScrollView>

<View style={styles.container}>

<Image

source={{ uri: 'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-1/341693651_1037265967236602_48616273436315953_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fgJrHiOEiPoQ7kNvgEkr0Je&_nc_ht=scontent.fmnl30-3.fna&oh=00_AYBa4nV6K_PluQfn7kd03sW9yyye8BPKpo8s-VZOmmr5fQ&oe=66D438CF' }}

style={{ width: 200, height: 250 }}

/>

<Text style={styles.text}>MICKAELLA SOLETA</Text>

<Text style={styles.text}>BSIT3-1</Text>

<Text style={styles.text}>FBI</Text>

</View>

<View style={styles.container}>

<Image

source={{ uri: 'https://i.imgur.com/SKXxy0J.jpg' }} //look for your own image style={{ width: 200, height: 200 }}

/>

<Text style={styles.text}>Welcome to my app!</Text>

</View>

</ScrollView> );

}

}
const styles = StyleSheet.create({

container: {

flex: 1,

alignItems: 'center',

justifyContent: 'center',

marginVertical: 20,

},
text: {

fontSize: 24,

color:'aquamarine',

fontWeight: 'bold',

textAlign: 'center',

marginVertical: 10,

},

});
