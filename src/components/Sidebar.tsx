import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { CSS, Theme } from '../utils';


const Sidebar = (props: any) => {
    // console.log(props);

    const Themes = Theme.Style();
    const Css = CSS.Styles();
    const styles = StyleSheet.create({
        itemseprater: {
            borderColor: '#9ca3af',
            borderWidth: StyleSheet.hairlineWidth,
            opacity: 0.3,
        },
       
        header: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#fff',
            marginLeft: heightPercentageToDP('1.9%'),
            marginTop: 10,
        },
        role: {
            fontSize: 18,
            color: '#fff',
            marginTop: 5,
            marginLeft: heightPercentageToDP('1.9%'),
        },
        key: {
            marginVertical: 10,
            paddingHorizontal: 10,
            // borderBottomWidth: 1,
            borderColor: '#ddd',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
        },
        img: {
            height: 100,
            width: 100,
            borderRadius: 50,
            margin: heightPercentageToDP('1.9%'),
            borderWidth: 2,
        },
        top: {
            height: 260,
            backgroundColor: '#9951fd',
            padding: 10,
    
        },

        drawerText: {
            fontSize: 20,
            color: Themes.color,
        },
    })

    const { screens, navigation } = props;


    const navigate = (path = 'Test') => {
        navigation.navigate(path);
    }

    // console.log(screens.map((e: any) => e.icon));
    return (
        <View style={Css.container}>
            <View style={styles.top} >
                <Image style={styles.img} source={{ uri: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1698753157/sp.jpg' }} />
                <Text style={styles.header}>SIddharth</Text>
                <Text style={styles.role}>SIddharth</Text>

            </View>
            <ScrollView>
                {screens.map((e: any) => 
                (
                    <View key={e.name} >
                        <TouchableOpacity style={styles.key} onPress={() => navigate(e.name)} >
                            {e.icon ? e.icon : <View><Text>&emsp;&emsp;&emsp;</Text></View>}
                            <Text style={styles.drawerText}>{e.label}</Text>
                        </TouchableOpacity>
                        <View style={styles.itemseprater}></View>
                    </View>
                ))}
            </ScrollView>
            <View>

            </View>

        </View>
    )
}

export default Sidebar

