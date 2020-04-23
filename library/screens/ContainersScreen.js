import React, {Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView,
         ScrollView,TextInput,TouchableOpacity,
        } from 'react-native';
import {AntDesign} from "@expo/vector-icons";

class ContainersScreen extends Component{
state = { foo: false,}
render(){
  return(
    <SafeAreaView>
    <ScrollView>
    <Text style={{fontSize:25,marginBottom:15}}> Flex Layouts </Text>

    <View>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 1 (flexDirection:'row') </Text>
    <View style={{flexDirection:'row'}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 2 ( justifyContent: "space-between") </Text>
    <View style={{flexDirection:'row',justifyContent: "space-between"}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 3 ( justifyContent: "flex-end" ) </Text>
    <View style={{flexDirection:'row',justifyContent: "flex-end"}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 4 (alignSelf:'center')</Text>
    <View style={{flexDirection:'row',alignSelf:'center'}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 5 ( justifyContent:'space-evenly' )</Text>
    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    </ScrollView>
    </SafeAreaView>
    );
  }
}
const randomRgb = () =>{
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red},${green},${blue})`;
};
const localstyles = StyleSheet.create({
  containerRow:
  {
    flexDirection:'row',
  },

});
export default ContainersScreen
