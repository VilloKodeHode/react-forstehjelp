export const PageLayout = ({ children }) => {
    return (
        <>
        <main className="page-layout">
            {children}
            </main>
        </>
    )
}

export const Container = ({ children }) => {
    return (
        <section className="border container-padding container-shadow">
            {children}
        </section>
    )
}