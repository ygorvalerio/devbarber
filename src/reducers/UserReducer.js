import React from "react";
import { ActionSheetIOS } from "react-native";
import { State } from "react-native-gesture-handler";

export const initialState = {
    avatar: '',
    favorites: [],
    appointemets:[]
};

export const UserReducer = (state, action) => {

    switch(action.type) {
        case 'setAvatar':
            return {...state, avatar: action.payload.avatar};
            break;
            default:
                return state;
        }
}