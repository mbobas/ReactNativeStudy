import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen2</Text>
      <Button 
          onPress={() => console.log('Butto pressed')}
          title="Go to Components Demo" 
          />
          <TouchableOpacity onPress={() => console.log('List pressed')}>
            <Text>Go to List Demo</Text>
          </TouchableOpacity>

      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
