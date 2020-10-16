import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableHighlight
} from "react-native";

import {Ionicons} from '@expo/vector-icons'
import Header from "../components/header";

// const image = { uri: "../assets/splash2.png" };

export default function index(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/splash2.png")}
        style={styles.image}
      >
        <View style={{ flex:1 }}>
          <View style={{ flex: 1 }}>
              <Header onNavigate={() => props.navigation.navigate("Welcome")} text='Skip Here'/>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end',marginBottom:80,}}>
              <Image source={require("../assets/img/KOlo.png")} style={{width:250,height:90,marginLeft: -20,}}/>
              <Text style={{fontSize:19,fontWeight: "bold",color:'white',marginLeft: 30, marginBottom:5}}>Save n Earn</Text>
              <Text style={{fontSize: 20, color:'white',fontWeight: "bold",marginLeft: 30, marginBottom: 20,}}>With MyKolo savings box</Text>
              <TouchableHighlight onPress={()=>props.navigation.navigate('Welcome')}>
                <Ionicons name="ios-arrow-forward" size={26} color="white" style={{alignSelf:'flex-end',marginRight: 30,}}/>
              </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
