import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {

    let pic = {
      uri: 'http://acscustomusa.com/wp-content/uploads/2017/06/DEADMAU5-e1497020381790.png'
    };
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 193, height: 150}} />
      <Text style={styles.normalText}>Just boring normal Text</Text>
      <Text style={styles.fireText}> This is better</Text>
      
      </View>
      
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
  fireText:{
    color: 'red',
    fontWeight: 'bold',
    fontSize: 40
  },
  normalText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10
  }
});
