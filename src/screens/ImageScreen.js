import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return (
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
            
            
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')} 
                score={9}/>
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')} 
                score={7}/>
            <ImageDetail
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')} 
                score={10}/>
            <ImageDetail
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')} 
                score={10}/>
            <ImageDetail
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')} 
                score={10}/>

        </ScrollView>
        
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;