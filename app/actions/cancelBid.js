'use server';
import { createSessionClient } from "@/config/appwrite";   
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import checkAuth from "./checkAuth";

async function cancelBid(bidId) {

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
                error: 'You must be signed in to cancel a booking!'
            }
        } 
        // get the bid
        const bid = await databases.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BIDS,
            bidId
        );

        // check if the bid belongs to the user
        if (bid.user_id !== user.id) {
            return {
                error: 'You cannot delete a bid by a different user!'
            }
        }

        // delete the bid
        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BIDS,
            bidId
        );
        revalidatePath('/bids', 'layout');

        return {
            success: true
        }
    }
    catch (error) {
        console.log('Failed to cancel the bid: ', error);
        return {
            error: 'Failed to cancel booking.'
        }
    }
}

export default cancelBid;