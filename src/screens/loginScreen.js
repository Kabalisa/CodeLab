import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import firebase from 'firebase';
import Footer from '../components/footer';
import icon from '../../assets/github-512.png';
import initializeFirebase from '../helpers/firebaseConfig';
import getGithubToken from '../helpers/getGithubToken';

const GithubStorageKey = 'githubtoken';
export const signIn = async token => {
  try {
    if (!token) {
      const token = await getGithubToken();
      if (token) {
        await AsyncStorage.setItem(GithubStorageKey, token);
        return signIn(token);
      } else {
        return;
      }
    }
    const credential = firebase.auth.GithubAuthProvider.credential(token);
    return firebase.auth().signInWithCredential(credential);
  } catch ({ message }) {
    alert(message);
  }
};

export const attemptToRestoreAuth = async () => {
  let token = await AsyncStorage.getItem(GithubStorageKey);
  if (token) {
    return signIn(token);
  }
};

class LoginScreen extends Component {
  state = { isSignedIn: false };

  componentDidMount() {
    this.setupFirebase();
  }

  setupFirebase = async () => {
    const { navigation } = this.props;
    initializeFirebase();

    firebase.auth().onAuthStateChanged(async auth => {
      const isSignedIn = !!auth;
      this.setState({ isSignedIn });
      isSignedIn && navigation.navigate('List');
      if (!isSignedIn) {
        attemptToRestoreAuth();
      }
    });
  };
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>CodeLab</Text>
        </View>
        <View style={styles.parentStyle}>
          <TouchableOpacity onPress={() => signIn()}>
            <View style={styles.viewStyle}>
              <Text style={styles.textstyle}>Login With</Text>
              <Image source={icon} style={styles.imageStyle} />
            </View>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    );
  }
}

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
  parentStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '83%',
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
