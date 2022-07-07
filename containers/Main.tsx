import { FunctionComponent, useEffect } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import { Close as CloseIcon } from '../components/Icons';
import Header from './Header';
import Content from './Content';
import { useParkingContext } from '../context';

// TODO: Mock data
import { parkingInfo } from '../mock';

const Main: FunctionComponent = () => {
  const parkingContext = useParkingContext();

  // Set parkign data
  useEffect(() => {
    parkingContext.setParkingInfo(parkingInfo);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <CloseIcon type="close" style={styles.closeIcon} />
      <Header />
      <Content />
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
