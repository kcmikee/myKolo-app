import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View ,Image} from 'react-native'

import Header from "../components/header3"
// import CustomInput from '../components/textInput'
import CustomButton from '../components/btn'
import TouchableBtn from '../components/touchableBtn'
// import { Ionicons } from '@expo/vector-icons'

export default function otp(props) {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View style={{marginTop: 5,}}>
                <View>
                    <Header onBack={()=>props.navigation.goBack()} />
                </View>
                <ScrollView>
                    <View style={{margin:20, marginTop: 50, width:'80%'}}>
                        <Text style={{fontSize:35, fontWeight: 'bold',}}>OTP Sent!</Text>
                        <Text stye={{textAlign: 'justify',}}>Enter the 4-digit code sent to you at +234 804 993 2493.
                            <TouchableBtn name="Did you enter the current number?" color="red"/>
                        </Text>
                    </View>
                        <View style={styles.sectionStyle}>
                            <TouchableHighlight style={{borderWidth: 1,borderColor:'#dddd', width:60,height:60}}>
                                <TextInput placeholder='5' style={{padding:10, justifyContent: 'center',alignSelf: 'center',fontSize:20}} keyboardType="phone-pad"/>
                            </TouchableHighlight>
                            <TouchableHighlight style={{borderWidth: 1,borderColor:'#dddd', width:60,height:60}}>
                                <TextInput placeholder='5' style={{padding:10, justifyContent: 'center',alignSelf: 'center',fontSize:20}} keyboardType="phone-pad"/>
                            </TouchableHighlight>
                            <TouchableHighlight style={{borderWidth: 1,borderColor:'#dddd', width:60,height:60}}>
                                <TextInput placeholder='5' style={{padding:10, justifyContent: 'center',alignSelf: 'center',fontSize:20}} keyboardType="phone-pad"/>
                            </TouchableHighlight>
                            <TouchableHighlight style={{borderWidth: 1,borderColor:'#dddd', width:60,height:60}} >
                                <TextInput placeholder='5' style={{padding:10, justifyContent: 'center',alignSelf: 'center',fontSize:20}} keyboardType="phone-pad"/>
                            </TouchableHighlight>
                        </View>
                        
                        
                        <View>
                            <CustomButton name='Resend OTP' onNavigate={()=>props.navigation.navigate('SetPin')}/>
                            <View style={{marginLeft:20}}>
                                <TouchableBtn name="I didn't receive code" color="red"/>
                            </View>
                        </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionStyle:{
        margin:20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})
