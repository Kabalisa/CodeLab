import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import Header from '../components/header';
import homeImage from '../../assets/homeImage.jpg';
import arrow from '../../assets/whiteArrow.png';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header />
      <Text style={styles.textStyle}>Find Java Developers In Lagos</Text>
      <TouchableHighlight
        style={styles.highlightStyle}
        onPress={() => navigation.navigate('Login')}
      >
        <Image source={arrow} style={styles.arrowStyle} />
      </TouchableHighlight>
      <View style={styles.viewStyle}>
        <Image source={homeImage} style={styles.imageStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
