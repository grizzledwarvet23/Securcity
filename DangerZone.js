import React from 'react';


//this would be for the red dots, to group together its data

class DangerZone extends React.Component {
    
    //the different criteria kept track as variables
    numAssaults = 0
    numHomeless = 0
    numNoisy = 0
    numDirty = 0



    render() {
       
        return (
            <View>
                <Circle></Circle>
            </View>
        );
    }
}

export default DangerZone;