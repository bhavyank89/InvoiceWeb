import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TableForm({
    quantity, setQuantity,
    amount, setAmount,
    price, setPrice,
    description, setDescription, setList, showAlertTab
}) {

    useEffect(() => {
        setAmount((quantity || 0) * (price || 0));
    }, [quantity, price, setAmount]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!description || !price || !quantity) {
            alert("Please fill in all fields before adding an item.");
            return;
        }

        const newItem = { id: uuidv4(), description, price, quantity, amount };
        setList((prevList) => [...prevList, newItem]);

        setDescription("");
        setQuantity("");
        setPrice("");

        showAlertTab(true, "Item Added Successfully!!");
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <section className="flex flex-col md:grid grid-cols-3 border border-gray-200 rounded-xl shadow-lg p-5">
                {/* Description Input */}
                <div className="flex flex-col md:col-span-3">
                    <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="description">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <input
                        className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
                        hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto"
                        type="text"
                        id="description"
                        placeholder="Description"
                        autoComplete="off"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Price Input */}
                <div className="flex flex-col md:col-span-1">
                    <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="price">
                        Price <span className="text-red-500">*</span>
                    </label>
                    <input
                        className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
                        hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5 
                        appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        id="price"
                        placeholder="Price"
                        autoComplete="off"
                        value={price}
                        onChange={(e) => setPrice(isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value))}
                    />
                </div>

                {/* Quantity Input */}
                <div className="flex flex-col md:col-span-1">
                    <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="quantity">
                        Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                        className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
                        hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5 
                        appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        type="number"
                        id="quantity"
                        placeholder="Quantity"
                        autoComplete="off"
                        value={quantity}
                        onChange={(e) => setQuantity(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))}
                    />
                </div>

                {/* Amount (Read-Only) */}
                <div className="flex flex-col md:col-span-1">
                    <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
                        hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto 
                        cursor-not-allowed bg-gray-100"
                        type="text"
                        id="amount"
                        placeholder="Amount"
                        autoComplete="off"
                        value={amount}
                        readOnly
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded shadow 
                    hover:bg-transparent hover:text-blue-500 border-2 border-blue-500 transition-all duration-300"
                >
                    Add Item
                </button>
            </section>
        </form>
    );
}
