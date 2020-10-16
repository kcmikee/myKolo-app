import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import Header from "../components/header3"
import CustomInput from '../components/textInput'
import CustomButton from '../components/btn'
import TouchableBtn from '../components/touchableBtn'
import { Ionicons } from '@expo/vector-icons'

export default function forgotPassword(props) {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View>
                <View>
                    <Header onBack={()=>props.navigation.goBack()} text='Cancel'/>
                </View>
                <ScrollView>
                    <View style={{margin:20, marginTop: 50, width:'80%'}}>
                        <Text style={{fontSize:30, fontWeight: 'bold',}}>Forgot Password</Text>
                        <Text>Require  information to account creactions</Text>
                    </View>
                   <ScrollView>
                        <View style={styles.sectionStyle}>
                            <CustomInput email="Email address"/>
                        </View>
                        
                        
                        <View>
                            <CustomButton name='Send Link' onNavigate={()=>props.navigation.navigate('Phone')}/>
                        </View>
                   </ScrollView>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionStyle:{
        margin:20,
        marginTop: 20,
    },
})
