import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

//para traçar uma rota entre dois pontos
import MapViewDirections from 'react-native-maps-directions';
//importando dependencia do mapa
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import {
  requestForegroundPermissionsAsync,//solicita o acesso a localização atual do usuario
  getCurrentPositionAsync //Recebe a localização atual
}
  from 'expo-location'
import { mapskey } from './utils/mapsApiKey';

export const Map = () => {
    //constante para guardar a posição inicial da localizção do dispositivo
    const [initialPosition, setInitialPosition] = useState(null)
    //constante para guardar ponto da clinica
    const [clinicLocation ,setclinicLocation]=useState({
        latitude:-23.6230600 ,
        longitude: -46.5511100 
    })

    //função para capturar localização do dispositivo

    //useffect para função
    return(
        <>
        {/* const para  */}
        </>
    )

}