import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';

/**
 * Default function for generating Guide Info Screen
 * @module
 * @return {component} The Guide Info User Interface screen to be displayed
 */

const GuideInfoUI = () => {

  // INCOMPLETE: Line 18-32 -- Need to fetch from Firebase Database
  // INCOMPLETE: Line36-64 -- Search Filtering

  
  
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://healthapp2-388fc-default-rtdb.asia-southeast1.firebasedatabase.app/GuideInfo2.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  /**
 * Function for Filtering Search Results
 * @module
 * @return {boolean} The User Info User Interface screen to be displayed
 */

  const searchFilterFunction = (text) => {

    // Check if searched text is not blank

    if (text) {

      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource

      const newData = masterDataSource.filter(function (item) {

        // Applying filter for the inserted text in search bar
        const itemData = item.type
          ? item.type.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {

      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource

      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  
/**
 * Function for Displaying List of Guides
 * @module
 * @return {component} Array of displayed Guides updated
 */

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.type}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    return (
      <View>
        <TouchableOpacity style={styles.backButton}>
        
        <Image
          source={require('./assets/backButtonIcon.png')}
          onPress={() => back}
        />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.imgContainer}>
          <Image
            source = {require(item.img)}
            onPress = {() => Linking.openURL(item.url)}
          />
        </TouchableOpacity>
      </View>
    )
  };

  
  return (
    
      <View style = {styles.container}>
        <TouchableOpacity style={styles.backButton}>
        <Image
          source={require('./assets/backButtonIcon.png')}
          onPress={() => back}
        />
        </TouchableOpacity>
        <TextInput
          style = {styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value = {search}
          underlineColorAndroid = "transparent"
          placeholder = "Search Here"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor = {(item, index) => index.toString()}
          ItemSeparatorComponent = {ItemSeparatorView}
          renderItem = {ItemView}
        />
      </View>
   
    
  );
  
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    flex: 1,
    resizeMode: 'contain',
    top: -50,
    left: 10,
    position: 'absolute',
  },
  imgContainer: {
    alignItems: 'center',   
    justifyContent: 'center',
},
});

export default GuideInfoUI;
