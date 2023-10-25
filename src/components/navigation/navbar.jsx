

export const NavBar = () => {
    const navText = 'This text here!'
    const visible = false
    return (
        <nav>
            <h1>{navText}</h1>
            {/* conditional rendering: */}
            {visible && <h2>I am visible!</h2>}

        </nav>
    )
}