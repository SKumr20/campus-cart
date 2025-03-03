import Link from "next/link"
import { View } from "lucide-react";
import DeleteProductButton from "./DeleteProductButton";
const MyProductCard = ({ product }) => {
  return (
        <div
        className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-center"
        >
        <div className="flex flex-col">
        <h4 className="text-lg font-semibold">{ product.name }</h4>
        </div>
        <div
        className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
        >
        <Link
            href={ `/products/${product.$id}` }
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
        >
            <View className="inline mr-1" /> View
        </Link>

        <DeleteProductButton productId={product.$id} />
        </div>
    </div>
  )
}

export default MyProductCard