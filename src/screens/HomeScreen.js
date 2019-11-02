import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen2</Text>
      <Button 
          onPress={() => navigation.navigate('Components')}
          title="Go to Components Demo" 
          />
      <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate('List')}
          />
      <Button
          title="Go to ImageScreen Demo"
          onPress={() => navigation.navigate('Image')}
          />
      <Button
          title="Go to Counter Demo"
          onPress={() => navigation.navigate('Counter')}
         />
      <Button
          title="Go to ColorScreen  Demo"
          onPress={() => navigation.navigate('Color')}
          />


      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
