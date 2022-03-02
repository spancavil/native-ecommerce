import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { BREADS } from '../data/breads';

import BreadItem from "../components/BreadItem";
import { Shop } from "../context/Shop";

const CategoryBreadScreen = ({ navigation, route }) => {

  const { products } = useContext(Shop);
  const [filtered, setFiltered] = useState([])

  //Filtramos los productos según el nombre de la categoría
  useEffect(() => {
    const filterProducts = products.filter(product => product.category === route.params.name);
    console.log(filterProducts);
    console.log(route.params.name);
    setFiltered(filterProducts);
  }, [products, setFiltered])

  const handlerSelected = (item) => {

    navigation.navigate("DetailBread", { name: item.title, item: item })

  }

  const renderItemBread = (itemData) => <BreadItem item={itemData.item} onSelectBread={handlerSelected} />

  return (
    <>
      {
        filtered.length !== 0 ?
          <View style={styles.screen}>
            <FlatList
              data={filtered}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItemBread}
            />
          </View>
          :
          <ActivityIndicator size={"large"} color={"blue"} />
      }
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8
  }
})

export default CategoryBreadScreen;
