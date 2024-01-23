export function Home(){
    return(
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className='md:text-4xl text-3xl font-bold text-white mt-20'>Dev Link Tree Home</h1>
            <span className="text-grey-50 mb-5 mt-3">See my Links</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none">
            <a>
                <p>
                    Youtube Channel
                </p>
            </a>
        </section>

            </main>
        </div>
    )

}