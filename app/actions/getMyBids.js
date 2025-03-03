'use server';
import { createSessionClient } from "@/config/appwrite";   
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Query } from "node-appwrite";
import checkAuth from "./checkAuth";

async function getMyBids() {

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
                error: 'You must be logged in to view bids!'
            }
        }

        
        // fetch bids made by the user

        const { documents: bids } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BIDS,
            [Query.equal('user_id', user.id)] // appwrite attribute for bids collection - user_id. NOT user-id
        );

        return bids;
    }
    catch (error) {
        console.log('Failed to get user bids: ', error);
        return {
            error: 'Failed to get bids'
        }
    }
}

export default getMyBids;