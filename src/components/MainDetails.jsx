export default function MainDetails({ name, address, personalGST }) {
    return (
        <>
            {/* your details */}
            <section className="flex flex-col text-justify w-auto sm:mr-5">
                <h2 className="text-xl uppercase font-bold">{name ? name : "John Deo"}</h2>
                <p className="text-md sm:h-max-20">{address ? address : "example street"}</p>
                <p className="text-sm"><span className="font-bold">GST: </span>{personalGST ? personalGST : "AQWPS1419T"}</p>
            </section>
            {/* end of your details */}
        </>
    )
}