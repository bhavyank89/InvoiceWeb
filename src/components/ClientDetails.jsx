export default function CientDetails({ clientName, clientAddress }) {
    return (
        <>
            {/* Client details */}
            <section className="my-5">
                <h2 className="text-xl uppercase">{clientName ? clientName : "Client's Name"}</h2>
                <p>{clientAddress ? clientAddress : "clien't address"}</p>
            </section>
            {/* End of client details */}
        </>
    )
}