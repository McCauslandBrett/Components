import React, {Component} from 'react';
import { Dimensions,View,StyleSheet,SafeAreaView,
         ScrollView,TextInput,TouchableOpacity,ImageBackground,Image
        } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import { Block,Card,theme,Text,Icon } from 'galio-framework';
const { height, width } = Dimensions.get('screen');
class LayoutsScreen extends Component{
state = { foo: false,}
render(){
  return(
  <Block flex center safe style={{width: width}}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.margins}>
    <Text h3 bold> Layouts </Text>

    <View style={{marginVertical: 15}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    <Text h4 bold> Galio </Text>
    <Text h5 style={{marginTop: 15}} >R1 (row)  </Text>
    <Block row style={{marginVertical: 15}}>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </Block>

    <Text h5>R2 (row middle)</Text>
    <Block row middle style={{marginVertical: 15}} >
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </Block>

    <Text h5>R3 (row bottom)</Text>
    <Block row bottom style={{marginVertical: 15}} >
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </Block>

    <Text h5>R3 (left left)</Text>
    <Block row left style={{marginVertical: 15}} >
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </Block>


    <Text h5 >R3 (row middle space='between') </Text>
    <Block row middle space={'between'} style={{marginVertical: 15}} >
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </Block>

    <Text h5 > R4 (row space='evenly') </Text>
    <Block row space={'evenly'} style={{marginVertical: 15}} >
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <Block style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </Block>

    <Text h5 > R5 (middle) </Text>
    <Block  row space={'evenly'} style={{marginVertical: 15}} >
      <Block middle style = {{height:100,width:100,backgroundColor:randomRgb()}}>
        <Icon name="user" family="EvilIcons" color={'#43bff9'} size={55}/>
      </Block>

      <Block middle style = {{height:100,width:100,backgroundColor:randomRgb()}}>
        <Icon name="user" family="EvilIcons" color={'#43bff9'} size={55}/>
      </Block>

      <Block middle style = {{height:100,width:100,backgroundColor:randomRgb()}}>
        <Icon name="user" family="EvilIcons" color={'#43bff9'} size={55}/>
      </Block>
    </Block>

    <Text h4 bold> Native </Text>
    <Text h5 style={{marginVertical: 15}}> Row 1 (flexDirection:'row') </Text>
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

    <Text style={{fontSize:20,marginBottom:15,marginTop:15}}> Row 6 ( justifyContent:'space-evenly' ) </Text>
    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
      <View style = {{height:100,width:100,backgroundColor:randomRgb()}}/>
    </View>

    </ScrollView>

  </Block>
    );
  }
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
export default LayoutsScreen
