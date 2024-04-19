import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuDrawer } from './MenuDrawer.navigation';


export function Navigation() {
    return (
        <NavigationContainer>
            <MenuDrawer />
            
        </NavigationContainer>
    );
    }