import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import {Location, Permissions} from 'expo';
//import {DangerZone} from './DangerZone.js';

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


  const [coords2, setCoords2] = useState({
    latitude: 30.2849,
    longitude: -97.7320,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });



  const Map = 
  () => {
    console.log(latitude + " " + longitude);
    const [pin, setPin] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
    });
  }

  //callback function that randomly generates a number
  const randomNum = () => {
    return Math.floor( (Math.random() * 100) + 100);
  }

  let radius = 1000;

  const drawCircles = (a) => {
    for(let i = 0; i < a; i++){
      drawCircle();
    }
  }


  //function to generate random coordinates around the entire world
  const randomCoords = () => {
    let lat = Math.random() * 100 + 30.2848;
    let long = Math.random() * 100 + -97.7342;
    return {
      lat: lat,
      lng: long,
    }
  }

  const drawCircle = (a) => {
    return <Circle key={a} center={
      {
      lat: randomNum(),
      lng: randomNum()
      }
    }
    radius= {radius}
    strokeColor= {'rgba(255,0,0,0.5)'}
    fillColor= {'rgba(255,0,0,0.5)'} 
    />;
  }

  let items= [ <Circle key={1} center={coords}
    radius= {radius}
    strokeColor= {'rgba(255,0,0,0.5)'}
    fillColor= {'rgba(255,0,0,0.5)'}/>,

    <Circle key={2} center={coords2}
    radius= {radius}
    strokeColor= {'rgba(255,0,0,0.5)'}
    fillColor= {'rgba(255,0,0,0.5)'}/>
  
  ]; 

  for(let a = 3; a < 100; a++){
  items.push(drawCircle(a));
  }

    
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={coords}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      >
        <Marker 
        coordinate={coords} 
        title="Homeless Person" 
        description="There is a guy on the sidewalk drinking. He does not seem sus."
        draggable={true} onDragEnd={
          e=> {
          try {
          setPin(e.nativeEvent.coordinate)
          } catch (error) {
            console.log(error)
          }}
          } 
        />

    {
      items
    }
          
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
    top: 0, //760. sometimes u may have to change to 0, 0 for text to be on button
    left: 0 //105. sometimes u may have to change to 0, 0 for text to be on button
  },

  circle: {
    radius: 100,
    strokeColor: 'rgba(0,0,255,0.5)',
    fillColor: 'rgba(0,0,255,0.5)',
  }, 



});
// =======
// =======
// import { StyleSheet, Text, View } from 'react-native'
// import ReportScreen from "./components/Report_Screen.js"

// export default function App() {
// >>>>>>> Stashed changes
//   return (
//     <ReportScreen/>
//   );
// }
// >>>>>>> async
