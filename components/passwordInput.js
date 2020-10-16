import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const passwordInput = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor:props.color,
            height:60,
            borderRadius: 10,
            marginTop: 6,
        }}>
                    <TextInput
                        style={{flex:1, fontSize: 15,fontWeight: 'normal',margin: 15,}}
                        placeholder={props.placeholder}
                        secureTextEntry={true}
                        placeholderTextColor="grey"
                        />
                        <Ionicons name={props.name} size={24} color="black" style={{marginRight: 18,}}/>
                </View>
    )
}

export default passwordInput

// const styles = StyleSheet.create({
//     sectionStyle:{
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor:'red',
//         height:60,
//         borderRadius: 10,
//         marginTop: 6,
//     },
// })
