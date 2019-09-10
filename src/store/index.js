import React, { Component } from 'react';
import {createStore} from "redux"
let reducer=(state,action)=>{
    let newState=JSON.parse(JSON.stringify(state))
    switch (action.type){
        case  "":
        return newState;
        default:return newState
    }
}
let store = createStore(reducer)
export default store