import { StyleSheet, Text, ScrollView } from 'react-native';

import { Close as CloseIcon } from '../components/Icons';
import Header from './Header';
import ParkingInfo from './ParkingInfo';
import IdentifyVehicle from './IdentifyVehicle';

export default function MainScreen({ navigation }) {
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
    backgroundColor: 'transparent',
  },
  closeIcon: {
    marginLeft: 10,
    marginBottom: 30,
  },
});
