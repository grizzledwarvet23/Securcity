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
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to Securcity!</Text>
      <MapView
        style={styles.map}
        region={coords}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      >
        <Marker coordinate={coords} title="MARKER"/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REPORT</Text>
      </TouchableOpacity>
      </MapView>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //create a style for the map
  map: {
    alignSelf: 'stretch',
    height: '100%',
    alignItems: 'center',
    // width: '100%',
  },
  //create a style for the title text
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  //create a style for the button
  button: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    margin: 10,
    width: 180,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  //create a style for the button text
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
  }

});
