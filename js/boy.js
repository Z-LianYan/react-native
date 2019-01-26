import react,{Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
// import Girl from "./girl";
class boy extends Component{
    constructor(props){
        super(props);
        this.state = {
            word:''
        }
    }
    render(){
        return(
            <View>
                <Text > I  am boy</Text>
                {/* <Text 
                   
                    onPress={()=>{
                        this.props.navigator.push({
                            component:Girl,
                            params:{
                                word:'一朵玫瑰',
                                onCallBack:(word)=>{
                                    this.setState({
                                        word:word
                                    })
                                }
                            }
                        })
                    }}>
                    送女孩一朵玫瑰
                </Text>
                <Text >{this.state.word}</Text> */}
            </View>
        )
    }
}

// const  styles = StyleSheet.create({
//     contaniner:{
//         flex:1,
//         backgroundColor:"gray",
//         justifyContent:"center"
//     },
//     text:{
//         fontSize:20
//     }
// })

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#F5FCFF',
//     },
//     page1:{
//       flex:1,
//     },
//     page2:{
//       flex:1,
//     },
//     imageIncon:{
//       width:20,
//       height:20
//     },
//     image:{
//       flex:1,
//     }
// });