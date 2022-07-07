import { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import Location, { LocationProps } from './Location';
import { Parking as ParkingIcon } from '../../components/Icons';

interface ParkingDate {
  date: string;
  year: string;
  time: string;
}

export interface ContentProps {
  content: {
    location: LocationProps;
    date: {
      startDate: ParkingDate;
      endDate: ParkingDate;
    };
    instructions: string;
    purchaseAdditionalMonth: string;
    amount: string;
    user: {
      avatar: string;
      name: string;
      owner: string;
      message: string;
    };
  };
}

const Content: FunctionComponent<ContentProps> = ({ content }) => {
  const { location, date, instructions, purchaseAdditionalMonth, amount, user } = content;

  return (
    <View style={styles.container}>
      <ParkingIcon style={styles.parkingIcon} />
      <Location
        address={location.address}
        parkingLot={location.parkingLot}
        spot={location.spot}
        more={location.more}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
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
