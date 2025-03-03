import CancelBidButton from "./CancelBidButton";
import Link from "next/link";

const ProductBidCard = ({ bid }) => {
    const { product_id:product } = bid;

  return ( 
    <div
    className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
  >
    <div>
      <h4 className="text-lg font-semibold">{ product.name }</h4>
      <p className="text-sm text-gray-600">
        <strong>Bid Price: </strong> {bid.bid_price}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Contact: </strong> {bid.user_contact}
      </p>
    </div>
    <div
      className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
    >
      <Link
        href={ `/products/${product.$id}` }
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
      >
        View Product
      </Link>
      <CancelBidButton bidId={bid.$id} />
    </div>
  </div>
  )
}

export default ProductBidCard