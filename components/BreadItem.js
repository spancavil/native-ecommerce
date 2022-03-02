import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

const BreadItem = ({item, onSelectBread}) => {
    let TouchableCmp = TouchableOpacity
    if(Platform.OS === 'android' && Platform.version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <View style={styles.breadItem}>
            <TouchableCmp
                onPress={() => onSelectBread(item)}
            >
                <View>
                    <View style={styles.breadRow}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View>
                        <Text>$ {item.price}</Text>
                    </View>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    breadItem: {
        height: 100,
        width: '100%',
        backgroundColor: '#ccc',
        padding: 8,
        margin: 8
    },
    breadRow: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 20
    }
})
export default BreadItem
