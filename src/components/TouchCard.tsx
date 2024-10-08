import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Theme } from '../utils';

interface ParentProps {
    children?: React.ReactNode;
    colorCode?: number;
    height?: string;
    width?: string;
    h?:number;
    colors?: string[];
    style?: StyleProp<ViewStyle>;
    handlePress: any;
}

const TouchCard: React.FC<ParentProps> = ({
    colorCode = 0,
    children,
    height,
    width,
    h,
    colors,
    style,
    handlePress,
}) => {

    return (
        <View style={style} >
            <TouchableOpacity onPress={() => handlePress()}>
                <LinearGradient start={{ x: 1, y: 1 }} end={{ x: 0, y: 2 }} colors={colors ?? [Theme.Grediants[colorCode][0], Theme.Grediants[colorCode][1]]} style={[styles.card, { height: h ?? hp(height ?? 13.8), width: wp(width ?? '42.5%') },]}>
                    {children}
                </LinearGradient>
            </TouchableOpacity>
        </View>

    )
}

export default TouchCard

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
        alignItems: 'center',
        borderColor :"#FFFFFF",
        // borderWidth: 0.4,
        // padding: 10,
        // paddingHorizontal: 20,
        // paddingVertical: 10,
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

