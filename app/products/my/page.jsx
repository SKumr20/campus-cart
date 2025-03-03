import getMyProducts from "@/app/actions/getMyProducts";
import Heading from "@/components/Heading";
import Head from "next/head";
import MyProductCard from "@/components/MyProductCard";

const MyProductsPage = async () => {

    const products = await getMyProducts();
  return (
    <>
        <Heading title="My Products" />
        { products.length > 0 ? (
            products.map((product) => <MyProductCard key={product.$id} product={product} /> )
        ) : (
            <p>You don't have any products listed yet!</p>
        ) }
    </>
  )
}

export default MyProductsPage