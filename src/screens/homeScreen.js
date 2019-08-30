import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import homeImage from '../../assets/homeImage.jpg';
import arrow from '../../assets/whiteArrow.png';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.headerStyle}>
        <Text style={styles.headerTextStyle}>CodeLab</Text>
      </View>
      <Text style={styles.textStyle}>Find Java Developers In Lagos</Text>
      <TouchableOpacity
        style={styles.highlightStyle}
        onPress={() => navigation.navigate('Login')}
      >
        <Image source={arrow} style={styles.arrowStyle} />
      </TouchableOpacity>
      <View style={styles.viewStyle}>
        <Image source={homeImage} style={styles.imageStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 85,
    flexDirection: 'row',
    borderBottomColor: '#5075D4',
    borderBottomWidth: 1
  },
  headerTextStyle: {
    color: '#5075D4',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    bottom: 8,
    left: 8
  },
  viewStyle: {
    height: 723,
    bottom: 64
  },
  imageStyle: {
    height: 723,
    opacity: 0.7
  },
  textStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    left: 35,
    top: 75,
    zIndex: 2
  },
  arrowStyle: {
    width: 35,
    height: 35,
    zIndex: 2
  },
  highlightStyle: {
    left: 180,
    top: 580,
    zIndex: 2
  }
});

export default HomeScreen;
