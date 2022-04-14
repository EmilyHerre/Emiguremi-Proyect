import { NavLink, Link } from 'react-router-dom';
import '../reset.css'
import '../navbar.css';

export const Navbar = () => {
    return (

        <nav >


            <ul>
                <Link to='/'>
                    <img src='emiguremi.png' alt='noce' width='50' />
                </Link>

                <li>
                    <Link to='/' className='item'>
                        Emiguremi
                    </Link>
                </li>
                <li>
                    <NavLink to='/about' className="item">
                        Sobre mi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/proyects' className="item" >
                        Proyectos
                    </NavLink>
                </li>

            </ul>


        </nav>

    )
}
