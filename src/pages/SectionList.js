
import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Button,
    FlatList,
    RefreshControl,
    ActivityIndicator,//菊花（上拉刷新加载更多）
    ImageBackground,
    SectionList,
} from 'react-native';

const TEAM_NAME = [{
    title:'太平洋分区',
    data:['勇士','快船','国王','湖人','太阳']

},{
    title:'西北分区',
    data:['掘金','雷霆','开拓者','爵士','森林狼']
},{
    title:'西南分区',
    data:['火箭','马刺','鹈鹕','独行侠','灰熊']
},{
    title:'中央分区',
    data:['雄鹿','步行者','活塞','公牛','骑士']
},{
    title:'太平洋分区',
    data:['猛龙','76人','凯尔特人','篮网','尼克斯']
},{
    title:'东南分区',
    data:['黄蜂','魔术','热火','奇才','老鹰']
}]
// const TEAM_NAME = ['湖人','火箭','雷霆','雄鹿','勇士','凯尔特人','开拓者','热火','76人','猛龙','骑士','步行者','公牛','马刺']

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
    _renderSectionHeader({section}){
        return <View style={styles.sectionContainer}>
            <Text>{section.title}</Text>
        </View>
    }
    render() {
        return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }}
            source={require('../../res/img/kebi.jpg')}>
                <SectionList
                    sections={this.state.dataArray}
                    keyExtractor={(item, index) => item}
                    renderItem = {(data)=>this._renderFlatListItem(data)}
                    // refreshing = {this.state.isLoading}
                    // onRefresh = {()=>{
                    //     this.loadData();
                    // }}
                    refreshControl = {
                        <RefreshControl
                            title = {'Loading'}
                            colors = {['red']}//android platform
                            tintColor = {'purple'}//ios platform
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
                    renderSectionHeader={(data)=>this._renderSectionHeader(data)}
                    ItemSeparatorComponent={()=><View style={styles.saparator}/>}
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
    backgroundColor:"#ccc",
    height:50,
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
  sectionContainer:{
      height:30,
      backgroundColor:'#8080c0',
      alignItems:'center',
      justifyContent:'center'
  },
  saparator:{
    height:0.3,
    // border:'1px solid gray',
    flex:1,
    backgroundColor:'gray'
  }
});
