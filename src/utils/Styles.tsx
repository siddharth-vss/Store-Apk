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
            justifyContent :"space-around",
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
    });
    return style;
}



