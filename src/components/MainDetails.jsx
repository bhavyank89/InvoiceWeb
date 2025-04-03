export default function MainDetails({name,address}) {
    return (
        <>
            {/* your details */}
            <section className="flex flex-col items-end justify-end">
                <h2 className="text-xl uppercase font-bold">{name?name:"John Deo"}</h2>
                <p>{address?address:"example street"}</p>
            </section>
            {/* end of your details */}
        </>
    )
}