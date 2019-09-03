import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import userAvatar from '../../assets/userAvatar.png';

const UserCard = ({ navigation, item }) => {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        id='image'
        onPress={() => navigation.navigate('Profile', { item })}
      >
        <Image
          source={{ uri: item.node.avatarUrl }}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        id='name'
        style={styles.touchableStyle}
        onPress={() => navigation.navigate('Profile', { item })}
      >
        <Text style={styles.textStyle}>{item.node.login}</Text>
      </TouchableOpacity>
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
    height: 70,
    borderRadius: 35
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
