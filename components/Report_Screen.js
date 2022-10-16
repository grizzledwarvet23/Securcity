import { StyleSheet, Text, View, Keyboard, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

const countries = ["Assault", "Robbery", "Homeless People", "Dirtiness", "Noise Pollution"]


export default function ReportScreen() {
    var text;
    return ( 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text 
            style={styles.title}>
            REPORT
        </Text>
        <Text 
            style={styles.header}
        >
            Category
        </Text>

        <Button 
            style={styles.buttonStyle}
            title="Home"
            color="#FFFFFF"
        />
        <SelectDropdown
            buttonStyle={styles.categories}
	        data={countries}
            onSelect={(selectedItem, index) => {
            }}
	       
        />
        <Text
            style = {styles.buttonText}
        >
            Description

        </Text>
         
        <TextInput
            style = {styles.textBox}    
            placeholder="Enter here"
            maxLength = {150}
            multiline={true}
            onChangeText ={(value) => text = value}
        />
        
        <TouchableOpacity 
            style={styles.button}
            onPress={() => console.log(2)}>
        </TouchableOpacity>
        <Text
            style={styles.header2}
        >
            SUBMIT
        </Text>
        
      </View>
    </TouchableWithoutFeedback>
      
    );
  }

  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
        title: {
        position: 'absolute',
        left: 120,
        top: 70,
        fontSize: 40,
        color: '#000000',
        fontWeight: 'bold'
        },
        header: {
            position: 'absolute',
            left: 40,
            fontSize: 30,
            color: '#000000',
            fontWeight: 'bold',
            top: 170
        },
        categories: {
            position: 'absolute',
            left: 40,
            top: 220,
            fontSize: 25,
        },
        header2: {
            position: 'absolute',
            left: 30,
            fontSize: 30,
            color: '#000000',
            fontWeight: 'bold',
            top: 753,
            left: 140,
            color: 'white'
        },
        textBox: {
            top: -7,
            left: 49,
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
            width: 250,
            height: 110,
            flexWrap: 'wrap'

        },
        button: {
            top: 350,
            left: -155,
            backgroundColor: 'red',
            color: 'white',
            width: 200,
            height: 60,
            padding: 10,
            margin: 10,
            borderRadius: 10,
        }, 
        buttonText: {
            position: 'absolute',
            left: 40,
            top: 100,
            fontSize: 30,
            color: '#000000',
            fontWeight: 'bold',
            top: 320
        }
    })