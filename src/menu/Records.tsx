import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Theme, CSS } from '../utils'
import { ShopServices } from '../Services';

const Records = () => {

  const [Bills, setBills] = useState<any[] | null>()
  const Themes = Theme.Style();
  const Css = CSS.Styles();

  const dateformater =(date : string)=> date.slice(0, 10).split('-').reverse().join('-');
  
  const getRecords = async () => {
    const data = await ShopServices.GetAllInvoice();
    // console.log('Records :', data);
    setBills(data);
  }

  useMemo(() => getRecords(), [])

  return (
    <View style={[Css.container]}>
      {
        Bills?.map((e, i) => {
          return <View key={i} style={Css.text_temp}>
            <Text >{e._id}</Text>
            <Text style={Css.text_temp} >{e.email}</Text>
            <Text style={{position:"absolute",right:10,bottom:0}} >{dateformater(e.createdAt)}</Text>
          </View>
        })
      }
    </View>
  )
}

export default Records


