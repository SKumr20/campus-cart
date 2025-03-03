'use server';
import { createAdminClient } from "@/config/appwrite";
import checkAuth from "./checkAuth";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";
import { CheckCircle } from "lucide-react";


async function createProduct(previousState, formData) { 
    // get databases instance
    const { databases, storage } = await createAdminClient();

    try {
        const { user } = await checkAuth();

        if (!user) {
            return {
                error: 'You must be logged in to create a product!'
            }
        }
        // uploading image
        let imageID;
        const image = formData.get('image');

        if (image && image.size > 0 && image.name !== 'undefined') {
            try {
                // upload
                const response = await storage.createFile('products', ID.unique(), image);
                imageID = response.$id;
            } catch (error) {
                console.log('Error uploading image: ', error);
                return {
                    error: 'Error uploading image!'
                }
            }
         } else {
            console.log('No image file provided or file is invalid!');
         }

        // create product
        const newProduct = await databases.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS,
            ID.unique(),
            {
                "user-id": user.id, // appwrite has user-id. hash symbol by itself, gives error.
                // so use quotes
                name: formData.get('name'),
                description: formData.get('description'),
                campus: formData.get('campus'),
                condition: formData.get('condition'),
                price: formData.get('price'),
                age: formData.get('age'),
                image: imageID,
            }
        );

        revalidatePath('/', 'layout');

        return {
            success: true
        }
    } catch (error) {
        console.log(error);
        const errorMessage = error.response.message || 'An unexpected error has occurred'
        return {
            error: errorMessage,
        }
    }


}

export default createProduct;