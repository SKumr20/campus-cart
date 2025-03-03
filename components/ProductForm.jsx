

const ProductForm = () => {
  return (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Buy This Product</h2>
          <h2 className="text-sm mt-1 font-light">Fill your details, so the seller can contact you -</h2>
          <form className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="Your Bid Price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Bid Price (in Rupees)
                </label>
                <input
                  type="number"
                  id="bid_price"
                  name="bid_price"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
              <label
                  htmlFor="Your Bid Price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Contact Number
                </label>
                <input
                  type="tel"
                  id="customer_phone"
                  name="customer_phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Buy
              </button>
            </div>
          </form>
        </div>
  )
}

export default ProductForm