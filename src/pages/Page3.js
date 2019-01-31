
import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    Image,
    Button,
    TextInput
} from 'react-native';


export default class App extends Component<Props> {
  constructor(Props){
    super(Props);
    this.state = {
    }
  }
  render() {
    const {navigation} = this.props;
    const {state,setParams} = navigation;
    const {params} = state
    const showText = params.mode === 'edit'? '正在编辑':'编辑完成'
    return (
      <View style={styles.container}>
        <Text>welcome to page3</Text>
        <Text/>
        <Text>{showText}</Text>
        <Text/>
        <TextInput
            style={styles.input}
            onChangeText = {(text)=>{
                setParams({
                  title:text
                })
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
  input:{
      width:300,
      height:50,
      borderWidth:1,
      borderColor:'#58bc58'
  }
});
