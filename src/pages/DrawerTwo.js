import React,{Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { red } from 'ansi-colors';

import {SegmentedBar,TabView} from 'teaset'

export default class drawerOne extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { navigation } = this.props 
        return (
            <View style={styles.drawerOneContainer}>
                <SegmentedBar 
                justifyItem='fixed' 
                indicatorPosition='bottom' 
                indicatorType="boxWidth">
                    <SegmentedBar.Item title='Apple'/>
                    <SegmentedBar.Item title='Banana' />
                    <SegmentedBar.Item title='Cherry' />
                    <SegmentedBar.Item title='Durian' />
                    <SegmentedBar.Item title='Filbert' />
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