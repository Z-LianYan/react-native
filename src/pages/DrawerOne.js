import React,{Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';


export default class drawerOne extends Component<Props> {
    constructor(props){
        super(props);
    }
    render(){
        const {navigation} = this.props
        return (
            <View style={styles.drawerOneContainer}>
                <Text>welcome to drawerOne</Text>
                <Text/>
                <Button
                    title='Open Drawer'
                    onPress= {() =>{
                        navigation.openDrawer()
                    }}
                />
                <Text/>
                <Button
                    title='Go Drawertwo'
                    onPress= {() =>{
                        navigation.navigate("DrawerTwo")
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
        backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center'
    },
    // btnBg:{
    //     backgroundColor:'red'
    // }
})