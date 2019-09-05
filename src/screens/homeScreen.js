import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import homeImage from '../../assets/homeImage.jpg';
import arrow from '../../assets/whiteArrow.png';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerTextStyle}>CodeLab</Text>
      </View>
      <View style={styles.secondContainerStyle}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: '100%'
  },
  headerStyle: {
    height: '11%',
    flexDirection: 'row',
    borderBottomColor: '#5075D4',
    borderBottomWidth: 1
  },
  headerTextStyle: {
    color: '#5075D4',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    bottom: '2%',
    left: '10%'
  },
  viewStyle: {
    height: '100%',
    position: 'absolute'
  },
  secondContainerStyle: {
    height: '89%'
  },
  imageStyle: {
    height: '100%',
    opacity: 0.7
  },
  textStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: '9%',
    top: '10%',
    zIndex: 2
  },
  arrowStyle: {
    width: 35,
    height: 35,
    zIndex: 2
  },
  highlightStyle: {
    marginHorizontal: '43%',
    top: '73%',
    zIndex: 2
  }
});

export default HomeScreen;
