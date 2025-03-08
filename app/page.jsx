import getAllProducts from './actions/getAllProducts';
import ProductCard from '@/components/ProductCard';
import Heading from '@/components/Heading';

export default async function Home() {
  const products =  await getAllProducts();
  return (
    <>
      <Heading title='Available Products' />
      <div className='mb-20'>
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.$id} product={product} />) 
        ) : (<p>No products available.</p>) }
      </div>

    </>
  );
}
