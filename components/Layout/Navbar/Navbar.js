import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <div className="nav-header">
                <p>
                    Dreamers is the premier writing resource and communication
                    tool for authors and avid readers.
                </p>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="nav-container">
                    <Link href="/">
                        <a className="navbar-brand">Dreamers</a>
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
                                <Link href="/works">
                                    <a className="nav-link">How It Works</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/pricing">
                                    <a className="nav-link">Pricing</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/community">
                                    <a className="nav-link">Our Community</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/login">
                                    <a className="nav-link btn btn-outline-primary px-3">Login</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/subscribe">
                                    <a className="nav-link btn btn-primary ml-2 text-white px-3">Try it FREE</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
