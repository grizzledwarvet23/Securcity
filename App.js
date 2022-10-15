import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState } from 'react';

export default function App() {

  // TESTING OUT MARKERS W LAT/LONG --> WILL CHANGE TO GRABBING USER COORDS LATER
  const [coords, setCoords] = useState({
    latitude: 37.7,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // state = {
  //   textValue: 'REPORT'
  // }
  // const createReport = () => {
  //   //change the text of the touchable opacity calling this
  //   this.setState({textValue: 'WASSUP'})
  // };
  
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
      </MapView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REPORT</Text>
      </TouchableOpacity>
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
