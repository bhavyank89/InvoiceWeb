export default function Notes({notes}) {
    return (
        <>
            {/* Notes */}
            <section className="mb-5 text-justify">
                {/* Text area */}
                <p>{notes}</p>
            </section>
            {/* End of notes */}
        </>
    )
}