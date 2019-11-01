import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {   //can be a props here
    //console.log(props);
    return (                                        // then here props.imageSource, props.title etc. 
    <View>
        <Image source={imageSource} />   
        <Text>{title}</Text>
        <Text>Image score - {score}</Text>
    </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageDetail;