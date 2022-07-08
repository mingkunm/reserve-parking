import { FunctionComponent, useEffect } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import { useParkingContext } from '../context';
import { Close as CloseIcon } from '../components/Icons';
import Header from './Header';
import ParkingInfo from './ParkingInfo';

// TODO: Mock data
import { parkingInfo } from '../mock';

const Main: FunctionComponent = () => {
  const { setParkingInfo } = useParkingContext();

  // Set parkign data
  useEffect(() => {
    setParkingInfo(parkingInfo);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <CloseIcon type="close" style={styles.closeIcon} />
      <Header />
      <ParkingInfo />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    paddingBottom: 50,
    paddingHorizontal: 16,
  },
  closeIcon: {
    marginLeft: 10,
    marginBottom: 30,
  },
});

export default Main;
