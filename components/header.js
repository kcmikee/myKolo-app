import React from 'react'
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function header(props) {
    return (
        <View style={{flexDirection: 'row', height:50,marginTop: 28,}}>
            <View style={{flex:1,justifyContent: 'center', marginLeft: 20,}}>
                <Ionicons name="ios-arrow-back" size={26} color="white" />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-end',flex:1, marginRight: 30, }}>
                <TouchableHighlight 
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={props.onNavigate}>
                    <Text style={{color:'#fff',fontSize: 16,}}>
                        Skip Here
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({})
