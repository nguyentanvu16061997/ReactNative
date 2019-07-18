import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Router from './src/router.js';
export default class App extends React.Component{
    render(){
        return(
            <Router /> 
        )
    }
}


