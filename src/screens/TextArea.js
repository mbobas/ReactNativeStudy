import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextArea = () => {

    const [name, setName] = useState('');

return( 
    <View>
        <Text> My name is: {name} </Text>
        <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => {setName(newValue)}}
        />

    </View>
);

};

const styles = StyleSheet.create({
    input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
}
});

export default TextArea;