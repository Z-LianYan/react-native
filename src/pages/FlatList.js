
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
} from 'react-native';

const TEAM_NAME = ['湖人','火箭','雷霆','雄鹿','勇士','凯尔特人','开拓者','热火','76人','猛龙','骑士','步行者','公牛','马刺']
export default class FlatListCom extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            dataArray:TEAM_NAME,
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
    render() {
        return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }}
            source={require('../../res/img/kebi.jpg')}>
                <FlatList
                    data={this.state.dataArray}
                    keyExtractor={(item, index) => item}
                    renderItem = {(item)=>this._renderFlatListItem(item)}
                    // refreshing = {this.state.isLoading}
                    // onRefresh = {()=>{
                    //     this.loadData();
                    // }}
                    refreshControl = {//下拉更新
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
                    ListFooterComponent = {()=>this._activityIndicator()}//上拉加载更多
                    onEndReached = {()=>this.loadData()}//当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                    // initialNumToRender = {10}
                    windowSize={100}//处理白屏 （屏幕外的区域渲染多少个屏幕单元，默认21个单元）
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
    height:200,
    margin:15,
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
  }
});
