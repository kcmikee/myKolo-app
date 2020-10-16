import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from '../screens/index'
import BasicInfo from '../screens/basicInfo'
import Education from '../screens/education'
import EnterPhoneNo from '../screens/enterPhoneNo'
import ForgotPassword from '../screens/forgotPassword'
import Gender from '../screens/gender'
import NextOfKin from '../screens/nextOfKin'
import Otp from '../screens/otp'
import Payment from '../screens/payment'
import Profile from '../screens/profile'
import SetPassword from '../screens/setPassword'
import SetPin from '../screens/setPin'
import SignIn from '../screens/signIn'
import SignUp from '../screens/signUp'
import SignUpAlt from '../screens/signUpAlt'
import SmilingKid from '../screens/smilingKid'
import SosContact from '../screens/sosContact'
import WelcomeBack from '../screens/welcomeBackScreen'

const Stack = createStackNavigator()

function myKoloNav(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Index' component={Index} options={{headerShown:false}}/>
                <Stack.Screen name='Kid' component={SmilingKid} options={{headerShown:false}}/>
                <Stack.Screen name='Welcome' component={WelcomeBack} options={{headerShown:false}}/>
                <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
                <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
                <Stack.Screen name='SignUpAlt' component={SignUpAlt} options={{headerShown:false}}/>
                <Stack.Screen name='Password' component={SetPassword} options={{headerShown:false}}/>
                <Stack.Screen name='Gender' component={Gender} options={{headerShown:false}}/>
                <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
                <Stack.Screen name='Basic' component={BasicInfo} options={{headerShown:false}}/>
                <Stack.Screen name='Sos' component={SosContact} options={{headerShown:false}}/>
                <Stack.Screen name='Education' component={Education} options={{headerShown:false}}/>
                <Stack.Screen name='Kin' component={NextOfKin} options={{headerShown:false}}/>
                <Stack.Screen name='Forgot' component={ForgotPassword} options={{headerShown:false}}/>
                <Stack.Screen name='Phone' component={EnterPhoneNo} options={{headerShown:false}}/>
                <Stack.Screen name='Otp' component={Otp} options={{headerShown:false}}/>
                <Stack.Screen name='SetPin' component={SetPin} options={{headerShown:false}}/>
                <Stack.Screen name='Payment' component={Payment} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
//initialRouteName="Basic"
export default myKoloNav