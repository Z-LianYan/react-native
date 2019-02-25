
import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    Image,
    Button
} from 'react-native';

import AppNavigators from '../../navigators/AppNavigators'


export default class HomePage extends Component<Props> {
  static navigationOptions = {
    // tabBarVisible: false, // 隐藏底部导航栏
    header:null,  //隐藏顶部导航栏
  };
  constructor(Props){
    super(Props);
    this.state = {
    }
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>welcome to HomePage</Text>
        <Text/>
        <Text/>
        <Button 
          style={styles.btn}
          title='Go To Page3'
          onPress = {()=>{
            navigation.navigate("Page3",{title:'Page3'})
          }}
        />
        <Text/>
        <Button 
          style={styles.btn}
          title='TabNavigatior'
          onPress = {()=>{
            navigation.navigate("AppNav")
          }}
        />
        <Text/>
        <Button 
          style={styles.btn}
          title='DrawerNavigator'
          onPress = {()=>{
            navigation.navigate("DrawerNav")
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
    marginBottom: 20
  }
});
