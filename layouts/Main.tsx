import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
