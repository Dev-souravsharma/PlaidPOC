import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {RNPlaid} from './components';
import RNButton from './components/RNButton/RNButton';

const App: React.FC = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar animated barStyle={'dark-content'} />
      <Text>Plaid POC</Text>
      <RNButton title={'Hello'} onPress={() => {}} />
      <RNPlaid />
    </SafeAreaView>
  );
};

export default App;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
