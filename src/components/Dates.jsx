export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
    return (
        <>
            {/* Dates */}
            <article className="my-5 flex items-end justify-end">
                <ul>
                    <li><span className="font-bold">Invoice Number :</span> {invoiceNumber ? invoiceNumber : 545}</li>
                    <li><span className="font-bold">Invoice date:</span> {invoiceDate ? invoiceDate : "01/01/1997"}</li>
                    <li><span className="font-bold">Due Date:</span> {dueDate ? dueDate : "01/01/1997"}</li>
                </ul>
            </article>
            {/* End of dates */}
        </>
    )
}