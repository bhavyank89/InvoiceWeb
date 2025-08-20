export default function Table({ list, subtotal, gstRate, taxAmount, grandTotal, currency }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(value);
  };

  return (
    <>
      <section className="overflow-x-auto">
        <section className="grid grid-cols-1 w-[100%] min-w-xl overflow-x-auto md:min-w-auto">
          <div className="grid grid-cols-6 col-span-1 w-[100%] bg-blue-100 mb-2">
            <div className="col-span-3 font-bold text-center">Description</div>
            <div className="col-span-1 text-end font-bold">Price</div>
            <div className="col-span-1 text-end font-bold">Quantity</div>
            <div className="col-span-1 text-end font-bold">Amount</div>
          </div>

          {list.map((element, index) => (
            <div key={index} className="grid grid-cols-6 col-span-1 w-[100%] border-b py-1">
              <div className="col-span-3 pl-2">{element.description}</div>
              <div className="col-span-1 text-end">{formatCurrency(element.price)}</div>
              <div className="col-span-1 text-end">{element.quantity}</div>
              <div className="col-span-1 text-end">{formatCurrency(element.amount)}</div>
            </div>
          ))}

          {list.length > 0 && (
            <div className="mt-4 border-t pt-2">
              <div className="grid grid-cols-6">
                <div className="col-span-5 text-right font-semibold">Subtotal:</div>
                <div className="text-end">{formatCurrency(subtotal)}</div>
              </div>
              <div className="grid grid-cols-6">
                <div className="col-span-5 text-right font-semibold">GST ({gstRate}%):</div>
                <div className="text-end">{formatCurrency(taxAmount)}</div>
              </div>
              <div className="grid grid-cols-6 font-bold text-lg">
                <div className="col-span-5 text-right">Total:</div>
                <div className="text-end">{formatCurrency(grandTotal)}</div>
              </div>
            </div>
          )}
        </section>
      </section>
    </>
  );
}
