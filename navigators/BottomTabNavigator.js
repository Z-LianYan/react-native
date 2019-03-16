
import React,{Component} from "react";

import {
    createBottomTabNavigator
} from 'react-navigation';

// import HomePage from "../src/pages/HomePage";
import Page1 from "../src/pages/Page1"; 
import Page2 from "../src/pages/Page2";
import SFList from "../src/pages/SwipeableFlastList";
import SectonList from "../src/pages/SectionList";
import Popular from "../src/pages/Popular";
import Scrollable_tabView from "../src/pages/ScrollableTabView";

import Ionicons from 'react-native-vector-icons/Ionicons';

import FlatListCom from "../src/pages/FlatList";


const AppTabNavigator = createBottomTabNavigator({
    SFList: {
        screen: SFList,
        navigationOptions: () => ({
            tabBarLabel: '首页',
            headerTitle: '123456789',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons 
                    name={focused?'md-home' : 'md-home'}
                    size={26}
                    style={focused?{ color: tintColor }:{color:'#ccc'}}
                />
            ),
        })
    },
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

    
    Popular:{
        screen: Popular,
        navigationOptions: () => ({
            tabBarLabel: '最热',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons 
                    name={focused?'md-heart' : 'md-heart'}
                    size={26}
                    style={focused?{ color: tintColor }:{color:'#ccc'}}
                />
            ),
        })
    },
    Scrollable_tabView:{
        screen: Scrollable_tabView,
        navigationOptions: () => ({
            tabBarLabel: '可滚动',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons 
                    name={focused?'md-radio-button-on' : 'md-radio-button-on'}
                    size={26}
                    style={focused?{ color: tintColor }:{color:'#ccc'}}
                />
            ),
        })
    },
    
    sectonList: {
        screen: SectonList,
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
    initialRouteName: 'sectonList',
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