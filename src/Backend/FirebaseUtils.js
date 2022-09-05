import { collection, getDocs, query, doc, addDoc, deleteDoc, where } from "firebase/firestore";
import { dataBase, storage } from './firebase_config'

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
    delete: async (name) =>{
        const docRef = collection(dataBase, 'recipes');
        const deleteQuery = query(docRef, where('title', '==', name));
        const querySnapshot = await getDocs(deleteQuery);
        querySnapshot.forEach(async(document) =>{
            const deleteTarget = doc(dataBase, 'recipes', document.id);
            console.log('Target', document)
            await deleteDoc(deleteTarget)
        })
    },
    addIngredient: async (newIngredient) =>{
        const res = await addDoc(ingredientsRef, newIngredient);
        console.log(res);
        return res;
    },
    deleteIngredient: async (ingredientName) =>{
        console.log(ingredientName);
        const docRef = collection(dataBase, 'ingredients');
        const deleteQuery = query(docRef, where('name', '==', ingredientName));
        const querySnapshot = await getDocs(deleteQuery);
        querySnapshot.forEach(async(document) =>{
            const deleteTarget = doc(dataBase, 'ingredients', document.id)
            console.log('Target', document)
            await deleteDoc(deleteTarget)
        })

    },
    getIngredient: async (userId) =>{
        console.log('userId', userId);
        const res = await getDocs(ingredientsRef);
        console.log('getting',res);
        if(!userId){
            return res;
        };
        const ingredientsFilteredByUserId = query(ingredientsRef, where('userId', '==', userId));
        return await getDocs(ingredientsFilteredByUserId);
    }
}