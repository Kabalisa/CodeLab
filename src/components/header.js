import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import firebase from 'firebase';
import initializeFirebase from '../helpers/firebaseConfig';
const GithubStorageKey = 'githubtoken';
class Header extends Component {
  componentDidMount() {
    initializeFirebase();
  }

  signOut = async () => {
    try {
      await AsyncStorage.removeItem(GithubStorageKey);
      await firebase.auth().signOut();
      this.props.navigation.navigate('Login');
    } catch ({ message }) {
      alert('Error: ' + message);
    }
  };
  render() {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.headerTextStyle}>CodeLab</Text>
        <TouchableOpacity
          onPress={() => this.signOut()}
          style={styles.logoutStyle}
        >
          <View style={styles.logoutViewStyle}>
            <Text style={styles.logoutTextStyle}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  logoutStyle: {
    marginLeft: '55%',
    marginTop: '3%'
  },
  logoutViewStyle: {
    borderWidth: 1,
    borderColor: '#5075D4',
    padding: 4,
    backgroundColor: '#5075D4'
  },
  logoutTextStyle: {
    color: 'white',
    fontSize: 16
  }
});

export default Header;
