import React, { useState } from 'react';
import { StyleSheet,SafeAreaView,Dimensions,
          ScrollView,TextInput,TouchableOpacity,FlatList
        } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import { Card,Button,Block,theme,Text} from 'galio-framework';
import ColorCounter from '../components/ColorCounter.js'
const { height, width } = Dimensions.get('screen');
const COLOR_INCREMENT = 15;
const NativeScreen = () => {
const [colors,setColors] = useState([]);
const [red,setRed] = useState(0);
const [green,setGreen] = useState(0);
const [blue,setBlue] = useState(0);
  console.log(red);

 const setColor = (color,change)=>{
   if (!(color+change > 255 || color+change < 0 )){
     callback(color+change);
   }
 }


  return (
  <Block flex center >
   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{  width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE}}>
      <Text h3 bold> State with Hooks</Text>

      <Block middle style={{marginVertical:20}}>

      <Text h5 bold>Hello</Text>
        <ColorCounter
          onIncrease={() => setRed(red+COLOR_INCREMENT)}
          onDecrease={() => setRed(red-COLOR_INCREMENT)}
          color="Red"
        />
      </Block>

      <Block middle style={{marginVertical:20}}>

      <Text h5 bold>Hello</Text>
        <ColorCounter
          onIncrease={() => setBlue(blue+COLOR_INCREMENT)}
          onDecrease={() => setBlue(blue-COLOR_INCREMENT)}
          color="Blue"
        />
      </Block>

      <Block middle style={{marginVertical:20}}>

      <Text h5 bold>Hello</Text>
        <ColorCounter
          onIncrease={() => setGreen(green+COLOR_INCREMENT)}
          onDecrease={() => setGreen(green-COLOR_INCREMENT)}
          color="Green"
        />
      </Block>


      <Block middle style={{height: 150,width:150, backgroundColor:`rgb(${red},${green},${blue})` ,marginVertical:20}}/>





      <Block style={{marginVertical: 20}}>
        <Button onPress={()=>{setColors([...colors,randomRgb()])}} style={{marginVertical: 20}}>Add a Color</Button>

        <Text h5 bold style={{marginVertical: 20}}>FlatList</Text>

        <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => {
        return <Block style={{height: 100, width: 100, backgroundColor: item}}/>
        }}
        />
        </Block>
      <Block>


      </Block>
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
