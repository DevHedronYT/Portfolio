import style from "./modules/nav.module.css";

function NavBar() {
    return (
        <header id = {style.nav}> 
            <nav>
                <ul>
                    <li> 
                        <a href = "/">Home</a>
                    </li>
                    <li> 
                        <a href = "/articles">Articles</a>
                    </li>
                    <li> 
                        <a href = "/skills">Skills</a>
                    </li>
                    <li> 
                        <a href = "/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    ); 
}
export default NavBar;
