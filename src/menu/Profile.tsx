import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme, CSS } from '../utils'

import useStore from '../store/store';
import useAuthStore from '../store/Authstore';

const Profile = () => {


  const { count, increment, decrement, reset } = useStore();
  const { token, store, user } = useAuthStore();
  const Themes = Theme.Style();
  const Css = CSS.Styles();
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
  })

  return (
    <View style={[Css.container]}>
      <Text style={styles.text}>Profile{user.name}</Text>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Count: {count}</Text>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  )
}

export default Profile

