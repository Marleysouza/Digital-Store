const Section = ({ children, tilte, titleAling, link }) => {
    let text = "";
    if (link) {
        text = "Ver todos"
    }
    return (
        <section id="secao">
            <div id="secao-t-l">
                <h2 style={{ textAlign: titleAling }}>{tilte}</h2>
                <a href={link} >{text}</a>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}

export default Section