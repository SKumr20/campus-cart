'use client';
import cancelBid from "@/app/actions/cancelBid";
import toast from "react-hot-toast";

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
    <button
        onClick={ handleCancelBidClick }
        className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700"
    >
        Delete Bid
    </button>
  )
}

export default CancelBidButton