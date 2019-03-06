

import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button
} from 'react-native';
import HttpUtils from '../utils/HttpUtils'
const URL = "https://api.github.com/search/repositories?q="
const QUERY_STR = '&sort=stars'
export default class Popular extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
           result:''
        }
    }
    onLoad(){
        let url=this.genUrl(this.text)
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
    genUrl(key){
        return URL+key+QUERY_STR;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <TextInput
                    style={styles.TxtInt}
                    onChangeText={text=>this.text=text}/>
                    <Text
                        style={styles.btn}
                        onPress={()=>{
                            this.onLoad()
                        }}>搜索</Text>
                        {/* <Button
                            /> */}
                </View>
                
                <Text style={styles.txtContent}>{this.state.result}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCFF',
    },
    inputBox:{
        flexDirection:'row',
        alignItems:'center'
    },
    TxtInt:{
        height:50,
        flex:1,
        borderWidth:1,
        borderColor:'#58bc58'
    },
    btn:{
        height:50,
        width:50,
        textAlign:'center',
        lineHeight:50,
        alignItems:'center',
        // textAlignVertical:'center',
        backgroundColor:"#58bc58",
        color:'#fff'
        
    },
    txtContent:{
        flex:1,
        // borderWidth:1,
        // borderColor:'red'
    }
});
