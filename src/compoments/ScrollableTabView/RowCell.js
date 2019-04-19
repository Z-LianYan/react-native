import React,{Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";

export default class RowCell extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return <TouchableOpacity style={styles.containner}>
            <View style={styles.cellRowBox}>
                <Text style={styles.topTitle}>{this.props.data.full_name}</Text>
                <Text style={styles.contents}>{this.props.data.description}</Text>
                <View style={styles.cellBottomBox}>
                    <View style={styles.authors}>
                        <Text>Author:</Text>
                        <Image
                            style={styles.cellBottomImg}
                            source={{uri:this.props.data.owner.avatar_url}}
                        />
                    </View>
                    <View style={styles.authors}>
                        <Text>Stars:</Text>
                        <Text>{this.props.data.stargazers_count}</Text>
                    </View>
                    <Image
                        style={styles.cellBottomImg}
                        source={require("../../../res/img/ic_star.png")}
                    />
                </View>
            </View>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    containner:{
        flex:1
    },
    cellRowBox:{
        backgroundColor:'#fff',
        padding:10,
        marginLeft:5,
        marginRight:5,
        borderWidth:0.5,
        marginVertical:3,
        borderRadius:5,
        shadowColor: 'gray',
        // shadowOffset: {width:0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation:3
    },
    cellBottomBox:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cellBottomImg:{
        height:20,
        width:20
    },
    authors:{
        flexDirection:'row',
        alignItems:'center'
    },
    topTitle:{
        fontSize:20,
        color:'#000',
        marginBottom:5,
    },
    contents:{
        fontSize:18,
        color:'#ccc',
        marginBottom:5
    }
    
})