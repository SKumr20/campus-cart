'use server';
import { createAdminClient } from "@/config/appwrite";   
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getSingleProduct(id) {
    try {
        const { databases } = await createAdminClient();

        // fetch products

        const product = await databases.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS,
            id
        );

        // revalidate the cache for this path - this gives error
        // revalidatePath('/', 'layout')
        return product;
    }
    catch (error) {
        console.log('Failed to get product: ', error);
        redirect('/');
    }
}

export default getSingleProduct;