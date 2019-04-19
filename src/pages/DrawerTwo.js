import React,{Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { red } from 'ansi-colors';

import {SegmentedBar} from 'teaset'

export default class drawerOne extends Component<Props> {
    constructor(props){
        super(props);
    }
    render(){
        const { navigation } = this.props 
        return (
            <View style={styles.drawerOneContainer}>
                <SegmentedBar justifyItem='scrollable'>
                    <SegmentedBar.Item title='Apple' />
                    <SegmentedBar.Item title='Banana' />
                    <SegmentedBar.Item title='Cherry' />
                    <SegmentedBar.Item title='Durian' />
                    <SegmentedBar.Item title='Filbert' />
                    <SegmentedBar.Item title='Grape' />
                    <SegmentedBar.Item title='Hickory' />
                    <SegmentedBar.Item title='Lemon' />
                    <SegmentedBar.Item title='Mango' />
                </SegmentedBar>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    drawerOneContainer:{
        flex:1,
        backgroundColor:'#00ffff',
        // justifyContent:'center',
        // alignItems:'center'
    },
    txtFont:{
        color:'#0101DF'
    }
})