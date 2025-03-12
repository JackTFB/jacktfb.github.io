import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";

function Home() {
    return(
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen justify-center items-center bg-green-900">
                <div className="flex flex-col w-1/2 border-2 border-gray-900 bg-blue-900 text-white rounded-xl justify-center items-center p-6">
                    <h1>World of JackTFB</h1>

                    <p>Welcome!  This site is an absolute mess right now.  I'll get it sorted, don't worry :)</p>
                    <p>Hopefully you enjoy the journey navigating this place!</p>
                    <img src='gifs/monika.gif' alt='Monika Gif' className="h-60"/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home