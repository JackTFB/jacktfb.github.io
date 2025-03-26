import Footer from "@/components/Footer";

import Link from 'next/link';

const { default: Navbar } = require("@/components/Navbar");

function Resume() {
    return(
        <div className="bg-black w-full min-h-screen">
            <Navbar />

            <div className="text-center m-2 p-4 bg-gray-500 text-white">
                <h1 className="text-3xl">Josiah King</h1>
                <p className="text-md">Software Engineer | josiahkeithking@gmail.com | (706) 567-0472 | GitHub - https://github.com/JackTFB</p>
            </div>
            
            <div className="m-2 p-4 bg-blue-500 text-white text-left">
                <h2>EDUCATION</h2>
                <h3>University of North Georgia - Dahlonega GA</h3>
                <p>Bachelor&apos;s in Computer Science</p>
                <p>Expected Graduation: Summer 2025</p>
                <ul>
                    <li>GPA: 3.3, Dean&apos;s List</li>
                    <li>Relevant Courses: Software Engineering, Databases, Operating Systems, File Structures, Reverse Engineering, Intro to Unix</li>
                </ul>
            </div>
            
            <div className="m-2 p-4 text-white bg-blue-500">
                <h2>PROJECTS</h2>

                    <h3>Which Anime Should You Watch Next? - React - Head Developer</h3>
                    <p>December 2024 - Present</p>
                    <ul>
                        <li><Link href='https://which-anime-should-you-watch-next.vercel.app' target="_blank">Link</Link></li>
                        <li>Developed a search engine using modern web frameworks such as React to help anime fans find 
                        new shows based on shows they recently watched.</li>
                        <li>Used Third-Party REST APIs to collect, organize, and display relevant information about the show.
                        </li>
                        <li>Wrote a custom search algorithm in JavaScript to help filter through results and find close to 20% more accurate matches to user queries.</li>
                    </ul>

                    <h3>Archivist - React/Vite - Head Developer</h3>
                    <p>May 2024 - August 2024</p>
                    <ul className="list-disc">
                        <li><Link href='https://github.com/danieljromero15/Archivist' target='_blank'>Link</Link></li>
                        <li>Built a backlog archival project in Dart that allowed users to track their backlog by searching for games on a database, log their progress, and write notes based on how far they are to completing the game.</li>
                        <li>Led team coordination efforts and ensured proejct completion within deadlines.</li>
                        <li>Developed the core visual structure of the project as well as led the creative vision to ensure consistency among the developers</li>
                        <li>Developed the core visual structure of the project using Flutter as well as led the creative vision to ensure consistency among the developers.</li>
                    </ul>
            </div>
            

            

            <div className="p-4 m-2 text-white bg-blue-500">
                <h2>EXPERIENCE</h2>

                <h3>Avalon Online - Junior Java Developer (Remote)</h3>
                <p>May 2024 - February 2025</p>
                <ul>
                    <li>Developed server plugins in Java to enhance gameplay mechanics for an MMORPG Minecraft server.</li>
                    <li>Contributed to codebases using Git and collaborated to ensure a 15% increase in successful plugin 
                    integration.</li>
                </ul>
            </div>


            

            <h2>SKILLS</h2>
            <p>Programming Languages: Dart, C#, Java, Python, HTML/CSS, Javascript</p>
            <p>Frameworks/Tools: React, Tailwind CSS, NextJS, Maven, Git</p>
            <p>Other Skills: Source Control, Project Management, Communication, Linux Proficiency</p>
            
           

            <br></br>
            <br></br>


            <Footer />
        </div>
        
    )
}

export default Resume