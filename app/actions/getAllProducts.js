'use server';
import { createAdminClient } from "@/config/appwrite";   
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllProducts() {
    try {
        const { databases } = await createAdminClient();

        // fetch products

        const { documents: products } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS
        );

        // revalidate the cache for this path - this gives error
        // revalidatePath('/', 'layout')
        return products;
    }
    catch (error) {
        console.log('Failed to get products: ', error);
        redirect('/');
    }
}

export default getAllProducts;