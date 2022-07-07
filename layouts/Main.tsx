import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import { Close as CloseIcon } from '../components/Icons';
import Header from './Header';

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <CloseIcon type="close" style={styles.closeIcon} />
      <Header
        header="Nice! Your Monthly parking is Confirmed."
        subHeader="Your reservation details are below."
      />
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
  closeIcon: {
    marginLeft: 10,
    marginBottom: 30,
  },
});

export default Main;
