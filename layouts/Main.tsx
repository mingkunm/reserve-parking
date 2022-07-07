import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Main</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
});

export default Main;
