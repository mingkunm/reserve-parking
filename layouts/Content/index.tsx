import { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

interface ParkingDate {
  date: string;
  year: string;
  time: string;
}

export interface ContentProps {
  location: {
    parkingLot: string;
    address: string;
    spot: string;
  };
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
}

const Content: FunctionComponent<ContentProps> = ({
  location,
  date,
  instructions,
  purchaseAdditionalMonth,
  amount,
  user,
}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default Content;
