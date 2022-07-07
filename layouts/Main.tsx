import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import { Close as CloseIcon } from '../components/Icons';
import Header from './Header';
import Content from './Content';

// TODO: Mock data
import { header, content } from '../mock';

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <CloseIcon type="close" style={styles.closeIcon} />
      <Header header={header.header} subHeader={header.subHeader} />
      <Content content={content.content} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  closeIcon: {
    marginLeft: 10,
    marginBottom: 30,
  },
});

export default Main;
