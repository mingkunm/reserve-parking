import { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../../components/Text';
import { More as MoreIcon, Direction as DirectionIcon } from '../../components/Icons';

export interface LocationProps {
  parkingLot: string;
  address: string;
  spot: string;
  more: string;
}

const Location: FunctionComponent<LocationProps> = ({ parkingLot, address, spot, more }) => {
  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <View>
          <Text weight="500" size={20} style={styles.lot}>
            {parkingLot}
          </Text>
          <Text weight="400" size={14} style={styles.address}>
            {address}
          </Text>
        </View>
        <MoreIcon />
      </View>
      <View style={styles.spotContainer}>
        <Text weight="700" size={12} style={styles.spot}>
          {spot}
        </Text>
        <View style={styles.directionContiner}>
          <DirectionIcon />
          <Text weight="700" size={12} style={styles.directionText}>
            Get Directions
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  lot: {
    lineHeight: 24,
  },
  address: {
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  spotContainer: {
    flexDirection: 'row',
  },
  spot: {
    textTransform: 'uppercase',
  },
  directionContiner: {
    flexDirection: 'row',
    marginLeft: 22,
  },
  directionIcon: {},
  directionText: {
    color: '#118AA3',
    marginLeft: 3,
    letterSpacing: 1,
  },
});

export default Location;
