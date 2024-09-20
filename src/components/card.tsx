import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

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
  colors,
   }) => {
  const Colors = [
    { 0: '#48A2F1', 1: '#1B74E8' },
    { 0: '#65BA69', 1: '#44A148' },
    { 0: '#404048', 1: '#1A1A1A' },
    { 0: '#EA3D77', 1: '#D91E62' },
  ];

  const dimentions = {
    height: height ?? 100,
    width: width ?? wp('42.5%'),
  }

  // console.log(props);
  // console.log(Colors[colorCode])
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#79B8F4', '#8093F1',
    '#1F7A8C', '#E83F6F', '#18A999', '#F39A9D'];

  return (
    // <View  style={[styles.card,{backgroundColor : Colors[colorCode]}]}>
    <LinearGradient start={{ x: 1, y: 1 }} end={{ x: 0, y: 2 }} colors={colors ?? [Colors[colorCode][0], Colors[colorCode][1]]} style={[styles.card, { height: hp(height ?? 13.8), width: wp(width ?? '42.5%') }]}>
      <Text >Card</Text>
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
    justifyContent: 'center',
    alignItems: 'center'
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