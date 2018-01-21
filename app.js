import React, { Component } from 'react';
import { Image, ScrollView, Button, Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements' // 0.19.0
import { Constants, MapView, Location, Permissions } from 'expo';

import "@expo/vector-icons"; // 6.2.2

const data = [{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.6155184870276,45.5073413750775]},"properties":{"POTEAU_ID_POT":182292,"PANNEAU_ID_PAN":1137947,"PANNEAU_ID_RPA":16137,"DESCRIPTION_RPA":"\\P 07h-09h MARDI 1 AVRIL AU 1 DEC.","CODE_RPA":"SU-BS","FLECHE_PAN":0,"TOPONYME_PAN":null,"POTEAU_VERSION_POT":3,"DATE_CONCEPTION_POT":"20160127000000","PAS_SUR_RUE":null,"DESCRIPTION_REP":"Réel","DESCRIPTION_RTP":"1- Tige et base","X_EPSG32188":295773.375,"Y_EPSG32188":5040831,"Longitude":-73.6155184870276,"Latitude":45.5073413750775,"DESCRIPTION_CAT":"STATIONNEMENT","NOM_ARR":"Côte-des-Neiges - Notre-Dame-de-Grâce"}}
,{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.6160184870276,45.506413750775]},"properties":{"POTEAU_ID_POT":182292,"PANNEAU_ID_PAN":1137948,"PANNEAU_ID_RPA":1628,"DESCRIPTION_RPA":"\\P RESERVE S3R 9h-23h LUN A SAM","CODE_RPA":"R-QE","FLECHE_PAN":0,"TOPONYME_PAN":null,"POTEAU_VERSION_POT":3,"DATE_CONCEPTION_POT":"20160127000000","PAS_SUR_RUE":null,"DESCRIPTION_REP":"Réel","DESCRIPTION_RTP":"1- Tige et base","X_EPSG32188":295773.375,"Y_EPSG32188":5040831,"Longitude":-73.6155184870276,"Latitude":45.5073413750775,"DESCRIPTION_CAT":"STATIONNEMENT","NOM_ARR":"Côte-des-Neiges - Notre-Dame-de-Grâce"}}
,{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.6153142247708,45.5073910727893]},"properties":{"POTEAU_ID_POT":54093,"PANNEAU_ID_PAN":1137898,"PANNEAU_ID_RPA":683,"DESCRIPTION_RPA":"CUL-DE-SAC","CODE_RPA":"GQ-A","FLECHE_PAN":0,"TOPONYME_PAN":null,"POTEAU_VERSION_POT":3,"DATE_CONCEPTION_POT":"20160127000000","PAS_SUR_RUE":null,"DESCRIPTION_REP":"Réel","DESCRIPTION_RTP":"10- Fût et feux","X_EPSG32188":295789.344,"Y_EPSG32188":5040836.5,"Longitude":-73.6153142247708,"Latitude":45.5073910727893,"DESCRIPTION_CAT":"INDICATION","NOM_ARR":"Côte-des-Neiges - Notre-Dame-de-Grâce"}}
,{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.6153142247708,45.5073910727893]},"properties":{"POTEAU_ID_POT":54093,"PANNEAU_ID_PAN":1137899,"PANNEAU_ID_RPA":15113,"DESCRIPTION_RPA":"BOUTON D'APPEL POUR PIETONS (FLECHE DROITE)","CODE_RPA":"PE-AK","FLECHE_PAN":0,"TOPONYME_PAN":null,"POTEAU_VERSION_POT":3,"DATE_CONCEPTION_POT":"20160127000000","PAS_SUR_RUE":null,"DESCRIPTION_REP":"Réel","DESCRIPTION_RTP":"10- Fût et feux","X_EPSG32188":295789.344,"Y_EPSG32188":5040836.5,"Longitude":-73.6153142247708,"Latitude":45.5073910727893,"DESCRIPTION_CAT":"FEUX","NOM_ARR":"Côte-des-Neiges - Notre-Dame-de-Grâce"}}
,{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.6156488638386,45.5075392084762]},"properties":{"POTEAU_ID_POT":54091,"PANNEAU_ID_PAN":1137939,"PANNEAU_ID_RPA":2413,"DESCRIPTION_RPA":"\\P EN TOUT TEMPS","CODE_RPA":"SD-TT","FLECHE_PAN":0,"TOPONYME_PAN":null,"POTEAU_VERSION_POT":3,"DATE_CONCEPTION_POT":"20160127000000","PAS_SUR_RUE":null,"DESCRIPTION_REP":"Réel","DESCRIPTION_RTP":"1- Tige et base","X_EPSG32188":295763.219,"Y_EPSG32188":5040853,"Longitude":-73.6156488638386,"Latitude":45.5075392084762,"DESCRIPTION_CAT":"STATIONNEMENT","NOM_ARR":"Côte-des-Neiges - Notre-Dame-de-Grâce"}}
,{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.6157506538388,45.5074446219308]},"properties":{"POTEAU_ID_POT":54097,"PANNEAU_ID_PAN":1137945,"PANNEAU_ID_RPA":16137,"DESCRIPTION_RPA":"\\P 07h-09h LUNDI 1 AVRIL AU 1 DEC.","CODE_RPA":"SU-BS","FLECHE_PAN":2,"TOPONYME_PAN":null,"POTEAU_VERSION_POT":5,"DATE_CONCEPTION_POT":"20160127000000","PAS_SUR_RUE":null,"DESCRIPTION_REP":"Réel","DESCRIPTION_RTP":"1- Tige et base","X_EPSG32188":295755.25,"Y_EPSG32188":5040842.5,"Longitude":-73.6157506538388,"Latitude":45.5074446219308,"DESCRIPTION_CAT":"STATIONNEMENT","NOM_ARR":"Côte-des-Neiges - Notre-Dame-de-Grâce"}}
,{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.6157506538388,45.5074446219308]},"properties":{"POTEAU_ID_POT":54097,"PANNEAU_ID_PAN":1137946,"PANNEAU_ID_RPA":1628,"DESCRIPTION_RPA":"\\P RESERVE S3R 9h-23h LUN A SAM","CODE_RPA":"R-QE","FLECHE_PAN":2,"TOPONYME_PAN":null,"POTEAU_VERSION_POT":5,"DATE_CONCEPTION_POT":"20160127000000","PAS_SUR_RUE":null,"DESCRIPTION_REP":"Réel","DESCRIPTION_RTP":"1- Tige et base","X_EPSG32188":295755.25,"Y_EPSG32188":5040842.5,"Longitude":-73.6157506538388,"Latitude":45.5074446219308,"DESCRIPTION_CAT":"STATIONNEMENT","NOM_ARR":"Côte-des-Neiges - Notre-Dame-de-Grâce"}}
,{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.6158174281553,45.4672778701441]},"properties":{"POTEAU_ID_POT":236828,"PANNEAU_ID_PAN":1149376,"PANNEAU_ID_RPA":2413,"DESCRIPTION_RPA":"\\P EN TOUT TEMPS","CODE_RPA":"SD-TT","FLECHE_PAN":0,"TOPONYME_PAN":null,"POTEAU_VERSION_POT":1,"DATE_CONCEPTION_POT":"20160413000000","PAS_SUR_RUE":null,"DESCRIPTION_REP":"Réel","DESCRIPTION_RTP":"1- Tige et base","X_EPSG32188":295743.598,"Y_EPSG32188":5036378.769,"Longitude":-73.6158174281553,"Latitude":45.4672778701441,"DESCRIPTION_CAT":"STATIONNEMENT","NOM_ARR":"Côte-des-Neiges - Notre-Dame-de-Grâce"}}
,{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.6152506614718,45.507404634573]},"properties":{"POTEAU_ID_POT":54092,"PANNEAU_ID_PAN":1143357,"PANNEAU_ID_RPA":14249,"DESCRIPTION_RPA":"BORNE FONTAINE","CODE_RPA":"ORI-SUPP","FLECHE_PAN":0,"TOPONYME_PAN":null,"POTEAU_VERSION_POT":2,"DATE_CONCEPTION_POT":"20160302000000","PAS_SUR_RUE":null,"DESCRIPTION_REP":"Réel","DESCRIPTION_RTP":"10- Fût et feux","X_EPSG32188":295794.313,"Y_EPSG32188":5040838,"Longitude":-73.6152506614718,"Latitude":45.507404634573,"DESCRIPTION_CAT":"ORIFLAMME","NOM_ARR":"Côte-des-Neiges - Notre-Dame-de-Grâce"}}]

class Marker extends Component {
  render() {
    return (
      <MapView.Marker
        coordinate={{ latitude: this.props.lat, longitude: this.props.lon }}
        title={this.props.title}
        pinColor={"blue"}
        description={this.props.description}
      />
    );
  }
}

export default class App extends Component {
  state = {
    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    locationResult: null,
    location: { coords: { latitude: 37.78825, longitude: -122.4324 } },
    toggleBtn: 'Display Bike Racks',
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
        location,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location });
  };

  _handleButtonPress = () => {
    if (this.state.toggleBtn === 'Display Bike Racks')
      this.setState({ toggleBtn: 'Display Parking Signs' });
    else this.setState({ toggleBtn: 'Display Bike Racks' });
  };

  render() {
    const getMarkers = data.map(sign => 
          <Marker
            lat={sign.geometry.coordinates[1]}
            lon={sign.geometry.coordinates[0]}
            title={sign.properties.DESCRIPTION_CAT}
            description={sign.properties.DESCRIPTION_RPA}
            key={sign.geometry.coordinates[1]}
          />
    );
    const getDescriptions = data.map(sign => 
    <Card>
      <Image
        source={{ uri: 'https://raw.githubusercontent.com/Arryan/parking-buddy/master/img/' + sign.properties.CODE_RPA + '.jpg' }}
        style={{ height: "80%", width: 110, margin: 5, marginLeft: 70 }}
      />
      <Text > { sign.properties.DESCRIPTION_RPA } </Text>
    </Card>
    );
    return (
      <View style={styles.container}>
        <MapView
          style={{
            position: 'absolute',
            top: 20,
            width: '100%',
            height: '60%',
          }}
          region={{
            latitude: 45.5048461,
            longitude: -73.6151336,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          onRegionChange={this._handleMapRegionChange()}>
          <MapView.Marker
            coordinate={this.state.location.coords}
            title="Your location"
          />
          {getMarkers}
        </MapView>
        <ScrollView
          style={{
            position: 'absolute',
            top: '60%',
            width: '100%',
            height: '50%',
            padding: 0,
          }}
          horizontal={true} >
           { getDescriptions }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});