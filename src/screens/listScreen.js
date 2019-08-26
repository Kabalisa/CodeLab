import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from '../components/header';
import UserCard from '../components/userCard';
import Footer from '../components/footer';

class ListScreen extends Component {
  render() {
    const { navigation } = this.props;
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    return (
      <View>
        <Header />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Java Developers In Lagos:</Text>
          <View style={styles.viewCardStyle}>
            <FlatList
              keyExtractor={one => one}
              data={numbers}
              renderItem={() => <UserCard navigation={navigation} />}
            />
          </View>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    left: 15,
    top: 20
  },
  viewStyle: {
    height: 695,
    flexDirection: 'column'
  },
  viewCardStyle: {
    marginHorizontal: 30,
    marginTop: 50,
    height: 600
  }
});

export default ListScreen;
