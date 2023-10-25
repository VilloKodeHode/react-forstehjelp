

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
                <NavItem name="link 1" href="https://www.youtube.com/watch?v=jfKfPfyJRdk" />
                <NavItem name="link 2" />
                <NavItem name="link 3" />
                <NavItem name="link 4" />
            </ul>
        </nav>
    )
}

const NavItem = ({ name, href }) => {
    return (
        <a className="nav-item" href={href} target="_blank" rel="noreferrer">
            <li>{name}</li>
        </a>
    )
}