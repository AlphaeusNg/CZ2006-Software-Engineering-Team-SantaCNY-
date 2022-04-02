import React from 'react';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
import isEqual from 'lodash/isEqual';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 1.3521;
const LONGITUDE = 103.8198;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const data = require('../data/aed-locations-geojson.json');
const length = 9282;
let id = 0;

function getInfo(name, word){
    let pos1 = word.search(name);
    let a = word.slice(pos1, word.length);
    let pos2 = a.search('<td>');
    let pos3 = a.search('</td>');
    result = a.slice(pos2+4,pos3);
    return result;
}

class CheckAEDScreen extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        region: {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        markers: [],
      };
  
      this.onMapPress = this.onMapPress.bind(this);
    }
  
    generateMarkers(fromCoordinate) {
      const result = [];
      const { latitude, longitude } = fromCoordinate;
      for (let i = 0; i < length; i++) {
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
          key: 'foo${id++}',
          description: AEDdescription,
        };
        result.push(newMarker);
      }
      return result;
    }
  
    onMapPress(e) {
      this.setState({
        markers: [
          ...this.state.markers,
          ...this.generateMarkers(e.nativeEvent.coordinate),
        ],
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            initialRegion={this.state.region}
            onPress={this.onMapPress}
          >
            {this.state.markers.map(marker => (
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.setState({ markers: [] })}
              style={styles.bubble}
            >
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}
  
CheckAEDScreen.propTypes = {
    provider: ProviderPropType,
};

const GEOLOCATION_OPTIONS = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 1000,
  };
  const ANCHOR = { x: 0.5, y: 0.5 };
  
  const colorOfmyLocationMapMarker = 'blue';
  
  const propTypes = {
    ...Marker.propTypes,
    // override this prop to make it optional
    coordinate: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }),
    children: PropTypes.node,
    geolocationOptions: PropTypes.shape({
      enableHighAccuracy: PropTypes.bool,
      timeout: PropTypes.number,
      maximumAge: PropTypes.number,
    }),
    heading: PropTypes.number,
    enableHack: PropTypes.bool,
  };
  
  const defaultProps = {
    enableHack: false,
    geolocationOptions: GEOLOCATION_OPTIONS,
  };
  
  /**
   * Default function for locating the user's current location
   * @module
   * @return {component} The marker to show the current location
   */
  
  export default class MyLocationMapMarker extends React.PureComponent {
    constructor(props) {
      super(props);
      this.mounted = false;
      this.state = {
        myPosition: null,
      };
    }
    componentDidMount() {
      this.mounted = true;
      // If you supply a coordinate prop, we won't try to track location automatically
      if (this.props.coordinate) {
        return;
      }
  
      if (Platform.OS === 'android') {
        PermissionsAndroid.requestPermission(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        ).then(granted => {
          if (granted && this.mounted) {
            this.watchLocation();
          }
        });
      } else {
        this.watchLocation();
      }
    }
    watchLocation() {
      this.watchID = navigator.geolocation.watchPosition(
        position => {
          const myLastPosition = this.state.myPosition;
          const myPosition = position.coords;
          if (!isEqual(myPosition, myLastPosition)) {
            this.setState({ myPosition });
          }
        },
        null,
        this.props.geolocationOptions
      );
    }
    componentWillUnmount() {
      this.mounted = false;
      if (this.watchID) {
        navigator.geolocation.clearWatch(this.watchID);
      }
    }
    render() {
      let { heading, coordinate } = this.props;
      if (!coordinate) {
        const { myPosition } = this.state;
        if (!myPosition) {
          return null;
        }
        coordinate = myPosition;
        heading = myPosition.heading;
      }
  
      const rotate =
        typeof heading === 'number' && heading >= 0 ? `${heading}deg` : null;
  
      return (
        <Marker
          anchor={ANCHOR}
          style={styles.mapMarker}
          {...this.props}
          coordinate={coordinate}
        >
          <View style={styles.container}>
            <View style={styles.markerHalo} />
            {rotate && (
              <View style={[styles.heading, { transform: [{ rotate }] }]}>
                <View style={styles.headingPointer} />
              </View>
            )}
            <View style={styles.marker}>
              <Text style={styles.markerText}>
                {this.props.enableHack && rotate}
              </Text>
            </View>
          </View>
          {this.props.children}
        </Marker>
      );
    }
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


MyLocationMapMarker.propTypes = propTypes;
MyLocationMapMarker.defaultProps = defaultProps;

module.exports = CheckAEDScreen;
  