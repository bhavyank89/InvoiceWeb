import { useState, useRef } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import InvoiceForm from "./components/InvoiceForm";
import Alert from './components/Alert';
import { useReactToPrint } from "react-to-print";

// Assuming you're using react-to-pdf fork that exports generatePDF
import generatePDF, { Resolution, Margin } from 'react-to-pdf';

function App() {
  const [showInvoice, setShowInvoice] = useState(true);
  const [togglePreview, setTogglePreview] = useState("Preview Invoice");

  // Form state
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalQuantity, setTotalQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [personalGST, setPersonalGST] = useState("");
  const [clientGST, setClientGST] = useState("");
  const [branchName, setBranchName] = useState("");
  const [bankIFSC, setBankIFSC] = useState("");
  const [list, setList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Refs
  const contentRef = useRef();

  // Fix: pass correct content function
  const reactToPrintFn = useReactToPrint({ contentRef });

  const handleOnPrint = () => {
    reactToPrintFn();
  };

  const showAlertTab = (show, message) => {
    setAlertMessage(message);
    setShowAlert(show);
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage("");
    }, 2000);
  };

  const handlePreviewInvoice = () => {
    setShowInvoice((prev) => !prev);
    setTogglePreview(showInvoice ? "Preview Invoice" : "Edit Invoice");
  };

  return (
    <>
      {showAlert && <Alert alertMessage={alertMessage} />}
      <main className="p-5 m-5 lg:max-w-2xl lg:mx-auto bg-white rounded shadow flex flex-col">
        {showInvoice ? (
          <div>
            <Header
              handleOnPrint={handleOnPrint}
            />
            <section className="printComponent" ref={contentRef}>
              <section className="flex flex-col sm:grid sm:grid-cols-2 mb-10">
                <MainDetails name={name} address={address} personalGST={personalGST} />
                <ClientDetails clientName={clientName} clientAddress={clientAddress} clientGST={clientGST} />
              </section>
              <Dates invoiceDate={invoiceDate} dueDate={dueDate} invoiceNumber={invoiceNumber} />
              <Table
                description={description}
                price={price}
                quantity={quantity}
                amount={amount}
                totalPrice={totalPrice}
                totalQuantity={totalQuantity}
                totalAmount={totalAmount}
                list={list}
              />
              <Notes notes={notes} />
              <Footer
                name={name}
                phone={phone}
                email={email}
                bankName={bankName}
                bankAccount={bankAccount}
                website={website}
                branchName={branchName}
                bankIFSC={bankIFSC}
              />
            </section>
          </div>
        ) : (
          <InvoiceForm
            notes={notes}
            name={name}
            address={address}
            clientName={clientName}
            clientAddress={clientAddress}
            invoiceDate={invoiceDate}
            dueDate={dueDate}
            invoiceNumber={invoiceNumber}
            phone={phone}
            email={email}
            bankName={bankName}
            bankAccount={bankAccount}
            website={website}
            setName={setName}
            setAddress={setAddress}
            setBankAccount={setBankAccount}
            setBankName={setBankName}
            setClientAddress={setClientAddress}
            setClientName={setClientName}
            setDueDate={setDueDate}
            setEmail={setEmail}
            setInvoiceDate={setInvoiceDate}
            setInvoiceNumber={setInvoiceNumber}
            setNotes={setNotes}
            setPhone={setPhone}
            setWebsite={setWebsite}
            quantity={quantity}
            setQuantity={setQuantity}
            amount={amount}
            setAmount={setAmount}
            price={price}
            setPrice={setPrice}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            totalQuantity={totalQuantity}
            setTotalQuantity={setTotalQuantity}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            description={description}
            setDescription={setDescription}
            personalGST={personalGST}
            setPersonalGST={setPersonalGST}
            clientGST={clientGST}
            setClientGST={setClientGST}
            branchName={branchName}
            setBranchName={setBranchName}
            bankIFSC={bankIFSC}
            setBankIFSC={setBankIFSC}
            list={list}
            setList={setList}
            showAlertTab={showAlertTab}
          />
        )}
        <button
          className="font-bold text-white py-2 px-8 mt-2 rounded shadow bg-blue-500 border-blue-500 border-2 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          onClick={handlePreviewInvoice}
        >
          {togglePreview}
        </button>
      </main>
    </>
  );
}

export default App;
