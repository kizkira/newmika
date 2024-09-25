import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Sample program by: Dr. Fuentes; May 26, 2023

export default function App() {
  const [username, setUsername] = useState("");
  const [course, setCourse] = useState(""); // Added course state

  const handleSave = async () => {
    // Save the username and course to AsyncStorage
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('course', course); // Added line to save course
    setUsername("");
    setCourse(""); // Clear course and username after saving
  };

  const handleRetrieve = async () => {
    // Retrieve the saved username and course from AsyncStorage
    const retrievedUsername = await AsyncStorage.getItem('username');
    const retrievedCourse = await AsyncStorage.getItem('course');
    setUsername(retrievedUsername || "");
    setCourse(retrievedCourse || ""); // Set course and username states
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={{ fontSize: 35, color: 'skyblue' }}>Data Pocket Info</Text>

      {/* Prompts user for username */}
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      {/* Prompts user for course */}
      <TextInput
        style={styles.input}
        placeholder="Enter course"
        value={course}
        onChangeText={setCourse}
      />
      {/* Save button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      {/* Retrieve button */}
      <TouchableOpacity style={styles.button} onPress={handleRetrieve}>
        <Text style={styles.buttonText}>Retrieve</Text>
      </TouchableOpacity>

      {/* Displays saved username and course */}
      <Text>Saved username: {username}</Text>
      <Text>Saved course: {course}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: "skyblue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
