import { ActivityIndicator, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'


interface Load {
    style?: StyleProp<ViewStyle>,
    color?: string,
    size ?: number 
}
const Loader = ({
    style = {},
    color = '#0000ff',
    size =24

}) => {
  return (
    <View style={[styles.loader,style]} >
          <ActivityIndicator style={style} size={size} color={color} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    loader : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})