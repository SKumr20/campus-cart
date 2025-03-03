'use server';
import { createSessionClient } from "@/config/appwrite";   
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Query } from "node-appwrite";

async function getMyProducts() {

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

        return products;
    }
    catch (error) {
        console.log('Failed to get user products: ', error);
        redirect('/');
    }
}

export default getMyProducts;