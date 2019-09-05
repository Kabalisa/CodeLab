import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import QueryComponent from '../components/Query';

class ListScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.containerStyle}>
        <Header navigation={navigation} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Java Developers In Lagos:</Text>
          <View style={styles.viewCardStyle}>
            <QueryComponent navigation={navigation} />
          </View>
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
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    left: 15,
    top: 20
  },
  viewStyle: {
    height: '83%',
    flexDirection: 'column'
  },
  viewCardStyle: {
    marginHorizontal: '6%',
    marginTop: '11%',
    height: '89%'
  }
});

export default ListScreen;
