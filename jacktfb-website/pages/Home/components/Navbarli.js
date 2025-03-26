import Link from 'next/link';

function Navbarli({ children, pageLink }) {
    return(
        <li className="transition transform duration-300 hover:scale-110 active:scale-90">
            <Link href={pageLink} className='transition colors duration-300 hover:text-custom-text-yellow'>
                {children}
            </Link>
        </li>
    )
}

export default Navbarli