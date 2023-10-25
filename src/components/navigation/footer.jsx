export const Footer = ({ theme }) => {

    console.log(theme)
    return (
        <footer>
            <h1 className={` ${theme === "darkmode" ? "h1-darkmode" : "h1-lightmode"}`} >Is it true? </h1>
        </footer>
    )
}