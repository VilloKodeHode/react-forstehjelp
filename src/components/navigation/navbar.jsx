

import "./navigation.css"


export const NavBar = () => {
    const navText = 'This text here!'
    const visible = false

    return (
        <nav>
            <div>
                <h1>{navText}</h1>
                {/* conditional rendering: */}
                {visible && <h2>I am visible!</h2>}
            </div>
            <ul>
                <NavItem name="Home" href="/" />
                <NavItem name="Projects" href="/projects" />
                <NavItem name="Contact" href="/contact" />
                <NavItem name="About" href="/about" />
            </ul>
        </nav>
    )
}

const NavItem = ({ name, href }) => {
    return (
        <a className="nav-item" href={href}>
            <li>{name}</li>
        </a>
    )
}