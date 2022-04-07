import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const data = require('../data/aed-locations-geojson.json');
const length = 9282;
let id = 0;
let markers = [];

function getInfo(name, word){
    let pos1 = word.search(name);
    let a = word.slice(pos1, word.length);
    let pos2 = a.search('<td>');
    let pos3 = a.search('</td>');
    result = a.slice(pos2+4,pos3);
    return result;
}

// Read all AED markers 
function generateMarkers() {
  const result = [];
  for (let i = 0; i < length; i+=15) {     // the density of the marker
    const word = data.features[i].properties.Description;
    AEDLocationDescription = getInfo('AED_LOCATION_DESCRIPTION', word);
    operatingHours = getInfo('OPERATING_HOURS', word);
    houseNo = getInfo('HOUSE_NUMBER', word);
    roadName = getInfo('ROAD_NAME', word);
    postalCode = getInfo('POSTAL_CODE', word);
    AEDdescription = houseNo + ' ' + roadName + ', ' + postalCode + ', ' + operatingHours.slice(0, -1) + ', ' + AEDLocationDescription;
    const coordinates = data.features[i].geometry.coordinates;
    const newMarker = {
      coordinate: {
        latitude: coordinates[1],
        longitude: coordinates[0],
      },
      key: id++,
      description: AEDdescription,
    };
    result.push(newMarker);
  }
  return result;
}
// markers = generateMarkers();
markers = require('../data/NTUmarkers.json');


export default function CheckAEDScreen(){
  // Ask permission to access user's location
  const askLocationPermission = async () => {
      if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
              title: 'Example App ACCESS_FINE_LOCATION Permission',
              message: 'Example App needs access to your ACCESS_FINE_LOCATION',
              },
          );
          console.log(granted);
      }
  }

  askLocationPermission();

  // Get user's location
  const [userCoord, setUserCoord] = useState({"latitude": 1.36, "longitude": 103.6});

  useEffect(() => {      
    Geolocation.getCurrentPosition( 
      (position) => { 
          var coord = position.coords;
          setUserCoord(coord);
          console.log("*");
      }
    )
  }, []);

  const state = {
    region: {
      latitude: userCoord.latitude,
      longitude: userCoord.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  };


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={state.region}
      >
        {markers.map(marker => (
          <MapView.Marker coordinate={marker.coordinate}
          key={marker.key}>
            <MapView.Callout>
              <View style={{height: 100, width: 200}}>
                <Text> {marker.description} </Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  scrollview: {
      alignItems: 'center',
      paddingVertical: 40,
  },
  map: {
      width,
      height,
  },
});

module.exports = CheckAEDScreen;
  