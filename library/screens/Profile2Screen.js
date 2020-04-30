import React from 'react';
import {StyleSheet, View,  Image } from 'react-native';
import { Icon,Card,Button,Text,  Block} from 'galio-framework';

import { ScrollView } from 'react-native-gesture-handler';

class Profile2 extends React.Component {
    render() {
      return (

        <View style={{ flex:1,backgroundColor: 'black'}}>

          <Block middle>
            <Image source={{uri:'https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}}
            style={{marginTop:'20%',marginBottom:'5%',borderRadius:50}}/>
           </Block>

            <Block center>
              <Text size={30} bold color={'#fff'}>Alondra McCausland</Text>
              <Text color={'#00d8ff'} size={20} style={{fontWeight:'500',marginTop:'1%'}}>Realtor</Text>
            </Block>

            <ScrollView>
            <Block middle flex row space={'evenly'}>

              <Card borderless middle>
                <Icon
                  name="user"
                  family="EvilIcons"
                  color={'#43bff9'}
                  size={55}
                />
                <Text bold color={'#fff'} size={20}>23</Text>
                <Text color={'gray'} style={{paddingTop:'1%',paddingBottom:'-5%'}}>Followers</Text>
              </Card>

              <Card borderless middle>
                <Icon
                style={{paddingTop:'10%'}}
                name="stars"
                family="MaterialIcons"
                color={'#fc408a'}
                size={45}
                />
                <Block middle>
                  <Text color={'#fff'} bold size={20}>422</Text>
                  <Text color={'grey'} style={{paddingTop:'1%',paddingBottom:'-5%'}}>Collection</Text>
                </Block>
              </Card>
            </Block>

            <Block middle flex row space={'evenly'}>
            <Card borderless middle >
              <Icon
              style={{paddingTop:'10%'}}
              name="hearto"
              family="AntDesign"
              color={'red'}
              size={45}
              />
              <Block center>
              <Text color={'#fff'} bold size={20}>123K</Text>
              <Text color={'grey'} style={{ paddingTop:'1%',paddingBottom:'5%'}}> Like you </Text>
              </Block>

              </Card>

              <Card middle borderless>
              <Icon
              style={{paddingTop:'10%'}}
              name="chat"
              family="Entypo"
              color={'#7a52d1'}
              size={45}
              />
              <Text bold color={'#fff'} size={20}>337</Text>
              <Text color={'grey'} style={{ paddingTop:'1%',paddingBottom:'5%'}}>Comments</Text>

              </Card>
            </Block>
            </ScrollView>

            <Block middle style={{ marginTop:'1%',paddingBottom:'5%'}}>
              <Button radius={100} size='small' shadowless color='#fc408a'>
              Add </Button>
            </Block>


        </View>


        );
    }
  }

  const styles = StyleSheet.create({});
    export default Profile2;
