import { useEffect, useState } from "react";

export default function Edit({ editElement, list, setList, showAlertTab, setShowEdit }) {
    const [quantity, setQuantity] = useState(editElement.quantity);
    const [description, setDescription] = useState(editElement.description);
    const [price, setPrice] = useState(editElement.price);
    const [amount, setAmount] = useState(editElement.amount);

    // Recalculate amount on quantity or price change
    useEffect(() => {
        setAmount(quantity * price);
    }, [quantity, price]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!description || price <= 0 || quantity <= 0) {
            alert("Please fill in all fields with valid values before updating an item.");
            return;
        }

        const updatedList = list.map((item) =>
            item.id === editElement.id
                ? { ...item, description, price, amount, quantity }
                : item
        );

        setList(updatedList);
        setShowEdit(false);
        showAlertTab(true, "Item Edited Successfully!!");
    };
    const handleCancel = () => {
        setShowEdit(false);
    }
    return (
        <section className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-lg rounded-lg p-6 w-[100%] md:w-[100%] lg:w-[100%] z-50">
            <form onSubmit={handleOnSubmit}>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Description Input */}
                    <div className="md:col-span-3">
                        <label className="font-bold text-sm mb-1 block" htmlFor="description">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="border border-gray-300 p-2 rounded w-full"
                            type="text"
                            id="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    {/* Price Input */}
                    <div>
                        <label className="font-bold text-sm mb-1 block" htmlFor="price">
                            Price <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="border border-gray-300 p-2 rounded w-full"
                            type="number"
                            id="price"
                            placeholder="Price"
                            value={price}
                            min="1"
                            onChange={(e) => setPrice(Number(e.target.value))}
                            required
                        />
                    </div>

                    {/* Quantity Input */}
                    <div>
                        <label className="font-bold text-sm mb-1 block" htmlFor="quantity">
                            Quantity <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="border border-gray-300 p-2 rounded w-full"
                            type="number"
                            id="quantity"
                            placeholder="Quantity"
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            required
                        />
                    </div>

                    {/* Amount (Read-Only) */}
                    <div>
                        <label className="font-bold text-sm mb-1 block" htmlFor="amount">
                            Amount
                        </label>
                        <input
                            className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                            type="text"
                            id="amount"
                            placeholder="Amount"
                            value={amount}
                            readOnly
                        />
                    </div>

                    {/* Submit & Cancel Buttons */}
                    <div className="md:col-span-3 flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                        >
                            Update Changes
                        </button>
                    </div>
                </section>
            </form>
        </section>
    );
}
