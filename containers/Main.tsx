import { FunctionComponent, useEffect } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import { useParkingContext } from '../context';
import { Close as CloseIcon } from '../components/Icons';
import Header from './Header';
import ParkingInfo from './ParkingInfo';
import IdentifyVehicle from './IdentifyVehicle';

// TODO: Mock data
import { parkingInfo } from '../mock';

export default function MainScreen({ navigation }) {
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
      <IdentifyVehicle navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    paddingHorizontal: 16,
  },
  closeIcon: {
    marginLeft: 10,
    marginBottom: 30,
  },
});
