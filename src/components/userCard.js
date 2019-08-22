import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import userAvatar from '../../assets/userAvatar.png';

const UserCard = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <TouchableHighlight onPress={() => navigation.navigate('Profile')}>
        <Image source={userAvatar} style={styles.imageStyle} />
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.touchableStyle}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.textStyle}>username</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    marginTop: 20
  },
  imageStyle: {
    width: 70,
    height: 70
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  touchableStyle: {
    alignSelf: 'flex-end',
    left: 30,
    bottom: 5
  }
});

export default UserCard;
