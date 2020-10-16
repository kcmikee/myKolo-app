import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import Header from "../components/header3"
import EmptyInput from '../components/emptyInput'
import CustomButton from '../components/btn'
import TouchableBtn from '../components/touchableBtn'
import { Ionicons } from '@expo/vector-icons'

export default function basicInfo(props) {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View>
                <View>
                    <Header onBack={()=>props.navigation.goBack()} text='Step 1 of 4'/>
                </View>
                <ScrollView>
                    <View style={{margin:20, marginTop: 50, width:'80%'}}>
                        <Text style={{fontSize:35, fontWeight: 'bold',}}>Basic Information</Text>
                        <Text>Please fill in the details below</Text>
                    </View>
                   <ScrollView>
                        <View style={styles.sectionStyle}>
                            <EmptyInput name="First name" />
                            <EmptyInput name="Last name"/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center',}}>
                            <TouchableHighlight style={{backgroundColor: 'skyblue', padding:16,borderRadius: 8,}}>
                                <Ionicons name='md-male' size={24} color='white'/>
                            </TouchableHighlight>
                            <TouchableHighlight style={{padding:16,borderRadius: 8, borderWidth: 1, borderColor:"#dddd", marginLeft: 10,}}>
                                <Ionicons name='md-female' size={24} color='black'/>
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection: 'row',justifyContent:'center', alignItems: 'center',}}>
                            <EmptyInput name="Status"/>
                            <EmptyInput name="Age"/>
                        </View>
                        <View style={styles.sectionStyle}>
                            <EmptyInput name="Occupation" />
                            <EmptyInput name="Address"/>
                            <EmptyInput name="Local government"/>
                            <EmptyInput name="Input Address"/>
                        </View>
                        <View>
                            <CustomButton name='Continue' onNavigate={()=>props.navigation.navigate('Sos')}/>
                        </View>
                        <View style={{margin:20}}>
                            <Text>Already have an Account</Text>
                            <TouchableBtn name='LOGIN' onNavigate={()=>props.navigation.navigate('SignIn')} color='red' alignSelf= 'flex-start'/>
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
