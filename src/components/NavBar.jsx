import { IoHome, IoSearch, IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

function NavBar(){

    const navlinks = [
        {
            route: 'home',
            icon: <IoHome />
        },
        {
            route: 'search',
            icon: <IoSearch />
        },
        {
            route: 'profile',
            icon: <IoPerson />
        },
    ]

    return(
        <ul>
            {
            navlinks.map(elem => {
                return <li>
                    <Link to={elem.route}>{elem.icon}</Link>
                </li>
            })
            }
        </ul>
    )
}

export default NavBar;