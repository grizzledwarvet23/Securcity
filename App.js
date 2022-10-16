<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import {Location, Permissions} from 'expo';
//import * as Location from 'expo-location';

export default function App() {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null)
  
  var userLat = 0;
  var userLong = 0;

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      userLat = location.coords.latitude;
      userLong = location.coords.longitude;
      
    })();
  }, []);
    
  // async function load() {
  //   try {
  //     let { grabStatus } = Location.requeswefwefwfwefweffwetPermissionsAsync();

  //     if (grabStatus !== 'granted') { 
  //       setErrorMsg("Unable to access location, turn on permissions in settings")
  //       return
  //     } 
  //     const location = await Location.getCurrentPositionAsync()
  //     userLat = location.coords.latitude
  //     userLong = location.coords.longitude
  //   }
  //   catch (e) {
  //     alert(e)
  //   }
  // }

  const [coords, setCoords] = useState({
    latitude: userLat,
    longitude: userLong,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
=======
import { StyleSheet, Text, View } from 'react-native'
import ReportScreen from "./components/Report_Screen.js"

export default function App() {
>>>>>>> Stashed changes
  return (
    <ReportScreen/>
  );
}