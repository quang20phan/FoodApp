import React from "react";
import {Text, StyleSheet, Image, View, Button} from 'react-native';
import imgOnB01 from "../assets/img__onB01.png";
import { useNavigation } from "@react-navigation/native";

export default function(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           <Image source={imgOnB01}></Image>
           <Text style={styles.title} >Browse Food</Text>
           <Text style={styles.title2} >Welcome to our restaurant app! Log in and check out or delicious food.</Text>

           <View style={styles.pageControl}>
                <View style={styles.oval}></View>
                <View style={styles.ovalCopy}></View>
                <View style={styles.ovalCopy1}></View>
                <View style={styles.ovalCopy2}></View>
                <View style={styles.ovalCopy3}></View>             
           </View>

            <View style={styles.btn}>
                <Text style={styles.btn__next}onPress={()=>{navigation.navigate('OnBoarding2')}}>NEXT</Text>
            </View>

        </View>

         
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:"#5EA33A",
        justifyContent: 'center',
        alignItems: "center",
        
    },

    btn: {
      width:'70%',
      backgroundColor: '#5EA33A', 
      height: '20%',
      alignItems: 'flex-end',
      justifyContent: 'center'
    },

    btn__next: {
        color: '#fff', 
        fontSize: 18,
    },

    oval: {
        width: 7,
        height: 7,
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    ovalCopy: {
        opacity: 0.28324962,
        width: 7,
        height: 7,
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    ovalCopy1: {
        opacity: 0.28,
        width: 7,
        height: 7,
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    ovalCopy2: {
        opacity: 0.28,
        width: 7,
        height: 7,
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    ovalCopy3: {
        opacity: 0.28,
        width: 7,
        height: 7,
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    pageControl: {
        marginTop: 100,
        width: 75,
        height: 7,
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },

    title: {
        fontSize: 17,
        color: '#fff',
    },

    title2: {
        fontSize: 17,
        color: '#fff',
        width: '80%',
    }
})