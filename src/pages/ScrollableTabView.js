

import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button,
    FlatList,
    ListView
} from 'react-native';
import HttpUtils from '../utils/HttpUtils'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import RowCell from "../compoments/ScrollableTabView/RowCell"
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

class SAView extends Component{
    constructor(props){
        super(props);
        // this.dataRespository = new DataRespository();
        this.state = {
           result:"",
           dataSource: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2}),
        }
    }
    componentWillMount(){
        this.onLoad();
    }
    onLoad(){
        let url=URL+this.props.tabLabel+QUERY_STR;
        HttpUtils.get(url).then((res)=>{
            this.setState({
                // dataSource:JSON.stringify(res)
                dataSource:this.state.dataSource.cloneWithRows(res.items)
            })
        }).catch(error=>{
            this.setState({
                result:JSON.stringify(error)
            })
        })
    }
    renderRow(data){
        return <RowCell data={data}/>
    }
    render(){
        return <View>
               {/* <FlatList
                    data={this.state.dataSource}
                    keyExtractor={(item, index) => item}
                    renderItem = {(item)=>this._renderFlatListItem(item)}
                    
                    
                    windowSize={100}//处理白屏 （屏幕外的区域渲染多少个屏幕单元，默认21个单元）
                /> */}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data)=>this.renderRow(data)}
                />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCFF',
    },
    
});
