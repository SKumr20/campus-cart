import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";


const ProductCard = ({ product }) => {

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_PRODUCTS;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${product.image}/view?project=${projectId}`;
  const imageSrc = product.image ? imageUrl : '/images/no-image.jpg';

  return (
    <div
        className="bg-card shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <Image
            src={imageSrc}
            width={400}
            height={100}
            alt={product.name}
            className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
          />
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">{product.name}</h4>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-card-foreground"> Address: </span>
              {product.campus}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-card-foreground">Age: </span>
              {product.age}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-card-foreground"> Price: </span>
              Rs {product.price} 
            </p>
          </div>
        </div>
        <div
          className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
        >
          <Button variant="default" size='lg'>
            <Link
              href={ `/products/${product.$id}` }
              className="text-md"
              >View Product
            </Link>     
          </Button>

        </div>
      </div>
  );
}

export default ProductCard