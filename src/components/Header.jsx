export default function Header({ handleOnPrint }) {
    return (
        <>
            {/* header*/}
            <header className="flex flex-col flex-wrap item-center justify-center mb-5 xl:flex-row xl:justify-between">
                <div><h1 className="font-bold uppercase tracking-wide text-4xl mb-5 text-center">InvoiceWeb</h1></div>
                <div>
                    <ul className="flex item-center flex-wrap justify-center">
                        <li><button className="btn btn-print text-white text-xs py-1 px-3 mx-2 rounded shadow bg-blue-500 border-blue-500 border-2 hover:bg-transparent hover:text-blue-500 transition-all duration-300" onClick={handleOnPrint}>Print</button></li>
                    </ul>
                </div>
            </header>
            {/* {End of header} */}
        </>
    )
}