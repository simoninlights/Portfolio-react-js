import "./style.css";

const Navbar = () => {
    return ( 
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <div className="nav-row-top">
                    <a href="./index.html#" className="logo"><strong>Freelancer</strong> portfolio</a>
                    <button className="nav-button">
                        <svg width="40" height="80" viewBox="0 0 100 100">
                            <path className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                strokeLinecap='round' />
                            <path className="line line2" d="M 20,50 H 80" strokeLinecap='round' />
                            <path className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                strokeLinecap='round' />
                        </svg>
                    </button>
                </div>
                <ul className="nav-list">
                    <li className="nav-list__item nav-list__link--active"><a href="./index.html#"
                            className="nav-list__link">Home</a></li>
                    <li className="nav-list__item"><a href="./index.html#projects" className="nav-list__link">Projects</a></li>
                    <li className="nav-list__item"><a href="./skills.html" className="nav-list__link">Skills</a></li>
                    <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link">Contacts</a></li>
                </ul>
            </div>
        </div>
    </nav>
     );
}
 
export default Navbar;