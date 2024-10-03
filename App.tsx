/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';

import NetInfo, { NetInfoWifiState } from '@react-native-community/netinfo';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Dashboard, Splash, Test } from './src/screens';
import { CashCounter,Profile,Store,Yard, } from './src/screens/Tabs';


import SystemNavigationBar from 'react-native-system-navigation-bar';


const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [splash, setSplash] = useState(true);

  SystemNavigationBar.stickyImmersive();


  const [isOnline, setisOnline] = useState<boolean | null>();
  useEffect(() => {
    const Net = NetInfo.addEventListener((state) => {
      // console.log(state.isConnected);
      setisOnline(state.isConnected);
      // Alert.alert('', JSON.stringify(state?.ipAddress ?? state?.isConnected));
      // console.log("Connection type", state.type);
    });

    return () => {
      Net();
    };
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  useEffect(() => {
    setInterval(()=>{
      setSplash(false);
    },8000)
  },[])
  
  
  if (splash) {
    return (
      <Splash />
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Dashboard} />
        <Stack.Screen name="CashCounter" options={{ headerShown: false }} component={CashCounter} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
        <Stack.Screen name="Yard" options={{ headerShown: false }} component={Yard} />
        <Stack.Screen name="Shop" options={{ headerShown: false }} component={Store} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splash: {
    backgroundColor: '#377DFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});



const Network = StyleSheet.create({

  networkView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  networkText: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: '700',
  },
  networkButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
    width: '50%',
  },
});
export default App;


