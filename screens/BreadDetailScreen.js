import React, {useContext} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Shop } from '../context/Shop';

const BreadDetailScreen = ({route, navigation}) => {
    
    const {addToCart} = useContext(Shop);

    const item = route.params.item;

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <View>
                    <Text style={styles.price}>$ {item.price}</Text>
                </View>
                <View style={styles.cart}>
                <Button title="Volver" onPress={()=>navigation.goBack()} />
                <Button title="Agregar al carrito" onPress={()=>addToCart(item)}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    },
    container: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 25
    },
    price: {
        fontSize: 40,
        fontFamily: 'open-sans-bold'
    },
    description: {
        fontSize: 20
    },
    cart: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 12,
    }
})

export default BreadDetailScreen
