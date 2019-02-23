
import React,{Component} from "react"
import {
    View,
    Button,
    StyleSheet,
    Text,
    ScrollView,
} from "react-native"
import {
    createStackNavigator,
    createAppContainer,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    SafeAreaView,
    DrawerItems
} from 'react-navigation';

import HomePage from "../src/pages/HomePage";
import Page1 from "../src/pages/Page1"; 
import Page2 from "../src/pages/Page2";
import Page3 from "../src/pages/Page3";
import DrawerOne from "../src/pages/DrawerOne";
import DrawerTwo from "../src/pages/DrawerTwo";
import Ionicons from 'react-native-vector-icons/Ionicons';
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
            )
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


