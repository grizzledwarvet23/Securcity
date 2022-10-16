import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import {Location, Permissions} from 'expo';

export default function App() {

  const [errorMsg, setErrorMsg] = useState(null)
  var userLat = 0;
  var userLong = 0;


  const [coords, setCoords] = useState({
    latitude: 30.2849,
    longitude: -97.7341,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const Map = () => {
    const [pin, setPin] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
    });
  }

    
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to Securcity!</Text>
      <MapView
        style={styles.map}
        region={coords}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      >
        <Marker coordinate={coords} title="MARKER" draggable={true} onDragEnd={
          e=>setPin(e.nativeEvent.coordinate)
          } />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REPORT</Text>
      </TouchableOpacity>
      </MapView>
      <StatusBar style="auto"/>
    </View>
  )
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
    top: 750
  },
  //create a style for the button text
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
    top: 760,
    left: 105
  }

});
