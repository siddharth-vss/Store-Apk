import { StyleSheet } from 'react-native'
import React from 'react'
import { Theme } from '.';

export const Styles = () => {

  const Themes = Theme.Style();
  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Themes.background,
    },
    row: {
      flexDirection: 'row',
      justifyContent: "space-around",
      marginBottom: 10,
    },
    card: {
      backgroundColor: Themes.card,
      borderRadius: 10,
      padding: 20,
      margin: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
    },
    button: {
      backgroundColor: Theme.COLORS[0],
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    buttonText: {
      fontSize: 18,
      color: Themes.color,
      fontWeight: "bold",
    },
    text_temp: {
      fontSize: 25,
      fontWeight: 'bold',
      color: Themes.color,
      padding: 10,
      textAlign: 'center',
      backgroundColor: Themes.card,
      borderRadius: 10,
      marginVertical: 20,
    },
    W50:{
      width: '50%',
    }
  });
  return style;
}



