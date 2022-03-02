import React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import CartScreen from "../../screens/CartScreen";

import colors from '../../constants/Colors'

const CartStack = createStackNavigator();
const CartNavigator = () => (
    <CartStack.Navigator
        initialRouteName="Cart"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <CartStack.Screen 
            name="Cart" 
            component={CartScreen}
            options={{title: 'Carrito de Compra'}} 
        />
    </CartStack.Navigator>
)
export default CartNavigator