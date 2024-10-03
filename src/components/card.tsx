import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Theme } from '../utils';

interface ParentProps {
  children?: React.ReactNode;
  colorCode?: number;
  height?: string; 
  width?: string; 
  colors?:string[];
  style ?:  StyleProp<ViewStyle>;
}

const Card: React.FC<ParentProps> = ({  
  // ...props,
   colorCode = 0 ,
  children,
  height,
  width,
  style,
  colors,
   }) => {


  return (
    <LinearGradient  start={{ x: 1, y: 1 }} end={{ x: 0, y: 2 }} colors={colors ?? [Theme.Grediants[colorCode][0], Theme.Grediants[colorCode][1]]} style={[styles.card, { height: hp(height ?? 13.8), width: wp(width ?? '42.5%') },style]}>
      {children}
    </LinearGradient>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})

