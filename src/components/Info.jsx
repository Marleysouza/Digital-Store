const Info = ({ title, informations }) => {
    return (
        <div>
            <h3>{title}</h3>
            {informations.map((info, index) => (
                <a href={info.link} key={index}>{info.text}</a>
            ))}
        </div>
    )
}

export default Info