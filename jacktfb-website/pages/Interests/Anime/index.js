import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ReturnButton from "@/components/ReturnButton"

function Anime() {
    return(
        <>
            <Navbar />
            <h1 className="text-4xl font-eagleLake text-center">Anime</h1>

            <p>I talk about all things anime here!!! :)</p>

            <div className="hidden">Loading...</div>

            <h1>Anime I am currently watching</h1>

            <div className="">

            </div>

            <h1>Anime I finished watching</h1>

            <div className="anime-finished-list">

            </div>

            <h1>Anime I plan to watch</h1>

            <div className="anime-planning-list">

            </div>
            
            <Footer />
        </>
    )
}

export default Anime