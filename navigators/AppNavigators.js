
import React,{Component} from "react"
import {
    View,
    Button,
    StyleSheet,
} from "react-native"
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'

import HomePage from "../pages/HomePage"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2"
import Page3 from "../pages/Page3"

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
                    <Button
                        title = {params.mode === 'edit' ? '保存':'编辑'}
                        onPress={()=>{
                            setParams({
                                mode:params.mode === 'edit'? '':'edit'
                            })
                        }}
                    />
                )
            } 
        }
    },
});

export default App = createAppContainer(AppStackNavigator)