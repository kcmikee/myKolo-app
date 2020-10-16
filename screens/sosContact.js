import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View,Image,TextInput } from 'react-native'

import Header from "../components/header3"
import EmptyInput from '../components/emptyInput'
import CustomInput from '../components/textInput'
import CustomButton from '../components/btn'
import TouchableBtn from '../components/touchableBtn'
import { Ionicons } from '@expo/vector-icons'

export default function sosContact(props) {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View>
                <View>
                    <Header onBack={()=>props.navigation.goBack()} text='Step 2 of 4'/>
                </View>
                <ScrollView>
                    <View style={{margin:20, marginTop: 50, width:'80%'}}>
                        <Text style={{fontSize:30, fontWeight: 'bold',}}>Emergency Contact</Text>
                        <Text>Please fill in the details below</Text>
                    </View>
                        
                        <View style={styles.sectionStyle}>
                            <EmptyInput name="Name" />
                            <View style={styles.sectionStyle2}>
                                <Image source={require("../assets/img/flag.png")} style={styles.imgStyle}/>
                                <TextInput
                                    style={{flex:1, fontSize: 20,letterSpacing:5,fontWeight: 'normal',}}
                                    placeholder="+234 000 000 000"
                                    placeholderTextColor="grey"
                                    keyboardType="phone-pad"
                                    />
                                    <Ionicons name="ios-phone-portrait" size={24} color="black" style={{marginRight: 18,}}/>
                            </View>
                            <CustomInput email="Email address"/>
                        </View>


                        <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center',}}>
                            <TouchableHighlight style={{backgroundColor: 'skyblue', padding:16,borderRadius: 8,}}>
                                <Ionicons name='md-male' size={24} color='white'/>
                            </TouchableHighlight>
                            <TouchableHighlight style={{padding:16,borderRadius: 8, borderWidth: 1, borderColor:"#dddd", marginLeft: 10,}}>
                                <Ionicons name='md-female' size={24} color='black'/>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.sectionStyle}>
                            <EmptyInput name="Relationship" />
                        </View>

                        <View>
                            <CustomButton name='Continue' onNavigate={()=>props.navigation.navigate('Education')}/>
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
    },
    sectionStyle2:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'#dddd',
        height:60,
        borderRadius: 10,
        marginTop: 5,
        marginLeft: 1,
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
