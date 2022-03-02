import React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import OrdersScreen from "../../screens/OrdersScreen";


import colors from '../../constants/Colors'

const OrderStack = createStackNavigator();
const OrderNavigator = () => (
    <OrderStack.Navigator
        initialRouteName="Orders"
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
        <OrderStack.Screen 
            name="Orders" 
            component={OrdersScreen}
            options={{title: 'Ordenes'}} 
        />
    </OrderStack.Navigator>
)
export default OrderNavigator