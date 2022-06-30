import React, {useState} from "react";
import Api from "../../Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {UserContext} from "../../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";
import {Container, 
        InputArea,
        CustomButton,
        CustomButtonText,
        SignMessageButton,
        SignMessageButtonText,
        SignMessageButtonTextBold } from "./styles"

import SignInput from "../../components/SignInput";

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg"
import PersonIcon from "../../assets/person.svg"

export default () => {
    const {dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();


    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');
    const [nameField, setNameField] = useState ('');
   
   const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != ''){
            let res = await Api.signUp(nameField,emailField,passwordField)
            if(res.token) {
                await AsyncStorage.setItem('token', json.token);      // Salva ás informações 

            userDispatch({
                type: 'setAvatar',
                payload: {
                    avatar: json.data.avatar
                }
            });

            navigation.reset({
                routes: [{name:'MainTab'}]     //Chamado a tela Main Tab

            });

            } else{
                alert("Erro: " + res.error);
            }

        } else {
            alert("Preencha os campos");


        }

   }                                                             //botão de acesso ao login

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: "SignIn"}]
    
        });

    }                                                            //botão de cadastro ação

    return (
        <Container>
            <BarberLogo widht="100%" height="160"/>
            
            <InputArea>
            
            <SignInput 
                        IconSvg = {PersonIcon} 
                        placeholder="Digite seu nome"
                        value={nameField}
                        onChangeText={t=>setNameField(t)}  
               />
               
               <SignInput 
                        IconSvg = {EmailIcon} 
                        placeholder="Digite seu e-mail"
                        value={emailField}
                        onChangeText={t=>setEmailField(t)}  
               />
               
               <SignInput 
                        IconSvg={LockIcon} 
                        placeholder="Digite sua senha"
                        value={passwordField} 
                        onChangeText={t=>setPasswordField(t)}
                        password={true}
               />
            
                <CustomButton onPress={handleSignClick}>
                     <CustomButtonText> CADASTRAR </CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText> Já possui uma conta? </SignMessageButtonText> 
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );

}