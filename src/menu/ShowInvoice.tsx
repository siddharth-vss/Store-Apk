import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Theme, CSS, Interface } from '../utils'

import { ItemServices, ShopServices } from '../Services';
import { ScrollView } from 'react-native';



import { RouteProp } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
    navigation: NativeStackNavigationProp<any, 'Invoice'>;
    route: RouteProp<any, 'Invoice'>;
};


const Invoice = ({ route }: Props) => {


  const Themes = Theme.Style();
  const Css = CSS.Styles();

  const { id } = route.params as { id: string };
  const [Invoice, setInvoice ] = useState<any>({})

  const [Items, setItems] = useState<Interface.Item[] | null>(null)
  const [InvoiceItems, setInvoiceItems] = useState<string[]>()
  // const [InvoicePrice, setInvoicePrice] = useState<number[]>()
//   const [Total, setTotal] = useState(0)

  const [InvoiceQuantity, setInvoiceQuantity] = useState<number[]>()

  const table = StyleSheet.create({
    tableHeader: {
      flexDirection: 'row',
      backgroundColor: Themes.card,
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    headerText: {
      flex: 1,
      color: Themes.color,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    rowText: {
      flex: 1,
      textAlign: 'center',
      color: Themes.color,
    },
  })




  const getData = async () => {


    const data = await ItemServices.Items();
    setItems(data);
    const invoiceData = await ShopServices.GetInvoice(id);
    setInvoice(invoiceData);
  }
  const barfinder = (e: string) => Items?.filter((f: Interface.Item) => f.bar == Number.parseInt(e));
  const itemfinder = (e: string) => Items?.filter((f: Interface.Item) => f._id == e);

 
  useMemo(() => getData(), []);


  const TotalPriceArr = Invoice?.items?.map((row: any, i: number) => {
    const item = itemfinder(Invoice?.items[i]?._id);
    if (item) {
      return item[0].price * Invoice.quantity[i];
    }
    return 0; // or any default value
  });

  const Total = TotalPriceArr?.reduce((accumulator: any, current: any) => accumulator + current, 0);

  return (
    <View style={[Css.container]} >
        <Text>Invoice : {Invoice?.email ?? ""}</Text>
    <ScrollView>
        <View style={table.tableHeader}>
          <Text style={table.headerText}>Item</Text>
          <Text style={table.headerText}>Price</Text>
          <Text style={table.headerText}>Quantity</Text>
          <Text style={table.headerText}>Total</Text>
        </View>
        {Invoice?.items?.map((row: any, i: number) => {


          const item = itemfinder(Invoice?.items[i]._id);
          if ( item ) {

            // setTotal(Total + item[0].price * Invoice.quantity[i])

            return <View key={i} style={table.tableRow}>
              <Text style={table.rowText}>{item[0].name}</Text>
              <Text style={table.rowText}>{item[0].price}</Text>
              <Text style={table.rowText}>{Invoice.quantity[i]}</Text>
              <Text style={table.rowText}>{item[0].price * Invoice.quantity[i]}</Text>
            </View>
          }
        })}
        <View style={table.tableRow}>
          <Text style={table.rowText}></Text>
          <Text style={table.rowText}></Text>
          <Text style={table.headerText}>Total</Text>
          <Text style={table.rowText}>{Total}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Invoice


