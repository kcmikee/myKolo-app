import React from "react";
import { StyleSheet, Text, View,TouchableHighlight } from "react-native";

const btn = (props) => {
  return (
    <TouchableHighlight style={styles.btn} onPress={props.onNavigate}>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
        {props.name}
      </Text>
    </TouchableHighlight>
  );
};

export default btn;

const styles = StyleSheet.create({
    btn:{
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        borderRadius: 10,
        margin:20,
        backgroundColor: 'black',
        padding:12
    }
});
