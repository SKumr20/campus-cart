import CancelBidButton from "./CancelBidButton";
import Link from "next/link";
import { Button } from "./ui/button";

const ProductBidCard = ({ bid }) => {
    const { product_id:product } = bid;

  return ( 
    <div
    className="bg-card shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
  >
    <div>
      <h4 className="text-lg text-primary font-semibold">{ product.name }</h4>
      <p className="text-sm text-card-foreground">
        <strong>Bid Price: </strong> {bid.bid_price}
      </p>
      <p className="text-sm text-card-foreground">
        <strong>Contact: </strong> {bid.user_contact}
      </p>
    </div>
    <div
      className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
    >
      <Button>
        <Link
          href={ `/products/${product.$id}` }
        >
          View Product
        </Link>
      </Button>

      <CancelBidButton bidId={bid.$id} />
    </div>
  </div>
  )
}

export default ProductBidCard