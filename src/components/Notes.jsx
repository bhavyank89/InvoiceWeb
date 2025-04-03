export default function Notes({ notes }) {
    return (
        <>
            {/* Notes */}
            <section className="mb-8 mt-20 text-justify">
                {/* Text area */}
                <p>{notes}</p>
            </section>
            {/* End of notes */}
        </>
    )
}