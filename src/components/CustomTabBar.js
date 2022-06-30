import React, {useContext} from "react";
import styled from "styled-components/native";
import { UserContext } from "../contexts/UserContext";

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';


const TabArea = styled.View`
    height: 80px;
    background-color: #4EADBE;
    flex-direction: row;

`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;



`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;


`;

const AvatarIcon = styled.Image`
    width: 30px; 
    height: 30px;
    border-radius: 12px; 
`;

export default ({state, navigation}) => {

    const {state:user} = useContext(UserContext);

    
    const GoTo = (screenName) => {

        navigation.navigate(screenName);
    }

    return (
        <TabArea>   
            <TabItem onPress={()=>GoTo('Home')}>
            <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="30" height="30" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={()=>GoTo('Search')}>
            <SearchIcon style={{opacity: state.index===1? 1 : 0.5}} width="30" height="30" fill="#FFFFFF"/>
            </TabItem>
            <TabItemCenter onPress={()=>GoTo('Appointments')}>
            <TodayIcon width="30" height="30" fill="#4EADBE"/>
            </TabItemCenter>
            <TabItem onPress={()=>GoTo('Favorites')}>
            <FavoriteIcon style={{opacity: state.index===3? 1 : 0.5}} width="30" height="30" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={()=>GoTo('Profile')}>
                {user.avatar != '' ?
                <AvatarIcon source={{uri: user.avatar}}   /> 
                :
                <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="30" height="30" fill="#FFFFFF"/>
                }
            </TabItem>
            
        </TabArea>

    );

}