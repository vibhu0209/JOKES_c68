import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Joke</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
   
    backgroundColor: '#f96', 
    
  },
  text: {
    color: '#0f9',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppHeader;
