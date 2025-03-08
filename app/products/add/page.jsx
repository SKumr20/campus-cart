'use client';
import { useEffect } from "react";
import { useActionState } from "react";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
import createProduct from "@/app/actions/createProduct";
import Heading from "@/components/Heading"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileArchive } from "lucide-react";


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
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="Enter product name"
                required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2"
                >Description</label
                >
                <Textarea
                id="description"
                name="description"
                className="bflex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="Enter a description for the Product"
                required
                ></Textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="campus" className="block text-gray-700 font-bold mb-2"
                >Campus</label
                >
                <input
                type="text"
                id="campus"
                name="campus"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="Enter product age"
                required
                />
            </div>

            {/* <!-- Image Upload --> */}
            <div className="mb-8">
                <label htmlFor="image" className="block text-gray-700 font-bold mb-2"
                >Image</label
                >
                <div className="flex">
                <input
                type="file"
                id="image"
                name="image"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
                
                </div>

            </div>

            <div className="flex flex-col gap-5">
                <Button
                type="submit"
                variant="default"
                >
                Save
                </Button>
            </div>
            </form>
        </div>
    </>
  )
}

export default AddProductPage