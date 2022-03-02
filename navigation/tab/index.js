import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screen
import ShopScreen from '../shop'
import CartScreen from '../cart'
import OrdersScreen from '../orders'

const TabsStack = createBottomTabNavigator()

const TabsShop = () => (
    <TabsStack.Navigator
        initialRouteName="Shop"
        tabBarOptions={{
            showLabel: false,
            style: {
                position: "absolute",
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}
    >
        <TabsStack.Screen 
            name="Shop"
            component={ShopScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                       <Ionicons name="md-home" size={24} color="black" />
                       <Text>Tienda</Text>
                    </View>
                )
            }}
        />
        <TabsStack.Screen 
            name="Cart"
            component={CartScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                       <Ionicons name="md-cart" size={24} color="black" />
                       <Text>Carrito</Text>
                    </View>
                )
            }}
        />
        <TabsStack.Screen 
            name="Orders"
            component={OrdersScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                       <Ionicons name="md-list" size={24} color="black" />
                       <Text>Ordenes</Text>
                    </View>
                )
            }}
        />
        
    </TabsStack.Navigator>
)


const styles = StyleSheet.create({
    shadow: {
        shadowColor:'#7f5df0',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
export default TabsShop
