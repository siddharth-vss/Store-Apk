import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme } from '../utils'

const Invoice = () => {
  return (
    <View style={[styles.container]} >
      <Text style={styles.text} >Invoice</Text>
    </View>
  )
}

export default Invoice

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.Theme.background,
    flex : 1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Theme.Theme.color,
    padding: 10,
    textAlign: 'center',
    backgroundColor: Theme.Theme.card,
    borderRadius: 10,
    marginVertical: 20,
  },
})