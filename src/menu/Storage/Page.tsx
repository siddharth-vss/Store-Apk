import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Interface, SP, Theme } from '../../utils'
import { Card, GridBox, Loader, TouchCard } from '../../components'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { NavigationProp } from '@react-navigation/native'

const Storage = ({ navigation }: { navigation: NavigationProp<any> }) => {

  const [data, setdata] = useState([])
  const [search, setsearch] = useState<Interface.storage[]>([])
  const [value, setValue] = useState('')


  const navigate = (path = 'Test', data: {}) => {
    navigation.navigate(path, { ...data });
  }
  console.log(data?.length, search?.length);

  const getData = async () => {
    try {
      const response = (await SP.get('/storage/shop/66f2b588e93de4c964e76b5d')).data;
      setdata(response)
      setsearch(response);
    } catch (error) {
      console.error(error)
    }
  }

  useMemo(() => getData(), [])

  // useEffect(() => {
  //   getData();
  // }, [])
  useEffect(() => {
    const result = data.filter((e: Interface.storage) => {
      if (value?.length > 0) {
        if (e.name.includes(value.toLocaleUpperCase())) {
          return e;
        }
      }
    })
    if (result?.length > 0) {
      setsearch([...result]);
    }
    else {
      if (value?.length > 0) {
        setsearch([]);
      }
      else {
        setsearch([...data]);
      }
    }
  }, [value])

  return (
    <View style={[styles.container]} >
      <Text>Storage : </Text>
      <TextInput
        autoCapitalize='characters'
        cursorColor={'#FFF'}
        style={styles.input}
        placeholder="Storage Name"
        placeholderTextColor="#ccc"
        value={value}
        onChangeText={setValue}
        keyboardType="email-address"
      />
      <ScrollView>
        <GridBox >
          {(search?.length < 1 && data?.length > 0) && <Search />}
          {(search?.length < 1 && data?.length < 1) && <Loader size={65} color={Theme.COLORS[0]} />}
          {search && search.map((e: Interface.storage, index: number) => (
            <TouchCard handlePress={() => { navigate('Items', { id: e._id }) }} style={styles.box} h={200} colorCode={index % 9} key={e._id}>
              {/* random color  */}
              {/* <TouchCard handlePress={() => { Alert.alert(e.name) }} style={styles.box} h={200} colorCode={Math.floor(Math.random() * (8 + 1))} key={e._id}> */}
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
  container: {
    backgroundColor: Theme.Theme.background,
    flex: 1,
  },
  storage: {
    backgroundColor: "white ",
  },
  box: {
    width: "47%",
    height: 200,
    marginHorizontal: 4,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
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
  input: {
    height: 50,
    backgroundColor: '#9155fd',
    marginBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
  },
})


const Search = () => {
  const [p, setp] = useState(true)
  setTimeout(() => {
    setp(false)
  }, 5000)
  if (p) {
    return <Loader size={65} color={Theme.COLORS[0]} />
  }
  return <Text style={styles.text}>NO RECORD FOUND</Text>
}