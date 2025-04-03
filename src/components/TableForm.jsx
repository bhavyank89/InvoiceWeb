import { useEffect } from "react"

export default function TableForm({ quantity, setQuantity, amount, setAmount, price, setPrice, description, setDescription, }) {
    useEffect(() => {
        setAmount(quantity * price);
    }, [price, quantity]);
    return (
        <section className="flex flex-col md:grid grid-cols-3 border-black-100 border-1 rounded-xl shadow-lg p-5">
            <div className="flex flex-col md:col-span-3">
                <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="name">Description<span className="text-red-500">*</span></label>
                <input
                    className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto"
                    type="text"
                    name="description"
                    id="description"
                    placeholder="dscription"
                    autoComplete="off"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="flex flex-col md:col-span-1">
                <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="name">Price<span className="text-red-500">*</span></label>
                <input
                    className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    name="price"
                    id="price"
                    placeholder="price"
                    autoComplete="off"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="flex flex-col md:col-span-1">
                <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="name">Quantity<span className="text-red-500">*</span></label>
                <input
                    className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="quantity"
                    autoComplete="off"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div className="flex flex-col md:col-span-1">
                <label className="font-bold number-sm mx-1 mb-0.5" htmlFor="name">Amount</label>
                <input
                    className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto cursor-not-allowed"
                    type="text"
                    name="amount"
                    id="amount"
                    placeholder="amount"
                    autoComplete="off"
                    value={amount}
                />
            </div>
        </section>
    )
}