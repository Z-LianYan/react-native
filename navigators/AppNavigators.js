
import React,{Component} from "react"
import {
    View
} from "react-native"
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'

import HomePage from "../pages/HomePage"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2"

const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerTitle:"HomePage",
            headerStyle:{
                backgroundColor:'#58bc58',
                height:45
            },
            headerTitleStyle:{
                flex:1,
                textAlign: 'center',
            },
        },
    },
    Page1:{
        screen: Page1,
        navigationOptions:{
            header:null
        }
    },
    Page2:{
        screen: Page2,
        navigationOptions: ({navigation}) =>({
            headerTitle:navigation.state.params.name,
            headerStyle:{
                backgroundColor:'#58bc58',
                height:45
            },
            headerTitleStyle:{
                flex:1,
                textAlign: 'center',
            }
        })
    }
});

export default App = createAppContainer(AppStackNavigator)

