import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Theme, CSS } from '../utils'
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';



const Invoice = () => {
  const Themes = Theme.Style();
  const Css = CSS.Styles();

  const [Bar, setBar] = useState('')

  const styles = StyleSheet.create({
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: Themes.color,
      padding: 10,
      textAlign: 'center',
      backgroundColor: Themes.card,
      borderRadius: 10,
      marginVertical: 20,
    },

    input: {
      height: 50,
      width: '50%',
      borderColor: Themes.contrast,
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 15,
      borderRadius: 10,
      color: Themes.color,
      // color:"#FFF",
      backgroundColor: Themes.background,
    },

    txt: {
      color: Themes.color,
      fontWeight: 'bold',
      fontSize: 20,
      marginVertical: 10,
    },

  })

  return (
    <View style={[Css.container]} >
      {/* <Text style={styles.text} >Invoice</Text> */}
      {/* <Text style={styles.text} >Your invoice is ready!</Text> */}
      <View style={Css.card}>
        <View style={Css.row} >
          <Text style={styles.txt} >BarCode :</Text>
          <TextInput
            // autoCapitalize='characters'
            style={styles.input}
            placeholder="Bar number"
            cursorColor={'#FFF'}
            placeholderTextColor={Themes.color}
            value={Bar}
            onChangeText={setBar}
            keyboardType="number-pad"
          />
        </View>
        <View style={Css.row} >
          <Text style={styles.txt} >QuantEity :</Text>
          <TextInput
            // autoCapitalize='characters'
            style={styles.input}
            placeholder="Quantity"
            cursorColor={'#FFF'}
            placeholderTextColor={Themes.color}
            value={Bar}
            onChangeText={setBar}
            keyboardType="number-pad"
          />
        </View>
        <View style={Css.row} >
          <TouchableOpacity style={Css.button} >
            <Text style={Css.buttonText} > Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Invoice

