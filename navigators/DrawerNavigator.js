
import React,{Component} from "react";
import {
    ScrollView,
    Text
} from "react-native";

import {
    createDrawerNavigator,
    SafeAreaView,
    DrawerItems
} from 'react-navigation';


import DrawerOne from "../src/pages/DrawerOne";
import DrawerTwo from "../src/pages/DrawerTwo";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const DrawerNavigator = createDrawerNavigator({
    DrawerOne:{
        screen:DrawerOne,
        navigationOptions:{
            drawerLabel:'drawerOne',
            drawerIcon:({tintColor}) => (
                <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{color:tintColor}}
                />
            )
        }
    },
    DrawerTwo:{
        screen:DrawerTwo,
        navigationOptions:{
            drawerLabel:'drawerTwo',
            drawerIcon:({tintColor}) => (
                <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{color:tintColor}}
                />
            ),

        }
    }
},{
    initialRouteName:'DrawerTwo',
    contentOptions:{
        activeTintColor:'purple'
    },
    contentComponent: (props) => (
        <ScrollView style={{backgroundColor:'#987656',flex:1}}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    )
})

export default DrawerNavigator;