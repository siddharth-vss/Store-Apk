import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Card, Loader } from '../components'
import { Image } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Interface, SP, Theme } from '../utils'

const Shop = () => {
  const [users, setusers] = useState([])

  const get = async () => {
    const data = await SP.get("/user");
    setusers(data.data);
  }
  useEffect(() => {
    get();
  }, [])



  const data: { [key: string]: Interface.User[] } = users.reduce((groups: any, user: Interface.User) => {//+
    const group = user.role;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(user);
    return groups;
  }, {});

 

  return (
    <View  style={[styles.container]}>

      <Text style={[styles.title]}>Admin:</Text>
      <ScrollView style={{ height: heightPercentageToDP('15%') }} horizontal={true}>
      {(data?.admin?.length < 1 && users?.length < 1) && <Loader size={65} color={Theme.COLORS[0]} />}
        
        {data?.admin?.map((item: Interface.User) => (
          // {users.map((item: Interface.User) => (
            <Card key={item._id} colorCode={Math.floor(Math.random() * (3 + 1))} height={'30%'} width={'100%'} >
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={{
                  uri: item.pic, // Replace with actual image URL
                }}
                />
              <View>
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.role}>{item.role}</Text>
                  <Text style={styles.idNumber}>ID: {item._id}</Text>
                  <Text style={styles.idNumber}>Ph:+91 {item.mobile}</Text>
                </View>

                {/* Footer */}

                <View style={styles.footer}>
                  {/* <Text style={styles.footerText}>Company Name</Text> */}
                  <Text style={styles.footerText}>email : {item.email}</Text>
                </View>

              </View>
            </View>
          </Card>
        ))}
      </ScrollView>

      <Text style={[styles.title]} >Users:</Text>
      <ScrollView horizontal={true}>
        {(data?.user?.length < 1 && users?.length < 1) && <Loader size={65} color={Theme.COLORS[0]} />}
        {data?.user?.map((item: Interface.User) => (
          // {users.map((item: Interface.User) => (
            <Card key={item._id} colorCode={Math.floor(Math.random() * (3 + 1))} height={'30%'} width={'100%'} >
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={{
                  uri: item.pic, // Replace with actual image URL
                }}
              />
              <View>
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.role}>{item.role}</Text>
                  <Text style={styles.idNumber}>ID: {item._id}</Text>
                  <Text style={styles.idNumber}>Ph:+91 {item.mobile}</Text>
                </View>

                {/* Footer */}

                <View style={styles.footer}>
                  {/* <Text style={styles.footerText}>Company Name</Text> */}
                  <Text style={styles.footerText}>email : {item.email}</Text>
                </View>

              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.Theme.color,
    marginBottom: 20,
    marginLeft: 10,
  },
  container: {
    backgroundColor: Theme.Theme.background,
    flex : 1,
  },
  card: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
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