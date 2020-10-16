import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const textInput = (props) => {
    return (
        <View style={styles.sectionStyle}>
                    <TextInput
                        style={{flex:1, fontSize: 15,fontWeight: 'normal',margin: 15,}}
                        placeholder={props.email}
                        placeholderTextColor="grey"
                        />
                        <Ionicons name="ios-mail" size={24} color="black" style={{marginRight: 18,}}/>
                </View>
    )
}

export default textInput

const styles = StyleSheet.create({
    sectionStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'#dddd',
        height:60,
        borderRadius: 10,
        marginTop: 6,
    },
})
