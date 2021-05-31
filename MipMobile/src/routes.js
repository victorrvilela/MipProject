import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Response from './pages/Response';

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name='Login' component={Login}/>
                <AppStack.Screen name='Response'  component={Response}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}