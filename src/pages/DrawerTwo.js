import React,{Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';
import { red } from 'ansi-colors';

import {SegmentedBar,TabView,Projector,Carousel} from 'teaset'

export default class drawerOne extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    renderSlide(rend){
        return (
            <View>
                <Text style={{color:"red"}}>123</Text>
            </View>
        )
    }
    render(){
        const { navigation } = this.props 
        return (
            <View style={styles.drawerOneContainer}>
                <SegmentedBar 
                justifyItem='fixed' 
                indicatorPosition='bottom' 
                indicatorType="boxWidth">
                    <SegmentedBar.Item title='Apple'/>
                    <SegmentedBar.Item title='Banana' />
                    <SegmentedBar.Item title='Cherry' />
                    <SegmentedBar.Item title='Durian' />
                    <SegmentedBar.Item title='Filbert' />
                </SegmentedBar>



                <Carousel
                style={{height: 238}}
                control={
                    <Carousel.Control
                    style={{alignItems: 'flex-end'}}
                    dot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#5bc0de', padding: 4}}>□</Text>}
                    activeDot={<Text style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: '#5bc0de', padding: 4}}>■</Text>}
                    />
                }
                >
                    <Image style={{width: '100%', height: 238}} resizeMode='cover' source={require('../../res/img/kebi.jpg')} />
                    <Image style={{width: '100%', height: 238}} resizeMode='cover' source={require('../../res/img/oneself.jpg')} />
                    <Image style={{width: '100%', height: 238}} resizeMode='cover' source={require('../../res/img/zcjn.jpg')} />
                </Carousel>




            </View>
        )
    }

}


const styles = StyleSheet.create({
    drawerOneContainer:{
        flex:1,
        backgroundColor:'#00ffff',
        // justifyContent:'center',
        // alignItems:'center'
    },
    txtFont:{
        color:'#0101DF'
    }
})