import React, { useState, useEffect } from 'react';
import { StyleSheet,Button } from 'react-native';
import {Block,theme,Text,Icon } from 'galio-framework';
const ColorCounter = ({color,onIncrease,onDecrease}) => {
   return (
      <Block middle style={{marginVertical:20}}>
        <Text>{color}</Text>
        <Block styles={{marginVertical:20}}>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
        </Block>
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
      </Block>
    )
}
const styles = StyleSheet.create({});
export default ColorCounter;
