import { addDoc, collection, getDocs, query } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    //OPCIONAL
    const [categories, setCategories] = useState ([])

    const isInCart = (product) => {
        return cart.filter(productInCart => productInCart === product).length !== 0 ? true : false;
    }

    //NO DEBERÍA PERMITIR REPETIDOS. O LE AGREGAMOS QTY O QUE NO ADMITA AL REPETIDO.
    const addToCart = (product) => {
        if (isInCart(product)) return
        else setCart([...cart, product]);
    }

    const generateOrder = async (buyer) => {
        const total = cart.reduce((acumulador, elemento) => acumulador = acumulador + elemento.price, 0 );

        const user = auth.currentUser;
        //Generamos el DTO (data transfer object) con los datos acumulados
        const order = {
            items: [...cart],
            buyer: user.email,
            total: total,
            date: new Date().toLocaleString()
        }

        console.log(order);
        //Guardamos la order en firebase
        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e.message);
        }
    }

    useEffect(()=> {

        //Utilizamos una IIFE
        ( async ()=> {
            //Hacemos una query para obtener la collection raw
            const queryCollection = query(collection(db, "products"));
            //Obtenemos los datos de los productos y los guardamos en el estado
            const querySnapshot = await getDocs(queryCollection);
            const productos = [];
            querySnapshot.forEach((doc)=> {
                const producto = {id: doc.id, ...doc.data()};
                productos.push(producto);
            })
            setProducts([...productos]);
        })()

    }, [])

    return(
        <Shop.Provider value = {{products, cart, addToCart, generateOrder}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;