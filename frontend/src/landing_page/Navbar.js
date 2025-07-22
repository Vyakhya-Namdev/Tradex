import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFFF" }}>
            <div className="container p-2">
                <Link className="navbar-brand" to={"/"}>
                    <img src='media/images/logo_tradex_large.png' alt='logo-img' style={{ width: "20%" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-lg-0">
                            {/* <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={"/dashboard"}>Dashboard</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/signup"}>SignUp</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link active" to={"/about"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/product"}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/pricing"}>Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/support"}>Support</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;