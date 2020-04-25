import React, {Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView,
         ScrollView,TextInput,TouchableOpacity
        ,Dimensions,Image,ImageBackground} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import Card from "../components/Card.js"
import { Block,theme } from 'galio-framework';
const { height, width } = Dimensions.get('screen');
class CardsScreen extends Component{
state = { foo: false,}

render(){
  return(

    <Block flex center style={{width: width}}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.margins}>
    <Text style={{fontSize:20,marginBottom:25,marginTop:15,fontWeight:'700'}}> Card Components </Text>
    <Block flex>
      <Card item={iceCream} horizontal  />
      <Block flex row>
        <Card item={iceCream} style={{ marginRight: theme.SIZES.BASE }} />
        <Card item={iceCream} />
      </Block>
      <Card item={one} horizontal />
      <Card item={two} horizontal />
      <Card item={iceCream} full />

      <Text style={{fontSize:20,marginBottom:25,marginTop:15,fontWeight:'700'}}> Image Cards </Text>
      <Block row style={{justifyContent:'space-evenly'}} >
       <ImageBackground imageStyle={{borderRadius:3}} style = {{height:100,width:100,borderWidth:0, shadowColor: theme.COLORS.BLACK,
       shadowOffset: { width: 0, height: 2 },shadowRadius: 4,shadowOpacity: 0.1, elevation: 2,}} source={{uri:'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80'}}/>
       <ImageBackground imageStyle={{borderRadius:3}} style = {{height:100,width:100,borderWidth:0, shadowColor: theme.COLORS.BLACK,
       shadowOffset: { width: 0, height: 2 },shadowRadius: 4,shadowOpacity: 0.1, elevation: 2,}} source={{uri:'https://images.unsplash.com/photo-1587736613350-3f121830084e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}/>
      </Block>

      <Block row style={{justifyContent:'space-evenly'}} >
       <ImageBackground imageStyle={{borderRadius:3}} style = {{height:100,width:100,borderWidth:0, shadowColor: theme.COLORS.BLACK,
       shadowOffset: { width: 0, height: 2 },shadowRadius: 4,shadowOpacity: 0.1, elevation: 2,}} source={{uri:'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80'}}/>
       <ImageBackground imageStyle={{borderRadius:3}} style = {{height:100,width:100,borderWidth:0, shadowColor: theme.COLORS.BLACK,
       shadowOffset: { width: 0, height: 2 },shadowRadius: 4,shadowOpacity: 0.1, elevation: 2,}} source={{uri:'https://images.unsplash.com/photo-1587736613350-3f121830084e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}/>
      </Block>

    </Block>
    </ScrollView>
    </Block>

    );
  }
}
const iceCream = {
  title: 'Ice cream is made with carrageenan …',
  image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
  cta: 'View article',

}
const one ={
  title: 'Ice cream is made with carrageenan …',
  image:'https://images.unsplash.com/photo-1587736613350-3f121830084e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  cta: 'View article',

}
const two =  {
    title: 'Is makeup one of your daily esse …',
    image: 'https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80',
    cta: 'View article'
  }
const randomRgb = () =>{
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({
 margins: {
  width: width - theme.SIZES.BASE * 2,
  paddingVertical: theme.SIZES.BASE,
},
shadow: {
  shadowColor: theme.COLORS.BLACK,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  shadowOpacity: 0.1,
  elevation: 2,
  borderWidth: 0,
},
});
export default CardsScreen
