import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Interface } from '../utils';

interface component {
    data?: Interface.storage[],
    name? : string,
    children?: React.ReactNode
}
const GridBox: React.FC<component> = ({

    children
    }) => {
        // console.log(children)

    return (
        <View style={styles.container}>
           {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
});

export default GridBox;
