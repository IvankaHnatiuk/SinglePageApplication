import { Link } from "react-router";
export default function Navbar(){
    return(
        <nav id="custom_navbar">
            <ul id="nav_list">
                <li className="nav_item">
                    <Link to={'/'} className="nav_link" >Home</Link>
                </li>
                 <li className="nav_item">
                    <Link to={'/posts'} className="nav_link">Posts</Link>
                </li>
            </ul>
        </nav>
    )
}