import React, { useReducer } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

//konwencja mówi, że reduce powinien być poza componentem, ze względu na state
const reducer = (state, action) => {
// state here is === { red: number, green: number, blue: number};
//action her is === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15};

    switch(action.colorToChange) {
        case 'red': 
        //never going to do:     state.red = state.red -15 (example);
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
    }


};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const {red, green, blue } = state;
    
    return(
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})} 
                color="Red" 
            />

            <ColorCounter 
                onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
                color="Blue" 
            />

            <ColorCounter 
                onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})} 
                onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
                color="Green" 
            />
            <View style={{height:150, width:150, backgroundColor: `rgb(${red},${green},${blue})`}}>
            </View>
            <Text>"rgb {red},{green},{blue}"</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;