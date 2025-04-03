export default function Footer({ name, phone, email, bankName, bankAccount, website, branchName, bankIFSC }) {
    return (
        <>
            {/* Footer */}
            <footer className="my-8 pt-8 border-t-2 p-2 flex flex-col sm:grid sm:grid-cols-2">
                <section className="sm:mr-5">
                    <ul className="flex flex-wrap item-center justify-start">
                        <li className="mx-2 my-[0.1rem]"><span className="font-bold">Name:</span> {name ? name : "John Deo"}</li>
                        <li className="mx-2 my-[0.1rem]"><span className="font-bold">Account No:</span> {bankAccount ? bankAccount : "2341534525"}</li>
                        <li className="mx-2 my-[0.1rem]"><span className="font-bold">IFSC:</span> {bankIFSC ? bankIFSC : "CEFX0DY1423"}</li>
                        <li className="mx-2 my-[0.1rem]"><span className="font-bold">Bank:</span> {bankName ? bankName : "myBank"}</li>
                        <li className="mx-2 my-[0.1rem]"><span className="font-bold">Branch:</span> {branchName ? branchName : "Gorge Street"}</li>
                        <li></li>
                    </ul>
                </section>
                <section>
                    <ul className="flex flex-wrap item-center justify-start">
                        <li className="mx-2 my-[0.1rem]"><span className="font-bold">Your Email:</span> {email ? email : "example@gmail.com"}</li>
                        <li className="mx-2 my-[0.1rem]"><span className="font-bold">Phone No:</span> {phone ? phone : "13245 87285"}</li>
                        <li className="mx-2 my-[0.1rem]"><span className="font-bold">Website:</span> {website ? website : "example.com"}</li>
                        <li></li>
                    </ul>
                </section>

            </footer>
            {/* end of footer */}
        </>
    )
}