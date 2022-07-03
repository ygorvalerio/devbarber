import React, { useState }from "react";
//import { request, PERMISSIONS } from "react-native-permissions";
//import Geolocation from "@react-native-community/geolocation";
import { Platform } from "react-native";
import { Text } from "react-native";
import Search from "../Search";

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
   
    //const [locationText, setLocationText] = useState('');
  //  const [coords, setCoods] = useState(null);
   
    /*const handleLocationFinder = async () => {
        setCoods(null);
        let result = request(
            Platform.OS === 'ios' ?
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            :
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );
        if(result == 'granted') {
            Geolocation.getCurrentPosition((info)=>
            {
                console.log(info);
            });
        }
        }
*/
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
                        
                         />
                        <LocationFinder>  
                            <MyLocationIcon width="24" height="24" fill="#FFFFFF"/>
                        </LocationFinder>

                    </LocationArea>
               
               </Scroller>               
            </Container>
        );
}