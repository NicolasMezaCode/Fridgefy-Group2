import { collection, getDocs, getFirestore, query, QuerySnapshot, doc, getDoc, onSnapshot, addDoc, setDoc, Timestamp, serverTimestamp, deleteDoc, where, updateDoc } from "firebase/firestore";

import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { dataBase, storage } from './firebase_config'
import {useState, useEffect } from "react"

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

//Get the data every time, the database updates
// const [recipe, setRecipe] = useState([])
// const onTimeUpdate = (ref) =>{
//     const updatedData = onSnapshot(ref, (QuerySnapshot)=>{
//         setRecipe(
//             QuerySnapshot.doc.map((doc) => ({
//                 ...doc.data(),
//             }))
//         )
//     })
//     return updatedData;
// }

// useEffect(() =>{
//     onTimeUpdate(ref)
// }, [])

export const dataBaseService = {
    add: async (newRecipe) =>{
        const {userId,id, image, imageType, title} = newRecipe;
        const res = await addDoc(recipeRef, newRecipe);
        console.log(res)
        return res
    },
    get: async (userId) =>{
        console.log('userId', userId);
        const res = await getDocs(recipeRef);
        console.log('getting',res);
        if(!userId){
            return res;
        };
        const recipesFilteredByUserId = query(recipeRef, where('userId', '==', userId));
        return await getDocs(recipesFilteredByUserId);
    },
    getRealTieData: async () =>{
        // const onTimeUpdate = (ref) =>{
        //         const updatedData = onSnapshot(ref, (QuerySnapshot)=>{
        //             setRecipe(
        //                 QuerySnapshot.doc.map((doc) => ({
        //                     ...doc.data(),
        //                 }))
        //             )
        //         })
        //         return updatedData;
        // }
    },
    delete: async (name) =>{
        const docRef = collection(dataBase, 'recipes');
        const query = query(docRef, where('name', '==', name));
        console.log(query);
        const querySnapshot = await getDocs(query);
        console.log(querySnapshot);
        querySnapshot.forEach(async(document) =>{
            const deleteTarget = doc(dataBase, 'recipes', document.id);
            await deleteDoc(deleteTarget)
        })
        // console.log('delete target' ,docRef);
        // await deleteDoc(docRef);
    }
}