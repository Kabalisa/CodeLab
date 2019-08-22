import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import userAvatar from '../../assets/userAvatar.png';
class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Header />
        <View style={styles.viewStyle}>
          <Image source={userAvatar} style={styles.imageStyle} />
          <Text style={styles.usernameStyle}>Username</Text>
          <Text style={styles.textOneStyle}>Github URL:</Text>
          <Text style={styles.textTwoStyle}>www.github.com/users/username</Text>
          <View style={styles.viewOneStyle}>
            <Text style={styles.textThreeStyle}>5</Text>
            <Text style={styles.textFourStyle}>repos</Text>
          </View>
          <View style={styles.viewTwoStyle}>
            <Text style={styles.textThreeStyle}>5</Text>
            <Text style={styles.textFourStyle}>starring</Text>
          </View>
          <View style={styles.buttonStyle}>
            <Text style={styles.textstyle}>Share Profile</Text>
          </View>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 695
  },
  imageStyle: {
    width: 220,
    height: 220,
    marginVertical: 15
  },
  usernameStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25
  },
  textOneStyle: { fontSize: 18 },
  textTwoStyle: { fontSize: 18, color: '#5075D4', marginBottom: 20 },
  viewOneStyle: { flexDirection: 'row', marginBottom: 20 },
  viewTwoStyle: { flexDirection: 'row', marginLeft: 15 },
  textThreeStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    bottom: 6,
    marginRight: 10
  },
  textFourStyle: { fontSize: 18 },
  buttonStyle: {
    borderWidth: 1,
    borderColor: '#5075D4',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 230,
    backgroundColor: '#5075D4',
    borderRadius: 8,
    marginTop: 40
  },
  textstyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default ProfileScreen;
