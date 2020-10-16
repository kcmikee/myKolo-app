import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import Header from "../components/header3"
import EmptyInput from '../components/emptyInput'
import CustomButton from '../components/btn'
import TouchableBtn from '../components/touchableBtn'
import { Ionicons } from '@expo/vector-icons'

export default function education(props) {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View>
                <View>
                    <Header onBack={()=>props.navigation.goBack()} text='Step 3 of 4'/>
                </View>
                <ScrollView>
                    <View style={{margin:20, marginTop: 50, width:'80%'}}>
                        <Text style={{fontSize:35, fontWeight: 'bold',}}>Education</Text>
                        <Text>Please fill in the details below</Text>
                    </View>
                   <ScrollView>
                        <View style={styles.sectionStyle}>
                            <EmptyInput name="Bachelors Degree" />
                            <EmptyInput name="Masters Degree"/>
                            <EmptyInput name="Ph.D"/>
                            <EmptyInput name="Others"/>
                        </View>
                        
                        
                        <View>
                            <CustomButton name='Continue' onNavigate={()=>props.navigation.navigate('Kin')}/>
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
