import {  ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { CSS, Interface, SP, Theme } from '../../utils'
import {  GridBox, Loader, Select, TouchCard } from '../../components'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { NavigationProp } from '@react-navigation/native'

const Storage = ({ navigation }: { navigation: NavigationProp<any> }) => {

  const Themes = Theme.Style();
  const Css = CSS.Styles();
  const styles = StyleSheet.create({


    
    
    searchText: {
      fontSize: 18,
      color: Themes.color,
      alignItems: "center",
      marginLeft: 10,
      fontWeight: "bold",
      marginTop: 12.5,
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
      backgroundColor: Themes.background,
      marginBottom: 15,
      borderRadius: 10,
      width: '50%',
      paddingHorizontal: 15,
      color: Themes.color,
      borderColor: Themes.contrast,
      borderWidth: 1,
    },
  })

  const [data, setdata] = useState([])
  const [search, setsearch] = useState<Interface.storage[]>([])
  const [Space, setSpace] = useState('')
  const [Manager, setManager] = useState<Interface.User | null>()

  const Search = () => {
    const [p, setp] = useState(true)
    setTimeout(() => {
      setp(false)
    }, 5000)
    if (p) {
      return <Loader size={65} color={Theme.COLORS[0]} />
    }
    return <Text style={[styles.text,{color : Themes.color}]}>NO RECORD FOUND</Text>
  }
  const navigate = (path = 'Test', data: {}) => {
    navigation.navigate(path, { ...data });
  }

  const clear = () => {
    setSpace('');
    setManager(null);
    setsearch([...data]);
  }

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
    let result = [...data];
    if (Space?.length > 0) {
      result = result.filter((e: Interface.storage) => e.name.includes(Space.toLocaleUpperCase()));
    }
    if (Manager) {
      result = result.filter((e: Interface.storage) => e.manager.includes(Manager?._id ?? ""));
    }

    if (result?.length > 0) {
      setsearch([...result]);
    }
    else {
      if (Space?.length > 0) {
        setsearch([]);
      }
      else if (Manager) {
        setsearch([]);
      }
      else {
        setsearch([...data]);
      }
    }
  }, [Space, Manager])

  return (
    <View style={[Css.container]} >
      <Text style={[styles.text, { fontSize: 25, color: Themes.color }]} >Storage : </Text>
      <View style={Css.card} >
        <View style={Css.row}>
          <Text style={styles.searchText}>Search : </Text>
          <TextInput
            autoCapitalize='characters'
            style={styles.input}
            placeholder="Storage Name"
            cursorColor={'#FFF'}
            placeholderTextColor="#ccc"
            value={Space}
            onChangeText={setSpace}
            keyboardType="email-address"
          />
        </View>
        <View style={Css.row}>
            <Text style={styles.searchText}>Manager : </Text>
          <View style={{ width: '47%' }}>
            <Select selectedOption={Manager} setSelectedOption={setManager} options={DATA} placeholder='Manager name' />
          </View>
        </View>
        <View style={Css.row}>
          <TouchableOpacity style={Css.button} onPress={clear}>
            <Text style={Css.buttonText} >Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
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

const DATA = [
  {
    "_id": "66f1424247209feecb829759",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "user",
    "mobile": '9876543260',
    "pic": "https://res.cloudinary.com/dabh5hsuk/image/upload/v1698927011/fvjydafhxp8jwfaxpqwy.webp",
    "createdAt": "2024-09-23T10:26:10.720Z",
    "updatedAt": "2024-09-23T10:26:10.720Z",
    "__v": 0
  },
  {
    "_id": "66f2acefc1cc981c38abf203",
    "name": "Siddharth",
    "email": "vadodariyasiddhartha2056@gmail.com",
    "role": "user",
    "mobile": '1023456789',
    "pic": "https://res.cloudinary.com/dabh5hsuk/image/upload/v1698927011/fvjydafhxp8jwfaxpqwy.webp",
    "createdAt": "2024-09-24T12:13:35.150Z",
    "updatedAt": "2024-09-24T12:13:35.150Z",
    "__v": 0
  },
  {
    "_id": "66f55fc786f9869978a74744",
    "name": "S.P.",
    "email": "sp@mail.com",
    "role": "admin",
    "mobile": '1203456789',
    "pic": "https://res.cloudinary.com/dabh5hsuk/image/upload/v1709213851/wd6xe1t3b4r2xhtm3wql.png",
    "createdAt": "2024-09-26T13:21:11.548Z",
    "updatedAt": "2024-09-26T13:21:11.548Z",
    "__v": 0
  }
] 