import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppMainTab from './AppMainTab';

export default function App() {
  return (
   /*  <View style={styles.container}>
      <Text>Open up App.js nmnmto start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
   */
  <>
    <AppMainTab/>
    <StatusBar style='light' />
  </>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
