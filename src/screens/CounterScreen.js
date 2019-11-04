import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CONST_INCREMENT = 5;

const reducer = (state, action) => {
 //state: === { counter: number}
 //action === {type: change_counter, payload: number +1 || -1 }

    switch(action.type) {
        case 'change_counter':
            return action.payload > 0 || action.payload < 0
            ? { ...state, counter: state.counter + action.payload}
            : state;
    }

};

const CounterScreen = () => {
   const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button title="Increase" 
            onPress={() => {
                dispatch({type: 'change_counter', payload: CONST_INCREMENT});
            }} />

            <Button title="Decrease" 
            onPress={() => {
                dispatch({type: 'change_counter', payload: -CONST_INCREMENT});
            }} />
          

            <Text>Current count: {state.counter}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default CounterScreen;
