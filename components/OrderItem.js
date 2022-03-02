import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import colors from '../constants/Colors'

const formatDay = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString()
}

const sumTotal= (list) => list.map(item => item.quantity*item.price).reduce((a,b) => a + b, 0)

const OrderItem = ({item, onDelete}) => {
    return (
        <View style={styles.order}>
            <View style={styles.data}>
                <Text>{formatDay(item.date)}</Text>
                <Text>$ {sumTotal(item.items)}</Text>
            </View>
            <View style={styles.actions}>
                <View>
                    <Button 
                        title="Borrar"
                        color={colors.primaryColor}
                        icon={
                            <Ionicons name="md-trash" size={24} color="black" />
                        }
                        onPress={() => onDelete(item.id)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    order: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-between',
        height: 60
    },
    data: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height: 60
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        height: 60
    },
    marginRight: {
        marginRight: 6
    }
})


export default OrderItem
