import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View,Image,
    TextInput } from 'react-native'

import Header from "../components/header3"
// import EmptyInput from '../components/emptyInput'
import CustomButton from '../components/btn'
import TouchableBtn from '../components/touchableBtn'
import { Ionicons } from '@expo/vector-icons'

export default function enterPhoneNo(props) {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View>
                <View>
                    <Header onBack={() => props.navigation.goBack()}  />
                </View>
                <ScrollView>
                    <View style={{ margin: 20, marginTop: 50, width: '80%' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Enter Phone Number</Text>
                        <Text>Please add your phone</Text>
                        <Text>to verify OTP</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.sectionStyle}>
                            <View style={styles.sectionStyle2}>
                                <Image source={require("../assets/img/flag.png")} style={styles.imgStyle} />
                                <TextInput
                                    style={{ flex: 1, fontSize: 20, letterSpacing: 5, fontWeight: 'normal', }}
                                    placeholder="+234 000 000 000"
                                    placeholderTextColor="grey"
                                    keyboardType="phone-pad"
                                />
                                <Ionicons name="ios-phone-portrait" size={24} color="black" style={{ marginRight: 18, }} />
                            </View>
                            <TouchableBtn name="I dont't receive code" color="red"/>
                        </View>


                        <View>
                            <CustomButton name='Verify Phone Number' onNavigate={() => props.navigation.navigate('Otp')} />
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionStyle: {
        margin: 20,
        marginTop: 20,
    },
    sectionStyle2:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'#dddd',
        height:60,
        borderRadius: 10,
        marginLeft:5,
        marginTop: 6,
        marginBottom: 6,
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

