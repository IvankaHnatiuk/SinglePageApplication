import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router";

export default function Navbar() {
    const { user, logout } = useContext(UserContext);

    return (
        <nav id="custom_navbar">
            <ul id="nav_list">
                <li className="nav_item">
                    <Link to={'/'} className="nav_link" >Home</Link>
                </li>
                {!user ? (
                    <li className="nav_item">
                        <Link className="nav_link" to={"/register"}>Register</Link>
                    </li>
                ) : (
                    <>
                        <li className="nav_item">
                            <Link to={'/posts'} className="nav_link">Posts</Link>
                        </li>
                        <li className="nav_item">
                            <p className="nav_link">{user.name}</p>
                        </li>
                        <li className="nav_item">
                            <button id="logout_btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}