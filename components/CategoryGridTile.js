import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

const CategoryGridTile = ({item, onSelected}) => {
    let TouchableCmp = TouchableOpacity
    if(Platform.OS === 'android' && Platform.version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp 
                style={{...styles.container, ...{backgroundColor: item.color || 'blue'}}}
                onPress={() => onSelected(item)}
            >
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8
    },
    title: {
        fontFamily: 'open-sans-bold'
    }
})

export default CategoryGridTile;
