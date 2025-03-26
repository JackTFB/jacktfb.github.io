import Footer from "@/components/Footer";

import Link from 'next/link';
import Navbarul from "./components/Navbarul";
import Navbarli from "./components/Navbarli";
import Monika from "./components/Monika";

function Home() {
    return(
        <div className="bg-forest bg-fixed bg-cover bg-center bg-no-repeat bg-custom-bg-green text-custom-bg-white min-h-screen">


            <div className="grid grid-cols-[20%_1fr_20%] grid-rows-[auto_1fr_1fr_auto] gap-4 w-full gap-8 bg-opacity-0">


                <div className="col-span-3 flex flex-col content-start items-center bg-custom-bg-green bg-clip-padding border-4 border-custom-border-white mt-1 mr-20 mb-1 ml-20 transition transform duration-300 ease-in-out hover:scale-105">
                    <h1 className="text-4xl font-eagleLake mt-1 nr-5 mb-1 ml-5">World of JackTFB</h1>
                    <img src='images/JackTFBPFP.png' alt='JackTFB PFP' className="h-20 rounded-full mb-2"/>
                </div>

                <div className="col-span-1 col-start-1 mt-0 mr-2 mb-0 ml-2 flex items-left bg-custom-bg-green border-2 border-custom-border-white h-auto w-auto text-md transition transform duration-300 ease-in-out hover:scale-105">
                    <Navbarul>
                        <Navbarli pageLink='/Home'>Home</Navbarli>
                        <Navbarli pageLink='/About'>About</Navbarli>
                        <Navbarli pageLink='/Resume'>Resume</Navbarli>
                        <li className="list-disc">Interests
                                <Navbarul className=''>
                                    <Navbarli pageLink='Interests/Anime'>Anime</Navbarli>
                                    <Navbarli pageLink='Interests/Gaming'>Gaming</Navbarli>
                                    <Navbarli pageLink='Interests/Technology'>Technology</Navbarli>
                                    <Navbarli pageLink='Interests/Movies-TV'>Movies/TV Series</Navbarli>
                                    <Navbarli pageLink='Interests/VTubers'>VTubers</Navbarli>
                                    <Navbarli pageLink='Interests/Music'>Music</Navbarli>
                                    <Navbarli pageLink='Interests/Internet'>Internet Things</Navbarli>
                                </Navbarul>
                        </li>
                        <li> Projects
                                <Navbarul>
                                    <Navbarli pageLink='Projects/Animation'>Animation</Navbarli>
                                    <Navbarli pageLink='Projects/Games'>Games</Navbarli>
                                    <Navbarli pageLink='Projects/Programming'>Programming</Navbarli>
                                    <Navbarli pageLink='Projects/Writing'>Writing</Navbarli>
                                </Navbarul>
                        </li>
                        <Navbarli pageLink='/Contact'>Contact</Navbarli>
                    </Navbarul>
                </div>
                <div 
                className="row-span-2 col-span-1 flex flex-col justify-center mt-0 mr-5 mb-0 ml-5 h-auto w-auto bg-custom-bg-green border-2 border-custom-bg-border p-6 text-md transition transform duration-300 ease-in-out hover:scale-105">
                    <p className="">
                        Welcome, you have stumbled upon the virtual homespace of a random nerd online XD   
                    </p>
                    <p>
                        <Link href='/Resume'>RECRUITERS HERE!</Link>
                    </p>
                    <Monika />
                </div>
                
                <div className="row-span-1 col-span-1">
                    <p>
                        Chatbox
                    </p>
                </div>

                <div class='col-span-3 row-span-1 justify-center items-center mt-1 mr-10 mb-1 ml-10 h-auto w-auto flex flex-col bg-custom-bg-green text-center border-2 border-custom-border-white p-6 text-sm transition transform duration-300 ease-in-out hover:scale-105'>
                    <p className="m-1">Socials!</p>
                    <ul className="list-none p=0 m-0 flex flex-row items-center justify-center">
                        <li className="m-1">
                            <a href="https://www.youtube.com/@jacktfbofficial" target="_blank">
                                <img src="/images/YouTube.png" alt="YouTube logo" className="h-14 mb-2"/>
                            </a>
                        </li>
                        <li className="m-1">
                            <a href="https://bsky.app/profile/jacktfb.bsky.social" target="_blank">
                                <img src="/images/Bluesky.png" alt="Bluesky logo" className="h-14 mb-2"/>
                            </a>
                        </li>
                        <li className="m-1">
                            <a href="https://github.com/JackTFB" target="_blank">
                                <img src="/images/Github.png" alt="Github Logo" className="h-14 mb-2"/>
                            </a>
                        </li>
                    </ul>
                </div>


            </div>

        <Footer />

        </div>
    )
}

export default Home