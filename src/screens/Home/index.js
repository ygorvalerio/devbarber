import React, { useState,  useEffect }from "react";

import { Platform } from "react-native";
import { Text } from "react-native";
import Search from "../Search";
import * as Location from 'expo-location';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from "../../assets/my_location.svg";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    Scroller,
    
    HeaderArea,
    HeaderTitle,
    SearchButtom,
    
    LocationArea,
    LocationInput,
    LocationFinder,

} from './styles';


export default () => {

    const navigation = useNavigation();
   
    const [locationText, setLocationText] = useState('');
    
    const [coords, setCoods] = useState(null);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
   
    
      
        const handleLocationFinder = () =>
        { useEffect(() => {
          (async () => {
            if (Platform.OS === 'android' && !Device.isDevice) {
              setErrorMsg(
                'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
              );
              return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
      
            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
          })();
        });
    }
    

     
        

        return (
            <Container>
                <Scroller>  
                    <HeaderArea>
                        <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTitle>
                        <SearchButtom onPress={()=>navigation.navigate('Search')}>
                            <SearchIcon width="35" height="35" fill="#FFFFFF"/>
                        </SearchButtom>
                    </HeaderArea>
                    
                    <LocationArea>
                        <LocationInput
                         placeholder="Onde você está?"
                         placeholderTextColor="#FFFFFF"
                         value={locationText}
                         onChangeText={t=>setLocationText(t)}
                        
                         />
                        <LocationFinder onPress={handleLocationFinder}>  
                            <MyLocationIcon width="24" height="24" fill="#FFFFFF"/>
                        </LocationFinder>

                    </LocationArea>
               
               </Scroller>               
            </Container>
        );
}
