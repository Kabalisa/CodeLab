import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { Query } from 'react-apollo';
import UserCard from './userCard';
import { lagosJavaDevelopers } from '../helpers/queries';

const QueryComponent = ({ navigation }) => {
  return (
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
            <Text style={styles.errorStyle}>An Error Occured!. Try Again</Text>
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
  );
};

const styles = StyleSheet.create({
  indicatorStyle: {
    marginVertical: 300
  },
  errorStyle: {
    fontSize: 20
  }
});

export default QueryComponent;
