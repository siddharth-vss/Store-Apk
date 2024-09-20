import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


interface ParentProps{
  children?: React.ReactNode;
  colorCode?: number;
  height?: string; 
  width?: string; 
  colors?: string[];
  style ?:  StyleProp<ViewStyle>;
 // colorCode: number = 0x333333;
}

const Topbg: React.FC<ParentProps> = ({children }:{children? :React.ReactNode}) => {
  return (
    <LinearGradient start={{x: 1, y: 1}} end={{x: 0, y: 2}} colors={['#404048','#1A1A1A']} style={[styles.card]}>

      <Text >Card</Text>
      {children}
    </LinearGradient>
  )
}

export default Topbg

const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
})