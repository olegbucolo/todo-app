import './Header.css';
import { NavLink } from 'react-router-dom';

export function Header() {

    return (
        <header>
            <nav className="main-nav">
                <ul className="left">
                    <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li><NavLink to="/todos" className={({isActive}) => isActive ? 'active' : ''}>Todos</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
                </ul>
                <ul className="right">
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}