import React, {Fragment} from 'react'
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};

const Navbar = () => {
    return (
        <Fragment>
            <div className="nav-header">
                <p>
                    Dreamers is the premier writing resource and communication
                    tool for authors and avid readers.
                </p>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="nav-container">
                    <Link className="navbar-brand" href="/">
                        Dreamers
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    href="/how-it-works"
                                    activeClassName="nav-active"
                                >
                                    How it Works
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    href="/pricing"
                                    activeClassName="nav-active"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    href="/community"
                                    activeClassName="nav-active"
                                >
                                    Our Community
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="btn btn-outline-primary ml-3 login-link"
                                    href="/login"
                                    activeClassName="nav-active"
                                >
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="btn btn-primary ml-3 subscribe-link"
                                    href="/subscribe"
                                    activeClassName="nav-active"
                                >
                                    Try it FREE
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
