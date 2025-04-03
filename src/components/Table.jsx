export default function Table({ quantity, amount, price, description, totalQuantity, totalPrice, totalAmount }) {
    return (
        <>
            {/* Table */}
            <section className="grid grid-cols-1 w-[100%]">
                {/* Headig row */}
                <div className="grid grid-cols-6 col-span-1 w-[100%] bg-blue-100 mb-2">
                    <div className="col-span-3 w-[100%] font-bold text-center">Description</div>
                    <div className="col-span-1 text-end font-bold">Price</div>
                    <div className="col-span-1 text-end font-bold">Quantity</div>
                    <div className="col-span-1 text-end font-bold">Amount</div>
                </div>
                {/* Content Div */}
                <div className="grid grid-cols-6 col-span-1 w-[100%]">
                    <div className="col-span-3 w-[100%] justify-around pl- mb-2">{description}</div>
                    <div className="col-span-1 w-[100%] text-end">{price}</div>
                    <div className="col-span-1 w-[100%] text-end">{quantity}</div>
                    <div className="col-span-1 w-[100%] text-end">{amount}</div>
                </div>
                {/* total row */}
                <div className="grid grid-cols-6 col-span-1 w-[100%] border-t-1 border-b-1">
                    <div className="col-start-4 w-[100%] text-end">{totalPrice}</div>
                    <div className="col-start-5 w-[100%] text-end">{totalQuantity}</div>
                    <div className="col-start-6 w-[100%] text-end">{totalAmount}</div>
                </div>
            </section>
            {/* End of table */}
        </>
    )
}