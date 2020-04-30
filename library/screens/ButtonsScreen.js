import React, {Component} from 'react';
import { StyleSheet,SafeAreaView,Dimensions,
         ScrollView,TextInput,TouchableOpacity,
        } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import { Card,Block,Button,theme,Text } from 'galio-framework';
const { height, width } = Dimensions.get('screen');

class ButtonsScreen extends Component{
state = { foo: false,}
render(){
  return(
    <Block flex center >
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{  width: width - theme.SIZES.BASE * 2,
      paddingVertical: theme.SIZES.BASE}}>
      <Text h4 bold> ButtonsScreen </Text>
      <Block flex center space={'between'}>
        <Button>primary</Button>
        <Button color="info">color="info"</Button>
        <Button color="success">color="success"</Button>
        <Button color="warning">color="warning"</Button>
        <Button color="error">color="error"</Button>
      </Block>

    </ScrollView>
    </Block>
    );
  }
}
const localstyles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default ButtonsScreen
