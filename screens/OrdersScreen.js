import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const OrdersScreen = () => {

    return (
        <View style={styles.container}>
            <Text>My orders</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18
    }
})

export default OrdersScreen
