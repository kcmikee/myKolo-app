import React from 'react'
import { StyleSheet, Text, View,TouchableHighlight,Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function header2(props) {
    return (
        <View style={{flexDirection: 'row', height:50,marginTop: 28,}}>
            <View style={{flex:1,justifyContent: 'center', marginLeft: 20,}}>
                <TouchableHighlight 
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={()=>props.onBack()}>
                <Ionicons name="ios-arrow-back" size={26} color="#000" />
                </TouchableHighlight>
            </View>
            <View style={{flex:1,alignItems: 'center',justifyContent: 'center',}}>
                <Image source={require('../assets/img/KOlo.png')} style={{height:50,width:80}}/>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-end',flex:1, marginRight: 30, }}>
                <TouchableHighlight 
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={props.onNavigate}>
                    <Text style={{color:'#000',fontSize: 16,}}>
                        {props.text}
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({})
