import { FunctionComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { useParkingContext } from '../../context';
import { Messages } from '../../components/Icons';
import Text from '../../components/Text';

const UserInfo: FunctionComponent = () => {
  const { avatar, name, owner } = useParkingContext().parkingInfo.user;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.userContainer}>
          <Image source={avatar as any} style={styles.avatar} />
          <View style={styles.userInfoContainer}>
            <Text weight="500" size={14}>
              {name}
            </Text>
            <Text weight="400" size={13} style={styles.owner}>
              {owner}
            </Text>
          </View>
        </View>
        <Messages />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6F8',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  content: {
    marginHorizontal: 24,
    flexDirection: 'row',
    paddingVertical: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  userInfoContainer: {
    marginLeft: 16,
  },
  name: {
    marginBottom: 3,
    lineHeight: 17,
  },
  owner: {
    color: 'rgba(0, 0, 0, 0.4)',
    lineHeight: 17,
  },
});

export default UserInfo;
