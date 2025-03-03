'use client';
import { Trash } from "lucide-react";
import deleteProduct from "@/app/actions/deleteProduct";
import toast from "react-hot-toast";

const DeleteProductButton = ({ productId }) => {

    const handleDelete = async () => {
        const confirmed = window.confirm('Are you sure you want to delete this product?');
        if (confirmed) {
            try {
                const response = await deleteProduct(productId);
                toast.success('Product deleted successfully!');
            } catch (error) {
                console.log('Failed to delete product: ', error);
                toast.error('Failed to delete room!')
            }
        }
    }
    
  return (
    <button 
    onClick={handleDelete}
    className="bg-red-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-red-700"
    >
        <Trash className="inline mr-1" /> Delete
    </button>
  )
}

export default DeleteProductButton