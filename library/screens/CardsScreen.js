import React, {Component} from 'react';
import { View, StyleSheet,SafeAreaView,
         ScrollView,TextInput,TouchableOpacity
        ,Dimensions,Image,ImageBackground} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import CCard from "../components/Card.js";

import { Card,Block,theme,Text,NavBar,Icon } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('screen');
const cards = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503631285924-e1544dce8b28?&w=1200&h=1600&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?&w=1500&h=900&fit=crop&crop=entropy&q=300',
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    full: true,
  },
];
class CardsScreen extends Component{
state = { foo: false,}

render(){
  return(

    <Block flex center >
    <NavBar title="Cards"
      left={( <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon
            name="menu"
            family="feather"
            size={theme.SIZES.BASE}
            color={theme.COLORS.ICON}
          />
      </TouchableOpacity>
    )}
    style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
  />
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.cards}>
    <Text h4 bold style={{marginBottom:25,marginTop:15}}> Card Components </Text>

    <Block flex space="between">
      {cards && cards.map((card, id) => (
        <Card
          key={`card-${card.image}`}
          flex
          borderless
          shadowColor={theme.COLORS.BLACK}
          titleColor={card.full ? theme.COLORS.WHITE : null}
          style={styles.card}
          title={card.title}
          caption={card.caption}
          location={card.location}
          avatar={`${card.avatar}?${id}`}
          image={card.image}
          imageStyle={[card.padded ? styles.rounded : null]}
          imageBlockStyle={[
            card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
            card.full ? null : styles.noRadius,
          ]}
          footerStyle={card.full ? styles.full : null}
        >
          {card.full ? <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.gradient} /> : null}
        </Card>
      ))}
    </Block>
    <Block flex>
      <CCard item={iceCream} horizontal  />
      <Block flex row>
        <CCard item={iceCream} style={{ marginRight: theme.SIZES.BASE }} />
        <CCard item={iceCream} />
      </Block>
      <CCard item={one} horizontal />
      <CCard item={two} horizontal />
      <CCard item={iceCream} full />

          <Text style={{fontSize:20,marginBottom:25,marginTop:15,fontWeight:'700'}}> Galio Cards </Text>
      <Card
        flex
        borderless
        shadow
        style={{shadowColor: theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2,
        borderWidth: 0,}}
        title="Christopher Moon"
        caption="139 minutes ago"
        location="Los Angeles, CA"
        avatar="http://i.pravatar.cc/100?id=skater"
        imageStyle={{borderRadius: 3}}
        footerStyle={{backgroundColor: theme.COLORS.WHITE,borderRadius:3 }}
        imageBlockStyle={{ borderRadius: 3}}
        image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
        />

        <Card
          flex
          borderless
          style={styles.card}
          title="Christopher Moon"
          caption="139 minutes ago"
          location="Los Angeles, CA"
          avatar="http://i.pravatar.cc/100?id=skater"
          imageStyle={styles.cardImageRadius}
          imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
          image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
          />

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


      <Text style={{fontSize:20,marginBottom:25,marginTop:15,fontWeight:'700'}}>  </Text>


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
cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});
export default CardsScreen
