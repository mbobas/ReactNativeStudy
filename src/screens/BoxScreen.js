import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return( 
        // <View style={styles.viewStyle}>
        //     <Text style={styles.textStyle1}> Child #1 </Text>
        //     <Text style={styles.textStyle2}> Child #2 </Text>
        //     <Text style={styles.textStyle3}> Child #3 </Text>
        // </View>

        <View style={styles.viewStyle}>
            <View style={styles.textStyle1}></View>
            <View style={styles.textStyle2}></View>
            <View style={styles.textStyle3}></View>
        </View>
        
    );

};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        //alignItems: 'flex-start',
        flexDirection: 'row',
        height: 200,
        justifyContent: 'space-between'
    },
    textStyle1: {
        borderWidth: 3,
        borderColor: 'red',
        height: 100,
        width: 100,
       
    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        //flex: 1,
        //position: 'relitive'
        //left: 10,
        // position:"absolute",
         top: 100,
        // right: '0',
        // bottom: '0',
        // left: '0',
        //...StyleSheet.absoluteFillObject,
        height: 100,
        width: 100,

    },
    textStyle3: {
        backgroundColor: 'red',
        borderWidth: 3,
        borderColor: 'red',
        height: 100,
        width: 100,
       
    },
    
});

export default BoxScreen;