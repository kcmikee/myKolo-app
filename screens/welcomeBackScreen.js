import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, TextInput, Image, TouchableHighlight } from 'react-native'

import Header from '../components/header3'
import CustomButton from '../components/btn'

export default function welcomeBackScreen(props) {
    return (
        <SafeAreaView>
            <View style={{flex:1,flexDirection: 'column',}}>
                <View style={{flex:1}}>
                    <Header onBack={()=>props.navigation.goBack()} text='Skip Here'/>
                </View>
                <View style={{flex:1, marginLeft: 20,marginTop: 140, width:'80%'}}>
                    <Text style={styles.bold}>Welcome back!</Text>
                    <Text style={{fontSize: 18,textAlign:'justify',fontWeight: 'normal',}}>Enter your registered phone number</Text>
                    <Text>to log in</Text>
                </View>
                <View style={styles.sectionStyle}>
                    <Image source={require("../assets/img/flag.png")} style={styles.imgStyle}/>
                    <TextInput
                        style={{flex:1, fontSize: 20,letterSpacing:5,fontWeight: 'normal',}}
                        placeholder="+234 000 000 000"
                        placeholderTextColor="grey"
                        keyboardType="phone-pad"
                        />
                        <Ionicons name="ios-phone-portrait" size={24} color="black" style={{marginRight: 18,}}/>
                </View>
                <View>
                    <CustomButton name='Sign in' onNavigate={()=>props.navigation.navigate('SignIn')}/>
                    <Text style={{color:'red',fontSize: 18,marginLeft: 28,}}>Help?</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bold:{
        fontWeight: "bold",
        fontSize: 35,
        letterSpacing:3
    },
    sectionStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'#dddd',
        height:60,
        borderRadius: 10,
        margin:20,
        marginTop: 120,
    },
    imgStyle:{
        padding:10,
        margin:5,
        height:25,
        width:25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
})
