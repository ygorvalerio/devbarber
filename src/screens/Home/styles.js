import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;

`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;

`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const HeaderTitle = styled.Text`  
    width: 250px;
    font-size: 28px;
    font-weight: bold;
    color: #FFF;

`;                    

export const SearchButtom = styled.TouchableOpacity`
    width: 28px;
    height: 28px;
    padding-right: 35px;
`;       //Botão de Pesquisar

export const LocationArea = styled.View`
    background-color: #4EADBE;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;

`;   

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;             //Inserir localização

export const LocationFinder = styled.TouchableOpacity`
    
`;







/*Container,
    Scroller,
    
    HeaderArea,
    HeaderTitle,
    SearchButtom,
    
    LocationArea,
    LocationInput,
    LocationFinder,
    */