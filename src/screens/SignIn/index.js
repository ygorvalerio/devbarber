import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import Api from "../../Api";
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

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');
    
    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField);
            
            if(res.token) {
                await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            } else {
                alert("Erro: "+res.error);
            }
        } else {
            alert("Preencha os campos");
        }
    }                                                          //botão de acesso ao login

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: "SignUp"}]
    
        });

    }                                                            //botão de cadastro ação

    return (
        <Container>
            <BarberLogo widht="100%" height="160"/>
            
            <InputArea>
               
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
                     <CustomButtonText> LOGIN </CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText> Ainda não possui uma conta? </SignMessageButtonText> 
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );

}