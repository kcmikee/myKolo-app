import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

const touchableBtn = (props) => {
    return (
        <TouchableHighlight 
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={props.onNavigate}
                    style={{alignSelf: props.alignSelf,}}>
                    <Text style={{color:props.color,fontSize: 16, }}>
                        {props.name}
                    </Text>
                </TouchableHighlight>
    )
}

export default touchableBtn

// const styles = StyleSheet.create({})
