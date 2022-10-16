import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable} from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import {Location, Permissions} from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Modal from 'react-native-modal';
//import {DangerZone} from './DangerZone.js';

const Stack = createNativeStackNavigator();


export default function MapScreen({navigation}) {
  let co = 0;
  console.log(co)
  const [modalVisible, setModalVisible] = useState(false);

  const [errorMsg, setErrorMsg] = useState(null)
  var userLat = 1000;
  var userLong =1000;
  const opacity = '0.5';


  const [coords, setCoords] = useState({
    latitude: 30.2843,
    longitude: -97.7349,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [coords2, setCoords2] = useState({
    latitude: 30.2849,
    longitude: -97.7338,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [coords3, setCoords3] = useState({
    latitude: 30.2849,
    longitude: -97.731,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [coords4, setCoords4] = useState({
    latitude: 30.2839,
    longitude: -97.7331,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [coords5, setCoords5] = useState({
    latitude: 30.2829,
    longitude: -97.7269,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [coords6, setCoords6] = useState({
    latitude: 30.2818,
    longitude: -97.7313,
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
    return Math.floor(Math.random() * 100000);
  }

  let radius = 50;

 



  let op = '0.50';

  let items= [ 
    <Circle center={coords} key={0}
          radius= {radius}
          fillColor={'rgba(255,0,0,' + op + ')'}
        />,
        <Circle center={coords2} key={1}
          radius= {radius}
          fillColor={'rgba(255,0,0,' + op + ')'}
        />,
        //make circle 3 same radius as circle 2 but slightly different coords
        <Circle center={coords3} key={2}
          radius= {radius}
          fillColor={'rgba(255,0,0,' + op + ')'}
        />,
        //make circle 4 same radius as circle 2 but slightly different coords
        <Circle center={coords4} key={3}
          radius= {radius}
          fillColor={'rgba(255,0,0,' + op + ')'}
        />,
        <Circle center={coords5} key={4}
          radius= {radius}
          fillColor={'rgba(255,0,0,' + op + ')'}
        />,
        <Circle center={coords6} key={5}
          radius= {radius}
          fillColor={'rgba(255,0,0,' + op + ')'}
        />
        


  ]; 

  const addCircle = () => {
    console.log(items.length);
    items.push(<Circle center={coords} key={randomNum()}
          radius= {radius}
          fillColor={'rgba(255,0,0,' + op + ')'}
        />);
    this.forceUpdate();
  }

  


    
  return (
    //open the report screen


    <View style={styles.container}>
      <MapView
        followsUserLocation={true}
        style={styles.map}
        region={coords}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        minZoomLevel = {15} 
        //minimum zoom level so the map doesn't zoom out too far, so the user can't see the whole map.
        //fits in with design philosophy of the app being kept city-centric
      >
        <Marker 
        
        pinColor={'green'}
        //onDrag={(e) => addCircle()}
        
        coordinate={coords} 
        title="Drag to set report location" 
        draggable={true} onDragEnd={
          e=> {
          try {
          setPin(e.nativeEvent.coordinate)
          } catch (error) {
            console.log(error)
          }}
          } 
        />

<Marker 
        
        pinColor={'green'}
        opacity={0}
        coordinate={coords} 
        title="Assault" 
        description="There was a fight going on here, I took a few hits"
        />

<Marker 
        
        pinColor={'green'}
        opacity={0}
        coordinate={coords2} 
        title="Dirty Area" 
        description="Lot's of smelly trash here...probably a CS student?"
        />

<Marker 
        
        pinColor={'green'}
        opacity={0}
        coordinate={coords3} 
        title="Noise Pollution" 
        description="It's really loud here, frat parties go on all night"
        />

<Marker 
        
        pinColor={'green'}
        opacity={0}
        coordinate={coords4} 
        title="Robbery" 
        description="BRO SOMEONE JUST ROBBED THE SPORTS STORE, THEY TRYNA BE LIKE LEBRON"
        />

<Marker 
        
        pinColor={'green'}
        opacity={0}
        coordinate={coords5} 
        title="Homeless People" 
        description="There's a lot of homeless people here, they're all sleeping"
        />
<Marker 
        
        pinColor={'green'}
        opacity={0}
        coordinate={coords6} 
        title="Assault" 
        description="Crazy concert near moody center, everyone's fighting in the line"
        />

   


    {
      items //this displays the array of circles currently stored
}
    {
      //<ReportScreen/>
    }
      <TouchableOpacity style={styles.button}
       onPress={() => 
        //pass in coordinates of the marker to the report screen
        //get the current coordinates of the marker

        navigation.navigate("Report" )} 
        >
        <Text style={styles.buttonText}>REPORT</Text>
      </TouchableOpacity>
      </MapView>
      <StatusBar style="auto"/>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
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
    top: 670
  },
  //create a style for the button text
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
    top:680, //680. sometimes u may have to change to 0, 0 for text to be on button
    left: 105 //105. sometimes u may have to change to 0, 0 for text to be on button
  },

  circle: {
    // radius: 100,
    strokeColor: 'rgba(0,0,255,0.5)',
    fillColor: 'rgba(0,0,255,0.5)',
  }, 



});