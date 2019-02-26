
import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Button,
    FlatList,
    RefreshControl,
    ActivityIndicator,
    ImageBackground,
    SwipeableFlatList,
    TouchableHighlight
} from 'react-native';

const TEAM_NAME = ['湖人','火箭','雷霆','雄鹿','勇士','凯尔特人','开拓者','热火','76人','猛龙','骑士','步行者','公牛','马刺']
export default class FlatListCom extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            dataArray:TEAM_NAME,
            uri:'../../res/img/kebi.jpg'
        }
    }
    loadData(refreshing){
        if(refreshing){
            this.setState({
                isLoading:true
            });
        }
        
        setTimeout(()=>{
            let dataArray = [];
            if(refreshing){
                for (let i = this.state.dataArray.length - 1; i>=0; i--) {
                    dataArray.push(this.state.dataArray[i]);
                }
            }else{
                dataArray = this.state.dataArray.concat(TEAM_NAME)
            }
            
            this.setState({
                dataArray:dataArray,
                isLoading:false,
            });
        },1000);
    }
     _renderFlatListItem(data){
        return <View style={styles.itemBox}>
            <Text style={styles.itemCon}>{data.item}</Text>
        </View>
    }
    _activityIndicator(){
        return <View style={styles.indicatorBox}>
            <ActivityIndicator
            style={styles.indicator}
            size={'large'}
            color = {'red'}
            animating={true}
            />
            <Text>正在加载更多...</Text>
        </View>
    }
    _quickActions(){
        return <View style={styles.quickactionsBox}>
            <TouchableHighlight
            onPress={()=>{
                alert('确定要删除吗？')
            }}
            >
                <View style={styles.quickBox}>
                    <Text style={styles.quickText}>删除</Text>
                </View>
            </TouchableHighlight>
        </View>
    }
    render() {
        return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }}
            source={require('../../res/img/kebi.jpg')}>
                <SwipeableFlatList
                    data={this.state.dataArray}
                    keyExtractor={(item, index) => item}
                    renderItem = {(item)=>this._renderFlatListItem(item)}
                    // refreshing = {this.state.isLoading}
                    // onRefresh = {()=>{
                    //     this.loadData();
                    // }}
                    refreshControl = {
                        <RefreshControl
                            title = {'Loading'}
                            colors = {['red']}
                            tintColor = {'purple'}
                            refreshing = {this.state.isLoading}
                            onRefresh = {()=>{
                                this.loadData(true);
                            }}
                        />
                    }
                    ListFooterComponent = {()=>this._activityIndicator()}
                    onEndReached = {()=>this.loadData()}
                    // initialNumToRender = {10}
                    windowSize={300}//处理白屏 （屏幕外的区域渲染多少个屏幕单元，默认21个单元）
                    renderQuickActions={()=>this._quickActions()}
                    maxSwipeDistance={100}
                    bounceFirstRowOnMount={false}//设置为false时刚进入页面第一个item不会自动向左划动
                />
            </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCFF',
    },
    itemBox:{
        backgroundColor:"purple",
        height:100,
        marginBottom:15,
        marginRight:15,
        marginLeft:15,
        alignItems:'center',
        justifyContent:'center'
    },
    itemCon:{
        color:'white',
        fontSize:30
    },
    indicatorBox:{
        alignItems:'center'
    },
    indicator:{
        marginBottom:5
    },
    quickactionsBox:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:15,
        marginBottom:15
    },
    // highLight:{
    //     flex:1,
    //     marginLeft:15
    // },
    quickBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:'red',
        color:'#fff',
        padding:10,
        width:300,
        color:'#fff',
    },
    quickText:{
        color:'#fff',
        fontSize:30,
    }
});
