import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import Header from "../components/header3"
import PasswordInput from '../components/passwordInput'
import CustomButton from '../components/btn'
// import TouchableBtn from '../components/touchableBtn'

export default function setPin(props) {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View>
                <View>
                    <Header onBack={()=>props.navigation.goBack()}/>
                </View>
                <ScrollView>
                    <View style={{margin:20, marginTop: 50, width:'80%'}}>
                        <Text style={{fontSize:35, fontWeight: 'bold',}}>Set Pin</Text>
                        <Text>Require information to account creations</Text>
                    </View>
                    <View style={styles.sectionStyle}>
                        <PasswordInput placeholder="PIN" name="ios-eye-off" color="#dddd"/>
                        <PasswordInput placeholder="Repeat PIN"  name="ios-eye-off" color="#dddd"/>
                    </View>
                    <View>
                        <CustomButton name='Continue' onNavigate={()=>props.navigation.navigate('Payment')}/>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionStyle:{
        margin:20,
        marginTop: 30,
    },
})
