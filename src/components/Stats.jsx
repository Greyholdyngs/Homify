

function Stats() {

    const statistics = [
        {
            id: 1,
            main: "N10M+",
            text: "Invested Securely",
        },
        {
            id: 2,
            main: "500+",
            text: "Funded Deals",
        },
        {
            id: 3,
            main: "1,200+",
            text: "Managed Properties",
        }
    ]

    return(
        <div className="flex lg:gap-40 sm:gap-10 gap-5 lg:py-10 sm:py-8 py-4 px-5 justify-center">
            {
                statistics.map((item) => (
                    <div className="border-l lg:px-7 sm:px-5 px-2" key={item.id}>
                        <h1 className=" lg:text-5xl sm:text-3xl font-semibold lg:my-2 my-1">{item.main}</h1>
                        <p className="text-l font-light">{item.text}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Stats