
import React,{Component} from "react";

import {
    createBottomTabNavigator
} from 'react-navigation';

// import HomePage from "../src/pages/HomePage";
import Page1 from "../src/pages/Page1"; 
import Page2 from "../src/pages/Page2";
import SFList from "../src/pages/SwipeableFlastList";

import Ionicons from 'react-native-vector-icons/Ionicons';

import FlatListCom from "../src/pages/FlatList";


const AppTabNavigator = createBottomTabNavigator({
    SFList: {
        screen: SFList,
        navigationOptions: () => ({
            tabBarLabel: '首页',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons 
                    name={focused?'md-home' : 'md-home'}
                    size={26}
                    style={focused?{ color: tintColor }:{color:'#ccc'}}
                />
            ),
        })
    },
    // FlatList:{
    //     screen:FlatList,
    //     navigationOptions:{
    //         title:'FlatList'
    //     }
    // },
    FlatListCom: {
        screen: FlatListCom,
        navigationOptions: () => ({
            tabBarLabel: '发现',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons 
                    name={ focused? 'md-medal' : 'md-medal' }
                    size={26}
                    style={ focused? { color: tintColor }:{ color:'#ccc' } }
                />
            ),
          
        })
    },
    
    Page2: {
        screen: Page2,
        navigationOptions: () => ({
            tabBarLabel: '我的',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons 
                    name={focused?'md-person' : 'md-person'}
                    size={26}
                    style={focused?{ color: tintColor }:{color:'#ccc'}}
                />
            ),
        })
    },
},
{
    initialRouteName: 'Page2',
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'red',
        // style: {
        //   backgroundColor: '#ccc'
        // },
    },
    
})

export default AppTabNavigator;