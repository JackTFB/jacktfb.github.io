import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ReturnButton from "@/components/ReturnButton"

function About() {
    return(
        <div className="text-custom-bg-white bg-forest bg-fixed bg-cover bg-center bg-no-repeat min-h-screen">
            <Navbar />

            <div className="p-5 flex flex-col items-center text-left justify-center border-2 border-custom-border-white mt-1 mr-auto mb-1 ml-auto w-3/4 bg-custom-bg-green transition transform duration-300 ease-in-out hover:scale-105">
                <h1 className="text-center text-4xl mt-10 font-eagleLake">About</h1>
            </div>

            <div className="p-3 flex flex-col items-center text-left justify-center border-2 border-custom-border-color mt-10 mr-auto mb-10 ml-auto w-3/4 bg-custom-bg-green transition transform duration-300 ease-in-out hover:scale-105">
                <h2 className="text-center text-3xl mt-10 font-eagleLake">About this site</h2>
                <p>This is my internet checkpoint.  My true home place for everything that identifies as me.
                As much as I appreciate the convenience of social media, I've always just needed a place away from it all.
                A place completely free from algorithms, corporate advertising, and meaningless clout chasing.
                Here, you will find out anything and everything I love and care about.
                From my hobbies and interests, to my projects, to all the random knowledge I have, it's all here!
                Enjoy your time here!  It's a mess, but then again I'm a bit of a mess, so XD
                </p>
            </div>

            <div class="p-5 flex flex-col items-center text-left justify-center border-2 border-custom-border-white mt-2 mr-auto mb-2 ml-auto w-3/4 bg-custom-bg-green">
                <h2 className="text-center text-3xl mt-10 font-eagleLake">About me</h2>
                <p>Chaotic Creativity, lawful personality.</p>
                <ul>
                    <li>Age: 22</li>
                    <li>Skills: Animation, Programming, Video Editing, Writing</li>
                    <li>Interests: Anime, Video Games, Technology, VTubers, Music, Movies/TV Series, Internet things</li>
                    <li>Favorite Color: Orange</li>
                    <li>Favorite Anime: Rising of the Shield Hero, Rascal Does Not Dream, Frieren</li>
                    <li>Favorite Game: The Legend of Zelda, Skyrim, Doki Doki Literature Club</li>
                    <li>Programming Languages: C#, Javascript, Java</li>
                    <li>Favorite Music: Mori Calliope, Slipknot, DAGames, Babymetal, Anything Metal or J-Pop</li>
                    <li>Favorite VTubers: Mori Calliope, Ironmouse, Dokibird </li>
                </ul>
            </div>

            <Footer />
        </div>
    )
}

export default About