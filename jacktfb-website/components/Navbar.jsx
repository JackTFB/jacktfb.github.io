import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

function Navbar() {
    return(
        <nav className='p-4 bg-gray-900 text-white w-full top-0'>
            <ul className='container mx-auto flex justify-between items-center'>
                <li><Link href='/Home'>Home</Link></li>
                <li><Link href='/About'>About</Link></li>
                <li><Link href='/Blog'>Blog</Link></li>
                
                <li>
                    <details>
                        <summary>Interests</summary>
                        <ul className='bg-gray-800 p-2 rounded'>
                            <li><Link href='Interests/Anime'>Anime</Link></li>
                            <li><Link href='Interests/Gaming'>Gaming</Link></li>
                            <li><Link href='Interests/Technology'>Technology</Link></li>
                            <li><Link href='Interests/Movies-TV'>Movies/TV series</Link></li>
                            <li><Link href='Interests/VTubers'>VTubers</Link></li>
                            <li><Link href='Interests/Music'>Music</Link></li>
                            <li><Link href='Interests/Internet'>Internet Things</Link></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Projects</summary>
                        <ul>
                            <li><Link href='Projects/Animation'>Animation</Link></li>
                            <li><Link href='Projects/Games'>Games</Link></li>
                            <li><Link href='Projects/Programming'>Programming</Link></li>
                            <li><Link href='Projects/Writing'>Writing</Link></li>
                        </ul>
                    </details>
                </li>
                <li><Link href='/Contact'>Contact</Link></li>
                <div className='flex items-center space-x-4'>
                    <ThemeSwitcher className='self-end'/>
                    <button className='md:hidden'>Menu</button>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar