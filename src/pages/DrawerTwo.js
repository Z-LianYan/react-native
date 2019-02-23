import React,{Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { red } from 'ansi-colors';


export default class drawerOne extends Component<Props> {
    constructor(props){
        super(props);
    }
    render(){
        const { navigation } = this.props 
        return (
            <View style={styles.drawerOneContainer}>
                <Text style={styles.txtFont}>welcome to drawerTwo</Text>
                <Text/>
                <Button
                    title='Open Drawer'
                    onPress= {() =>{
                        navigation.openDrawer()
                    }}
                />
                <Text/>
                <Button
                    title='Go DrawerTwo'
                    onPress= {() =>{
                        navigation.navigate('DrawerOne')
                    }}
                />
                <Text/>
                <Button
                    title='Toggle Drawer'
                    onPress= {() =>{
                        navigation.toggleDrawer()
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    drawerOneContainer:{
        flex:1,
        backgroundColor:'#00ffff',
        justifyContent:'center',
        alignItems:'center'
    },
    txtFont:{
        color:'#0101DF'
    }
})