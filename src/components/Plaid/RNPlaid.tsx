import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PlaidLink, {LinkExit, LinkSuccess} from 'react-native-plaid-link-sdk';

const RNPlaid: React.FC = () => {
  return (
    <PlaidLink
      tokenConfig={{
        token: 'link-sandbox-ce91ce67-1ef1-4ac2-b72c-6f57111d0e05',
        noLoadingState: false,
      }}
      onSuccess={(success: LinkSuccess) => {
        console.log(success);
      }}
      onExit={(exit: LinkExit) => {
        console.log('demo', exit);
      }}>
      <View style={style.container}>
        <Text>Add Account</Text>
      </View>
    </PlaidLink>
  );
};

export default React.memo(RNPlaid);
const style = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    padding: 10,
    width: '40%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
