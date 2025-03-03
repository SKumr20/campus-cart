'use server';
import { createSessionClient } from "@/config/appwrite";   
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import checkAuth from "./checkAuth";
import { revalidatePath } from "next/cache";

async function bidProduct(previousState, formData) {

    const sessionCookie = cookies().get('appwrite-session');
    if (!sessionCookie) {
        redirect('/login');
    }

    try {
        const { databases } = await createSessionClient(sessionCookie.value);

        // get user's ID
        const { user } = await checkAuth();

        if (!user) {
            return {
                error: 'You must be logged in to bid on a product!'
            }
        }

        // extract bid price from form data
        const bidPrice = formData.get('bid_price');
        const userContact = formData.get('user_contact');
        
        const bidData = { 
            bid_price: bidPrice,
            user_contact: userContact,
            user_id: user.id, 
            product_id: formData.get('product_id')
        }


        // create the bid
        const newBid = await databases.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BIDS,
            ID.unique(),
            bidData
        );

        // revalidate cache
        revalidatePath('/bids', 'layout');
        return {
            success: true
        }
    }
    catch (error) {
        console.log('Failed to bid on product: ', error);
        return {
            error: 'Something went wrong while bidding'
        }
    }
}

export default bidProduct;