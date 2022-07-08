import { FunctionComponent, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../../../components/Text';
import { ArrowRight } from '../../../components/Icons';

interface LinkProps {
  Icon: ReactNode;
  children: string;
  last?: boolean;
}

const Link: FunctionComponent<LinkProps> = ({ Icon, children, last = false }) => {
  return (
    <View style={[styles.container, last ? styles.last : {}]}>
      {!last && <View style={styles.blankBorder} />}
      <View style={styles.contentContainer}>
        {Icon}
        <Text weight="400" size={16} style={styles.content}>
          {children}
        </Text>
      </View>
      <ArrowRight />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#EAEDF0',
    borderBottomWidth: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    lineHeight: 17,
    marginLeft: 12,
  },
  last: {
    borderBottomWidth: 0,
  },
  blankBorder: {
    position: 'absolute',
    height: 1,
    width: 24,
    borderBottomColor: '#EAEDF0',
    borderBottomWidth: 1,
    bottom: -1,
    right: -24,
  },
});

export default Link;
