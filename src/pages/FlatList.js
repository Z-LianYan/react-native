
import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Button,
    FlatList
} from 'react-native';

const TEAM_NAME = ['湖人','火箭','雷霆','雄鹿','勇士','凯尔特人','开拓者','老鹰','森林狼','尼克斯','热火','国王','76人','篮网','猛龙','骑士','太阳','奇才','黄蜂','步行者','公牛','魔术','马刺','活塞']
export default class FlatListCom extends Component<Props> {
    constructor(Props){
        super(Props);
        this.state = {
        }
    }
     _renderFlatListItem(data){
        return <View style={styles.itemBox}>
            <Text style={styles.itemCon}>{data.item}</Text>
        </View>
    }
    render() {
        return (
        <View style={styles.container}>
            <FlatList
                data={TEAM_NAME}
                keyExtractor={(item, index) => item}
                renderItem = {(item)=>this._renderFlatListItem(item)}
            />
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
    marginRight:15,
    marginLeft:15,
    marginBottom:15,
    alignItems:'center',
    justifyContent:'center'
  },
  itemCon:{
    color:'white',
    fontSize:30
  }
});
