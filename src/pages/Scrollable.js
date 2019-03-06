

import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button,
    FlatList
} from 'react-native';
import HttpUtils from '../utils/HttpUtils'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
const URL = "https://api.github.com/search/repositories?q=";
const QUERY_STR = '&sort=stars';
export default class Popular extends Component<Props> {
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                renderTabBar={()=><ScrollableTabBar/>}>
                    <SAView tabLabel="ios"></SAView>
                    <SAView tabLabel="android"></SAView>
                    <SAView tabLabel="javaScript"></SAView>
                    <SAView tabLabel="java"></SAView>
                </ScrollableTabView>
            </View>
        );
    }
}

class SAView extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {
           result:''
        }
    }
    componentWillMount(){
        this.onLoad();
    }
    onLoad(){
        let url=URL+this.props.tabLabel+QUERY_STR;
        HttpUtils.get(url).then((res)=>{
            this.setState({
                result:JSON.stringify(res)
            })
        }).catch(error=>{
            this.setState({
                result:JSON.stringify(error)
            })
        })
    }
    _renderFlatListItem(data){
        return <View>
            <Text>123</Text>
        </View>
    }
    render(){
        return <View>
                <FlatList
                    data={this.state.dataArray}
                    keyExtractor={(item, index) => item}
                    renderItem = {(item)=>this._renderFlatListItem(item)}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCFF',
    },
    
});
