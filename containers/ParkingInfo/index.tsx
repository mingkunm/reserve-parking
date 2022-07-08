import { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import ParkingLocation from './ParkingLocation';
import { Parking as ParkingIcon } from '../../components/Icons';
import ParkingDates from './ParkingDates';
import LinksList from './LinksList';
import UserInfo from './UserInfo';

const Content: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <ParkingIcon style={styles.parkingIcon} />
      <ParkingLocation />
      <ParkingDates />
      <LinksList />
      <UserInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingTop: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.13,
    shadowRadius: 16,
  },
  parkingIcon: {
    position: 'absolute',
    left: 18,
    top: -14,
  },
});

export default Content;
