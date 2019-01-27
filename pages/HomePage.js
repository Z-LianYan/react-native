
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
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>welcome to HomePage</Text>
        <Text/>
        <Button
          style={styles.btn} 
          title='Go to Page1'
          onPress = {()=>{
            navigation.navigate("Page1")
          }}
        />
        <Text/>
        <Button 
          style={styles.btn}
          title='Go to Page2'
          onPress = {()=>{
            navigation.navigate('Page2',{name:'动态的Page2'})
          }}
        />
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
  btn: {
    marginBottom: 20,
  }
});
