import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme,CSS } from '../utils'

const Records = () => {

  const Themes = Theme.Style();
  const Css = CSS.Styles();
  // const styles = StyleSheet.create({
  //   text: {
  //     fontSize: 25,
  //     fontWeight: 'bold',
  //     color: Themes.color,
  //     padding: 10,
  //     textAlign: 'center',
  //     backgroundColor: Themes.card,
  //     borderRadius: 10,
  //     marginVertical: 20,
  //   },
  // })

  return (
    <View style={[Css.container]}>
      <Text style={Css.text_temp} >Records</Text>
    </View>
  )
}

export default Records

