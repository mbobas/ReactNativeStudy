import React from 'react';
import { Text, StyleSheet, View, ScrollView, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
      <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between'
    }}>
      <Text style={styles.text}>Witam w Demo Michała Gulczyńskiego</Text>
      <Button 
            color="#f194ff"
            onPress={() => navigation.navigate('Components')}
            title="Go to Components Demo" 
          />
      <Button
            title="Go to List Demo"
            onPress={() => navigation.navigate('List')}
          />
      <Button
            color="#f194ff"
            title="Go to ImageScreen Demo"
            onPress={() => navigation.navigate('Image')}
          />
      <Button
            title="Go to Counter Demo with Reducer"
            onPress={() => navigation.navigate('Counter')}
          />
      <Button
            color="#f194ff"
            title="Go to Counter Demo with useState"
            onPress={() => navigation.navigate('CounterScreenUseState')}
          />
      <Button
            title="Go to ColorScreen  Demo"
            onPress={() => navigation.navigate('Color')}
          />
      <Button
            color="#f194ff"
            title="Go to SquareScreen/RGB Editor  Demo with Reducer"
            onPress={() => navigation.navigate('Square')}
          />
      <Button
            
            title="Go to SquareScreen/RGB Editor  Demo with useState"
            onPress={() => navigation.navigate('SquareScreenUseState')}
          />
      <Button
            color="#f194ff"
            title="Go to TextInput handler "
            onPress={() => navigation.navigate('TextArea')}
            />
      <Button
            title="Go to TextArea with validate pass  "
            onPress={() => navigation.navigate('TextAreaPass')}
            />  
      <Button
            color="#f194ff"
            title="Go to BoxScreen"
            onPress={() => navigation.navigate('BoxScreen')}
            />  
      <Button
            color="#f194ff"
            title="Go to BoxScreen"
            onPress={() => navigation.navigate('BoxScreen')}
            />
      <Button
            color="#f194ff"
            title="Go to BoxScreen"
            onPress={() => navigation.navigate('BoxScreen')}
            />  
      <Button
            color="#f194ff"
            title="Go to BoxScreen"
            onPress={() => navigation.navigate('BoxScreen')}
            />  
      <Button
            color="#f194ff"
            title="Go to BoxScreen"
            onPress={() => navigation.navigate('BoxScreen')}
            />  
      <Button
            color="#f194ff"
            title="Go to BoxScreen"
            onPress={() => navigation.navigate('BoxScreen')}
            />    

      </ScrollView>
  );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        //alignItems: 'center',
        //justifyContent: 'space-between'
  },
    viewStyle: {
        //alignItems: 'center',
        //justifyContent: 'space-between'
    }
});

export default HomeScreen;
