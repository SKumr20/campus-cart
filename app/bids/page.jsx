import Heading from "@/components/Heading";
import getMyBids from "../actions/getMyBids";
import ProductBidCard from "@/components/ProductBidCard";


const bidsPage = async () => {

  const bids = await getMyBids();
 

  return (
    <>
      <Heading  title='My Bids' />
      { bids.length === 0 ? (
        <p className="text-gray-600 mt-4"> You have no bids! </p>
      ) : (
        bids.map((bid) => <ProductBidCard key={bid.$id} bid={bid} />)
      )}
    </>
  )
}

export default bidsPage