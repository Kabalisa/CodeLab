import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Share,
  TouchableOpacity
} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import userAvatar from '../../assets/userAvatar.png';
class ProfileScreen extends Component {
  handleShare = async username => {
    const githubUrl = `https://github.com/${username}`;
    try {
      await Share.share({
        message: `Check out this awesome developer @${username}, ${githubUrl}`,
        title: 'Lagos developer'
      });
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    return (
      <View>
        <Header navigation={navigation} />
        <View style={styles.viewStyle}>
          <Image
            source={{ uri: item.node.avatarUrl }}
            style={styles.imageStyle}
          />
          <Text style={styles.usernameStyle}>{item.node.login}</Text>
          <Text style={styles.textOneStyle}>Github URL:</Text>
          <Text
            style={styles.textTwoStyle}
          >{`https://github.com/${item.node.login}`}</Text>
          <View style={styles.viewOneStyle}>
            <Text style={styles.textThreeStyle}>
              {item.node.repositories.totalCount}
            </Text>
            <Text style={styles.textFourStyle}>repos</Text>
          </View>
          <View style={styles.viewTwoStyle}>
            <Text style={styles.textThreeStyle}>
              {item.node.starredRepositories.totalCount}
            </Text>
            <Text style={styles.textFourStyle}>starring</Text>
          </View>
          <TouchableOpacity onPress={() => this.handleShare(item.node.login)}>
            <View style={styles.buttonStyle}>
              <Text style={styles.textstyle}>Share Profile</Text>
            </View>
          </TouchableOpacity>
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
    borderRadius: 110,
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
