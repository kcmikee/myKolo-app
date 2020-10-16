import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import Header from "../components/header3"
import CustomInput from '../components/textInput'
// import EmptyInput from '../components/emptyInput'
import CustomButton from '../components/btn'
import TouchableBtn from '../components/touchableBtn'

export default function signUpAlt(props) {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View>
                <View>
                    <Header onBack={()=>props.navigation.goBack()} text='Skip Here'/>
                </View>
                <ScrollView>
                    <View style={{margin:20, marginTop: 50, width:'80%'}}>
                        <Text style={{fontSize:35, fontWeight: 'bold',}}>Sign up</Text>
                        <Text>Require information to account creations</Text>
                    </View>
                    <View style={styles.sectionStyle}>
                        <CustomInput email="Email address"/>
                        <CustomInput email="Alternate email"/>
                        {/* <TouchableBtn name='Forgot Password' color='red' alignSelf='flex-end'/> */}
                    </View>
                    <View>
                        <CustomButton name='Continue' onNavigate={()=>props.navigation.navigate('Password')}/>
                    </View>
                    <View style={{margin:20}}>
                        <Text>Already have an Account</Text>
                        <TouchableBtn name='LOGIN' onNavigate={()=>props.navigation.navigate('SignIn')} color='red' alignSelf= 'flex-start'/>
                    </View>
                </ScrollView>
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
