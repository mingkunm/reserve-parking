import { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import ParkingLocation from './ParkingLocation';
import { Parking as ParkingIcon } from '../../components/Icons';
import { useParkingContext } from '../../context';
import ParkingDates from './ParkingDates';
import LinksList from './LinksList';
import UserInfo from './UserInfo';

const Content: FunctionComponent = () => {
  const parkingContext = useParkingContext();

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
    // TODO: box-shadow
  },
  parkingIcon: {
    position: 'absolute',
    left: 18,
    top: -14,
  },
});

export default Content;
