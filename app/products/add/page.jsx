'use client';
import { useEffect } from "react";
import { useActionState } from "react";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
import createProduct from "@/app/actions/createProduct";
import Heading from "@/components/Heading"


const AddProductPage = () => {

    const [state, formAction] = useActionState(createProduct, {});

    const router = useRouter();
    
    useEffect(() => { 
        if (state.error) toast.error(state.error);
        if (state.success)  {
            toast.success('Product added successfully!');
            router.push('/');
        }
    }, [state]);

  return (
    <>
        <Heading title="Add a product" />
        <div className="bg-card shadow-lg rounded-lg p-6 w-full mb-20">
            <form action={formAction}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-card-foreground font-bold mb-2"
                >Product Name</label
                >
                <input
                type="text"
                id="name"
                name="name"
                className="border border-outline rounded w-full py-2 px-3"
                placeholder="Enter product name"
                required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2"
                >Description</label
                >
                <textarea
                id="description"
                name="description"
                className="border border-outline rounded w-full h-24 py-2 px-3"
                placeholder="Enter a description for the Product"
                required
                ></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="campus" className="block text-gray-700 font-bold mb-2"
                >Campus</label
                >
                <input
                type="text"
                id="campus"
                name="campus"
                className="border border-outline rounded w-full py-2 px-3"
                placeholder="Enter campus/college name"
                required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="condition" className="block text-gray-700 font-bold mb-2"
                >Condition</label
                >
                <input
                type="text"
                id="condition"
                name="condition"
                className="border border-outline rounded w-full py-2 px-3"
                placeholder="Enter product condition: Excellent/Very Good/Good/Average etc."
                required
                />
            </div>

            <div className="mb-4">
                <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
                >
                Price
                </label>
                <input
                type="number"
                id="price"
                name="price"
                className="border border-outline rounded w-full py-2 px-3"
                placeholder="Enter price"
                required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 font-bold mb-2"
                >Age</label
                >
                <input
                type="text"
                id="age"
                name="age"
                className="border border-outline rounded w-full py-2 px-3"
                placeholder="Enter product age"
                required
                />
            </div>

            {/* <!-- Image Upload --> */}
            <div className="mb-8">
                <label htmlFor="image" className="block text-gray-700 font-bold mb-2"
                >Image</label
                >

                <input
                type="file"
                id="image"
                name="image"
                className="border border-outline rounded w-full py-2 px-3"
                />
            </div>

            <div className="flex flex-col gap-5">
                <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                Save
                </button>
            </div>
            </form>
        </div>
    </>
  )
}

export default AddProductPage