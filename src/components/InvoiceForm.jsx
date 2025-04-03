import TableForm from "./TableForm"

export default function Form({ notes, name, address, clientName, clientAddress, invoiceDate, dueDate, invoiceNumber, phone, email, bankName, bankAccount, website, setName, setAddress, setBankAccount, setBankName, setClientAddress, setClientName, setDueDate, setEmail, setInvoiceDate, setInvoiceNumber, setNotes, setPhone, setWebsite, description, setDescription, amount, setAmount, price, setPrice, quantity, setQuantity }) {
  return (
    <>
      {/* Invoice Form */}
      <div className="flex flex-col justify-center">

        {/* Personal Information Section */}
        <section className="flex flex-col mb-8 justify-center item-center md:grid md:grid-cols-2 md:justify-around">
          <label className="font-bold w-[100%] mb-2 text-left col-span-2" htmlFor="name">Personal Information</label>
          {/* name */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="name">Name</label>
            <input
              className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* email */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="email">Email</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto" type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {/* phone */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="phone">Phone</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5" type="text" name="phone" id="phone" placeholder="Enter your phone" autoComplete="off" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          {/* website */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="website">Website</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto" type="text" name="website" id="website" placeholder="Enter your website" autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
          {/* Address */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="address">Address</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto" type="text" name="address" id="address" placeholder="Enter your address" autoComplete="off" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </section>

        {/* Bank Details Section */}
        <section className="flex mb-8 flex-col justify-center item-center md:grid md:grid-cols-2 md:justify-around">
          <label className="font-bold w-[100%] mb-2 text-left col-span-2" htmlFor="name">Bank Details</label>
          {/* bankName */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="bankName">Bank Name</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5" type="text" name="bankName" id="bankName" placeholder="Enter your bankName" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)} />
          </div>
          {/* bank Account Number */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="bankAccount">Enter Account No</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto" type="text" name="bankAccount" id="bankAccount" placeholder="Account No" autoComplete="off" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
          </div>
          {/* IFSC Code */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="bankName">IFSC Code</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5" type="text" name="bankName" id="bankName" placeholder="Enter your bankName" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)} />
          </div>
          {/*Branch Name*/}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="bankName">Branch Name</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto" type="text" name="bankName" id="bankName" placeholder="Enter your bankName" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)} />
          </div>
        </section>

        {/* client Infromation Section */}
        <section className="flex flex-col justify-center item-center mb-8 md:grid md:grid-cols-2 md:justify-around">
          <label className="font-bold w-[100%] mb-2 text-left col-span-2" htmlFor="name">Client Information</label>
          {/* clientName */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="clientName">Client Name</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5" type="text" name="clientName" id="clientName" placeholder="ClientName" autoComplete="off" value={clientName} onChange={(e) => setClientName(e.target.value)} />
          </div>
          {/* GST No */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="clientName">GST No</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto" type="text" name="clientName" id="clientName" placeholder="ClientName" autoComplete="off" value={clientName} onChange={(e) => setClientName(e.target.value)} />
          </div>
          {/* clientAddress */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="clientAddress">Client Address</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto" type="clientAddress" name="clientAddress" id="clientAddress" placeholder="Enter your clientAddress" autoComplete="off" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
          </div>
        </section>

        {/* Invoice Details Section */}
        <section className="flex flex-col justify-center item-center mb-8 md:grid md:grid-cols-3 md:justify-around">
          <label className="font-bold w-[100%] mb-2 text-left col-span-3" htmlFor="name">Invoice Details</label>
          {/* invoiceNumber */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="invoiceNumber">Invoice Number</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5" type="text" name="invoiceNumber" id="invoiceNumber" placeholder="Enter your invoiceNumber" autoComplete="off" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
          </div>
          {/* invoiceDate */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="invoiceDate">Invoice Date</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto md:mr-5" type="date" name="invoiceDate" id="invoiceDate" placeholder="Enter invoiceDate" autoComplete="off" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
          </div>
          {/* dueDate */}
          <div className="flex flex-col">
            <label className="font-bold text-sm mx-1 mb-0.5" htmlFor="dueDate">Invoice due date</label>
            <input className="border border-gray-300 p-2 rounded h-10 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none md:w-auto" type="date" name="dueDate" id="dueDate" placeholder="Enter your dueDate" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
        </section>

        {/* Item Tables */}
        <section className="flex flex-col justify-center item-center mb-8 md:flex-row md:flex-wrap md:justify-around">
          <label className="font-bold w-[100%] mb-2 text-left" htmlFor="name">Item Details</label>
          <TableForm quantity={quantity}
            setQuantity={setQuantity}
            amount={amount}
            setAmount={setAmount}
            price={price}
            setPrice={setPrice}
            description={description}
            setDescription={setDescription} />
        </section>

        {/* Additional Notes Section */}
        <section>
          <label className="font-bold w-[100%] mb-2 text-left" htmlFor="name">Additional Notes</label>
          {/* notes */}
          <div className="flex flex-col mt-3">
            <textarea className="border border-gray-300 p-2 rounded h-15 mb-2 transition-all duration-100 
             hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none" type="text" name="notes" id="notes" placeholder="Enter your notes" autoComplete="off" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>
        </section>
      </div>
    </>
  )
}