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
      {/* TODO: Dash border not work */}
      {/* <View style={styles.dashedBorder} /> */}
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
    paddingHorizontal: 24,
    borderBottomColor: '#EBEEF1',
    borderBottomWidth: 1,
    borderTopColor: '#EBEEF1',
    borderTopWidth: 1,
  },
  // dashedBorder: {
  //   position: 'absolute',
  //   width: '100%',
  //   height: 1,
  //   borderRadius: 1,
  //   borderStyle: 'dashed',
  //   borderTopColor: '#EBEEF1',
  //   borderTopWidth: 5,
  // },
  content: {
    flexDirection: 'row',
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
