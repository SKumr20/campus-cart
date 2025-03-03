'use server';
import { createSessionClient } from "@/config/appwrite";   
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Query } from "node-appwrite";
import { revalidatePath } from "next/cache";

async function deleteProduct(productId) {

    const sessionCookie = cookies().get('appwrite-session');
    if (!sessionCookie) {
        redirect('/login');
    }

    try {
        const { account, databases } = await createSessionClient(sessionCookie.value);

        // get user's ID
        const user = await account.get();
        const userId = user.$id;
        
        // fetch products by user

        const { documents: products } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS,
            [Query.equal('user-id', userId)] // appwrite attribute is user-id, NOT user_id
        );
        // find product to delete

        const productToDelete = products.find((product) => product.$id === productId);

        // delete the product

        if (productToDelete) {
            await databases.deleteDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
                process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PRODUCTS,
                productToDelete.$id
            );

            // revalidate my products and all products
            revalidatePath('/products/my', 'layout');
            revalidatePath('/', 'layout');

            return {
                success: true
            };
        }
        else {
            return {
                error: 'Product not found'
            }
        }
    }
    catch (error) {
        console.log('Failed to delete product: ', error);
        return {
            error: 'Failed to delete product',
        }
    }
}

export default deleteProduct;