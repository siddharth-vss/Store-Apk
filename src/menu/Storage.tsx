import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Interface } from '../utils'
import { Card, GridBox, TouchCard } from '../components'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Storage = () => {

  const [data, setdata] = useState([])
  const [search, setsearch] = useState(data)

  const getData = async () => {
    try {
      const response = (await axios.get('http://192.168.0.120:3000/storage/shop/66f2b588e93de4c964e76b5d')).data;
      setdata(response)
      console.log(search)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <View>
      <Text>Storage</Text>
      <ScrollView>
        <GridBox >
          {data && data.map((e: Interface.storage) => (
            <TouchCard handlePress= {()=>{Alert.alert(e.name)}} style={styles.box} colorCode={Math.floor(Math.random() * (8 + 1))} key={e._id}>
              <Text style={styles.text} >{e.name}</Text>
              <FontAwesome5 name='inbox' size={widthPercentageToDP('15%')} color={'#FFF'} />
            </TouchCard>
          ))}
        </GridBox>
      </ScrollView>

    </View>
  )
}

export default Storage

const styles = StyleSheet.create({
  storage: {
    backgroundColor: "white ",
  },
  box: {
    width: "47%",
    height: 200,
    marginHorizontal: 4,
    padding: 10,
    borderRadius: 10,
    marginBottom: 4,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
  },
  text: {
    fontSize: widthPercentageToDP('15%'),
    fontWeight: "bold",
    color: "#FFF",
    // marginBottom:5,
  },
})