import { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { useParkingContext } from '../../../context';
import ParkingDate from './ParkingDate';

const ParkingDates: FunctionComponent = () => {
  const { parkingInfo } = useParkingContext();
  const { startDate, endDate } = parkingInfo.date;

  return (
    <View style={styles.container}>
      <View style={[styles.circle, styles.left]} />
      <View style={[styles.circle, styles.right]} />
      <View style={styles.dashedBorder} />
      <View style={styles.content}>
        <ParkingDate
          date={startDate.date}
          time={startDate.time}
          year={startDate.year}
          type="start"
        />
        <ParkingDate date={endDate.date} time={endDate.time} year={endDate.year} type="end" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#EBEEF1',
    borderBottomWidth: 1,
  },
  dashedBorder: {
    position: 'absolute',
    width: '100%',
    borderStyle: 'dashed',
    borderColor: '#EBEEF1',
    borderWidth: 1,
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  circle: {
    position: 'absolute',
    width: 16,
    height: 16,
    backgroundColor: '#F2C840',
    borderRadius: 50,
    zIndex: 100,
    top: -8,
  },
  left: {
    left: -8,
  },
  right: {
    right: -8,
  },
});

export default ParkingDates;
