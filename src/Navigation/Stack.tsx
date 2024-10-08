import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ParamListBase, RouteProp } from '@react-navigation/native';



const StackX = createNativeStackNavigator();

interface ParentProps {
  children?: React.ReactNode;
  colorCode?: number;
  height?: string;
  width?: string;
  colors?: string[];
  style?: StyleProp<ViewStyle>;
  screens: any;
  // options: NativeStackNavigationOptions | ((props: {
  //   route: RouteProp<ParamListBase, any>;
  //   navigation: any;
  // }) => NativeStackNavigationOptions) | undefined
}
const Stacks: React.FC<ParentProps> = ({
  screens,
  // options
}) => {
  return (
    <StackX.Navigator>
      {
        screens?.map((e: any) => {
          return <StackX.Screen key={e.name} options={e.options} name={e.name} component={e.component} />
        })
      }
    </StackX.Navigator>
  )
}

export default Stacks

const styles = StyleSheet.create({})

