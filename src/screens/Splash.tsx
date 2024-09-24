import { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
// import React, { useEffect } from 'react'
// import { NavigationProp } from '@react-navigation/native';


import Video, { VideoRef } from 'react-native-video';


const Splash = () => {
  const videoRef = useRef<VideoRef>(null);
  const background = require('../../assets/logo.mp4');

  const [colorCode, setcolorCode] = useState(0)

  useEffect(() => {
    
    setInterval(()=>{
      setcolorCode(colorCode == 0 ? 1 : 0)
    },3000)
  }, [])

  // console.log(colorCode)
  
  return (
    <>

{/* <LinearGradient start={{ x: -0.5, y: -0.5 }} end={{ x: -1.5, y: 2.5 }}  style={styles.sp} colors={['#0C052D','#23123C','#0B052D','#A1A1A1']} ></LinearGradient> */}
{colorCode == 0 ?<LinearGradient start={{ x: -0.5, y: -0.5 }} end={{ x: -1.5, y: 2.5 }}  style={styles.sp} colors={['#000000','#000000','#000000','#000000']} ></LinearGradient>:<></>}
{colorCode == 1 ?<LinearGradient start={{ x: -0.5, y: -0.5 }} end={{ x: -1.5, y: 2.5 }}  style={styles.sp} colors={['#0C052D','#23123C','#0B052D','#A1A1A1']} ></LinearGradient>:<></>}
      <Video
        // Can be a URL or a local file.
        source={background}
        // Store reference  
        ref={videoRef}
        // repeat= { true}
        // Callback when remote video is buffering                                      
        onBuffer={()=>Alert.alert("buffer")}
        // Callback when video cannot be loaded              
        onError={() => Alert.alert('error')}
        style={styles.backgroundVideo}
      />
      
    </>
  )
  // return (
  //   <View style={styles.container}>
  //     <Text>Splash</Text>
  //   </View>
  // )// #0C052D - tl ,#23123C -rl  , #0B052D - rb , 
}

export default Splash

const styles = StyleSheet.create({
  sp:{
    flex : 1,
    position:'relative',
    zIndex:1
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex:2
    // flex : 1,
    // backgroundColor: 'black'
  },
  container: {
    backgroundColor: '#377DFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})