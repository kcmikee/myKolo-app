import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import Header from "../components/header3"
// import PasswordInput from '../components/passwordInput'
import CustomButton from '../components/btn'
import TouchableBtn from '../components/touchableBtn'

export default function profile(props) {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View>
                <View>
                    <Header onBack={()=>props.navigation.goBack()}/>
                </View>
                <View style={styles.sectionStyle}>
                    <TouchableHighlight>
                        <Image source={require('../assets/img/male-avater.png')} style={{height:100, width:100}}/>
                    </TouchableHighlight>
                    <TouchableHighlight>
                       <View>
                            <Text style={{fontSize: 18,}}>Upload</Text>
                            <Text style={{fontSize: 18,}}>Profile Picture</Text>
                       </View>
                    </TouchableHighlight>
                </View>
                <View style={{marginTop: 120,}}>
                    <CustomButton name='Sign up Account' onNavigate={()=>props.navigation.navigate('Basic')}/>
                </View>
                <View style={{margin:20}}>
                    <Text>Already have an Account</Text>
                    <TouchableBtn name='LOGIN' onNavigate={()=>props.navigation.navigate('SignIn')} color='red' alignSelf= 'flex-start'/>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionStyle:{
        flexDirection: 'row',
        margin:20,
        marginTop: 200,
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
    },
})
