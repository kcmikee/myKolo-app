import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Header from "../components/header3"
import CustomInput from '../components/textInput'
import PasswordInput from '../components/passwordInput'
import CustomButton from '../components/btn'
import TouchableBtn from '../components/touchableBtn'

export default function signIn(props) {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View>
                <View>
                    <Header onBack={()=>props.navigation.goBack()} text='Skip Here'/>
                </View>
                <View style={{margin:20, marginTop: 50, width:'80%'}}>
                    <Text style={{fontSize:35, fontWeight: 'bold',}}>Save With MyKolo</Text>
                    <Text>Sign in to continue app</Text>
                </View>
                <View style={styles.sectionStyle}>
                    <CustomInput email="Email address"/>
                    <PasswordInput placeholder="Password" name="ios-lock" color="red"/>
                    <TouchableBtn name='Forgot Password' color='red' alignSelf='flex-end'/>
                </View>
                <View>
                    <CustomButton name='Sign in Account' onNavigate={()=>props.navigation.navigate('SignUp')}/>
                </View>
                <View style={{margin:20}}>
                    <Text>Don't have an Account</Text>
                    <TouchableBtn name='Register' color='red' alignSelf= 'flex-start' onNavigate={()=>props.navigation.navigate('SignUp')}/>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionStyle:{
        margin:20,
        marginTop: 80,
    },
})
