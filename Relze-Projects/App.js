import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {

    let pic = {
      uri: 'http://acscustomusa.com/wp-content/uploads/2017/06/DEADMAU5-e1497020381790.png'
    };
    return (
      <Image source={pic} style={{width: 193, height: 150, top:50, left:30}} />
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
