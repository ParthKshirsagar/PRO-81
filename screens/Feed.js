import React from "react";
import { View, Text } from 'react-native';

export default class Feed extends React.Component{
  render(){
    return(
        <View style={{
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontSize: 25 }}>Feed!</Text>
        </View>
    )
  }
}