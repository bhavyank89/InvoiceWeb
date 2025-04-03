export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
    return (
        <>
            {/* Dates */}
            <article className="mb-8 flex flex justify-end">
                <ul className="text-start font-bold mx-2">
                    <li>Invoice Number :</li>
                    <li>Invoice date:</li>
                    <li>Due Date:</li>
                </ul>
                <ul className="text-end">
                    <li>{invoiceNumber ? invoiceNumber : 545}</li>
                    <li>{invoiceDate ? invoiceDate : "01/01/1997"}</li>
                    <li>{dueDate ? dueDate : "01/01/1997"}</li>
                </ul>
            </article>
            {/* End of dates */}
        </>
    )
}