'use client';
import cancelBid from "@/app/actions/cancelBid";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

const CancelBidButton = ({ bidId }) => {
    const handleCancelBidClick = async () => {
        if (!confirm('Are you sure you want to cancel this bid?')) {
            return;
        }
    
    try {
        const result = await cancelBid(bidId);

        if (result.success) {
            toast.success('Bid Cancelled Successfully!');
        }
    } catch (error) {
        console.log('Failed to cancel bid!');
        return {
            error: 'Failed to cancel bid!',
        }
    }
}

  return (
    <Button
        onClick={ handleCancelBidClick }
        variant="destructive"
    >
        Delete Bid
    </Button>
  )
}

export default CancelBidButton