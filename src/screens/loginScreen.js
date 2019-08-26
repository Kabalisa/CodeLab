import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Footer from '../components/footer';
import Header from '../components/header';
import icon from '../../assets/github-512.png';

class LoginScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header />
        <View style={styles.parentStyle}>
          <TouchableHighlight onPress={() => navigation.navigate('List')}>
            <View style={styles.viewStyle}>
              <Text style={styles.textstyle}>Login With</Text>
              <Image source={icon} style={styles.imageStyle} />
            </View>
          </TouchableHighlight>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 695,
    justifyContent: 'center'
  },
  viewStyle: {
    borderWidth: 1,
    borderColor: '#5075D4',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 250,
    backgroundColor: '#5075D4',
    borderRadius: 8
  },
  imageStyle: {
    width: 50,
    height: 50
  },
  textstyle: {
    top: 16,
    right: 3,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default LoginScreen;
