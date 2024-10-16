import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CSS, Theme } from '../../utils';

const AddItems = () => {
  // const Themes = Theme.Style();
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
      <Text style={Css.text_temp}>Add Items</Text>
    </View>
  )
}

export default AddItems

const styles = StyleSheet.create({})