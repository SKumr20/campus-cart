'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useActionState } from 'react';
import toast from 'react-hot-toast';
import bidProduct from '@/app/actions/bidProduct';
import { Button } from './ui/button';

const BidForm = ({ product }) => {
  const [state, formAction] = useActionState(bidProduct, {});
  // initialize router
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success('Bidding successful!');
      router.push('/bids');
    }
  }, [state]);

  return (
    <div className='mt-6'>
      <h2 className='text-xl font-bold'>Bid on this product</h2>
      <form action={ formAction } className='mt-4'>
        <input type='hidden' name='product_id' value={product.$id} />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div>
            <label
              htmlFor='bid_price'
              className='block text-sm font-medium text-popover-foreground'
            >
              Enter Your Bid Price
            </label>
            <input
              type='number'
              id='bid_price'
              name='bid_price'
              className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2'
              required
            />
          </div>
          <div>
            <label
              htmlFor='user_contact'
              className='block text-sm font-medium text-popover-foreground'
            >
              Your Contact
            </label>
            <input
              type='text'
              id='user_contact'
              name='user_contact'
              className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2'
              required
            />
          </div>
        </div>

        <div className='mt-6 flex items-center justify-center'>
          <Button
            type='submit'
            // className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800'
          >
            Submit Your Bid
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BidForm;