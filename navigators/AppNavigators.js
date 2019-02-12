
import React,{Component} from "react"
import {
    View,
    Button,
    StyleSheet,
    Text,
} from "react-native"
import {
    createStackNavigator,
    createAppContainer,
    createMaterialTopTabNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import HomePage from "../src/pages/HomePage"
import Page1 from "../src/pages/Page1"
import Page2 from "../pages/Page2"
import Page3 from "../pages/Page3"
import Ionicons from 'react-native-vector-icons/Ionicons'


const AppTabNavigator = createBottomTabNavigator({
    Page1: {
        screen: Page1,
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

    HomePage: {
        screen: HomePage,
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
      initialRouteName: 'Page1',
      tabBarPosition: 'bottom',
    //   lazy: true,
    //   swipeEnabled: true,
    //   tabBarOptions: {
    //     activeTintColor: 'red',
    //     style: {
    //       backgroundColor: '#fff',
    //     },
    //   }
    }
)


const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerTitle:"HomePage",
            headerStyle:{
                backgroundColor:'#FFF8DC',
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
                backgroundColor:'#FFF8DC',
                height:45
            },
            headerTitleStyle:{
                flex:1,
                textAlign: 'center',
            }
        })
    },
    Page3:{
        screen: Page3,
        navigationOptions:(props) => {
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params} = state;
            return {
                headerTitle: params? params.title:'this is Page3',
                headerStyle:{
                    backgroundColor:'#FFF8DC',
                    height:45
                },
                headerTitleStyle:{
                    flex:1,
                    textAlign:'center'
                },
                headerRight:(
                    <Text
                        style={{marginRight:20}}
                        onPress={()=>{
                            setParams({
                                mode:params.mode === 'edit'? '':'edit'
                            })
                        }}
                    >{params.mode === 'edit' ? '保存':'编辑'}</Text>
                ),
                headerLeft:(
                    <Text 
                    style={{marginLeft:20}}
                    onPress={()=>{
                        navigation.goBack();
                    }}>返回</Text>
                )
            } 
        }
    },
    AppNav:{
        screen:AppTabNavigator,
        navigationOptions:()=>({
            title:"this is AppTabNavigator",
            headerStyle:{
                height:45
            },
            headerTitleStyle:{
                flex:1,
                textAlign:'center'
            },
        })
    }
});

export default App = createAppContainer(AppStackNavigator)


// cd android && gradlew assembleRelease