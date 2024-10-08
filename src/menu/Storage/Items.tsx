import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Interface, SP, Theme } from '../../utils'
import { GridBox } from '../../components'

const Items = ({ ...props }) => {

    const { route } = props;

    const [Items, setItems] = useState<Interface.Item[]>([])
    const getData = async () => {
        const url = `/item/storage/${route?.params?.id}`

        try {
            const response = await (await SP.get(url)).data
            setItems(response)
        } catch (error) {
            console.error('Error:', error)
        }

    }
    const alert = (e: Interface.Item) => {
        Alert.alert(e.name, `Description : ${e.description}\nPrice : ₹${e.price} \nQuantity : ${e.quantity} \nStorage : ${e.storage.name}`);
    }

    useEffect(() => {
        getData();
    }, [Items, route?.params?.id])

    return (
        <View style={[styles.container]}>
            <ScrollView>
                <GridBox>
                    {Items.map((item, index) => (
                        <TouchableOpacity onPress={() => alert(item)} key={index} style={styles.block} >
                            <Image source={{ uri: item.pic }} style={styles.img} />
                            <Text style={styles.text} >{item.name}</Text>
                            {/* <Text style={styles.text} >Price : ₹{item.price}</Text>
              <Text style={styles.text} >Items : {item.quantity}</Text> */}
                        </TouchableOpacity>
                    ))}

                </GridBox>
            </ScrollView>
        </View >

    )
}

export default Items

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: Theme.Theme.background,
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        margin: 'auto',
        width: '80%',
        height: 100,
        marginTop: "10%",
        resizeMode: 'cover',
        borderRadius: 15,
      },
    
      text: {
        color: Theme.Theme.color,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 10,
      },
      block: {
        width: '47%',
        backgroundColor: Theme.Theme.card,
        marginVertical: 10,
        borderRadius: 15,
        height: 'auto',
        shadowColor :"rgb(46 38 61 / 0.2)",
        shadowOpacity : 1,
        shadowRadius : 10,
        elevation : 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
      },
})