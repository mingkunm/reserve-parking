import { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import Location from './Location';
import { Parking as ParkingIcon } from '../../components/Icons';
import { useParkingContext } from '../../context';

const Content: FunctionComponent = () => {
  const parkingContext = useParkingContext();

  return (
    <View style={styles.container}>
      <ParkingIcon style={styles.parkingIcon} />
      <Location />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingTop: 40,
    paddingHorizontal: 24,
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
