import react,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

class girl extends Component{
    constructor(props){
        super(props);
        this.state = {
            word:''
        }
    }
    render(){
        return(
            <View >
                <Text >I am girl</Text>
                <Text >{this.props.word}</Text>
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//     contaniner:{
//         flex:'1',
//         backgroundColor:'purple',
//         justifyContent:'center'
//     },
//     text:{
//         fontSize:20
//     }
// })
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    page1:{
      flex:1,
    },
    page2:{
      flex:1,
    },
    imageIncon:{
      width:20,
      height:20
    },
    image:{
      flex:1,
    }
});