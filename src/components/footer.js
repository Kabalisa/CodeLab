import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerStyle}>
      <Text style={styles.footerTextStyle}>Copyright Codelab 2019</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    backgroundColor: '#5075D4',
    height: '6%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerTextStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default Footer;
