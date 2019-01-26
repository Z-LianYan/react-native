
import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    Image,
    Button
} from 'react-native';


export default class App extends Component<Props> {
  constructor(Props){
    super(Props);
    this.state = {
      selectedTab:"home"
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>welcome to page1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
    justifyContent:'center',
    alignItems:'center'
  },
});
