import {NavLink} from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav>
                <div>
                    <NavLink to="/home">
                        <h2>Github API</h2>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}