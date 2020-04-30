import React, { useReducer } from 'react';
import { StyleSheet,SafeAreaView,Dimensions,
          ScrollView,TextInput,TouchableOpacity,FlatList
        } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import { Card,Button,Block,theme,Text} from 'galio-framework';
import ColorCounter from '../components/ColorCounter.js'
const { height, width } = Dimensions.get('screen');
const COLOR_INCREMENT = 15;

const reducer = (state,action) => {
  switch (action.colorToChange) {
    case 'red':
      return {...state,red: state.red + action.amount}
    case 'green':
     return {...state, green: state.green + action.amount}
    case 'blue':
     return {...state,blue: state.blue + action.amount}

    default:

  }
};
const NativeScreen = () => {

   const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
   console.log(state);
   const {red, green, blue} = state;

  return (
  <Block flex center >
   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{  width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE}}>
      <Text h3 bold> Reducer Example </Text>

      <Block middle style={{marginVertical:20}}>

      <Text h5 bold>Hello</Text>
        <ColorCounter
          onIncrease={() => dispatch({colorToChange:'red',amount: COLOR_INCREMENT})}
          onDecrease={() => dispatch({colorToChange:'red',amount: -1*COLOR_INCREMENT})}
          color="Red"
        />
      </Block>

      <Block middle style={{marginVertical:20}}>

      <Text h5 bold>Hello</Text>
      <ColorCounter
        onIncrease={() => dispatch({colorToChange:'blue',amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({colorToChange:'blue',amount: -1*COLOR_INCREMENT})}
        color="Blue"
      />
      </Block>

      <Block middle style={{marginVertical:20}}>

      <Text h5 bold>Hello</Text>
        <ColorCounter
          onIncrease={() => dispatch({colorToChange:'green',amount:COLOR_INCREMENT})}
          onDecrease={() => dispatch({colorToChange:'green',amount:-1* COLOR_INCREMENT})}
          color="Green"
        />
      </Block>
      <Block middle style={{height: 150,width:150, backgroundColor:`rgb(${red},${green},${blue})` ,marginVertical:20}}/>
    
    </ScrollView>
   </Block>
    );

}
const randomRgb = () =>{
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({});
export default NativeScreen
