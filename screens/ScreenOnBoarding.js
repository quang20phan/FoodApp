import React from "react";
import {Text, StyleSheet, Image, View} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding1 from "../components/OnBoarding1";
import OnBoarding2 from "../components/OnBoarding2";

const Stack = createStackNavigator();

export default function(){
    return (
        // <View style={styles.container}>

        //     <OnBoarding1/>

        // </View>

        <NavigationContainer>
            <Stack.Navigator initialRouteName="OnBoarding1" screenOptions={{headerShown: false,}}>

            <Stack.Screen name="OnBoarding1" component = {OnBoarding1}/>
            <Stack.Screen name="OnBoarding2" component = {OnBoarding2}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
})