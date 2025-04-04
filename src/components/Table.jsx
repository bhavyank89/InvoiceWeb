export default function Table({ list }) {

    return (
        <>
            {/* Table */}
            <section className="overflow-x-auto">
                <section className="grid grid-cols-1 w-[100%] min-w-xl overflow-x-auto">
                    {/* Heading row */}
                    <div className="grid grid-cols-6 col-span-1 w-[100%] bg-blue-100 mb-2">
                        <div className="col-span-3 w-[100%] font-bold text-center">Description</div>
                        <div className="col-span-1 w-[100%] text-end font-bold">Price</div>
                        <div className="col-span-1 w-[100%] text-end font-bold">Quantity</div>
                        <div className="col-span-1 w-[100%] text-end font-bold">Amount</div>
                    </div>

                    {/* Content Rows */}
                    {list.map((element, index) => (
                        <div key={index} className="grid grid-cols-6 col-span-1 w-[100%]">
                            <div className="col-span-3 w-[100%] pl-2">{element.description}</div>
                            <div className="col-span-1 w-[100%] text-end">{element.price}</div>
                            <div className="col-span-1 w-[100%] text-end">{element.quantity}</div>
                            <div className="col-span-1 w-[100%] text-end">{element.amount}</div>
                        </div>
                    ))}
                </section>
            </section>
        </>
    );
}
