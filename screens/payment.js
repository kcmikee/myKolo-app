import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions, TouchableHighlight, ImageBackground,Image } from "react-native";
import {
    LineChart,
} from "react-native-chart-kit";

export default function payment(props) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:'#fff' }}>
            <View style={{ flexDirection: 'row', height: 50, marginTop: 28, }}>
                <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20, }}>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => props.onBack()}>
                        <Ionicons name="ios-arrow-back" size={26} color="#000" />
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <Text>Home</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1, marginRight: 30, }}>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={props.onNavigate}>
                        <Ionicons name="md-expand" size={24} color="black" />
                    </TouchableHighlight>
                </View>
            </View>
            <ScrollView>
                <View style={{margin:20,}}>
                    <Text style={{fontWeight: 'bold',fontSize: 20,}}>Your Payment</Text>
                    <Text style={{fontWeight: 'bold',fontSize: 20,}}>Secure</Text>
                </View>
                <View style={{width:'100%', }}>
                    <ImageBackground source={require('../assets/img/card2.jpg')} style={{flex:1,height:250, width:'100%' }}>
                        <View style={{flex:1,alignItems: 'flex-end', marginRight: 50,marginTop: 40, }}>
                            <Image source={require('../assets/img/KOlo.png')} style={{width:75, height:40}}/>
                        </View>
                        <View style={{flex:1,justifyContent: 'center',marginTop: -110, marginLeft: 45,}}>
                            <Text style={{fontWeight: 'bold', fontSize:20}}>Olamide Ademola</Text>
                        </View>
                        <View style={{flex:1,justifyContent: 'center',marginTop: -120, marginLeft: 45}}>
                            <Text style={{fontWeight: 'bold', fontSize:20,letterSpacing: 3,}}>9337 5379 0112 XXXX</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', marginLeft:20, marginRight: 30,marginTop: -5,}}>
                    <Text style={{fontWeight: 'normal', fontSize: 18,}}>Balances</Text>
                    <TouchableHighlight style={{borderWidth: 1,borderColor:'#dddd',borderRadius: 10,}}>
                        <Text style={{fontSize: 16, padding:15,color:'red'}}>+Add Card</Text>
                    </TouchableHighlight>
                </View>
                <View style={{marginLeft: 20,}}>
                    <Text style={{fontWeight: 'bold',fontSize: 28, color:'red'}}>
                        N 213,239.34
                    </Text>
                </View>
                <View style={styles.sectionStyle}>
                    <TouchableHighlight style={{backgroundColor: "#000",borderRadius: 15,}}>
                        <Text style={{padding:15,color:'#fff',paddingLeft: 25,paddingRight:25,fontSize: 18,}}>Income</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text style={{color:'#ddd',fontSize: 18,}}>Expense</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ marginTop: 10}}>
                    <LineChart
                        data={{
                            labels: ["M", "T", "W", "T", "F", "S", "S"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ],
                                },
                            ],
                        }}
                        width={Dimensions.get("window").width}
                        height={220}
                        yAxisLabel="N"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#fb8c00",
                            backgroundGradientFrom: "#dddddd",
                            backgroundGradientTo: "#dddddd",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            // style: {
                            //     borderRadius: 16,
                            // },
                            propsForDots: {
                                r: "8",
                                strokeWidth: "2",
                                stroke: "#ffa726",
                            },
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            // borderRadius: 16,
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionStyle:{
        flexDirection: 'row',
        marginLeft:20,
        marginRight:20,
        marginTop: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})
