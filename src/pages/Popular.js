

import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    NavigatorBar
} from 'react-native';

export default class FlatListCom extends Component<Props> {
    static navigationOptions = {
        // tabBarVisible: false, // 隐藏底部导航栏
        header:null,  //隐藏顶部导航栏
      };
    constructor(props){
        super(props);
        this.state = {
           
        }
    }
    
    render() {
        return (
        <View style={styles.container}>
            <Text>123</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCFF',
    },
});
