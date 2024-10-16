import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Theme, CSS, Interface } from '../utils'
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { ItemServices } from '../Services';
import { ScrollView } from 'react-native';
import RNPrint from 'react-native-print';


const Invoice = () => {
  const Themes = Theme.Style();
  const Css = CSS.Styles();

  const printHTML = async () => {
    try {
      const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font - family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

            .container {
              width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

            .header {
              text - align: center;
            padding: 10px 0;
            background-color: #007bff;
            color: #ffffff;
            border-radius: 10px 10px 0 0;
        }

            .content {
              padding: 20px;
            text-align: center;
        }

            .otp-code {
              font - size: 24px;
            font-weight: bold;
            margin: 20px 0;
            color: #007bff;
        }

            .footer {
              text - align: center;
            padding: 10px 0;
            background-color: #f4f4f4;
            color: #888888;
            border-radius: 0 0 10px 10px;
        }

            .footer a {
              color: #007bff;
            text-decoration: none;
        }
          </style>
        </head>

        <body>
          <div class="container">
            <div class="header">
              <h1>Your OTP Code</h1>
            </div>
            <div class="content">
              <p>Hello,{{ reply_to }}</p>
              <p>Use the following One-Time Password (OTP) to complete your transaction:</p>
              <p class="otp-code">{{ OTP_CODE }}</p>
              <p>This OTP is valid for the next 10 minutes.</p>
              <p>If you did not request this OTP, please ignore this email.</p>
            </div>
            <div class="footer">
              <p>Thank you,<br>Sparrow Tech</p>
              <p><a href="https://spgaming2056.w3spaces.com/">Visit our website</a></p>
            </div>
          </div>
        </body>

      </html>
 `;

      await RNPrint.print({ html: htmlContent });
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while trying to print the document.');
    }
  };

  const [Bar, setBar] = useState('')
  const [Quantity, setQuantity] = useState('')
  const [Itemname, setItemname] = useState<string | null>(null)
  const [Items, setItems] = useState<Interface.Item[] | null>(null)
  const [InvoiceItems, setInvoiceItems] = useState<string[]>()
  const [InvoicePrice, setInvoicePrice] = useState<number[]>()
  const [Total, setTotal] = useState(0)

  const [InvoiceQuantity, setInvoiceQuantity] = useState<number[]>()


  const styles = StyleSheet.create({
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: Themes.color,
      padding: 10,
      textAlign: 'center',
      backgroundColor: Themes.card,
      borderRadius: 10,
      marginVertical: 20,
    },

    input: {
      height: 50,
      width: '50%',
      borderColor: Themes.contrast,
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 15,
      borderRadius: 10,
      color: Themes.color,
      // color:"#FFF",
      backgroundColor: Themes.background,
    },

    txt: {
      color: Themes.color,
      fontWeight: 'bold',
      fontSize: 20,
      marginVertical: 10,
    },
  })
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
  }
  const barfinder = (e: string) => Items?.filter((f: Interface.Item) => f.bar == Number.parseInt(e));
  const namefinder = (e: string) => Items?.filter((f: Interface.Item) => f._id == e);

  const Barhandel = (e: string) => {
    setBar(e);
    const item = barfinder(e);

    if (item && item.length > 0) {
      setItemname(item[0].name);
    } else {
      setItemname("");
    }
  }

  const handleSubmit = () => {
    printHTML();
    const item = barfinder(Bar);
    if (item && InvoiceQuantity && InvoiceItems?.includes(item[0]._id)) {
      const index = InvoiceItems.indexOf(item[0]._id)

      const newQuantity = InvoiceQuantity?.map((e: any, i: number) => {

        if (i === index) {
          return e + Number(Quantity)
        }
        return e;
      })
      setInvoiceQuantity(newQuantity)
      // setInvoiceQuantity(prevItems => prevItems ? [...prevItems, Number(Quantity)] : [Number(Quantity)]);
      setTotal(Total + (item[0].price * Number(Quantity)));
      setItemname(''); setBar(''); setQuantity('');
      // console.log(InvoiceQuantity?.map((e: any, i: number) => e === item[0]._id? {...e, quantity: e.quantity + Number(Quantity)} : e))
    }
    else if (item && item.length > 0) {
      setInvoiceItems(prevItems => prevItems ? [...prevItems, item[0]._id] : [item[0]._id]);
      setInvoicePrice(prevItems => prevItems ? [...prevItems, item[0].price] : [item[0].price]);
      setInvoiceQuantity(prevItems => prevItems ? [...prevItems, Number(Quantity)] : [Number(Quantity)]);
      setItemname(''); setBar(''); setQuantity('');
      setTotal(Total + (item[0].price * Number(Quantity)));
    }
    else {
      Alert.alert('Item not found!');
    }
  };

  useMemo(() => getData(), []);




  return (
    <View style={[Css.container]} >
      {/* <Text style={styles.text} >Invoice</Text> */}
      {/* <Text style={styles.text} >Your invoice is ready!</Text> */}
      <View style={Css.card}>
        <View style={Css.row} >
          <Text style={styles.txt} >BarCode :</Text>
          <TextInput
            // autoCapitalize='characters'
            style={styles.input}
            placeholder="Bar number"
            cursorColor={Themes.color}
            placeholderTextColor={'grey'}
            value={Bar}
            onChangeText={(e) => { Barhandel(e) }}
            keyboardType="number-pad"
          />
        </View>
        <View style={Css.row} >
          <Text style={styles.txt} >Quantity :</Text>
          <TextInput
            // autoCapitalize='characters'
            style={styles.input}
            placeholder="Quantity"
            cursorColor={Themes.color}
            placeholderTextColor={'grey'}
            value={Quantity}
            onChangeText={setQuantity}
            keyboardType="number-pad"
          />
        </View>
        <View style={Css.row} >
          <Text style={styles.txt} >Item :</Text>
          <TextInput
            // autoCapitalize='characters'
            style={styles.input}
            placeholder="Item"
            cursorColor={Themes.color}
            placeholderTextColor={'grey'}
            value={Itemname ?? ''}
            onChangeText={setItemname}
            keyboardType="number-pad"
          />
        </View>
        <View style={Css.row} >
          <TouchableOpacity onPress={handleSubmit} style={Css.button} >
            <Text style={Css.buttonText} > Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={table.tableHeader}>
          <Text style={table.headerText}>Item</Text>
          <Text style={table.headerText}>Price</Text>
          <Text style={table.headerText}>Quantity</Text>
          <Text style={table.headerText}>Total</Text>
        </View>
        {InvoiceItems?.map((row: any, i: number) => {


          const item = namefinder(InvoiceItems[i]);
          if (InvoiceQuantity && InvoicePrice && item && InvoiceQuantity[i] > 0) {


            return <View key={i} style={table.tableRow}>
              <Text style={table.rowText}>{item[0].name}</Text>
              <Text style={table.rowText}>{InvoicePrice[i]}</Text>
              <Text style={table.rowText}>{InvoiceQuantity[i]}</Text>
              <Text style={table.rowText}>{InvoicePrice[i] * InvoiceQuantity[i]}</Text>
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


