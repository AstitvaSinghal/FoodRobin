import React from 'react';
import { StyleSheet, Text, View,Dimensions, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const {height,width} = Dimensions.get('window')
export default class App extends React.Component{
  state={
    latitude:27.1767,
    longitude:78.0081,
  
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={{paddding:20,width:"100%",flexDirection:"row",margin:10}}>
          <GooglePlacesAutocomplete 
          placeholder='Search'
          minLength={2}
          returnKeyType='search'
          listViewDisplayed={false}
          fetchDetails={true}
          onPress={(data,details)=>{console.log(data,details); this.setState({latitude:details.geometry.location.lat,longitude:details.geometry.location.lng}) }}
          query={{
            key:'AIzaSyCmqg9GxWVrUMt4UsJh7IF1N1_xJVl5NaM',
            language:'en'
          }}
          nearbyPlacesApi='GooglePlacesSearch'
          debounce={200}
          />
        </View>
        <View style={{flex:1}}>

          <MapView
            style={{height:height/2,width:width-10}}
            region={{...this.state,latitudeDelta: 0.0922,longitudeDelta: 0.0421,}}
          >
            <Marker coordinate={this.state} title={"Lat: "+this.state.latitude.toString()+" long: "+this.state.longitude.toString()}/>
          </MapView>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
});
