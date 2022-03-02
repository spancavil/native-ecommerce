import React from 'react';
import { Platform, TouchableOpacity, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import colors from '../../constants/Colors'

// Screens
import CategoriesScreen from "../../screens/CategoriesScreen";
import CategoryBreadScreen from "../../screens/CategoryBreadScreen";
import BreadDetailScreen from "../../screens/BreadDetailScreen";
import { auth } from '../../firebase/config';

const ShopStack = createStackNavigator();

const handleSignOut = () => {
    auth.signOut()
        .then(() => {
            console.log("Logged out");
        })
}

const ShopNavigator = () => (

    <ShopStack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight:
            (props)  => {
                return (
                <TouchableOpacity onPress={handleSignOut}>
                    <Text>
                        Log out
                    </Text>
                </TouchableOpacity>
                )
            }
        }}
    >
        <ShopStack.Screen
            name="Home"
            component={CategoriesScreen}
            options={{
                title: 'Nuestra Panaderia',
            }}
        />
        <ShopStack.Screen
            name="BreadCategory"
            component={CategoryBreadScreen}
            options={({ route }) => ({ title: route.params.name })}
        />
        <ShopStack.Screen
            name="DetailBread"
            component={BreadDetailScreen}
            options={({ route }) => ({ title: route.params.name })}
        />
    </ShopStack.Navigator>
)


export default ShopNavigator 