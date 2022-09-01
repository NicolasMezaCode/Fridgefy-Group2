import { collection, getDocs, getFirestore, query, QuerySnapshot, doc, getDoc, onSnapshot, addDoc, setDoc, Timestamp, serverTimestamp, deleteDoc, where, updateDoc } from "firebase/firestore";

import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { dataBase, storage } from './firebase_config'
import {useState, useEffect } from "react"
import { async } from "@firebase/util";

//Check ref
export const recipeRef = collection(dataBase, 'recipes')
export const ingredientsRef = collection(dataBase, 'ingredients')
console.log(recipeRef)
console.log(ingredientsRef)

//Get query snapshot
export const recipeQuerySnapShot = () =>{
    getDocs(recipeRef).then((QuerySnapshot) =>{
        QuerySnapshot.docs.forEach((doc) => console.log(doc.data()))
    })
}

export const dataBaseService = {
    add: async (newRecipe) =>{
        const {id, image, imageType, title} = newRecipe;
        const res = await addDoc(recipeRef, newRecipe);
        console.log(res)
        return res
    },
    get: async () =>{
        const res = await getDocs(recipeRef);
        console.log('getting',res);
        return res;
    }
}