import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const emptyInput = (props) => {
    return (
        <View style={styles.sectionStyle}>
                    <TextInput
                        style={{fontSize: 15,fontWeight: 'normal',margin: 15,}}
                        placeholder={props.name}
                        placeholderTextColor="grey"
                        />
                </View>
    )
}

export default emptyInput

const styles = StyleSheet.create({
    sectionStyle:{
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderWidth: 1,
        borderColor:'#dddd',
        height:60,
        borderRadius: 10,
        marginTop: 6,
        marginLeft: 4,
    },
})
