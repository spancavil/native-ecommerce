import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CartItem from '../components/CartItem'
import { Shop } from '../context/Shop'

const CarritoScreen = () => {

    const {cart, generateOrder} = useContext(Shop);

    // Pending: añadir lógica para el borrado del item
    const renderItemCart = ({item}) => <CartItem item={item} onDelete={()=> console.log('Borrado de cart!')}/> 

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItemCart}
                />
            </View>
            {/* Añadir lógica para el cálculo del total */}
            <View style={styles.footer}>
                <Button title="Finalizar compra" onPress={() => generateOrder()}/>
                <Text style={styles.text}>Total: </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    footer: {
        flex: .2,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 8
    },
    list: {
        flex: .8
    },
    text: {
        fontSize: 24,
    }
    
})
export default CarritoScreen;
