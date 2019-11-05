import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextAreaPass = () => {

    const [pass, setPass] = useState('');

return( 
    <View>
        <Text> Please pu the password ( minimum 5 characters )</Text>
        <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType='password'
            keyboardAppearance="dark"
            value={pass}
            onChangeText={(newPass) => {setPass(newPass)}}

        />
        {pass.length >= 5 
        ? <Text> Your password is longer then 5 characters </Text> 
        : <Text> Your password is to short </Text>
        }
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

export default TextAreaPass;