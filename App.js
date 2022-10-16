import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable} from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import {Location, Permissions} from 'expo';
import ReportScreen from './components/Report_Screen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Modal from 'react-native-modal';
//import {DangerZone} from './DangerZone.js';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  // MODAL CHECK --> SCROLL TO REPORT BUTTON TO SEE MODAL TOGGLE ACTUAL CONTENT
  // const [isModalVisible, setModalVisible] = useState(false);
  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // }  

  const [errorMsg, setErrorMsg] = useState(null)
  var userLat = 1000;
  var userLong =1000;
  const opacity = '0.5';


  const [coords, setCoords] = useState({
    latitude: 30.2849,
    longitude: -97.7341,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [coords2, setCoords2] = useState({
    latitude: 30.2849,
    longitude: -97.6341,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [coords3, setCoords3] = useState({
    latitude: 30.2749,
    longitude: -97.6341,
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

  let radius = 1000;

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
    strokeColor= {'rgba(255,0,0,0.5)'}
    fillColor= {'rgba(255,0,0,0.5)'} 
    />;
  }

  let items= [ 
    // <Circle key={1} center={coords}
    // radius= {radius}
    // strokeColor= {'rgba(255,0,0,0.5)'}
    // fillColor= {'rgba(255,0,0,0.5)'}/>
  ]; 

  //add 100 circles to items
  // for(let i = 3; i < 100; i++){
  //   items.push(drawCircle(i));
  // }
{/* <Circle key={1} center={coords}
    radius= {radius}
    strokeColor= {'rgba(255,0,0,0.5)'}
    fillColor= {'rgba(255,0,0,0.5)'}/>,

    <Circle key={2} center={coords}
    radius= {radius}
    strokeColor= {'rgba(255,0,0,0.5)'}
    fillColor= {'rgba(255,0,0,0.5)'}/> */}
  
const addShize = () => {
  items.push(<Circle key={0} center={coords}
    radius= {radius}
    strokeColor= {'rgba(255,0,0,0.5)'}
    fillColor= {'rgba(255,0,0,0.5)'}/>)
    console.log(items.length);
}
    
  return (
    //open the report screen


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

        <Circle center={coords}
          radius= {radius}
          fillColor={'rgba(255,0,0,0.5)'}
        />
          <Circle center={coords2}
          radius= {radius}
          fillColor={'rgba(255,0,0,0.5)'}
        />

      <Circle center={coords3}
          radius= {radius}
          fillColor={'rgba(255,0,0,0.5)'}
        />


    {
      items
    }
    {
      //<ReportScreen/>
    }



      <TouchableOpacity style={styles.button}
       onPress={() => <ReportScreen/>} 
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
    top:0, //760. sometimes u may have to change to 0, 0 for text to be on button
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
