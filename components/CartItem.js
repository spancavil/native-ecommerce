import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.item}>
            <View style={styles.header}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text>$ {item.price}</Text>
                </View>
                <View>
                    <Button title="Borrar" onPress={() => onDelete(item.id)}/>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
    },
    header: {
        fontFamily: 'open-sans-bold'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        fontFamily: 'open-sans'
    }
})

export default CartItem
