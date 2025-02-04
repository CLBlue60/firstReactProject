import './navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                <div className='navbar-menu'>
                <a href='/login'>Log in</a>
                <a href='/search'>Search</a>
                <a href='/subscribe'>Subscribe</a>
                <a href='/menu'>Menu</a>
                </div>
            </nav>
        </div>
    );
    }


export default Navbar;
