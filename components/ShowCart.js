import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import Colors from '../constants/Colors'
const ShowCart = ({navigation}) => {

    const handlerShowCart = () => navigation.push('Cart')

    return (
        <View>
            <AntDesign name="shoppingcart" size={24} color="white" />
            <Button style={styles.button} title="Ver Carrito" onPress={handlerShowCart} color={Colors.primaryColor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0
    }
})

export default ShowCart
