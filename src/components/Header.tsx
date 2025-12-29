import './Header.css';

export function Header(){
    return (
        <header>
            <nav className="main-nav">
                <ul className="left">
                    <li><a href="">Home</a></li>
                    <li><a href="">Todos</a></li>
                    <li><a href="">About</a></li>
                </ul>
                <ul className="right">
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}