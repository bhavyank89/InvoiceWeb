export default function CientDetails({ clientName, clientAddress, clientGST }) {
    return (
        <>
            {/* Client details */}
            <section className="my-5 sm:my-0">
                <h2 className="text-lg uppercase font-bold">{clientName ? clientName : "Client's Name"}</h2>
                <p className="text-md sm:h-max-20">{clientAddress ? clientAddress : "clien't address"}</p>
                <p className="text-sm"><span className="font-bold">GST: </span>{clientGST ? clientGST : "clien't GST"}</p>
            </section>
            {/* End of client details */}
        </>
    )
}