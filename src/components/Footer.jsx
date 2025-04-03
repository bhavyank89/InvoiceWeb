export default function Footer({ name, address, phone, email, bankName, bankAccount, website, personalGST, branchName, bankIFSC }) {
    return (
        <>
            {/* Footer */}
            <footer className="m-5 border-t-2 p-2">
                <ul className="flex flex-wrap item-center justify-center">
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">Name:</span> {name ? name : "John Deo"}</li>
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">Your Email:</span> {email ? email : "example@gmail.com"}</li>
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">Phone No:</span> {phone ? phone : "13245 87285"}</li>
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">Bank:</span> {bankName ? bankName : "myBank"}</li>
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">Account holder Name:</span> {name ? name : "John Deo"}</li>
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">Bank account number:</span> {bankAccount ? bankAccount : "2341534525"}</li>
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">Address:</span> {address ? address : "rosewalt street"}</li>
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">IFSC:</span> {bankIFSC ? bankIFSC : "CEFX0DY1423"}</li>
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">GST:</span> {personalGST ? personalGST : "AGDPS1726B"}</li>
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">Branch:</span> {branchName ? branchName : "Gorge Street"}</li>
                    <li className="mx-2 my-[0.1rem]"><span className="font-bold">Website:</span> {website ? website : "example.com"}</li>
                    <li></li>
                </ul>
            </footer>
            {/* end of footer */}
        </>
    )
}