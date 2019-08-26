import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTextStyle}>CodeLab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 85,
    flexDirection: 'row',
    borderBottomColor: '#5075D4',
    borderBottomWidth: 1
  },
  headerTextStyle: {
    color: '#5075D4',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    bottom: 8,
    left: 8
  }
});

export default Header;
