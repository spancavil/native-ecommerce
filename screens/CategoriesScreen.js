import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/category';

const CategoriesScreen = ({navigation}) => {

    const handlerSelectedCategory = (item) => {
        console.log(item);
        navigation.push('BreadCategory', {
            name: item.title,
            categoryID: item.id
        })
    }

    const renderGridItem = (itemData) => (
        <CategoryGridTile 
            item={itemData.item} 
            onSelected={handlerSelectedCategory}/>
        )

    console.log(CATEGORIES);
    return (
        <View style={styles.container}>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderGridItem}
                numColumns={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default CategoriesScreen
