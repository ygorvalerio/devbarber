import React from "react";
import { ActionSheetIOS } from "react-native";
import { State } from "react-native-gesture-handler";

export const initialState = {
    avatar: '',
    favorites: [],
    appointemets:[]
};

export const UserReducer = () => {

    switch(Action.type) {
        case 'setAvatar':
            return {...state, avatar:action.payload};
            break;
            default:
                return state;
        }
}