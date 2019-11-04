import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Witam w Demo Michała Gulczyńskiego</Text>
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
          title="Go to Counter Demo with Reducer"
          onPress={() => navigation.navigate('Counter')}
          />
      <Button
          title="Go to Counter Demo with useState"
          onPress={() => navigation.navigate('CounterScreenUseState')}
          />
      <Button
          title="Go to ColorScreen  Demo"
          onPress={() => navigation.navigate('Color')}
          />
      <Button
          title="Go to SquareScreen/RGB Editor  Demo with Reducer"
          onPress={() => navigation.navigate('Square')}
          />
      <Button
          title="Go to SquareScreen/RGB Editor  Demo with useState"
          onPress={() => navigation.navigate('SquareScreenUseState')}
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
