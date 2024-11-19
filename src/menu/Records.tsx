import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Theme, CSS } from '../utils'
import { ShopServices } from '../Services';
import { NavigationProp } from '@react-navigation/native';

const Records = ({ navigation }: { navigation: NavigationProp<any> }) => {

  const [Bills, setBills] = useState<any[] | null>()
  const Themes = Theme.Style();
  const Css = CSS.Styles();
  const navigate = (id: string, path = 'ShowInvoice',) => {
    navigation.navigate(path, { id });
  }


  const dateformater = (date: string) => date.slice(0, 10).split('-').reverse().join('-');

  const getRecords = async () => {
    const data = await ShopServices.GetAllInvoice();
    setBills(data);
  }


  useMemo(() => getRecords(), [])

  return (
    <ScrollView style={[Css.container]}>
      {
        Bills?.map((e, i) => {
          return <TouchableOpacity onPress={() => navigate(e._id)} key={i} style={Css.text_temp}>
            <Text style={Css.text_temp} >{e.email}</Text>
            <Text style={{ position: "absolute", right: 10, bottom: 0 }} >{dateformater(e.createdAt)}</Text>
          </TouchableOpacity>
        })
      }
    </ScrollView>
  )
}

export default Records


