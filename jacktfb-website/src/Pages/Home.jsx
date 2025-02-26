

// eslint-disable-next-line react/prop-types
function Home({setPage}) {

    return (
        <div className="text-[#F4F6FB] font-serif text-center min-h-screen">
            <div className="grid grid-cols-12 gap-4 w-full">
                <div
                    className="top col-span-12 flex flex-col justify-start items-center my-4 p-6 bg-[#152227] border border-[#cad7ed] transition-all duration-300 hover:scale-105">
                    <h1 className="text-4xl font-customFont">World of JackTFB</h1>
                    <img src="../../public/images/JackTFBPFP.png" alt="PFP" className="h-16 rounded-full mt-4"/>
                </div>
                <nav
                    className="nav col-span-3 flex flex-col items-start bg-[#152227] border border-[#cad7ed] text-sm p-4 transition-all duration-300 hover:scale-105">
                    <ul className="space-y-2 text-left">
                        <li className="hover:scale-110 active:scale-90 transition-transform">Home</li>
                        <li className="hover:scale-110 active:scale-90 transition-transform"><s>About</s></li>
                        <li className="hover:scale-110 active:scale-90 transition-transform"><s>Blog</s></li>
                        <li className="hover:scale-110 active:scale-90 transition-transform"><s>Interests</s></li>
                        <ul className="space-y-2 text-left">
                            <li className="ml-4"><s>Games</s></li>
                            <li className="ml-4"><s>Anime</s></li>
                            <li className="ml-4"><s>Technology</s></li>
                            <li className="ml-4"><s>Movies/TV Series</s></li>
                            <li className="ml-4"><s>VTubers</s></li>
                            <li className="ml-4"><s>Music</s></li>
                            <li className="ml-4"><s>Internet things</s></li>
                        </ul>
                        <li className="hover:scale-110 active:scale-90 transition-transform"><s>Projects</s></li>
                        <ul className="space-y-2 text-left">
                            <li className="ml-4"><s>Animation</s></li>
                            <li className="ml-4"><s>Programming</s></li>
                            <li className="ml-4"><s>Music Projects</s></li>
                            <li className="ml-4"><s>Writing</s></li>
                        </ul>

                        <li className="hover:scale-110 active:scale-90 transition-transform"><s>Tips and Resources</s></li>
                        <ul className="space-y-2 text-left">
                            <li className="ml-4"><s>Linux</s></li>
                            <li className="ml-4"><s>Programming</s></li>
                            <li className="ml-4"><s>Blender</s></li>
                            <li className="ml-4"><s>Other stuffs I find</s></li>
                        </ul>
                        <li className="hover:scale-110 active:scale-90 transition-transform"><s>Links</s></li>
                        <li className="hover:scale-110 active:scale-90 transition-transform"><s>Sitemap</s></li>
                        <li className="hover:scale-110 active:scale-90 transition-transform"><s>Contact</s></li>
                        <li className="hover:scale-110 active:scale-90 transition-transform">
                            <button onClick={() => setPage('start')}>Start</button>
                        </li>
                    </ul>
                </nav>

                <div
                    className="content col-span-6 p-8 bg-[#152227] border border-[#cad7ed] text-lg transition-all duration-300 hover:scale-105">
                    <p>Welcome, the site is an absolute mess right now. I&#39;ll get it sorted, don&#39;t worry :)</p>
                    <p>Hopefully you enjoy the journey navigating this place!</p>
                    <img src="../../public/gifs/monika.gif" onMouseOver={(e) => hover(e.target)} onMouseOut={(e) => unhover(e.target)} alt="monika gif"
                         className="mx-auto h-72 p-4"/>
                </div>

                <div
                    className="sidebar col-span-3 flex flex-col items-start bg-[#152227] border border-[#cad7ed] p-8 transition-all duration-300 hover:scale-105">
                    <p>
                        My button
                    </p>
                    <div className="mt-2">
                        <ul>
                            <li><img src="../../public/images/JackTFBButton.png" className="h-8" alt="TFB Button"/></li>
                        </ul>
                    </div>
                    <p>
                        Friends&#39; websites!
                    </p>

                    <p>
                        Other cool sites!
                    </p>

                    <ul className="flex flex-wrap gap-2 mt-2">
                        <li><a href="https://lazer-bunny.neocities.org" target="_blank"><img
                            src="https://i.imgur.com/PTTYSwz.gif" alt="Lazerbunny Logo"/></a></li>
                        <li><a href="https://adilene.net" target="_blank"><img
                            src="https://adilene.net/images/sitebutton.gif" alt="Adilene logo"/></a></li>
                        <li><a href="https://theabsoluterealm.com" target="_blank"><img
                            src="https://theabsoluterealm.com/buttons/absolute-realm.gif"
                            alt="The Absolute Realm Logo"/></a></li>
                        <li><a href="https://lilithdev.neocities.org" target="_blank"><img
                            src="https://lilithdev.neocities.org/buttons/lilithdevbtn.gif" alt="LilithDev logo"/></a>
                        </li>
                    </ul>
                </div>

                <div
                    className='extra col-span-6 col-start-4 flex flex-col items-center bg-[#152227] border border-[#cad7ed] p-8 transition-all duration-300 hover:scale-105'>
                    <p>Socials!</p>
                    <ul className="flex flex-wrap gap-2 mt-2">
                        <li><a href="https://www.youtube.com/@jacktfbofficial" target="_blank"><img
                            src="../../public/images/YouTube.png" alt="YouTube logo" className="h-12 transition-transform hover:scale-110 active:scale-90"/></a></li>
                        <li><a href="https://bsky.app/profile/jacktfb.bsky.social" target="_blank"><img
                            src="../../public/images/Bluesky.png" alt="Bluesky logo" className="h-12 transition-transform hover:scale-110 active:scale-90"/></a></li>
                        <li><a href="https://github.com/JackTFB" target="_blank"><img src="../../public/images/Github.png"
                                                                                      alt="Github Logo" className="h-12 transition-transform hover:scale-110 active:scale-90"/></a></li>
                    </ul>
                </div>


            </div>

            <div
                className="footer col-span-12 text-sm text-center bg-[#152227] text-[#F4F6FB] p-4 border-t border-[#cad7ed] fixed bottom-0 w-full transition-all duration-300 hover:translate-y-0">
                <footer>Site created by JackTFB | 2025</footer>
            </div>
        </div>
    );
}

function hover(element) {
    element.setAttribute('src', '../../public/gifs/monikahappy.gif');
}

function unhover(element) {
    element.setAttribute('src', '../../public/gifs/monika.gif');
}

export default Home;