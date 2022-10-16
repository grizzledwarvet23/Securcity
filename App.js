import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable} from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import {Location, Permissions} from 'expo';
import ReportScreen from './components/Report_Screen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './MapScreen';
//import Modal from 'react-native-modal';
//import {DangerZone} from './DangerZone.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const [errorMsg, setErrorMsg] = useState(null)
  var userLat = 1000;
  var userLong =1000;
  const opacity = '0.5';

  const [coords, setCoords] = useState({
    latitude: 30.2849,
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

  // const [coords2, setCoords2] = useState({
  //   latitude: userLat,
  //   longitude: userLong,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // });

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

  // const drawCircles = (a) => {
  //   for(let i = 0; i < a; i++){
  //     drawCircle();
  //   }
  // }

  const drawCircle = (a) => {
    return <Circle key={a} center={
     coords 
      
    }
    radius= {radius}
    strokeColor= {'rgba(255,0,0,1)'}
    fillColor= {'rgba(255,0,0,0.5)'} 
    />;
  }

  let items= [ 
    <Circle center={coords} key={0}
          radius= {radius}
          fillColor={'rgba(255,0,0,0.5)'}
        />,
        <Circle center={coords2} key={1}
          radius= {radius}
          fillColor={'rgba(255,0,0,0.5)'}
        />,
        //make circle 3 same radius as circle 2 but slightly different coords
        <Circle center={coords3} key={2}
          radius= {radius}
          fillColor={'rgba(255,0,0,0.5)'}
        />,
        //make circle 4 same radius as circle 2 but slightly different coords
        <Circle center={coords4} key={3}
          radius= {radius}
          fillColor={'rgba(255,0,0,0.5)'}
        />

  ]; 
  
{}
    
  return (
    //open the report screen
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
