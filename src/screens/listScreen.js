import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { Query } from 'react-apollo';
import Header from '../components/header';
import UserCard from '../components/userCard';
import Footer from '../components/footer';
import { lagosJavaDevelopers } from '../helpers/queries';

class ListScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header navigation={navigation} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Java Developers In Lagos:</Text>
          <View style={styles.viewCardStyle}>
            <Query query={lagosJavaDevelopers}>
              {({ loading, error, data }) => {
                if (loading) {
                  return (
                    <View style={styles.indicatorStyle}>
                      <ActivityIndicator size='large' color='#5075D4' />
                    </View>
                  );
                }
                if (error) {
                  alert('An Error Occured');
                  return (
                    <Text style={styles.errorStyle}>
                      An Error Occured!. Try Again
                    </Text>
                  );
                }
                if (data) {
                  const { search } = data;
                  return (
                    <FlatList
                      keyExtractor={edge => edge.node.login}
                      data={search.edges}
                      renderItem={({ item }) => {
                        return <UserCard navigation={navigation} item={item} />;
                      }}
                    />
                  );
                }
              }}
            </Query>
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
  },
  indicatorStyle: {
    marginVertical: 300
  },
  errorStyle: {
    fontSize: 20
  }
});

export default ListScreen;
