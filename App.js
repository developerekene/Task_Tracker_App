import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import TabLayoutContainer from './navigation/TabLayoutContainer';
import 'react-native-gesture-handler'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TabLayoutContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
