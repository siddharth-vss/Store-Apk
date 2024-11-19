import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme, CSS } from '../utils'

import useStore from '../store/store';
import useAuthStore from '../store/Authstore';
import { Card } from '../components';
import { widthPercentageToDP } from 'react-native-responsive-screen';
const Profile = () => {


  const { count, increment, decrement, reset } = useStore();
  const { token, store, user } = useAuthStore();
  const Themes = Theme.Style();
  const Css = CSS.Styles();
  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Themes.color,
      marginBottom: 20,
      marginLeft: 10,
    },
    card: {
      width: '100%',
      height: '100%',
      justifyContent: 'space-around',
      paddingVertical: 20,
    },
    image: {
      width: widthPercentageToDP('50%'),
      height: widthPercentageToDP('50%'),
      borderRadius: 500 ,
      left : '50%',
      // top : '50%',
      transform: [{translateX: -widthPercentageToDP('25%')}, {translateY: -widthPercentageToDP('0%')}],
      borderWidth: 2,
      borderColor: '#007bff',
    },
    infoContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "#FFF",
    },
    role: {
      fontSize: 16,
      color: "#FFF",
      marginTop: 5,
      overflow: 'scroll',
    },
    mail: {
      fontSize: 16,
      color: "#FFF",
      marginTop: 5,
      overflow: 'scroll',
      width: widthPercentageToDP('60%')
    },
    idNumber: {
      fontSize: 14,
      color: "#FFF",

      marginTop: 10,
    },
    footer: {
      position: 'absolute',
      bottom: 20,
      alignItems: 'center',
    },
    footerText: {
      position: "absolute",
      transform: '-50%',
      fontSize: 14,
      color: "#FFF",
    },
  })

  return (
    <View style={[Css.container]}>
      <Text style={Css.text_temp}>Profile{user.name}</Text>
      <Card key={user._id} colorCode={Math.floor(Math.random() * (3 + 1))} height={'60%'} width={'95%'} >
              <View style={styles.card}>
                <Image
                  style={styles.image}
                  source={{
                    uri: user.pic, // Replace with actual image URL
                  }}
                />
                <View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.role}>{user.role}</Text>
                    <Text style={styles.idNumber}>ID: {user._id}</Text>
                    <Text style={styles.idNumber}>Ph:+91 {user.mobile}</Text>
                    <Text style={styles.idNumber}>email : {user.email}</Text>
                  </View>


                </View>
              </View>
            </Card>
    </View>
  )
}

export default Profile

