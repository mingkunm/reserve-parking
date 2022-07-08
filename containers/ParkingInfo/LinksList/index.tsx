import { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { useParkingContext } from '../../../context';
import { Help, Clock, Receipt } from '../../../components/Icons';
import Link from './Link';

const Icon = ({ Icon }: { Icon: any }) => {
  return <View style={styles.icon}>{Icon()}</View>;
};

const LinksList: FunctionComponent = () => {
  const { instructions, purchaseAdditionalMonth, amount } = useParkingContext().parkingInfo;

  return (
    <View style={styles.container}>
      <Link Icon={<Icon Icon={Help} />}>View parking instructions</Link>
      <Link Icon={<Icon Icon={Clock} />}>Purchase additional months</Link>
      <Link Icon={<Icon Icon={Receipt} />} last={true}>{`View receipt for $${amount}`}</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  icon: {
    width: 26,
    height: 26,
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LinksList;
