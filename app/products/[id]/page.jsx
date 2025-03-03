import getSingleProduct from '@/app/actions/getSingleProduct';
import Heading from '@/components/Heading';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import BidForm from '@/components/BidForm';

const ProductPage = async ({ params }) => {
  const { id } = params; // destructuring
  const product = await getSingleProduct(id);
  if (!product) {
    return <Heading title='Product Not Found' />
  }

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_PRODUCTS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${product.image}/view?project=${projectId}`;
  const imageSrc = product.image ? imageUrl : '/images/no-image.jpg';

  return (
    <>  
        <Heading title={ product.name } />
        <div className="bg-white shadow rounded-lg p-6">
        <Link
          href="/"
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <ChevronLeft className='inline mr-1' />
          <span className="ml-2">Back to Products</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <Image
            src={imageSrc}
            width={400}
            height={100}
            alt={product.name}
            className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
          />

          <div className="mt-4 sm:mt-0 sm:flex-1">
            <p className="text-gray-600 mb-4">
                { product.description }
            </p>

            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-gray-800">Age: </span> {product.age} Years
              </li>
              <li>
                <span className="font-semibold text-gray-800">Condition: </span>
                {product.condition}
              </li>
              <li>
                <span className="font-semibold text-gray-800">Price: </span>
                Rs {product.price} 
              </li>
              <li>
                <span className="font-semibold text-gray-800">Campus: </span>
                {product.campus}
              </li>
            </ul>
          </div>
        </div>
        <BidForm product={ product } />
      </div>
    </>
  )
}

export default ProductPage