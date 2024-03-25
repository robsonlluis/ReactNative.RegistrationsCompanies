import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppMainList() {
  return (
    <View style={styles.container}>
      <Text>All services will be here:</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e81b0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});