import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './components/Cat';

export default function App() {
  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <Cat></Cat>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10 
  },
});
