import { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { ParkingDate as ParkingDateInterface } from '../../../types';
import Text from '../../../components/Text';
import { ArrowStart as ArrowStartIcon, ArrowEnd as ArrowEndIcon } from '../../../components/Icons';

interface ParkingDateProps extends ParkingDateInterface {
  type: 'start' | 'end';
}

const ParkingDate: FunctionComponent<ParkingDateProps> = ({ date, year, time, type }) => {
  return (
    <View style={[styles.container, type === 'start' ? styles.startDate : styles.endDate]}>
      <View style={styles.titleContainer}>
        <Text weight="500" size={10} style={styles.titleText}>
          {type === 'start' ? 'START DATE' : 'END DATE'}
        </Text>
        {type === 'start' ? (
          <ArrowStartIcon style={styles.arrow} />
        ) : (
          <ArrowEndIcon style={styles.arrow} />
        )}
      </View>
      <Text weight="900" size={20} style={styles.date}>
        {date}
      </Text>
      <Text weight="400" size={14} style={styles.yearAndTime}>
        {`${year} (${time})`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 15,
  },
  startDate: {
    borderRightWidth: 1,
    borderRightColor: '#E7EAED',
    paddingRight: 24,
  },
  endDate: {
    paddingLeft: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'rgba(0, 0, 0, 0.5)',
    lineHeight: 11,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  arrow: {},
  date: {
    lineHeight: 24,
    marginBottom: 2,
  },
  yearAndTime: {
    lineHeight: 15,
  },
});

export default ParkingDate;
