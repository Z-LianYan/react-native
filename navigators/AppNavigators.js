
import React,{Component} from "react"
import {
    Text,
} from "react-native";

import {
    createStackNavigator,
    createAppContainer,
    createMaterialTopTabNavigator,
} from 'react-navigation';

import HomePage from "../src/pages/HomePage";
import Page1 from "../src/pages/Page1"; 
import Page2 from "../src/pages/Page2";
import Page3 from "../src/pages/Page3";




import DrawerNavigator from './DrawerNavigator';
import AppTabNavigator from './BottomTabNavigator';



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
    },
    DrawerNav:{
        screen: DrawerNavigator,
        navigationOptions:()=>({
            title:"this is DrawerNavigator",
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


