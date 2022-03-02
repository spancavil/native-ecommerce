import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";

// Stacks
import TabsShop from './tab';
import { auth, db } from '../firebase/config';
import AuthNavigator from './auth';
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, doc, setDoc, writeBatch } from 'firebase/firestore';

export default () => {

  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState([])

  //Manejamos la lógica del login desde el observador de firebase
  useEffect( (()=> {

    //AUTOGENERACION DE PRODUCTOS, SÓLO USAR 1 VEZ PARA POBLAR PRODUCTOS
    /* ( ()=> {

      fetch('https://fakestoreapi.com/products')
      .then((response)=> response.json())
      .then(data => {
        console.log(data)
        data.forEach( async(item) => {
          const response = await addDoc( collection(db, "products"), {
            id: item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            category: item.category,
            image: item.image,
          });
          console.log(response);
        })
      })

    })() */

    onAuthStateChanged(auth, (user)=> {
      if (user){
        console.log(user);
        const uid = user.uid;
        setIsLogged(true)
      } else {
        console.log("No user logged");
        setIsLogged(false)
      }
    })
  }), [])


  //Renderizamos condicionalmente una navegación u otra
  //dependiendo si estamos o no loggeados.
  return (
    <NavigationContainer>
      {isLogged ?
      <TabsShop/>
      :
      <AuthNavigator/>
      }
    </NavigationContainer>
  )
}
