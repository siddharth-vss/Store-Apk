import { Alert, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Theme, CSS, Interface } from '../utils'
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { ItemServices, ShopServices } from '../Services';
import { ScrollView } from 'react-native';
import RNPrint from 'react-native-print';
import { InvoiceFile } from '../templates';


const Invoice = () => {
  const Themes = Theme.Style();
  const Css = CSS.Styles();

  // const [first, setfirst] = useState(second)



  const [Bar, setBar] = useState('')
  const [Quantity, setQuantity] = useState('')
  const [Itemname, setItemname] = useState<string | null>(null)
  const [Items, setItems] = useState<Interface.Item[] | null>(null)
  const [InvoiceItems, setInvoiceItems] = useState<string[]>()
  // const [InvoicePrice, setInvoicePrice] = useState<number[]>()
  const [Total, setTotal] = useState(0)

  const [InvoiceQuantity, setInvoiceQuantity] = useState<number[]>()
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');


  const showPrompt = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    console.log('User input:', inputValue);
    setModalVisible(false);
    printHTML();
  };


  const printHTML = async () => {
    let invobj;
    if (inputValue.length > 0) {

      invobj = await ShopServices.CreateInvoice({
        email: inputValue,
        items: InvoiceItems ?? [],
        quantity: InvoiceQuantity ?? [],
        total: Total,
        shop: '66f2b588e93de4c964e76b5d'
      });
      // Alert.prompt("dd");
      try {
        const invoice = InvoiceFile({
          Items: Items ?? [],
          InvoiceItems: InvoiceItems ?? [],
          InvoiceQuantity: InvoiceQuantity ?? [],
          data: invobj,

        });
        await RNPrint.print({ html: invoice });
      } catch (error) {
        Alert.alert('Error', 'Something went wrong while trying to print the document.');
      }
    }
  };


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
  const itemfinder = (e: string) => Items?.filter((f: Interface.Item) => f._id == e);

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
      // setInvoicePrice(prevItems => prevItems ? [...prevItems, item[0].price] : [item[0].price]);
      setInvoiceQuantity(prevItems => prevItems ? [...prevItems, Number(Quantity)] : [Number(Quantity)]);
      setItemname(''); setBar(''); setQuantity('');
      setTotal(Total + (item[0].price * Number(Quantity)));
    }
    else {
      // Alert.alert('Item not found!');
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
          <TouchableOpacity onPress={showPrompt} style={Css.button} >
            <Text style={Css.buttonText} > Print</Text>
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


          const item = itemfinder(InvoiceItems[i]);
          if (InvoiceQuantity && item && InvoiceQuantity[i] > 0) {


            return <View key={i} style={table.tableRow}>
              <Text style={table.rowText}>{item[0].name}</Text>
              <Text style={table.rowText}>{item[0].price}</Text>
              <Text style={table.rowText}>{InvoiceQuantity[i]}</Text>
              <Text style={table.rowText}>{item[0].price * InvoiceQuantity[i]}</Text>
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


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
              <Text style={{ marginBottom: 10 }}>Enter your name:</Text>
              <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
                placeholder="Your name"
                value={inputValue}
                onChangeText={setInputValue}
              />
              <TouchableOpacity style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }} onPress={handleConfirm}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>
    </View>
  )
}

export default Invoice


