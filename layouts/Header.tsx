import { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../components/Text';

export interface HeaderProps {
  header: string;
  subHeader: string;
}

const Header: FunctionComponent<HeaderProps> = ({ header, subHeader }) => {
  return (
    <View style={styles.container}>
      <Text weight="900" size={24} style={styles.header}>
        {header}
      </Text>
      <Text weight="400" size={14} style={styles.subHeader}>
        {subHeader}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  header: {
    lineHeight: 24,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  subHeader: {
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default Header;
