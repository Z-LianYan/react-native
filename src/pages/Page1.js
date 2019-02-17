
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
    }
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>welcome to page1</Text>
        <Text/>
        <Button
          title='go back'
          onPress =  {()=>{
            navigation.goBack()
            }
          }
        />
        <Text/>
        <Button
          title='改变主题'
          onPress =  {()=>{
            navigation.setParams({
              theme:{
                tintColor:'red',
                updateTime:new Date().getTime()
              }
            })
            }
          }
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
});
